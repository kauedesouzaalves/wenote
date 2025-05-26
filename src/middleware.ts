import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

const publicRoutes = [
    {
        path: "/",
        whenAuthenticated: "next",
    },
    {
        path: "/register",
        whenAuthenticated: "redirect",
    },
    {
        path: "/login",
        whenAuthenticated: "redirect",
    },
    {
        path: "/restore-password",
        whenAuthenticated: "next",
    },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/register";

export default function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const publicRoute = publicRoutes.find((route) => route.path === path);
    const authToken = request.cookies.get("token");

    // console.log("Auth token:", authToken);

    if (!authToken && publicRoute) {
        return NextResponse.next();
    }

    if (!authToken && !publicRoute) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
        return NextResponse.redirect(redirectUrl);
    }

    if (
        authToken &&
        publicRoute &&
        publicRoute.whenAuthenticated === "redirect"
    ) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = "/dashboard";
        return NextResponse.redirect(redirectUrl);
    }

    if (authToken && !publicRoute) {
        // Checar se o JWT não está expirado
        // Se sim, remover o cookie e redirecionar o usuário pro login
        // Aplicar uma estratégia de refresh

        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config: MiddlewareConfig = {
    matcher: [
        "/((?!api|public|wenote_icon.webp|wenote_logo.webp|github_icon.svg|google_icon.svg|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};

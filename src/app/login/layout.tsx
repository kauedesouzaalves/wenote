import { Metadata } from "next";

export const metadata: Metadata = {
    title: "WeNote | Log in",
    description:
        "Acesse sua conta WeNote e continue suas anotações de onde parou. Colabore em tempo real com sua equipe e mantenha tudo organizado em um só lugar.",
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "WeNote | Redefinir Senha",
    description:
        "Redefina sua senha com facilidade na WeNote. Acesse sua conta com segurança e continue organizando suas ideias em uma plataforma colaborativa e moderna.",
};

export default function RestorePasswordLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

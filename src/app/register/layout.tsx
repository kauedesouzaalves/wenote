import { Metadata } from "next";

export const metadata: Metadata = {
    title: "WeNote | Registrar",
    description:
        "Crie sua conta gratuita na WeNote e comece a organizar suas ideias de forma colaborativa. Junte-se a uma plataforma moderna de anotações em tempo real e eleve sua produtividade.",
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

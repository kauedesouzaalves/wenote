import { Metadata } from "next";

export const metadata: Metadata = {
    title: "WeNote | Dashboard",
    description:
        "Seu espaço central na WeNote. Visualize, crie e gerencie suas anotações de forma simples, rápida e colaborativa, com tudo o que você precisa ao seu alcance.",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

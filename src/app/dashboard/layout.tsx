import { Metadata } from "next";

export const metadata: Metadata = {
    title: "WeNote | Dashboard",
    description:
        "WeNote é uma plataforma moderna de anotações colaborativas, desenvolvida para quem busca organização, produtividade e trabalho em equipe num só lugar. A WeNote permite que você crie, edite e compartilhe notas de forma intuitiva e em tempo real.",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

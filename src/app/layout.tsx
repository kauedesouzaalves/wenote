import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import HeroSection from "@/interfaces/components/HeroSection";

const montserrat = Montserrat({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "WeNote",
    description:
        "WeNote é uma plataforma moderna de anotações colaborativas, desenvolvida para quem busca organização, produtividade e trabalho em equipe num só lugar. A WeNote permite que você crie, edite e compartilhe notas de forma intuitiva e em tempo real.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${montserrat.className} antialiased`}>
                <HeroSection></HeroSection>
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
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
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}

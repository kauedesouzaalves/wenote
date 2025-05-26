export default function HeroSection() {
    return (
        <header className="flex items-center justify-between px-6 py-4 backdrop-blur-sm w-full mx-auto h-16 border border-white/5">
            <div className="flex justify-between m-auto items-center grow max-w-[1200px]">
                <div className="flex items-center text-2xl">
                    <a href="/">
                        <img
                            className="h-8"
                            src="/wenote_icon.webp"
                            alt="WeNote Logo"
                        />
                    </a>
                </div>
                <nav className="flex items-center gap-x-5 text-1xl">
                    <a
                        className="ghost-button px-3 py-1 rounded-md"
                        href="/dashboard"
                    >
                        Painel
                    </a>
                    <a
                        className="ghost-button px-3 py-1 rounded-md"
                        href="/login"
                    >
                        Login
                    </a>
                    <a href="/register" className="filled-button px-3 py-1">
                        Registrar
                    </a>
                </nav>
            </div>
        </header>
    );
}

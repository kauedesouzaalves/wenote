import "@/styles/index.css";

export default function Home() {
    return (
        <header className="flex items-center font-extrabold justify-between px-6 py-4 backdrop-blur-sm bg-white/2.5 h-16 border-b border-white/5">
            <div className="text-2xl text-white">WeNote</div>
            <nav className="flex items-center gap-5 text-1xl text-white">
                <a href="#">Dashboard</a>
                <a href="#">Login</a>
                <a
                    href="#"
                    className="bg-white text-black px-3 py-1 rounded hover:bg-gray-100 transition"
                >
                    Get Started
                </a>
            </nav>
        </header>
    );
}

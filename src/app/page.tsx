import "@/styles/index.css";

export default function Home() {
    return (
        <>
            <section className="hero-section mt-15">
                <div className="max-w-[1024px] mx-auto">
                    <div>
                        <span className="hero-title text-5xl font-bold">
                            Organize ideias,
                            <br />
                            colabore em tempo real.
                        </span>
                    </div>
                    <br />
                    <div>
                        <span className="hero-subtitle font-bold">
                            Crie, compartilhe e edite anotações de forma simples
                            e colaborativa. <br />
                            Tudo em tempo real, com uma experiência fluida e
                            moderna.
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}

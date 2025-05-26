import "@/styles/login.css";
// import {  } from "lucide-react";

export default function LogIn() {
    return (
        <>
            <section className="flex items-center h-200">
                <div className="container max-w-[400px] mx-auto py-10">
                    <div className="mx-10">
                        <div className="flex flex-col space-y-5 justify-center items-stretch text-[14px]">
                            <div className="h-25 self-center">
                                <img
                                    className="h-full mb-10"
                                    src="/wenote_logo.webp"
                                    alt="WeNote Logo"
                                />
                            </div>
                            <form className="w-full flex flex-col space-y-5 items-stretch">
                                <input
                                    className="form-input"
                                    placeholder="E-mail"
                                    type="text"
                                />
                                <input
                                    className="form-input"
                                    placeholder="Senha"
                                    type="password"
                                />
                            </form>
                            <div>
                                <a
                                    className="underline"
                                    href="/restore-password"
                                >
                                    Esqueceu sua senha?
                                </a>
                            </div>
                            <button className="filled-button px-3 py-2">
                                Login
                            </button>

                            <div className="flex flex-row justify-center">
                                <div>
                                    <span>
                                        Não tem uma conta?{" "}
                                        <a
                                            className="underline font-bold"
                                            href="/register"
                                        >
                                            Registre-se
                                        </a>
                                    </span>
                                </div>
                            </div>
                            {/* <div className="flex flex-row w-full items-center justify-center gap-x-5 px-10">
                                <button className="w-12 h-12 flex items-center justify-center bg-[rgb(247,236,225)] rounded-full shadow cursor-pointer">
                                    <img
                                        src="/google_icon.svg"
                                        alt="Google"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

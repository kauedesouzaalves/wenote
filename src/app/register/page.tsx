"use client";

import "@/styles/login.css";
import { useForm } from "react-hook-form";
// import {  } from "lucide-react";

export default function LogIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

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
                                    placeholder="Nome de usuário"
                                    id="username"
                                    type="text"
                                    {...register("username")}
                                />
                                <input
                                    className="form-input"
                                    placeholder="Nome de exibição"
                                    id="displayName"
                                    type="text"
                                    {...register("displayName")}
                                />
                                <input
                                    className="form-input"
                                    placeholder="E-mail"
                                    id="email"
                                    type="text"
                                />
                                <input
                                    className="form-input"
                                    placeholder="Senha"
                                    id="password"
                                    type="password"
                                />
                                <input
                                    className="form-input"
                                    placeholder="Confirme a senha"
                                    id="repeatPassword"
                                    type="password"
                                />
                                <button
                                    type="submit"
                                    className="filled-button px-3 py-2"
                                >
                                    Register
                                </button>
                            </form>
                            <div className="flex flex-row justify-center">
                                <span>
                                    Já tem uma conta?{" "}
                                    <a
                                        className="underline font-bold"
                                        href="/login"
                                    >
                                        Faça login
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

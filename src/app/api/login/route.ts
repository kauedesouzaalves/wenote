import PostgreUserRepository from "@/repositories/PostgreUserRepository";
import UserController from "@/controllers/UserController";
import UserUseCase from "@/use-cases/UserUseCase";
import { NextResponse } from "next/server";

const userRepository = new PostgreUserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

export async function GET(request: Request) {
    const authorization = request.headers.get("Authorization");

    // console.log(authorization);

    return NextResponse.json({ message: "GET request successful" });
}

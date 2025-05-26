import PostgreUserRepository from "@/repositories/PostgreUserRepository";
import UserController from "@/controllers/UserController";
import UserUseCase from "@/use-cases/UserUseCase";
import { NextResponse } from "next/server";

const userRepository = new PostgreUserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

export async function POST(request: Request) {
    const userCredentials = await request.json();

    const newUser = await userController.registerUser(userCredentials);

    return NextResponse.json({
        message: "POST request successful",
        data: newUser,
    });
}

console.log(userController);

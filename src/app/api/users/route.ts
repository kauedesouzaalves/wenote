import UserController from "@/controllers/UserController";
import UserRepository from "@/repositories/PostgreUserRepository";
import UserUseCase from "@/use-cases/UserUseCase";

import { NextResponse } from "next/server";

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

export async function GET(request: Request) {
    return NextResponse.json({ message: "GET request successful" });
}

export async function POST(request: Request) {
    const data = await request.json();
    return NextResponse.json({
        message: "POST request successful",
        data,
    });
}

import { NextResponse } from "next/server";

import db from "@/infrastructure/database/client";

export async function GET(request: Request) {
    const x = await db.query("SELECT * FROM *");
    return NextResponse.json({ message: "GET request successful", ...x.rows });
}

export async function POST(request: Request) {
    const data = await request.json();
    return NextResponse.json({
        message: "POST request successful",
        data,
    });
}

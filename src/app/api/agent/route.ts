import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        
    } catch (error) {
        console.error("Error creating agent:", error);
        return NextResponse.json({ error: "Failed to create agent" }, { status: 500 });
    }
}
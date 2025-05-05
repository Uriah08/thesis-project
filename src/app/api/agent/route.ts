import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { agentName, greetings } = await req.json();

        if (!agentName || !greetings) {
            return NextResponse.json({ message: "Agent name and greetings are required" }, { status: 400 });
        }

        await prisma.agent.create({
            data: {
                name: agentName,
                greetings: greetings,
            },
        });

        return NextResponse.json({ message: "Agent Created Successfully!"},{ status: 201 });
    } catch (error) {
        console.error("Error creating agent:", error);
        return NextResponse.json({ message: "Failed to create agent" }, { status: 500 });
    }
}
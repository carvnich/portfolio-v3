import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { Project } from "@/types";

const client = new MongoClient(process.env.MONGODB_URI!);

export async function GET() {
    try {
        await client.connect();
        const db = client.db("main");
        const projects = await db.collection("projects").find({}).toArray();

        // Convert _id to string and ensure type safety
        const formattedProjects: Project[] = projects.map((project) => ({
            id: project._id.toString(),
            title: project.title,
            src: project.src,
            alt: project.alt,
            bgColor: project.bgColor,
            stack: project.stack,
            href: project.href,
            github: project.github,
            overview: project.overview,
            challenge: project.challenge,
            category: project.category,
        }));

        return NextResponse.json(formattedProjects);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    } finally {
        await client.close();
    }
}

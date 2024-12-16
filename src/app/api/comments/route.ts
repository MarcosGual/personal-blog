import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { auth } from "../auth/[...nextauth]/auth";

//GET ALL COMMENTS OF A POST
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

//CREATE COMMENT
export const POST = async (req: Request) => {
  const session = await auth();

  if (!session)
    return NextResponse.json(
      { error: "Authentication Error" },
      { status: 401 }
    );

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: {...body, userEmail: session.user?.email}
    })

    return NextResponse.json({ comment }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

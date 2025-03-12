import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { auth } from "../auth/[...nextauth]/auth";

interface Query {
  take: number;
  skip: number;
  where?: object;
}

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1");
  const category = searchParams.get("category") || "";

  const POST_PER_PAGE = 3;

  const query: Query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  if (category !== "undefined") {
    query.where = {
      catSlug: category,
    };
  }

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);

    return NextResponse.json({ posts, count }, { status: 200 });
  } catch (error: unknown) {
    console.log(error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Internal Server Error - " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

//CREATE POST
export const POST = async (req: Request) => {
  const session = await auth();

  if (!session)
    return NextResponse.json(
      { error: "Authentication Error" },
      { status: 401 }
    );

  try {
    const body = await req.json();

    if (!body)
      return NextResponse.json(
        { error: "Cuerpo de petición inválido" },
        { status: 400 }
      );
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user?.email },
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error: unknown) {
    console.log(error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Internal Server Error - " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

const page = parseInt(searchParams.get('page') || "1");

  const POST_PER_PAGE = 3;

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

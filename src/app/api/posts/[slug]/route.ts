import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export interface Params {
  params: {
    slug: string;
  };
}

export const GET = async (req: Request, { params }: Params) => {
  const { slug } = await params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { author: true },
    });

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

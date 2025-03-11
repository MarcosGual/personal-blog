import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export type Params = Promise<{ slug: string }>;

export const GET = async (req: Request, { params }: { params: Params }) => {
  const { slug } = await params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
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

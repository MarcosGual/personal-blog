import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export type Params = Promise<{ slug: string }>;

export const GET = async (req: Request, segmentData: { params: Params }) => {
  const { slug } = await segmentData.params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { author: true },
    });

    return NextResponse.json({ post }, { status: 200 });
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

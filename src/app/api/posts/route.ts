import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

interface Query {
  take: number;
  skip: number;
  where?: any;
}

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1");
  const category = searchParams.get("category") || "";
  console.log(category);

  const POST_PER_PAGE = 3;

  let query: Query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  if (category!=='undefined') {
    query.where = {
      catSlug: category,
    };
  }

  console.log(query, category.length);

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);

    return NextResponse.json({ posts, count }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

const url = "http://localhost:3000/api/";

export const getData = async (endpoint: string) => {
  const res = await fetch(url + endpoint, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed at getting data");
  }

  return res.json();
};

export const getPagesByCatData = async (page: number) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
import React from "react";
import { Paginator } from "./paginator";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getBlogTitle() {
  const data = await fetch(BASE_URL);
  const posts: { title: string; id: number }[] = await data.json();

  return posts.map(({ title, id }) => ({ title, id }));
}

export default async function Home() {
  const data = await getBlogTitle();

  return (
    <div className="p-8 h-full w-full">
      <Paginator data={data} />
    </div>
  );
}

import Link from "next/link";
export const dynamicParams = false;

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

type TBlog = {
  userId: number;
  id: string;
  title: string;
  body: string;
};

async function getBlogContent(postId: string) {
  const res = await fetch(`${BASE_URL}/${postId}`);

  return res.json();
}

export async function generateStaticParams() {
  const data = await fetch(BASE_URL);
  const posts: TBlog[] = await data.json();

  return posts.map((p) => ({
    slug: p.id.toString(),
  }));
}

export default async function Page(
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const { userId, id, title, body }: TBlog = await getBlogContent(slug);
  return (
    <>
      <h1 className="font-bold pt-8">{title}</h1>
      <div>
        <pre className="pt-9">
            <em>{body}</em>
        </pre>
      </div>
      <h2>ID: {id} - USERID:{userId}</h2>

      <Link href="/">
        <div className="pt-[50px]">Go Home</div>
      </Link>
    </>
  );
}
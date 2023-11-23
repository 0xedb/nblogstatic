import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="p-8 h-full w-full">
      {Array.from({ length: 100 }, (_, idx) => idx + 1).map((indx) => (
        <div key={indx}>
          <Link href={`/blog/${indx}`}>
            <div className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              Blog {`${indx}`}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

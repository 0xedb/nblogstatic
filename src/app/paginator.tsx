"use client";

import Link from "next/link";
import { useState } from "react";

type PaginatorProps = {
  data: { title: string; id: number }[];
};

const PAGE_LIMIT = 100;
const PAGE_CONSTANT = 10;

export function Paginator({ data }: PaginatorProps) {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((val) =>
      (val < (PAGE_LIMIT - PAGE_CONSTANT)) ? val += PAGE_CONSTANT : val
    );
  };

  const handlePrevious = () => {
    setPage((val) => val >= PAGE_CONSTANT ? val - PAGE_CONSTANT : val);
  };

  return (
    <div>
      <div>
        {data.slice(page, page + PAGE_CONSTANT).map(({ id, title }) => (
          <div key={id}>
            <Link href={`/blog/${id}`}>
              <div className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                Blog {`${id}`}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button className="pr-9 py-9" onClick={handlePrevious}>
          Previous 10
        </button>
        <button onClick={handleNext}>Next 10</button>
      </div>
    </div>
  );
}

{
  /* {Array.from({ length: 100 }, (_, idx) => idx + 1).map((indx) => (
        <div key={indx}>
          <Link href={`/blog/${indx}`}>
            <div className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              Blog {`${indx}`}
            </div>
          </Link>
        </div>
      ))} */
}

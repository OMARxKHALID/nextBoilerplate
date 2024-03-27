import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <div className="max-w-xl mx-auto py-10 px-4">
        <div className="border-t pt-10">
          <h1 className="text-2xl font-bold mb-4">
            Thank you for cloning my boilerplate project.
          </h1>
          <p>If you want to support me, please follow me here:</p>
          <div className="mt-5">
            <div className="flex items-center gap-5">
              <Link href={"https://github.com/OMARxKHALID"} target="_blank">
                <FaGithub className="h-8 w-8 hover:scale-150" />
              </Link>
              <p>Follow me on GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

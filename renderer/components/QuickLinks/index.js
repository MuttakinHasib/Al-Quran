import React from "react";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="mb-10 w-full xl:w-1/2 flex-wrap xs:flex-nowrap lg:w-3/5 md:w-4/5 mx-auto flex justify-between divide-x-2 dark:divide-gray-500 transition-colors duration-500 text-center text-sm sm:text-base md:text-lg font-semibold font-signika">
      <div className="flex-grow mb-2 xs:mb-0 text-gray-500 dark:text-gray-400">
        <a>Quick Links</a>
      </div>
      <Link href="/18">
        <a className="flex-grow mb-2 xs:mb-0 text-green-500 dark:text-green-600 hover:text-green-700 dark:hover:text-green-500">
          Surah Al-Kahf
        </a>
      </Link>
      <Link href="/36">
        <a className="flex-grow mb-2 xs:mb-0 text-green-500 dark:text-green-600 hover:text-green-700 dark:hover:text-green-500">
          Surah Yasin
        </a>
      </Link>
      <Link href="/55">
        <a className="flex-grow mb-2 xs:mb-0 text-green-500 dark:text-green-600 hover:text-green-700 dark:hover:text-green-500">
          Surah Ar-Rahman
        </a>
      </Link>
      <Link href="/67">
        <a className="flex-grow mb-2 xs:mb-0 text-green-500 dark:text-green-600 hover:text-green-700 dark:hover:text-green-500">
          Al Mulk
        </a>
      </Link>
    </div>
  );
};

export default QuickLinks;

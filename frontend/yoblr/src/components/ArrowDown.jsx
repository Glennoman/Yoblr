import React from "react";

const ArrowDown = () => {
  return (
    <div className="relative bottom-10 overflow-visible z-10 flex justify-center xs:hidden">
      <a
        href={"#product-page"}
        className="animate-bounce bg-white dark:bg-tertiary p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center"
      >
        <svg
          className="w-6 h-6 text-violet-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#f0f2f4"
          class="size-6"
        >
          <path
            strokeLinecapp="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </a>
    </div>
  );
};

export default ArrowDown;

import React from "react";
export const ImagePlaceholder = () => {
  return (
    <>
      <div className="border rounded-md border-gray-200 p-2 shadow-md">
        <div className="max-h-[200px] aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 hover:background-gray-200 hover:cursor-pointer">
          <div className="bg-gray-200 aspect-square h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="flex justify-end mt-2">
          <div className="rounded-full w-6 h-6 bg-gray-200 overflow-hidden"></div>
        </div>
      </div>
    </>
  );
};

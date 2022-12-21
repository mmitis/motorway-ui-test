import React from "react";

interface FullSizeProps {
  imageUrl: string;
  onClick: () => void;
}

export const FullSize = ({ imageUrl, onClick }: FullSizeProps) => {
  return (
    <div
      onClick={() => onClick()}
      className="z-10 fixed w-full h-full bg-gray-700 left-0 top-0 flex justify-center items-center"
    >
      <div className="max-w-[70%] h-[70%] shadow-lg">
        <img
          alt=""
          src={`${imageUrl}.jpg`}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { UserImage } from "types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { FullSize } from "./FullSize";

interface ImageItemProps {
  image: UserImage;
}

const ImagePlaceholder = () => {
  return <div className="min-h-200"></div>;
};

export const ImageItem = ({ image }: ImageItemProps) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      {!!opened && (
        <FullSize
          imageUrl={image.url}
          onClick={() => {
            setOpened(false);
          }}
        />
      )}
      <div
        key={image.id}
        className="border rounded-md border-gray-200 p-2 shadow-md"
        onClick={() => setOpened(true)}
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 hover:background-gray-200 hover:cursor-pointer">
          <LazyLoadImage
            alt=""
            wrapperClassName="placeholder-image"
            effect="blur"
            src={`${image.url}.jpg`}
            className="hover:animate-pulse aspect-square h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="flex justify-end mt-2">
          <div className="rounded-full w-6 h-6 overflow-hidden">
            <img src={`${image.user.profile_image}.webp`} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

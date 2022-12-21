import React from "react";
import { ImageItem } from "components/ImageItem";
import { IMAGES_LIMIT, useImages } from "hooks/useImages";
import { ImagePlaceholder } from "components/ImagePlaceholder";

export const ImagesPage = () => {
  const { images, loading } = useImages();

  return (
    <div className="mt-5 max-w-[800px] m-auto">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {loading
          ? [...Array(IMAGES_LIMIT)].map((i) => <ImagePlaceholder key={i} />)
          : images &&
            images.map((img) => <ImageItem image={img} key={img.id} />)}
      </div>
    </div>
  );
};

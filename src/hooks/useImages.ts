import { UserImage } from "./../types";
import { useState, useEffect } from "react";

export const IMAGES_LIMIT = 10;

export const useImages = () => {
  const [images, setImages] = useState<UserImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`images?limit=${IMAGES_LIMIT}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return { images, loading };
};

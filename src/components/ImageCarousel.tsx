import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export type ImageObj = {
  src: string;
  alt: string;
};

interface ImageCarouselProps {
  images: ImageObj[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogImg, setDialogImg] = useState<ImageObj | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrev = () => {
    setCurrent((prev: number) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent((prev: number) => (prev + 1) % images.length);
  };

  const handleImageClick = (img: ImageObj) => {
    setDialogImg(img);
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
    setDialogImg(null);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <button
          onClick={goToPrev}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 m-2"
          aria-label="Previous"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <div
              className="flex-1 flex justify-center cursor-pointer"
              onClick={() => handleImageClick(images[current])}
            >
              <Image
                src={images[current].src}
                alt={images[current].alt}
                width={900}
                height={675}
                className="rounded-xl shadow-2xl object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-2xl flex flex-col items-cente">
            <DialogTitle></DialogTitle>
            {dialogImg && (
              <Image
                src={dialogImg.src}
                alt={dialogImg.alt}
                width={900}
                height={675}
                className="rounded-xl object-contain w-full max-w-[95vw] h-auto"
                style={{ maxHeight: "90vh" }}
              />
            )}
            <button
              onClick={() => setOpenDialog(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </DialogContent>
        </Dialog>
        <button
          onClick={goToNext}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 m-2"
          aria-label="Next"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, idx: number) => (
          <span
            key={idx}
            className={`inline-block w-3 h-3 rounded-full ${
              idx === current
                ? "bg-blue-500 dark:bg-blue-400"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

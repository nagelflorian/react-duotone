import React, { useState, useEffect } from 'react';
import createDuotoneImage from './create-duotone-image';

export interface DuotoneImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  primaryColor: string;
  secondaryColor: string;
}

function DuotoneImage({
  src,
  primaryColor,
  secondaryColor,
  width,
  height,
  ...rest
}: DuotoneImageProps): React.ReactElement {
  const [duotoneImageSrc, setDuotoneImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();

    if (width !== undefined) {
      img.width = Number(width);
    }
    if (height !== undefined) {
      img.height = Number(height);
    }

    img.src = src;
    img.onload = () => {
      setDuotoneImageSrc(createDuotoneImage(img, primaryColor, secondaryColor));
    };
  }, [src, primaryColor, secondaryColor, width, height]);

  return (
    <img
      {...rest}
      width={width}
      height={height}
      src={duotoneImageSrc ?? undefined}
    />
  );
}

export default DuotoneImage;

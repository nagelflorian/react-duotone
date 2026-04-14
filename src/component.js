/* @flow */
import React, { useState, useEffect } from 'react';
import { omit } from 'lodash';
import createDuotoneImage from './create-duotone-image';

type Props = {
  src: any,
  width?: number,
  height?: number,
  primaryColor: string,
  secondaryColor: string,
};

function DuotoneImage(props: Props) {
  const { src, width, height, primaryColor, secondaryColor } = props;
  const [duotoneImageSrc, setDuotoneImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();

    if (width) {
      img.width = width;
    }
    if (height) {
      img.height = height;
    }

    img.src = src;
    img.onload = () => {
      setDuotoneImageSrc(createDuotoneImage(img, primaryColor, secondaryColor));
    };
  }, [src, width, height, primaryColor, secondaryColor]);

  const additionalAttributes = omit(props, [
    'primaryColor',
    'secondaryColor',
    'src',
  ]);

  return <img {...additionalAttributes} src={duotoneImageSrc} />;
}

export default DuotoneImage;

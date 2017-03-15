/* @flow */

import hexToRgb from './hex-to-rgb';
import createDuotoneGradient from './create-duotone-gradient';

function createDuotoneImage(
  imageElement: HTMLImageElement,
  primaryColor: string,
  secondaryColor: string,
): string | null {
  if (!imageElement || !(imageElement instanceof HTMLImageElement)) {
    throw new Error('Invalid arguments, You need to pass an image element');
  }

  if (!primaryColor || !secondaryColor) {
    throw new Error(
      'Invalid arguments, You need to pass a primary and secondary color',
    );
  }

  const duotoneGradient = createDuotoneGradient(
    hexToRgb(primaryColor),
    hexToRgb(secondaryColor),
  );

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const { height: imageHeight, width: imageWidth } = imageElement;
  canvas.width = imageWidth;
  canvas.height = imageHeight;

  if (!ctx) {
    return null;
  }

  ctx.drawImage(imageElement, 0, 0, imageWidth, imageHeight);

  const imageData = ctx.getImageData(0, 0, imageWidth, imageHeight);
  const pixels = imageData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];

    // using relative luminance
    const avg = Math.round(0.2126 * red + 0.7152 * green + 0.0722 * blue);
    pixels[i] = duotoneGradient[avg][0];
    pixels[i + 1] = duotoneGradient[avg][1];
    pixels[i + 2] = duotoneGradient[avg][2];
  }

  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL();
}

export default createDuotoneImage;

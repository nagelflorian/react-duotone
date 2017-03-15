/* @flow */

export default function createDuotoneGradient(
  primaryColorRGB: Array<number>,
  secondaryColorRGB: Array<number>,
): Array<Array<number>> {
  const duotoneGradient = [];

  for (let i = 0; i < 256; i++) {
    const ratio = i / 255;
    duotoneGradient.push([
      Math.round(
        primaryColorRGB[0] * ratio + secondaryColorRGB[0] * (1 - ratio),
      ),
      Math.round(
        primaryColorRGB[1] * ratio + secondaryColorRGB[1] * (1 - ratio),
      ),
      Math.round(
        primaryColorRGB[2] * ratio + secondaryColorRGB[2] * (1 - ratio),
      ),
    ]);
  }

  return duotoneGradient;
}

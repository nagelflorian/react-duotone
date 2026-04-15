type RGB = [number, number, number];

/**
 * Builds a 256-entry lookup table mapping luminance (0–255) to an
 * interpolated colour between secondaryColorRGB (shadows) and
 * primaryColorRGB (highlights).
 */
export default function createDuotoneGradient(
  primaryColorRGB: RGB,
  secondaryColorRGB: RGB,
): RGB[] {
  const duotoneGradient: RGB[] = [];
  for (let i = 0; i < 256; i++) {
    const ratio = i / 255;
    duotoneGradient.push([
      Math.round(primaryColorRGB[0] * ratio + secondaryColorRGB[0] * (1 - ratio)),
      Math.round(primaryColorRGB[1] * ratio + secondaryColorRGB[1] * (1 - ratio)),
      Math.round(primaryColorRGB[2] * ratio + secondaryColorRGB[2] * (1 - ratio)),
    ]);
  }
  return duotoneGradient;
}

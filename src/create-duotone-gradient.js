/* @flow */

/**
 * Builds a 256-entry lookup table that maps a greyscale luminance value
 * (0–255) to an interpolated RGB colour between `secondaryColorRGB` (shadows)
 * and `primaryColorRGB` (highlights).
 *
 * @param {Array<number>} primaryColorRGB - RGB array for the highlight tone,
 *   e.g. `[251, 251, 251]`.
 * @param {Array<number>} secondaryColorRGB - RGB array for the shadow tone,
 *   e.g. `[40, 59, 107]`.
 * @returns {Array<Array<number>>} A 256-element array where each element is an
 *   `[r, g, b]` triplet.
 */
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

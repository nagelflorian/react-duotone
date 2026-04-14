/**
 * Converts a CSS hex colour string to an array of RGB integer values.
 *
 * @param {string} hex - A 6-digit hex colour with an optional leading `#`,
 *   e.g. `"#ff0000"` or `"ff0000"`. Case-insensitive.
 * @returns {Array<number>|null} An array `[r, g, b]` of integers in the range
 *   0–255, or `null` if the input is not a valid 6-digit hex colour.
 *
 * @example
 * hexToRgb('#ff0000'); // => [255, 0, 0]
 * hexToRgb('00ff00');  // => [0, 255, 0]
 * hexToRgb('#xyz');    // => null
 */
export default function hexToRgb(hex: string): Array<string> {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

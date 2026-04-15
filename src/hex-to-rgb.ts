/**
 * Converts a CSS hex colour string to an RGB triple.
 * @returns [r, g, b] integers 0–255, or null for invalid input.
 */
export default function hexToRgb(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : null;
}

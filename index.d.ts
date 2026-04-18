import * as React from 'react';

/**
 * Props for the DuotoneImage component.
 * All standard HTML img attributes are also accepted and forwarded to the
 * underlying <img> element (e.g. alt, className, width, height, style).
 */
export interface DuotoneImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** URL of the source image to apply the duotone effect to. */
  src: string;
  /** Hex color string for the highlight (light) tone, e.g. `"#FBFBFB"`. */
  primaryColor: string;
  /** Hex color string for the shadow (dark) tone, e.g. `"#283B6B"`. */
  secondaryColor: string;
}

/**
 * A React component that renders an image with a duotone color effect applied
 * via an HTML5 Canvas. The processed image is displayed as a data URL.
 *
 * @example
 * <DuotoneImage
 *   src="photo.jpg"
 *   primaryColor="#FBFBFB"
 *   secondaryColor="#283B6B"
 *   alt="Duotone photo"
 * />
 */
export function DuotoneImage(props: DuotoneImageProps): React.ReactElement;

/**
 * Applies a duotone color effect to an HTMLImageElement using Canvas 2D.
 *
 * @param imageElement - A fully loaded HTMLImageElement.
 * @param primaryColor - Hex color for the highlight tone (e.g. `"#FBFBFB"`).
 * @param secondaryColor - Hex color for the shadow tone (e.g. `"#283B6B"`).
 * @returns A data URL string of the processed image, or `null` if the Canvas
 *          2D context is unavailable.
 * @throws {Error} If `imageElement` is not an HTMLImageElement.
 * @throws {Error} If `primaryColor` or `secondaryColor` is falsy.
 */
export function createDuotoneImage(
  imageElement: HTMLImageElement,
  primaryColor: string,
  secondaryColor: string,
): string | null;

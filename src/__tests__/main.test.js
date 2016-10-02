/* global describe, it, expect */
import { createDuotoneImage, DuotoneImage } from '../main';
import createDuotoneImageFunction from '../create-duotone-image';
import DuotoneImageComponent from '../component';

describe('main.js', () => {
  it('should correctly export all functions', () => {
    expect(createDuotoneImage).toEqual(createDuotoneImageFunction);
  });

  it('should correctly export all components', () => {
    expect(DuotoneImage).toEqual(DuotoneImageComponent);
  });
});

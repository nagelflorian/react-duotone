import { createDuotoneImage, DuotoneImage } from '../main';
import createDuotoneImageFn from '../create-duotone-image';
import DuotoneImageComponent from '../component';

describe('main exports', () => {
  it('exports createDuotoneImage', () => {
    expect(createDuotoneImage).toBe(createDuotoneImageFn);
  });
  it('exports DuotoneImage component', () => {
    expect(DuotoneImage).toBe(DuotoneImageComponent);
  });
});

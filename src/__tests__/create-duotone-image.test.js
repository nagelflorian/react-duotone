/* global describe, it, expect, beforeEach */
import createDuotoneImage from '../create-duotone-image';

describe('createDuotoneImage', () => {
  describe('argument validation', () => {
    it('throws when imageElement is null', () => {
      expect(() => createDuotoneImage(null, '#ffffff', '#000000')).toThrow(
        'Invalid arguments, You need to pass an image element',
      );
    });

    it('throws when imageElement is undefined', () => {
      expect(() => createDuotoneImage(undefined, '#ffffff', '#000000')).toThrow(
        'Invalid arguments, You need to pass an image element',
      );
    });

    it('throws when imageElement is not an HTMLImageElement', () => {
      const div = document.createElement('div');
      expect(() => createDuotoneImage(div, '#ffffff', '#000000')).toThrow(
        'Invalid arguments, You need to pass an image element',
      );
    });

    it('throws when primaryColor is missing', () => {
      const img = new Image();
      expect(() => createDuotoneImage(img, null, '#000000')).toThrow(
        'Invalid arguments, You need to pass a primary and secondary color',
      );
    });

    it('throws when secondaryColor is missing', () => {
      const img = new Image();
      expect(() => createDuotoneImage(img, '#ffffff', null)).toThrow(
        'Invalid arguments, You need to pass a primary and secondary color',
      );
    });

    it('throws when both colors are missing', () => {
      const img = new Image();
      expect(() => createDuotoneImage(img, null, null)).toThrow(
        'Invalid arguments, You need to pass a primary and secondary color',
      );
    });
  });

  describe('canvas context unavailable', () => {
    it('returns null when canvas 2d context is not available', () => {
      // Mock getContext to return null (simulates environments without canvas support)
      const originalGetContext = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = () => null;

      const img = new Image();
      // Must pass validation: img is HTMLImageElement and colors are provided
      // Image will have 0x0 dimensions, so pixel loop won't run
      const result = createDuotoneImage(img, '#ffffff', '#000000');
      expect(result).toBeNull();

      HTMLCanvasElement.prototype.getContext = originalGetContext;
    });
  });
});

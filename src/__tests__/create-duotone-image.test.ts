import createDuotoneImage from '../create-duotone-image';

describe('createDuotoneImage', () => {
  describe('argument validation', () => {
    it('throws for null imageElement', () => {
      expect(() => createDuotoneImage(null as unknown as HTMLImageElement, '#fff', '#000'))
        .toThrow('Invalid arguments, You need to pass an image element');
    });
    it('throws for non-image element', () => {
      const div = document.createElement('div');
      expect(() => createDuotoneImage(div as unknown as HTMLImageElement, '#fff', '#000'))
        .toThrow('Invalid arguments, You need to pass an image element');
    });
    it('throws when primaryColor is missing', () => {
      const img = new Image();
      expect(() => createDuotoneImage(img, '', '#000'))
        .toThrow('Invalid arguments, You need to pass a primary and secondary color');
    });
    it('throws when secondaryColor is missing', () => {
      const img = new Image();
      expect(() => createDuotoneImage(img, '#fff', ''))
        .toThrow('Invalid arguments, You need to pass a primary and secondary color');
    });
  });

  describe('canvas unavailable', () => {
    it('returns null when getContext returns null', () => {
      const orig = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = () => null;
      const img = new Image();
      expect(createDuotoneImage(img, '#ffffff', '#000000')).toBeNull();
      HTMLCanvasElement.prototype.getContext = orig;
    });
  });
});

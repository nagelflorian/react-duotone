import createDuotoneImage from '../create-duotone-image';

const imageUrl = 'https://avatars.githubusercontent.com/u/7649376?v=3';
const primaryColor = '#66FA75';
const secondaryColor = '#1904C7';

describe('createDuotoneImage', () => {
  document.body.innerHTML = `<div><img id="duotone-image" src="${imageUrl}" /></div>`;

  const imageEl = document.getElementById('duotone-image') as HTMLImageElement;

  it('should throw if no colors are passed', () => {
    expect(() =>
      createDuotoneImage(imageEl, undefined as unknown as string, undefined as unknown as string),
    ).toThrowError(
      'Invalid arguments, You need to pass a primary and secondary color',
    );
  });

  it('should throw if only one color is passed', () => {
    expect(() =>
      createDuotoneImage(imageEl, primaryColor, undefined as unknown as string),
    ).toThrowError(
      'Invalid arguments, You need to pass a primary and secondary color',
    );
  });

  it('should return a processed image', () => {
    expect(
      createDuotoneImage(imageEl, primaryColor, secondaryColor),
    ).toMatchSnapshot();
  });
});

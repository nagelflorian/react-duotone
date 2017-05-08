/* global describe, it, expect */
import createDuotoneImage from '../create-duotone-image';

const imageUrl = 'https://avatars.githubusercontent.com/u/7649376?v=3';
const primaryColor = '#66FA75';
const secondaryColor = '#1904C7';

describe('createDuotoneImage', () => {
  document.body.innerHTML = `<div><img id="duotone-image" src="${imageUrl}" /></div>`;

  const imageEl = document.getElementById('duotone-image');

  it('should throw if no colors are passed', () => {
    expect(() => createDuotoneImage(imageEl)).toThrowError(
      'Invalid arguments, You need to pass a primary and secondary color',
    );
  });

  it('should throw if no colors are passed', () => {
    expect(() => createDuotoneImage(imageEl, primaryColor)).toThrowError(
      'Invalid arguments, You need to pass a primary and secondary color',
    );
  });

  it('should return a processed image', () => {
    expect(
      createDuotoneImage(imageEl, primaryColor, secondaryColor),
    ).toMatchSnapshot();
  });
});

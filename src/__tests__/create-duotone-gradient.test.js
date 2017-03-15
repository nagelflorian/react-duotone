/* global describe, it, expect */
import createDuotoneGradient from '../create-duotone-gradient';

const primaryColor = [102, 250, 117];
const secondaryColor = [25, 4, 199];

describe('create-duotone-gradient', () => {
  it('should return the correct gradient map', () => {
    expect(
      createDuotoneGradient(primaryColor, secondaryColor),
    ).toMatchSnapshot();
  });
});

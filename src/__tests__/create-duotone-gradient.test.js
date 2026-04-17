/* global describe, it, expect, beforeEach */
import createDuotoneGradient from '../create-duotone-gradient';

const primaryColor = [102, 250, 117];
const secondaryColor = [25, 4, 199];

describe('createDuotoneGradient', () => {
  let gradient;

  beforeEach(() => {
    gradient = createDuotoneGradient(primaryColor, secondaryColor);
  });

  it('returns an array of 256 entries', () => {
    expect(gradient).toHaveLength(256);
  });

  it('each entry is an array of 3 numbers', () => {
    gradient.forEach(entry => {
      expect(entry).toHaveLength(3);
      entry.forEach(value => expect(typeof value).toBe('number'));
    });
  });

  it('all RGB values are in range 0–255', () => {
    gradient.forEach(entry => {
      entry.forEach(value => {
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(255);
      });
    });
  });

  it('index 0 (darkest) equals the secondary color', () => {
    // At i=0, ratio=0, so result = secondaryColor * 1 = secondaryColor
    expect(gradient[0]).toEqual(secondaryColor);
  });

  it('index 255 (lightest) equals the primary color', () => {
    // At i=255, ratio=255/255=1, so result = primaryColor * 1 = primaryColor
    expect(gradient[255]).toEqual(primaryColor);
  });

  it('intermediate values are interpolated between the two colors', () => {
    const midpoint = gradient[127];
    // Midpoint should be roughly halfway between primary and secondary
    midpoint.forEach((value, channel) => {
      const expected = Math.round(
        primaryColor[channel] * (127 / 255) +
          secondaryColor[channel] * (1 - 127 / 255),
      );
      expect(value).toBe(expected);
    });
  });
});

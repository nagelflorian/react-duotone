/* global describe, it, expect */
import hexToRgb from '../hex-to-rgb';

describe('hex-to-rgb', () => {
  it('should return the correct rgb value', () => {
    expect(hexToRgb('#cccccc')).toEqual([204, 204, 204]);
    expect(hexToRgb('#3424BF')).toEqual([52, 36, 191]);
  });

  it('should return null if input is not a hex value', () => {
    expect(hexToRgb('#defghi')).toBeNull();
  });
});

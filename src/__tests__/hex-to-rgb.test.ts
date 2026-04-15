import hexToRgb from '../hex-to-rgb';

describe('hexToRgb', () => {
  it('parses a lowercase hex with # prefix', () => {
    expect(hexToRgb('#cccccc')).toEqual([204, 204, 204]);
  });
  it('parses a hex without # prefix', () => {
    expect(hexToRgb('cccccc')).toEqual([204, 204, 204]);
  });
  it('parses mixed-case hex', () => {
    expect(hexToRgb('#3424BF')).toEqual([52, 36, 191]);
  });
  it('returns null for invalid hex', () => {
    expect(hexToRgb('#defghi')).toBeNull();
  });
  it('returns null for 3-char shorthand', () => {
    expect(hexToRgb('#abc')).toBeNull();
  });
});

/* global describe, it, expect */
import hexToRgb from '../hex-to-rgb';

describe('hexToRgb', () => {
  describe('valid hex values', () => {
    it('parses lowercase hex with # prefix', () => {
      expect(hexToRgb('#cccccc')).toEqual([204, 204, 204]);
    });

    it('parses mixed-case hex with # prefix', () => {
      expect(hexToRgb('#3424BF')).toEqual([52, 36, 191]);
    });

    it('parses hex without # prefix', () => {
      expect(hexToRgb('cccccc')).toEqual([204, 204, 204]);
    });

    it('parses black (#000000)', () => {
      expect(hexToRgb('#000000')).toEqual([0, 0, 0]);
    });

    it('parses white (#ffffff)', () => {
      expect(hexToRgb('#ffffff')).toEqual([255, 255, 255]);
    });

    it('returns numbers, not strings', () => {
      const result = hexToRgb('#aabbcc');
      expect(typeof result[0]).toBe('number');
      expect(typeof result[1]).toBe('number');
      expect(typeof result[2]).toBe('number');
    });
  });

  describe('invalid hex values', () => {
    it('returns null for invalid hex characters', () => {
      expect(hexToRgb('#defghi')).toBeNull();
    });

    it('returns null for 3-character shorthand hex', () => {
      expect(hexToRgb('#abc')).toBeNull();
    });

    it('returns null for empty string', () => {
      expect(hexToRgb('')).toBeNull();
    });
  });
});

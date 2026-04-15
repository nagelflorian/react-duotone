import createDuotoneGradient from '../create-duotone-gradient';

const primary: [number, number, number] = [102, 250, 117];
const secondary: [number, number, number] = [25, 4, 199];

describe('createDuotoneGradient', () => {
  const gradient = createDuotoneGradient(primary, secondary);

  it('returns 256 entries', () => expect(gradient).toHaveLength(256));
  it('index 0 equals secondary colour', () => expect(gradient[0]).toEqual(secondary));
  it('index 255 equals primary colour', () => expect(gradient[255]).toEqual(primary));
  it('all values are in 0–255 range', () => {
    gradient.forEach(([r, g, b]) => {
      expect(r).toBeGreaterThanOrEqual(0); expect(r).toBeLessThanOrEqual(255);
      expect(g).toBeGreaterThanOrEqual(0); expect(g).toBeLessThanOrEqual(255);
      expect(b).toBeGreaterThanOrEqual(0); expect(b).toBeLessThanOrEqual(255);
    });
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import DuotoneImageComponent from '../component';

const baseProps = {
  src: 'https://avatars.githubusercontent.com/u/7649376?v=3',
  primaryColor: '#66FA75',
  secondaryColor: '#1904C7',
};

describe('DuotoneImageComponent', () => {
  it('renders an img element', () => {
    const { container } = render(<DuotoneImageComponent {...baseProps} />);
    expect(container.querySelector('img')).not.toBeNull();
  });

  it('passes through additional attributes to the img element', () => {
    const { container } = render(
      <DuotoneImageComponent
        {...baseProps}
        alt="GitHub Avatar"
        height={56}
        width={56}
      />,
    );
    const img = container.querySelector('img') as HTMLImageElement;
    expect(img.alt).toBe('GitHub Avatar');
    expect(img.height).toBe(56);
    expect(img.width).toBe(56);
  });

  it('does not pass primaryColor or secondaryColor as attributes', () => {
    const { container } = render(<DuotoneImageComponent {...baseProps} />);
    const img = container.querySelector('img') as HTMLImageElement;
    expect(img.hasAttribute('primaryColor')).toBe(false);
    expect(img.hasAttribute('secondaryColor')).toBe(false);
  });
});

/* global describe, it, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import DuotoneImageComponent from '../component';

const defaultProps = {
  src: 'test-image.jpg',
  primaryColor: '#66FA75',
  secondaryColor: '#1904C7',
};

describe('DuotoneImage component', () => {
  it('renders an img element', () => {
    const tree = renderer
      .create(<DuotoneImageComponent {...defaultProps} />)
      .toJSON();
    expect(tree.type).toBe('img');
  });

  it('renders with initial empty src (image not yet loaded)', () => {
    const tree = renderer
      .create(<DuotoneImageComponent {...defaultProps} />)
      .toJSON();
    // Before the image loads, duotoneImageSrc is empty string
    expect(tree.props.src).toBe('');
  });

  it('passes through alt attribute', () => {
    const tree = renderer
      .create(<DuotoneImageComponent {...defaultProps} alt="test alt text" />)
      .toJSON();
    expect(tree.props.alt).toBe('test alt text');
  });

  it('passes through width and height attributes', () => {
    const tree = renderer
      .create(
        <DuotoneImageComponent {...defaultProps} width={100} height={200} />,
      )
      .toJSON();
    expect(tree.props.width).toBe(100);
    expect(tree.props.height).toBe(200);
  });

  it('passes through arbitrary HTML attributes', () => {
    const tree = renderer
      .create(
        <DuotoneImageComponent
          {...defaultProps}
          className="my-image"
          data-testid="img"
        />,
      )
      .toJSON();
    expect(tree.props.className).toBe('my-image');
    expect(tree.props['data-testid']).toBe('img');
  });

  it('does not pass primaryColor or secondaryColor to the img element', () => {
    const tree = renderer
      .create(<DuotoneImageComponent {...defaultProps} />)
      .toJSON();
    expect(tree.props.primaryColor).toBeUndefined();
    expect(tree.props.secondaryColor).toBeUndefined();
  });

  it('does not pass src prop directly to img (uses processed duotone src)', () => {
    // The original src is processed, not forwarded as-is
    const tree = renderer
      .create(<DuotoneImageComponent {...defaultProps} />)
      .toJSON();
    expect(tree.props.src).not.toBe(defaultProps.src);
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(<DuotoneImageComponent {...defaultProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

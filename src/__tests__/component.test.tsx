import React from 'react';
import renderer from 'react-test-renderer';
import DuotoneImage from '../component';

const defaults = { src: 'test.jpg', primaryColor: '#66FA75', secondaryColor: '#1904C7' };

describe('DuotoneImage', () => {
  it('renders an img element', () => {
    const tree = renderer.create(<DuotoneImage {...defaults} />).toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.type).toBe('img');
  });
  it('starts with empty src before image loads', () => {
    const tree = renderer.create(<DuotoneImage {...defaults} />).toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.props.src).toBe('');
  });
  it('passes through alt attribute', () => {
    const tree = renderer.create(<DuotoneImage {...defaults} alt="test" />).toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.props.alt).toBe('test');
  });
  it('does not forward primaryColor/secondaryColor to img', () => {
    const tree = renderer.create(<DuotoneImage {...defaults} />).toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.props.primaryColor).toBeUndefined();
    expect(tree.props.secondaryColor).toBeUndefined();
  });
});

/* global describe, it, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import DuotoneImageComponent from '../component';

describe('DuotoneImageComponent', () => {
  it('renders the image correctly', () => {
    const tree = renderer.create(
      <DuotoneImageComponent
        imageUrl="https://avatars.githubusercontent.com/u/7649376?v=3"
        primaryColor="#66FA75"
        secondaryColor="#1904C7"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders additional attributes correctly', () => {
    const tree = renderer.create(
      <DuotoneImageComponent
        imageUrl="https://avatars.githubusercontent.com/u/7649376?v=3"
        primaryColor="#66FA75"
        secondaryColor="#1904C7"
        alt="GitHub Avatar"
        height="56"
        width="56"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

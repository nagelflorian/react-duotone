/* @flow */
import React, { Component } from 'react';
import { omit } from 'lodash';
import createDuotoneImage from './create-duotone-image';

type Props = {
  src: any,
  width?: number,
  height?: number,
  primaryColor: string,
  secondaryColor: string,
};

type State = {
  duotoneImageSrc: string | null,
};

class DuotoneImage extends Component<Props, State> {
  constructor() {
    super();
    this.state = { duotoneImageSrc: '' };
  }
  componentWillMount(): void {
    this.getDuotoneImage();
  }
  componentWillReceiveProps(): void {
    this.getDuotoneImage();
  }
  getDuotoneImage(): void {
    const img = new Image();

    if (this.props.width) {
      img.width = this.props.width;
    }
    if (this.props.height) {
      img.height = this.props.height;
    }

    img.src = this.props.src;
    img.onload = () => {
      this.setState({
        duotoneImageSrc: createDuotoneImage(
          img,
          this.props.primaryColor,
          this.props.secondaryColor,
        ),
      });
    };
  }
  render(): any {
    const additionalAttributes = omit(this.props, [
      'primaryColor',
      'secondaryColor',
      'src',
    ]);

    return <img {...additionalAttributes} src={this.state.duotoneImageSrc} />;
  }
}

export default DuotoneImage;

import React, { Component } from 'react';
import { omit } from 'lodash';
import createDuotoneImage from './create-duotone-image';

export interface DuotoneImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  primaryColor: string;
  secondaryColor: string;
}

interface DuotoneImageState {
  duotoneImageSrc: string;
}

class DuotoneImage extends Component<DuotoneImageProps, DuotoneImageState> {
  constructor(props: DuotoneImageProps) {
    super(props);
    this.state = { duotoneImageSrc: '' };
  }

  componentDidMount(): void {
    this.getDuotoneImage();
  }

  componentDidUpdate(prevProps: DuotoneImageProps): void {
    if (
      prevProps.src !== this.props.src ||
      prevProps.primaryColor !== this.props.primaryColor ||
      prevProps.secondaryColor !== this.props.secondaryColor
    ) {
      this.getDuotoneImage();
    }
  }

  getDuotoneImage(): void {
    const img = new Image();
    if (this.props.width != null) { img.width = Number(this.props.width); }
    if (this.props.height != null) { img.height = Number(this.props.height); }
    img.src = this.props.src;
    img.onload = () => {
      this.setState({
        duotoneImageSrc: createDuotoneImage(
          img,
          this.props.primaryColor,
          this.props.secondaryColor,
        ) ?? '',
      });
    };
  }

  render(): React.ReactNode {
    const additionalAttributes = omit(this.props, [
      'primaryColor',
      'secondaryColor',
      'src',
    ]);
    return <img {...additionalAttributes} src={this.state.duotoneImageSrc} />;
  }
}

export default DuotoneImage;

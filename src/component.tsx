import React, { Component } from 'react';
import { omit } from 'lodash';
import createDuotoneImage from './create-duotone-image';

export interface DuotoneImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  primaryColor: string;
  secondaryColor: string;
}

type State = {
  duotoneImageSrc: string | null;
};

class DuotoneImage extends Component<DuotoneImageProps, State> {
  constructor(props: DuotoneImageProps) {
    super(props);
    this.state = { duotoneImageSrc: null };
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

    if (this.props.width !== undefined) {
      img.width = Number(this.props.width);
    }
    if (this.props.height !== undefined) {
      img.height = Number(this.props.height);
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

  render(): React.ReactNode {
    const additionalAttributes = omit(this.props, [
      'primaryColor',
      'secondaryColor',
      'src',
    ]);

    return (
      <img
        {...additionalAttributes}
        src={this.state.duotoneImageSrc ?? undefined}
      />
    );
  }
}

export default DuotoneImage;

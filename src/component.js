/* @flow */
import React, { Component } from 'react';
import { omit } from 'lodash';
import createDuotoneImage from './create-duotone-image';

type Props = {
  src: any,
  primaryColor: string,
  secondaryColor: string,
}

class DuotoneImage extends Component {
  onLoad: void;
  state: {duotoneImageSrc: any}
  originalImage: any
  constructor() {
    super();
    this.state = { duotoneImageSrc: '' };
    if (this.onLoad) {
      this.onLoad = this.onLoad.bind(this);
    }
  }
  props: Props
  onLoad(): void {
    this.setState({
      duotoneImageSrc: createDuotoneImage(
        this.originalImage,
        this.props.primaryColor,
        this.props.secondaryColor
      ),
    });
  }
  render() {
    const additionalAttributes = omit(this.props, ['primaryColor', 'secondaryColor']);

    return (
      <div>
        <img
          {...additionalAttributes}
          ref={a => this.originalImage = a}
          style={{ display: 'none' }}
          onLoad={this.onLoad}
        />
        <img
          {...additionalAttributes}
          src={this.state.duotoneImageSrc}
        />
      </div>
    );
  }
}

export default DuotoneImage;

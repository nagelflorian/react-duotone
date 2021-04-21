# React Duotone [![Build Status](https://github.com/nagelflorian/react-duotone/actions/workflows/main.yml/badge.svg)](https://github.com/nagelflorian/react-duotone/actions) ![[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)](https://img.shields.io/badge/code--style-airbnb-blue.svg) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

![Example Duotone Image](https://cloud.githubusercontent.com/assets/7649376/19024780/e0fac730-890b-11e6-9640-1e2f604614e3.png)

## Installation

```
npm install --save react-duotone
```

## How to use

```JavaScript
import React, { Component } from 'react';
import { render } from 'react-dom';
import { DuotoneImage } from 'react-duotone';

class App extends Component {
  render() {
    return <DuotoneImage
      className='image-preview'
      alt='Your image description'
      src='your-image.jpg'
      primaryColor='#FBFBFB'
      secondaryColor='#283B6B' />;
  }
}

render(<App />, document.getElementById('app'));
```

## Examples

```
npm install
npm start
```

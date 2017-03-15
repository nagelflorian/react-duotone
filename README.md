# React Duotone [![Travis Build Status](https://travis-ci.org/nagelflorian/react-duotone.svg?branch=master)](https://travis-ci.org/nagelflorian/react-duotone) ![[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)](https://img.shields.io/badge/code--style-airbnb-blue.svg?style=flat)

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

# React Duotone

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
      src='your-image.jpg' />;
  }
}

render(<App />, document.getElementById('app'));
```

## Examples

```
npm install
npm start
```

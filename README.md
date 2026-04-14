# React Duotone [![Build Status](https://github.com/nagelflorian/react-duotone/actions/workflows/main.yml/badge.svg)](https://github.com/nagelflorian/react-duotone/actions) ![[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)](https://img.shields.io/badge/code--style-airbnb-blue.svg) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

![Example Duotone Image](https://cloud.githubusercontent.com/assets/7649376/19024780/e0fac730-890b-11e6-9640-1e2f604614e3.png)

Apply a [duotone](https://en.wikipedia.org/wiki/Duotone) colour effect to any image using HTML5 Canvas — packaged as a simple React component.

## Installation

```bash
npm install --save react-duotone
```

## Usage

### DuotoneImage component

```jsx
import { DuotoneImage } from 'react-duotone';

function App() {
  return (
    <DuotoneImage
      src="your-image.jpg"
      primaryColor="#FBFBFB"
      secondaryColor="#283B6B"
      alt="Duotone photo"
      className="image-preview"
    />
  );
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `src` | `string` | Yes | URL of the source image |
| `primaryColor` | `string` | Yes | Hex colour for the highlight (light) tone, e.g. `"#FBFBFB"` |
| `secondaryColor` | `string` | Yes | Hex colour for the shadow (dark) tone, e.g. `"#283B6B"` |
| `width` | `number` | No | Width of the image element in pixels |
| `height` | `number` | No | Height of the image element in pixels |
| `...rest` | `any` | No | Any additional HTML `<img>` attributes (e.g. `alt`, `className`, `style`) are forwarded to the underlying `<img>` element |

### createDuotoneImage utility

You can also call the canvas processing function directly:

```js
import { createDuotoneImage } from 'react-duotone';

const img = new Image();
img.src = 'your-image.jpg';
img.onload = () => {
  const dataUrl = createDuotoneImage(img, '#FBFBFB', '#283B6B');
  if (dataUrl) {
    document.getElementById('output').src = dataUrl;
  }
};
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `imageElement` | `HTMLImageElement` | A fully-loaded image element |
| `primaryColor` | `string` | Hex colour for the highlight tone |
| `secondaryColor` | `string` | Hex colour for the shadow tone |

#### Returns

`string | null` — A data URL of the processed image, or `null` if the Canvas 2D context is unavailable.

#### Throws

- `Error` — if `imageElement` is not an `HTMLImageElement`
- `Error` — if `primaryColor` or `secondaryColor` is falsy

## Running the examples

```bash
npm install
npm start
```

Then open your browser at `http://localhost:8080`.

## Contributing

Bug reports and feature requests are welcome via [GitHub Issues](https://github.com/nagelflorian/react-duotone/issues).

## License

MIT © [Florian Nagel](http://floriannagel.net/)

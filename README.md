# React-Duotone [![Build Status](https://github.com/nagelflorian/react-duotone/actions/workflows/main.yml/badge.svg)](https://github.com/nagelflorian/react-duotone/actions) [![npm version](https://img.shields.io/npm/v/react-duotone.svg)](https://www.npmjs.com/package/react-duotone) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Apply a [duotone](https://duotones.co/) color effect to images in React. Renders via HTML5 Canvas and returns the result as a data URL.

![Example Duotone Image](https://cloud.githubusercontent.com/assets/7649376/19024780/e0fac730-890b-11e6-9640-1e2f604614e3.png)

## Requirements

- React 15, 16, 17, or 18

## Installation

```bash
npm install react-duotone
```

## Usage

### `DuotoneImage` component

The simplest way to use the library. Accepts all standard `<img>` attributes in addition to the props below.

```tsx
import { DuotoneImage } from 'react-duotone';

function App() {
  return (
    <DuotoneImage
      src="photo.jpg"
      primaryColor="#FBFBFB"
      secondaryColor="#283B6B"
      alt="Duotone photo"
      width={800}
      height={600}
    />
  );
}
```

#### Props

| Prop             | Type                      | Required | Description                                                |
| ---------------- | ------------------------- | -------- | ---------------------------------------------------------- |
| `src`            | `string`                  | Yes      | URL of the source image                                    |
| `primaryColor`   | `string`                  | Yes      | Hex color for the highlight (light) tone, e.g. `"#FBFBFB"` |
| `secondaryColor` | `string`                  | Yes      | Hex color for the shadow (dark) tone, e.g. `"#283B6B"`     |
| `...rest`        | `React.ImgHTMLAttributes` | —        | All standard `<img>` attributes are forwarded              |

### `createDuotoneImage` function

Low-level utility that applies the duotone effect to a loaded `HTMLImageElement` and returns a data URL.

```ts
import { createDuotoneImage } from 'react-duotone';

const img = new Image();
img.src = 'photo.jpg';
img.onload = () => {
  const dataUrl = createDuotoneImage(img, '#FBFBFB', '#283B6B');
  // use dataUrl as an <img src> or canvas source
};
```

## Running examples locally

```bash
npm install
npm start
```

## License

MIT © [Florian Nagel](https://floriannagel.xyz/)

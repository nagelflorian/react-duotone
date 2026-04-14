# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- TypeScript type definitions (`index.d.ts`)
- JSDoc comments on all exported functions and the main component
- `jest.config.js` with coverage thresholds and jsdom environment

### Changed
- CI matrix updated from EOL Node 10/12/14/16 to active LTS Node 18/20
- GitHub Actions bumped to v4 (`checkout`, `setup-node`, `codecov`)
- Dependency cache added to CI via `actions/setup-node` cache option
- Flow return type on `hexToRgb` corrected from `Array<string>` to `Array<number> | null`
- `src` prop type on `DuotoneImage` narrowed from `any` to `string`
- Removed deprecated `prettier/flowtype` and `prettier/react` ESLint config extends
- `react/prefer-stateless-function` ESLint rule changed from disabled to warning

### Fixed
- `hexToRgb` Flow annotation incorrectly declared `Array<string>` for a function
  that returns `Array<number>`

## [2.1.1] - 2024-01-01

### Changed
- Bump lodash from 4.17.23 to 4.18.1
- Bump follow-redirects from 1.15.6 to 1.16.0

## [2.1.0] - 2023-01-01

### Changed
- Dependency security updates via Dependabot

## [2.0.0] - 2021-01-01

### Changed
- Internal refactoring and dependency updates

## [1.0.0] - 2016-10-01

### Added
- Initial release of react-duotone
- `DuotoneImage` React component
- `createDuotoneImage` utility function
- Flow type annotations
- Webpack build for UMD distribution

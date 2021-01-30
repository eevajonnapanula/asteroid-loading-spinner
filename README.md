# Asteroid Loading Spinner

<img src="./assets/asteroid-loading-spinner.gif" alt="" height="200" >

This is React component which has a small, simple loading indicator displaying a moving asteroid. It is created with a svg and a little bit of css animation magic. 

This package requires `react` and `react-dom` to be installed in your project. 

## Installation

Install the package:
```
npm install --save asteroid-loaging-spinner
```

then, import the package to the desired file:
```
import AsteroidLoadingSpinner from 'asteroid-loading-spinner'
```

## Props

Name | Optional | Description | Default value |
----|---| --- | --- |
`circleClassName`  | :heavy_check_mark: | Class name to override the colors of the asteroid (the circles) |"circle" |
`lineClassName`  | :heavy_check_mark:  | Class name to override the colors for the lines that indicate that the asteroid is moving | "line" |

## About Colors

The colors for the lines and outlines of the circles (`stroke`) use the `currentColor`-value. You can [read more about currentColor from MDN Web Docs][1]. For the color inside the asteroid (`fill`), there is a color used. The default value is `#ea7317`.

## Example Usage

```react
import AsteroidLoadingSpinner from 'asteroid-loading-spinner'

const App = () => (
  <AsteroidLoadingSpinner circleClassName="class-name" />
)
```

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword
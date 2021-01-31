# Asteroid Loading Spinner

<img src="./assets/asteroid-loading-spinner.gif" alt="" height="200" >

This is React component which has a small, simple loading indicator displaying a moving asteroid. It is created with a svg and a little bit of css animation magic. 

In order to use this package, you need to install `react` and `react-dom` to your project. 

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
`asteroidColor`  | :heavy_check_mark: | Color of the asteroid |"#ea7317" |
`lineColor`  | :heavy_check_mark:  | Color of the lines | "currentColor" |

## Example Usage

```react
import AsteroidLoadingSpinner from 'asteroid-loading-spinner'

const App = () => (
  <AsteroidLoadingSpinner circleClassName="class-name" />
)
```

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword
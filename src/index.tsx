import * as React from "react"
import "./index.css"

export type AsteroidLoadingSpinnerProps = {
  lineColor?: string
  asteroidColor?: string
}

const App: React.FunctionComponent<AsteroidLoadingSpinnerProps> = ({
  asteroidColor = "#ea7317",
  lineColor = "currentColor",
}) => {
  return (
    <svg
      width="105"
      height="200"
      viewBox="0 0 105 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="svg-container">
        <circle
          fill={asteroidColor}
          stroke={lineColor}
          cx="22.5"
          cy="92.5"
          r="20.5"
          strokeWidth="4"
        />
        <circle
          fill={asteroidColor}
          stroke={lineColor}
          cx="15.5"
          cy="94.5"
          r="6.5"
          strokeWidth="2"
        />
        <circle fill={asteroidColor} stroke={lineColor} cx="28" cy="82" r="4" strokeWidth="2" />
        <circle fill={asteroidColor} stroke={lineColor} cx="32" cy="99" r="4" strokeWidth="2" />
        <path
          className="line-1"
          stroke={lineColor}
          d="M 12.9207 68.2 L 74.9583 3.07928"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          className="line-2"
          stroke={lineColor}
          d="M 36.920 67.2 L 91.6531 9.07932"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          className="line-3"
          stroke={lineColor}
          d="M 46.9207 75.2 L 101.958 16.0793"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          className="line-4"
          stroke={lineColor}
          d="M 46.9207 102.2 L 101.348 45.0791"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export default App

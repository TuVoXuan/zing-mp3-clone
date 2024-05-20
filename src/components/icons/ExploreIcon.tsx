import * as React from "react"
import { SVGProps } from "react"
const ExploreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="currentColor" {...props}>
    <path
      fillOpacity={0.8}
      fillRule="evenodd"
      d="M3.25 12a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0ZM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75ZM9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default ExploreIcon

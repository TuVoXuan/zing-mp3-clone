import * as React from "react"
import { SVGProps } from "react"
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      d="m12 17-4.981 2.619a.5.5 0 0 1-.726-.527l.952-5.547-4.03-3.928a.5.5 0 0 1 .277-.853l5.57-.81 2.49-5.046a.5.5 0 0 1 .896 0l2.49 5.047 5.57.81a.5.5 0 0 1 .277.852l-4.03 3.928.952 5.547a.5.5 0 0 1-.726.527L12 17Z"
      clipRule="evenodd"
    />
  </svg>
)
export default StarIcon

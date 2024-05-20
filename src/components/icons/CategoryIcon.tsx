import * as React from "react"
import { SVGProps } from "react"
const CategoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <rect
      width={7.579}
      height={7.579}
      x={3}
      y={3}
      stroke="currentColor"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      rx={1.895}
    />
    <rect
      width={7.579}
      height={7.579}
      x={13.421}
      y={3}
      stroke="currentColor"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      rx={3.789}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      d="M7.024 20.727a.786.786 0 0 1-.47 0C5.457 20.332 3 18.683 3 15.89c0-1.233.944-2.231 2.107-2.231.69 0 1.3.351 1.682.894a2.063 2.063 0 0 1 1.683-.894c1.163 0 2.107.998 2.107 2.231 0 2.794-2.456 4.443-3.555 4.838Z"
    />
    <path
      stroke="currentColor"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      d="M14.368 13.748v6.926a.19.19 0 0 0 .284.164l6.06-3.463a.19.19 0 0 0 0-.329l-6.06-3.463a.19.19 0 0 0-.284.165Z"
    />
  </svg>
)
export default CategoryIcon

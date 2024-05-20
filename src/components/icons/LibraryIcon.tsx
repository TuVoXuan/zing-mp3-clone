import * as React from "react"
import { SVGProps } from "react"
const LibraryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="currentColor" {...props}>
    <path
      fillOpacity={0.8}
      fillRule="evenodd"
      d="M6.5 2.75a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11ZM3 9.5a3.75 3.75 0 0 1 3.75-3.75h10.5A3.75 3.75 0 0 1 21 9.5v8a3.75 3.75 0 0 1-3.75 3.75H6.75A3.75 3.75 0 0 1 3 17.5v-8Zm3.75-2.25A2.25 2.25 0 0 0 4.5 9.5v8a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-8a2.25 2.25 0 0 0-2.25-2.25H6.75Zm6.916 1.626A.75.75 0 0 0 12.5 9.5v3.55a2.75 2.75 0 1 0 1.49 2.68c.007-.038.01-.079.01-.12V10.902l1.084.723a.75.75 0 1 0 .832-1.248l-2.25-1.5ZM12.5 15.5a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default LibraryIcon

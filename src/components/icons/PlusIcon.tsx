import * as React from "react"
import { SVGProps } from "react"
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      fill="#141414"
      fillOpacity={0.2}
      fillRule="evenodd"
      d="M.516 7.143c.812-3.928 3.31-6.115 7.207-6.776A25.136 25.136 0 0 1 16.36.38c4.012.709 6.424 3.024 7.192 7.011a23.999 23.999 0 0 1-.009 9.274c-.821 3.9-3.384 6.309-7.266 6.967-2.88.489-5.762.495-8.637-.014-4.012-.709-6.435-3.14-7.203-7.127-.624-3.102-.564-6.235.08-9.349Z"
      clipRule="evenodd"
    />
    <path
      fill="#FEFFFF"
      fillRule="evenodd"
      d="M11.25 12.75V18a.75.75 0 0 0 1.5 0v-5.25H18a.75.75 0 0 0 0-1.5h-5.25V6a.75.75 0 0 0-1.5 0v5.25H6a.75.75 0 0 0 0 1.5h5.25Z"
      clipRule="evenodd"
    />
  </svg>
)
export default PlusIcon

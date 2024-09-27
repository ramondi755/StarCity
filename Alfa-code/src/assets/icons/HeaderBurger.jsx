import * as React from "react"
const HeaderBurger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    style={{
      fill: "#3B38EB",
    }}
    {...props}
  >
    <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
  </svg>
)
export default HeaderBurger
export default function Burger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 16 16"
      style={{
        msTransform: 'rotate(360deg)',
        WebkitTransform: 'rotate(360deg)',
        transform: 'rotate(360deg)',
      }}
    >
      <path
        fill="#fff"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
      />
    </svg>
  )
}

interface ChevronDownProps {
    className?: string
  }
  
  const ChevronDown: React.FC<ChevronDownProps> = ({ className }) => (
    <svg
      width="16"
      height="9"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
    >
      <path
        d="M836 476H548V188c0-19.8-16.2-36-36-36s-36 16.2-36 36v288H188c-19.8 0-36 16.2-36 36s16.2 36 36 36h288v288c0 19.8 16.2 36 36 36s36-16.2 36-36V548h288c19.8 0 36-16.2 36-36s-16.2-36-36-36z"
        fill="currentcolor"
      />
    </svg>
  )
  
  export default ChevronDown
  
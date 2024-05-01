import ChevronDown from "./svgs/ChevronDown"

interface QuestionItemProps {
  title: string
  text: string
  open: boolean
  onOpen: any
  className?: string
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  title,
  text,
  open,
  onOpen,
  className,
}) => {
  return (
    <div
      className={`bg-[#F5F5F5] rounded-[8px] md:rounded-[20px] px-3 md:pl-8 md:pr-[46px] cursor-pointer ${
        className ?? ""
      }`}
      onClick={onOpen}
    >
      <div
        data-open={open}
        className="relative md:text-[26px] py-[18px] leading-[135%] md:py-5 pr-5 md:pr-8 max-md:data-[open=true]:py-[15px] transition-all"
      >
        {title}
        <ChevronDown
          className={`absolute top-0 bottom-0 my-auto right-0 max-md:w-[20px] max-md:h-[20px] ${
            open ? "rotate-45" : ""
          } transition-all`}
        />
      </div>
      <div
        data-open={open}
        className="max-md:text-xs md:h-0 text-[#CCCACA] md:data-[open=true]:h-[190px] max-md:max-h-0 max-md:data-[open=true]:max-h-[200px] transition-all overflow-hidden max-md:data-[open=true]:pb-[15px]"
      >
        {text}
      </div>
    </div>
  )
}

export default QuestionItem

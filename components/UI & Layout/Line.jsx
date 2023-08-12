import tailwindConfig from "@/../tailwind.config";

const Line = ({
  title,
  data,
  titleFont,
  titleWidth = "20",
  titleColor,
  dataFont,
  dataColor,
  centered,
  titleTextSize,
  dataTextSize,
  minWidth,
  dataHover, 
  onClick,
}) => {
  return (
    <div style={{ justifyContent: centered && "center" }} className="flex items-start">
      <span
        style={{ color: titleColor, width: `${titleWidth}%`, minWidth }}
        className={`font-${titleFont} grow-1 shrink-0 text-[${titleColor}] text-${titleTextSize}`}
      >
        {title}
      </span>
      <span  style={{ color: titleColor}}
       className={`font-${titleFont} grow-1 shrink-0 text-[${titleColor}] text-${titleTextSize}`}>:</span>
      <span
        onClick={onClick}
        className={`pl-2 font-${dataFont} shrink-1 text-${dataColor} text-${dataTextSize} duration-300 ${dataHover === true && 'hover:text-secondary'} cursor-pointer`}
      >
        {data}
      </span>
    </div>
  );
};

export default Line;
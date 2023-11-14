const Button = ({
    handle,
    text,
    width = "w-full",
    height = "h-[40px]",
    bg = "bg-secondary-100",
    color = "text-white",
    border = "border-2 border-secondary-100",
    css,
    disabled = false,
    rounded = "rounded-full",
    fontWeight = "font-extrabold"
}) => {
    return (
        <button
            type="button"
            onClick={handle}
            disabled={disabled}
            className={`flex items-center justify-center text-[18px] font-megat ${fontWeight} ${rounded} ${color} ${border} transition-all outline-none ${bg} ${height} ${width} ${css}`}
        >
            {text}
        </button>
    )
}

export default Button;
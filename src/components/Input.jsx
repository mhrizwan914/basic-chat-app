// Hooks
import { useId } from "react";

const Input = ({
    type = "text",
    target,
    name,
    value,
    placeholder,
    disabled = false,
    handle,
    css,
    height = "h-[40px]",
    bg = "bg-transparent",
    color = "text-gray-500",
    border = "border-2 border-gray-500",
    padding = "px-2",
    placeholderColor = "placeholder:text-gray-400",
}) => {
    const referenceID = useId();
    return (
        <div className="relative">
            <input
                autoComplete="off"
                ref={target}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                id={referenceID}
                onChange={handle}
                className={`outline-none w-full ${padding} ${border} text-[15px] ${placeholderColor} ${bg} ${color} font-normal ${height} ${css}`}
            />
        </div>
    )
}

export default Input;
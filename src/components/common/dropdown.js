import React from "react";
import { arrowDown } from "assets"

const Dropdown = ({
    items = [],
    onSelect,
    placeholder = "Select an option",
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState("");

    const handleSelect = (item) => {
        setSelected(item.label);
        setIsOpen(false);
        if (onSelect) onSelect(item);
    };

    return (
        <div className={`relative`}>
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-[14px] whitespace-nowrap justify-between gap-px font-medium leading-4 max-w-[150px]  bg-darkByzantineBlue px-3 py-3.5 rounded-lg">
            {selected || placeholder}
            <img src={arrowDown} className="w-7 h-7" alt="Down Arrow" />
          </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="w-full bg-white shadow-lg rounded-lg z-50 absolute left-0 top-full">
                    <ul className="divide-y divide-[#E5E5E5]">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(item)}
                                className="p-2 cursor-pointer">
                                <span className="text-blackRussian text-[14px] leading-10  font-semibold">{item?.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

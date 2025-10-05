import React, { useState } from 'react';

const Dropdown = ({ label = '', options = [], onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <div className="relative inline-block w-full">
        <p className='text-[16px] font-semibold mb-1'>{label}</p>
        <div
            onClick={handleClick}
            className="cursor-pointer px-3 py-2 rounded bg-[#EBF2F5] shadow-sm w-full"
        >
            {label}
        </div>

        {open && (
            <div className="absolute mt-1 w-full bg-[#EBF2F5] rounded shadow-lg z-10">
            {options.map((opt, idx) => (
                <div
                key={idx}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                {opt}
                </div>
            ))}
            </div>
        )}
    </div>
  );
};

export default Dropdown;

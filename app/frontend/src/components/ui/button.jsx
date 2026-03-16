import React from "react";

export function Button({ children, onClick, className }) {
return (
<button
onClick={onClick}
className={`px-4 py-2 bg-black text-white rounded hover:bg-gray-800 ${className}`}
>
{children}
</button>
);
}
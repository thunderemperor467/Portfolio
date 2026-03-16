import React from "react";

export function Card({ children, className }) {
return (
<div className={`border rounded-xl shadow-sm p-4 bg-card ${className}`}>
{children}
</div>
);
}

export function CardHeader({ children }) {
return <div className="mb-2 font-semibold">{children}</div>;
}

export function CardTitle({ children }) {
return <h3 className="text-lg font-bold">{children}</h3>;
}

export function CardDescription({ children }) {
return <p className="text-muted-foreground text-sm">{children}</p>;
}

export function CardContent({ children }) {
return <div>{children}</div>;
}
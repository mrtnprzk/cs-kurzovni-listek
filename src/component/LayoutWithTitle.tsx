import { cn } from "@/lib/classnames";
import { FC, ReactNode } from "react";

interface LayoutWithTitleProps {
    children: ReactNode;
    title: string;
    className?: string;
}

const LayoutWithTitle: FC<LayoutWithTitleProps> = ({ children, title, className }): JSX.Element => (
    <div className={cn("flex flex-col items-center w-full overflow-scroll gap-4 p-5 md:max-w-7xl", className)}>
        <h3 className="text-lg text-darkGrey font-bold">{title}</h3>
        {children}
    </div>
);

export default LayoutWithTitle;

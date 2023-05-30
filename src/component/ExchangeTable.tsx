import { FC, ReactNode } from "react";

interface ExchangeTableProps {
    children: ReactNode;
}

const ExchangeTable: FC<ExchangeTableProps> = ({ children }): JSX.Element => (
    <table className="w-full text-center border-separate border-spacing-y-1 md:max-w-5xl">{children}</table>
);
export default ExchangeTable;

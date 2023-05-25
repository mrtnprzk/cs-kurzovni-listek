import { FC } from "react";
import { ExchangeData } from "@/global/types";
import { estimatedExchangeRate } from "@/lib/estimatedExchangeRate";

interface ExchangeTableBodyProps {
    dataForTable: ExchangeData[] | null;
    dataForFilter?: ExchangeData[] | null;
    estimatedDay?: number;
    handleDesc: string;
    handleClick: (exchangeItem: ExchangeData) => void;
}

const ExchangeTableBody: FC<ExchangeTableBodyProps> = ({
    dataForTable,
    dataForFilter,
    estimatedDay = 0, //initial value for today
    handleDesc,
    handleClick,
}): JSX.Element => (
    <tbody>
        {dataForTable?.map((item) => {
            const cnbExchangeRate = estimatedExchangeRate(item.cnb, item.move, estimatedDay);
            const colorOfMove = item.move === 0 ? "gray" : item.move < 0 ? "red" : "green";
            const isFiltered = dataForFilter
                ? dataForFilter.some((favItem) => favItem.shortName === item.shortName)
                : false;

            return (
                <tr key={item.shortName} className="bg-lightBlue text-darkGrey">
                    <td>
                        {item.shortName} {item.name}
                    </td>
                    <td>{item.country}</td>
                    <td>{item.buy}</td>
                    <td>{item.sell}</td>
                    <td>{cnbExchangeRate}</td>
                    <td style={{ color: colorOfMove }}>{item.move}</td>
                    {isFiltered === false ? (
                        <td className="underline cursor-pointer" onClick={() => handleClick(item)}>
                            {handleDesc}
                        </td>
                    ) : (
                        <td />
                    )}
                </tr>
            );
        })}
    </tbody>
);

export default ExchangeTableBody;

import { FC } from "react";
import { ExchangeData } from "@/global/types";

interface ExchangeTableBodyProps {
    dataForTable: ExchangeData[] | null;
    dataForFilter?: ExchangeData[] | null;
    handleDesc: string;
    handleClick: (exchangeItem: ExchangeData) => void;
}

const ExchangeTableBody: FC<ExchangeTableBodyProps> = ({
    dataForTable,
    dataForFilter,
    handleDesc,
    handleClick,
}): JSX.Element => {
    return (
        <tbody>
            {dataForTable?.map((item) => {
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
                        <td>{item.cnb}</td>
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
};

export default ExchangeTableBody;

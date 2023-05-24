import { FC } from "react";
import { ExchangeData } from "@/global/types";

interface ExchangeTableBodyProps {
    data: ExchangeData[] | null;
    handleDesc?: string;
    handleClick?: (exchangeItem: ExchangeData) => void;
}

const ExchangeTableBody: FC<ExchangeTableBodyProps> = ({ data, handleDesc, handleClick }): JSX.Element => {
    return (
        <tbody>
            {data?.map((item) => {
                const colorOfMove = item.move === 0 ? "gray" : item.move < 0 ? "red" : "green";

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
                        {handleDesc && handleClick ? (
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

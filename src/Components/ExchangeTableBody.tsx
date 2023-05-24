import { ExchangeData } from "@/global/types";
import { FC } from "react";

interface ExchangeTableBodyProps {
    data: ExchangeData[] | null;
}

const ExchangeTableBody: FC<ExchangeTableBodyProps> = ({ data }): JSX.Element => {
    return (
        <tbody>
            {data?.map((item) => {
                const colorOfMove = item.move >= 0 ? "green" : "red";

                return (
                    <tr key={item.shortName} className="bg-lightBlue text-darkGrey">
                        <td>
                            {item.shortName} {item.name}
                        </td>
                        <td>{item.country}</td>
                        <td>{item.buy}</td>
                        <td>{item.sell}</td>
                        <td>{item.cnb}</td>
                        <td className={`text-${colorOfMove}-500`}>{item.move}</td>
                        <td className="underline cursor-pointer">Oblíbená</td>
                    </tr>
                );
            })}
        </tbody>
    );
};

export default ExchangeTableBody;

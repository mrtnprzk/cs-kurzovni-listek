import { FC } from "react";

/*
 *   This is Generic React Component to create Table Head
 *   It is neccesary to put object into props with values for columns
 */
interface GenericTableHeadProps<T> {
    objectWithValues: T;
}

const GenericTableHead: FC<GenericTableHeadProps<Record<string, string>>> = ({ objectWithValues }): JSX.Element => {
    return (
        <thead>
            <tr>
                {Object?.values(objectWithValues).map((value) => (
                    <th key={value}>{value}</th>
                ))}
            </tr>
        </thead>
    );
};

export default GenericTableHead;

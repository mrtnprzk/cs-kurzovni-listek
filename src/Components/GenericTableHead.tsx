import { FC } from "react";

/*
 *   This is Generic React Component to create Table Head
 *   It is neccesary to put object into props with string values for columns
 */
interface GenericTableHeadProps<T> {
    objectWithValues: T;
}

const GenericTableHead: FC<GenericTableHeadProps<Record<string, string>>> = ({ objectWithValues }): JSX.Element => (
    <thead>
        <tr>
            {Object?.entries(objectWithValues).map(([key, value]) => (
                <th key={key}>{value}</th>
            ))}
            <th />
        </tr>
    </thead>
);

export default GenericTableHead;

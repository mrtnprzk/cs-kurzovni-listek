import { FC } from "react";

interface GenericDaySelectorProps<T> {
    objectWithValues: T;
    estimatedDay: number;
    setEstimatedDay: (index: number) => void;
}

const GenericDaySelector: FC<GenericDaySelectorProps<Record<string, string>>> = ({
    objectWithValues,
    estimatedDay,
    setEstimatedDay,
}): JSX.Element => {
    return (
        <div className="flex border-4 border-darkBlue text-lightGrey ">
            {Object?.entries(objectWithValues).map(([key, value], i) => {
                const selectedDay = estimatedDay === i;

                const bgColor = selectedDay ? "bg-darkBlue " : "bg-white";
                const textColor = selectedDay ? "text-white" : "text-darkBlue";

                return (
                    <button
                        className={`${bgColor} ${textColor} py-2 px-4`}
                        key={key}
                        onClick={() => setEstimatedDay(i)}
                    >
                        {value}
                    </button>
                );
            })}
        </div>
    );
};

export default GenericDaySelector;

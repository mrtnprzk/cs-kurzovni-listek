import { FC } from "react";

/**
 * This is EstimatedEstimatedDaySelector Component.
 * It is neccesary to put array with objects of interface DayOption into props
 * Allows selecting a day and triggers a callback when a day is clicked.
 */

interface DayOption {
    name: string; //name of button
    value: number; //value for day (today = 0, tomorrow = 1, ...)
}

interface EstimatedDaySelectorProps {
    arrayWithDayOption: DayOption[] | readonly DayOption[];
    estimatedDay: number;
    setEstimatedDay: (index: number) => void;
}

const EstimatedDaySelector: FC<EstimatedDaySelectorProps> = ({
    arrayWithDayOption,
    estimatedDay,
    setEstimatedDay,
}): JSX.Element => (
    <div className="flex border-4 border-darkBlue text-lightGrey">
        {arrayWithDayOption.map((dayOption) => {
            const selectedDay = estimatedDay === dayOption.value;

            const bgColor = selectedDay ? "bg-darkBlue" : "bg-white";
            const textColor = selectedDay ? "text-white" : "text-darkBlue";

            return (
                <button
                    className={`${bgColor} ${textColor} py-2 px-4`}
                    key={dayOption.name}
                    onClick={() => setEstimatedDay(dayOption.value)}
                >
                    {dayOption.name}
                </button>
            );
        })}
    </div>
);

export default EstimatedDaySelector;

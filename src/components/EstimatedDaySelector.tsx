import { FC } from "react";

/**
 * This is EstimatedEstimatedDaySelector Component.
 * It is neccesary to put array with objects of DayOption into props
 * Allows selecting a day and triggers a callback when a day is clicked.
 * It is wrapped in useMemo to save calculations.
 */

interface DayOption {
    name: string; //name of button
    value: number; //value for day (today = 0, tomorrow = 1, ...)
}

interface EstimatedDaySelectorProps {
    arrayWithObjects: readonly DayOption[];
    estimatedDay: number;
    setEstimatedDay: (index: number) => void;
}

const EstimatedDaySelector: FC<EstimatedDaySelectorProps> = ({ arrayWithObjects, estimatedDay, setEstimatedDay }): JSX.Element => (
    <div className="flex border-4 border-darkBlue text-lightGrey">
        {arrayWithObjects.map((object) => {
            const selectedDay = estimatedDay === object.value;

            const bgColor = selectedDay ? "bg-darkBlue" : "bg-white";
            const textColor = selectedDay ? "text-white" : "text-darkBlue";

            return (
                <button
                    className={`${bgColor} ${textColor} py-2 px-4`}
                    key={object.name}
                    onClick={() => setEstimatedDay(object.value)}
                >
                    {object.name}
                </button>
            );
        })}
    </div>
);

export default EstimatedDaySelector;

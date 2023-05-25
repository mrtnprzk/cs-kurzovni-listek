import { createContext, FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

interface EstimatedDayContextProps {
    estimatedDay: number;
    selectEstimatedDay: (day: number) => void;
}

const DEFAULT_ESTIMATED_DAY_CONTEXT_PROPS: EstimatedDayContextProps = {
    estimatedDay: 0,
    selectEstimatedDay: () => [],
};

export const EstimatedDayContext = createContext<EstimatedDayContextProps>(DEFAULT_ESTIMATED_DAY_CONTEXT_PROPS);

export const EstimatedDayProvider: FC<PropsWithChildren> = ({ children }) => {
    const [estimatedDay, setEstimatedDay] = useState<number>(0);
    const [initialValueSet, setInitialValueSet] = useState(false);
    const router = useRouter();

    //This function will put estimated_day into params & useState.
    const selectEstimatedDay = (day: number) => {
        setEstimatedDay(day);
        router.push(
            {
                pathname: router.pathname,
                query: { ...router.query, estimated_day: day },
            },
            undefined,
            { scroll: false } // false to prevent scrolling to the top of the page
        );
    };

    //For case to put estimated_day from params into useState after app is loaded
    useEffect(() => {
        const { estimated_day } = router.query;

        if (estimated_day && !initialValueSet) {
            setEstimatedDay(+estimated_day);
            setInitialValueSet(true);
        }
    }, [router.query, initialValueSet]);

    const value = useMemo(() => ({ estimatedDay, selectEstimatedDay }), [estimatedDay]);

    return <EstimatedDayContext.Provider value={value}>{children}</EstimatedDayContext.Provider>;
};

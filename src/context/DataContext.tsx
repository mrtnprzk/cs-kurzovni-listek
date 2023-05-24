import { createContext, FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { ExchangeData } from "@/global/types";

interface DataContextProps {
    data: ExchangeData[] | null;
    loading: boolean;
    error: string | null;
}

const DEFAULT_DATA_CONTEXT_PROPS: DataContextProps = {
    data: null,
    loading: true,
    error: null,
};

export const DataContext = createContext<DataContextProps>(DEFAULT_DATA_CONTEXT_PROPS);

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState<ExchangeData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // I don't like to fetch data with useEffect, but I guess it doesn't matter in this case
    // I like to use the react-query library
    useEffect(() => {
        let ignore = false;

        // Simulating to fetch data with try/catch/finally
        const fetchData = async () => {
            try {
                const response = await fetch("./data/data.json");
                const data = await response.json();
                if (!ignore) setData(data);
            } catch (error) {
                console.error(error);
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // This is the approach from recent react documents to have clean-up fn
        return () => {
            ignore = true;
        };
    }, []);

    const value = useMemo(() => ({ data, loading, error }), [data]);

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

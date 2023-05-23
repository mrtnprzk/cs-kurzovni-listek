import { createContext, FC, PropsWithChildren, SetStateAction, useEffect, useMemo, useState } from "react";
import { ExchangeData } from "@/global/types";

interface DataContextProps {
    data: ExchangeData[] | null;
    loading: boolean;
    error: string | null;
    setData: (value: SetStateAction<ExchangeData[] | null>) => void;
}

const DEFAULT_DATA_CONTEXT_PROPS: DataContextProps = {
    data: null,
    loading: true,
    error: null,
    setData: () => [],
};

export const DataContext = createContext<DataContextProps>(DEFAULT_DATA_CONTEXT_PROPS);

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState<ExchangeData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
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
        }

        fetchData();

        return () => {
            ignore = true;
        };
    }, []);

    const value = useMemo(() => ({ data, loading, error, setData }), [data]);

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

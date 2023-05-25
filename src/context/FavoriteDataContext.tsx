import { createContext, FC, PropsWithChildren, useMemo } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ExchangeData } from "@/global/types";

interface FavoriteDataContextProps {
    favoriteData: ExchangeData[];
    addToFavorite: (exchangeItem: ExchangeData) => void;
    removeFromFavorite: (exchangeItem: ExchangeData) => void;
}

const DEFAULT_FAV_DATA_CONTEXT_PROPS: FavoriteDataContextProps = {
    favoriteData: [],
    addToFavorite: () => [],
    removeFromFavorite: () => [],
};

export const FavoriteDataContext = createContext<FavoriteDataContextProps>(DEFAULT_FAV_DATA_CONTEXT_PROPS);

export const FavoriteDataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [favoriteData, setFavoriteData] = useLocalStorage<ExchangeData[]>("favorite", []);

    const addToFavorite = (exchangeItem: ExchangeData) => {
        //I put this here to be sure I cannot have two same objects in array
        if (favoriteData.some((favItem) => favItem.shortName === exchangeItem.shortName)) return;

        const arrayWithAddedItem = [...favoriteData, exchangeItem];
        setFavoriteData(arrayWithAddedItem);
    };

    const removeFromFavorite = (exchangeItem: ExchangeData) => {
        const arrayWithDeletedItem = favoriteData.filter((favItem) => favItem.shortName !== exchangeItem.shortName);
        setFavoriteData(arrayWithDeletedItem);
    };

    const value = useMemo(() => ({ favoriteData, addToFavorite, removeFromFavorite }), [favoriteData]);

    return <FavoriteDataContext.Provider value={value}>{children}</FavoriteDataContext.Provider>;
};

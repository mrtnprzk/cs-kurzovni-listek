import { useContext } from "react";

import { DataContext } from "@/context/DataContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ExchangeData, ExchangeTableHead } from "@/global/types";
import GenericTableHead from "@/components/GenericTableHead";
import ExchangeTableBody from "@/components/ExchangeTableBody";
import ExchangeTable from "@/components/ExchangeTable";
import LayoutWithTitle from "@/components/LayoutWithTitle";

export default function Home() {
    const { data, loading, error } = useContext(DataContext);
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

    // This can be a spinning loader or a skeleton loader for the table
    // It is also possible to prefetch data on the server side using Next.js
    if (loading)
        return (
            <div className="flex justify-center items-center h-screen">
                <h3 className="text-xl font-bold">Loading...</h3>
            </div>
        );

    if (error) {
        // In case of an error, we can redirect the user to some error page or display a snack/toast bar with information.
        // There are also different options to let the user know what happened
    }

    return (
        <main className="flex flex-col items-center gap-4 p-2 md:p-10">
            <h2 className="text-3xl text-darkBlue font-bold">Kurzovní lístek</h2>

            {Boolean(favoriteData.length) && (
                <LayoutWithTitle title="Vaše oblíbené" className="bg-slate-50">
                    <ExchangeTable>
                        <GenericTableHead objectWithValues={ExchangeTableHead} />
                        <ExchangeTableBody data={favoriteData} handleClick={removeFromFavorite} handleDesc={"Zrušit"} />
                    </ExchangeTable>
                </LayoutWithTitle>
            )}

            <LayoutWithTitle title="Seznam všech kurzů" className="bg-lightGrey">
                {/* TODO make this component down below*/}
                <div className="flex gap-2 bg-darkBlue text-lightGrey p-3">
                    <div>Aktualni</div>
                    <div>+ 1 den</div>
                    <div>+ 2 den</div>
                    <div>+ 3 den</div>
                </div>
                <ExchangeTable>
                    <GenericTableHead objectWithValues={ExchangeTableHead} />
                    <ExchangeTableBody data={data} handleClick={addToFavorite} handleDesc={"Oblíbená"} />
                </ExchangeTable>
            </LayoutWithTitle>
        </main>
    );
}

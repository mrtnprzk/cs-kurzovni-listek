import { useContext } from "react";

import { DataContext } from "@/context/DataContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ExchangeData, ExchangeTableHead } from "@/global/types";
import GenericTableHead from "@/Components/GenericTableHead";
import ExchangeTableBody from "@/Components/ExchangeTableBody";

export default function Home() {
    const { data, loading, error } = useContext(DataContext);
    const [favoriteData, setFavoriteData] = useLocalStorage<ExchangeData[]>("favorite", []);
    console.log(data);

    const addToFavorite = (value: ExchangeData) => {
        const arrayWithAddedItem = [...favoriteData, value];
        setFavoriteData(arrayWithAddedItem);
    };

    // const removeFromFavorite = (value: ExchangeData) => {
    //     const arrayWithDeletedItem = TODO filter logic
    //     setFavoriteData(arrayWithDeletedItem);
    // };

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
            <h3>Vaše oblíbené</h3>
            <table className="w-full max-w-4xl text-center border-separate border-spacing-y-1">
                <GenericTableHead objectWithValues={ExchangeTableHead} />
                <ExchangeTableBody data={favoriteData} />
            </table>
            <h3>Seznam všech kurzů</h3>
            <table className="w-full max-w-4xl text-center border-separate border-spacing-y-1">
                <GenericTableHead objectWithValues={ExchangeTableHead} />
                <ExchangeTableBody data={data} />
            </table>
        </main>
    );
}

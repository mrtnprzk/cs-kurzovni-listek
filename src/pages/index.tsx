import { useContext } from "react";

import { DataContext } from "@/context/DataContext";
import { FavoriteDataContext } from "@/context/FavoriteDataContext";
import LayoutWithTitle from "@/components/LayoutWithTitle";
import GenericTableHead from "@/components/GenericTableHead";
import EstimatedDaySelector from "@/components/EstimatedDaySelector";
import ExchangeTable from "@/components/ExchangeTable";
import ExchangeTableBody from "@/components/ExchangeTableBody";
import { ExchangeForEstimatedDays, ExchangeTableHead } from "@/global/types";
import { EstimatedDayContext } from "@/context/EstimatedDayContext";

//I prefer to use arrow functin for components but for page files is Next.js recomending to use regular function.
//It is mostly because of SSG and SSR but I still decided to leave it like that.
export default function Home() {
    const { data, loading, error } = useContext(DataContext);
    const { favoriteData, addToFavorite, removeFromFavorite } = useContext(FavoriteDataContext);
    const { estimatedDay, selectEstimatedDay } = useContext(EstimatedDayContext);

    if (loading)
        // This can be a spinning loader or a skeleton loader for the table
        // It is also possible to prefetch data on the server side using Next.js
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
                        <ExchangeTableBody
                            dataForTable={favoriteData}
                            handleClick={removeFromFavorite}
                            handleDesc={"Zrušit"}
                        />
                    </ExchangeTable>
                </LayoutWithTitle>
            )}

            <LayoutWithTitle title="Seznam všech kurzů" className="bg-lightGrey">
                <EstimatedDaySelector
                    arrayWithDayOption={ExchangeForEstimatedDays}
                    estimatedDay={estimatedDay}
                    setEstimatedDay={selectEstimatedDay}
                />
                <ExchangeTable>
                    <GenericTableHead objectWithValues={ExchangeTableHead} />
                    <ExchangeTableBody
                        dataForTable={data}
                        dataForFilter={favoriteData}
                        estimatedDay={estimatedDay}
                        handleClick={addToFavorite}
                        handleDesc={"Oblíbená"}
                    />
                </ExchangeTable>
            </LayoutWithTitle>
        </main>
    );
}

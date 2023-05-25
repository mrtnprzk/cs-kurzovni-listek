import { useContext, useEffect, useState } from "react";

import { DataContext } from "@/context/DataContext";
import { FavoriteDataContext } from "@/context/FavoriteDataContext";
import LayoutWithTitle from "@/components/LayoutWithTitle";
import GenericTableHead from "@/components/GenericTableHead";
import GenericDaySelector from "@/components/GenericDaySelector";
import ExchangeTable from "@/components/ExchangeTable";
import ExchangeTableBody from "@/components/ExchangeTableBody";
import { ExchangeForEstimatedDays, ExchangeTableHead } from "@/global/types";
import { useRouter } from "next/router";

export default function Home() {
    const { data, loading, error } = useContext(DataContext);
    const { favoriteData, addToFavorite, removeFromFavorite } = useContext(FavoriteDataContext);
    const [estimatedDay, setEstimatedDay] = useState<number>(0);
    const [initialValueSet, setInitialValueSet] = useState(false);
    const router = useRouter();
    const { estimated_day } = router.query;

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

    useEffect(() => {
        if (estimated_day && !initialValueSet) {
            setEstimatedDay(+estimated_day);
            setInitialValueSet(true);
        }
    }, [router.query, initialValueSet]);

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
                <GenericDaySelector
                    objectWithValues={ExchangeForEstimatedDays}
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

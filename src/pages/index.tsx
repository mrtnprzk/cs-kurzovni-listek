import { useContext } from "react";

import { DataContext } from "@/context/DataContext";

export default function Home() {
    const { data, loading, error } = useContext(DataContext);
    console.log(data);

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
            <h2>Kurzovní lístek</h2>
            <h3>Vaše oblíbené</h3>
            <h3>Seznam všech kurzů</h3>
            <table className="w-full max-w-4xl text-center border-separate border-spacing-y-1">
                <thead>
                    <tr>
                        <th>Měna</th>
                        <th>Země</th>
                        <th>Nákup</th>
                        <th>Prodej</th>
                        <th>ČNB</th>
                        <th>Změna / 1 den</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {data?.map(({ shortName, name, country, buy, sell, cnb, move }) => (
                        <tr key={shortName} className="bg-blue-100 text-gray-600">
                            <td >
                                {shortName} {name}
                            </td>
                            <td>{country}</td>
                            <td>{buy}</td>
                            <td>{sell}</td>
                            <td>{cnb}</td>
                            <td className="text-red-500">{move}</td>
                            <td className="underline cursor-pointer">Oblibena</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

import type { AppProps } from "next/app";
import Head from "next/head";

import { DataProvider } from "@/context/DataContext";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>ČS - Kurzovní lístek</title>
            </Head>
            <DataProvider>
                <Component {...pageProps} />
            </DataProvider>
        </>
    );
}

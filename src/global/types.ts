export type ExchangeData = {
    shortName: string;
    name: string;
    country: string;
    move: number;
    buy: number;
    sell: number;
    cnb: number;
};

export enum ExchangeTableHead {
    CURRENCY = "Měna",
    COUNTRY = "Země",
    BUY = "Nákup",
    SELL = "Prodej",
    CNB = "ČNB",
    CHANGE = "Změna/1 den",
}

export const ExchangeForEstimatedDays = [
    { name: "Aktualní", value: 0 },
    { name: "+ 1 den", value: 1 },
    { name: "+ 2 dny", value: 2 },
    { name: "+ 3 dny", value: 3 },
] as const;

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
    CHANGE = "Změna / 1 den",
}

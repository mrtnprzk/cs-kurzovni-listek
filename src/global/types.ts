export type ExchangeData = {
    shortName: string;
    name: string;
    country: string;
    move: number;
    buy: number;
    sell: number;
    cnb: number;
};

export enum ExchangeForEstimatedDays {
    CURRENT = "Aktualní",
    PLUS_ONE = "+ 1 den",
    PLUS_TWO = "+ 2 dny",
    PLUS_THREE = "+ 3 dny",
}

export enum ExchangeTableHead {
    CURRENCY = "Měna",
    COUNTRY = "Země",
    BUY = "Nákup",
    SELL = "Prodej",
    CNB = "ČNB",
    CHANGE = "Změna/1 den",
}

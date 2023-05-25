import { estimatedExchangeRate } from "../lib/estimatedExchangeRate";

describe("estimatedExchangeRate(lib) => Calculates the estimated exchange rate...", () => {
    it("...correctly with positive percentage", () => {
        const exchangeRate = 3.269;
        const percentage = 0.15;
        const estimatedDay = 2;
        const expectedRate = 3.279;

        const result = estimatedExchangeRate(exchangeRate, percentage, estimatedDay);

        expect(result).toBe(expectedRate);
    });

    it("...correctly with negative percentage", () => {
        const exchangeRate = 15.776;
        const percentage = -0.3;
        const estimatedDay = 3;
        const expectedRate = 15.634;

        const result = estimatedExchangeRate(exchangeRate, percentage, estimatedDay);

        expect(result).toBe(expectedRate);
    });

    it("...correctly with zero percentage", () => {
        const exchangeRate = 2.349;
        const percentage = 0;
        const estimatedDay = 2;
        const expectedRate = 2.349;

        const result = estimatedExchangeRate(exchangeRate, percentage, estimatedDay);

        expect(result).toBe(expectedRate);
    });

    it("...incorrectly", () => {
        const exchangeRate = 15.776;
        const percentage = -0.3;
        const estimatedDay = 2; //wrong
        const expectedRate = 15.634; //this would be expected rate with 3 estimated days

        const result = estimatedExchangeRate(exchangeRate, percentage, estimatedDay);

        expect(result).not.toBe(expectedRate);
    });
});

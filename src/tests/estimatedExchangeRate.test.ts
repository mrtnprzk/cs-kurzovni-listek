import { estimatedExchangeRate } from "../lib/estimatedExchangeRate";

describe("lib estimatedExchangeRate", () => {
    it("calculates the estimated exchange rate correctly with predefined values", () => {
        const exchangeRate = 15.776;
        const percentage = -0.3;
        const estimatedDay = 3;
        const expectedRate = 15.634;

        const result = estimatedExchangeRate(exchangeRate, percentage, estimatedDay);

        expect(result).toBe(expectedRate);
    });
});

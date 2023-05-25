/**
 * Calculates the estimated exchange rate for next days.
 * @param exchangeRate The initial exchange rate.
 * @param percentage The percentage change in the exchange rate.
 * @param estimatedDay The number of days to estimate the exchange rate.
 * @returns The estimated exchange rate rounded to three decimal places.
 */

export const estimatedExchangeRate = (exchangeRate: number, percentage: number, estimatedDay: number): number => {
    let result = exchangeRate; // Initialize the result with the initial exchange rate

    // Iterate for the specified number of estimated days
    for (let i = 0; i < estimatedDay; i++) {
        const changeAmount = (percentage * result) / 100; // Calculate the change amount based on the percentage
        result += changeAmount; // Update the result by adding the change amount
    }

    return Math.round(result * 1000) / 1000; // Round the result to three decimal places
};
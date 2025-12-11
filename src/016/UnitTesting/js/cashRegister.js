// js/cashRegister.js

/**
 * acceptPayment() processes a cash register payment.
 * 
 * @param {Object} paymentInfo Payment Information
 * @param {number} paymentInfo.total The total amount of the purchase
 * @param {number} paymentInfo.tenderedAmount The amount tendered
 * @param {string} paymentInfo.paymentType The payment method
 * @returns {{total: number, change: number, tenderedAmount: number paymentType: string, status: string }} - the receipt for the payment
 */
export function acceptPayment({ total, tenderedAmount, paymentType }) {
    // 1) Get rid of all fractional amounts for my calculations
    let totalPennies = Math.round(total * 100);
    let tenderedPennies = Math.round(tenderedAmount * 100);
    // 2) Determine how far "off" I am on it being a dime or a penny?
    //    1994 => 1995
    //    ***? => ***[0 | 5]
    if(totalPennies % 5 >= 3) {
        // round "up"
        totalPennies = totalPennies + (5 - totalPennies % 5);
    } else {
        // round "down"
        totalPennies = totalPennies - totalPennies % 5;
    }

    let result = {
        total: totalPennies / 100, // or I could have simplified with `total,`
        change: (tenderedPennies - totalPennies) / 100,
        paymentType,
        tenderedAmount
    };
    // Actual calculations...
    result.status = 'PAID';


    return result;
}

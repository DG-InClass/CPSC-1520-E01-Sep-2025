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
    let result = {
        total: total, // or I could have simplified with `total,`
        change: tenderedAmount - total,
        paymentType,
        tenderedAmount
    };
    // Actual calculations...
    result.status = 'PAID';


    return result;
}

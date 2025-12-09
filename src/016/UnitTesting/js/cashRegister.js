// js/cashRegister.js

export function acceptPayment(paymentInfo) {
    // destructuring syntax is an easy way to "unpack" an object   
    let { total, tenderedAmount, paymentType } = paymentInfo;

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

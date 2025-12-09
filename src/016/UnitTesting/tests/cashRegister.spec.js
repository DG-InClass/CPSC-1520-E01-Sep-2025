// tests/cashRegister.spec.js
import { describe, it, expect } from 'vitest';
import { acceptPayment } from '../js/cashRegister';

describe('The Cash Register', () => {
    /* SUT =>  acceptPayment(payment): receipt
        - should accept exact payment by cash
        - should accept over payment by cash
        - should do proper rounding of payment amounts for Canadian cash payments
     */
    it.each([10, 5])
    ('should accept exact payment of %d dollars by cash', (total) => {
        // Arrange
        const given = { total: total, paymentType: 'CASH', tenderedAmount: total };
        const expected = { status: 'PAID', paymentType: 'CASH', total: total, change: 0, tenderedAmount: total };

        // Act
        const actual = acceptPayment(given);

        // Assert
        expect(actual.total).toBe(expected.total);
        expect(actual.change).toBe(expected.change);
    });

    it('should accept over payment by cash', () => {
        // Arrange
        const total = 15;

        const given = { total: total, paymentType: 'CASH', tenderedAmount: 20 };
        const expected = { status: 'PAID', paymentType: 'CASH', total: total, change: 5, tenderedAmount: 20 };

        // Act
        const actual = acceptPayment(given);

        // Assert
        expect(actual.total).toBe(expected.total);
        expect(actual.change).toBe(expected.change);
    });

    it('should return a receipt for a valid payment', () => {
        // Arrange
        const given = { total: 22, paymentType: 'CASH', tenderedAmount: 30 };
        const expected = { status: 'PAID', paymentType: 'CASH', total: 22, change: 8, tenderedAmount: 30 };

        // Act
        const actual = acceptPayment(given);

        // Assert
        expect(actual).toEqual(expect.objectContaining(expected));
        //            \______/ \_______________________________/
        // The approach above for comparing Objects is a clean one.
    });
});

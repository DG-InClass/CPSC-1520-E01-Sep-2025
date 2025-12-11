import { describe, it, expect } from 'vitest';
import { calendarMonth } from '../js/calendar-view';

/* Testing the calendarMonth({year, month})
    We are expecting it to give us two dates:
    - First date to use in a grid-view for the month
    - Last date to use in a grid-view for the month
*/
// 🎼 Dan likes to put the "should" word in the description rather than the `it()` function.
//    Sometimes, to make my code read "nicer", I will alias the `it()` function:
const itShould = it;

describe("calendarMonth() should", () => {
    itShould.each([
        // Feb, 2026
        { year: 2026, month: 1, start: new Date(2026, 1, 1).toDateString() },
        // Mar 2026
        { year: 2026, month: 2, start: new Date(2026, 2, 1).toDateString() },
        // Jan 2026
        { year: 2026, month: 0, start: new Date(2025, 11, 28).toDateString() },
        // Dec 2025
        { year: 2025, month: 11, start: new Date(2025, 10, 30).toDateString() },
        // Nov 2025
        { year: 2025, month: 10, start: new Date(2025, 9, 26).toDateString() },
    ])
    ('give $start as the start date for $year, $month', ({year, month, start}) => {
        // Arrange
        const expected = { startDate: new Date(start) };

        // Act
        const actual = calendarMonth({year, month});

        // Assert
        expect(actual).toEqual(expect.objectContaining(expected));
    });
    
    // TODO: Finish this unit test as homework
    itShould.todo('give the correct end date of the month view', () => {

    });
});

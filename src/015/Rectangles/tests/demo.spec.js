// This test file is: /tests/demo.spec.js
// Vite looks for files with     \______/
// I prefer using "*.spec.js" in the file name
// because the idea of a unit test being a
// "specification" is a better way to think about
// testing in general.

// TDD (Test-Driven Development/Design) is an approach
// where you create the tests (specifications) BEFORE
// you create the code in your application.
// TDD follows a practice of Red-Green-Refactor.


// Import the functions used for testing:
import { describe, it, expect } from 'vitest';
import { add } from '../js/adHoc';

describe('The system I am working on', () => {
    it('should add two numbers', () => {
        // This is the function that will run for this
        // test/specification. We typically follow a
        // "Triple-A" pattern in our tests
        // Arrange - Setup of our test/specs
        const firstNumber = 5;
        const secondNumber = 7;

        // Act - Have our "Subject Under Test" (SUT) do something
        const answer = add(firstNumber, secondNumber);

        // Assert - Make sure that it does what it's supposed to
        expect(answer).toBe(12);
    });

    it('should add 3 + 2', () => {
        // Arrange
        const first = 3;
        const second = 2;
        // Act
        const answer = add(first, second);
        // Assert
        expect(answer).toBe(5);
    })
});
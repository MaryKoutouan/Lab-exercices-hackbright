const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    substract
} = require('./function')

test("Should return two", () => {
    expect(2).toEqual(2)
})

test("Should return name with the value of name parameter", () => {
    expect(greeting('James')).toEqual("Hello, James");

    expect(greeting('Jill')).toEqual("Hello, Jill")
})
describe('Math Functions', () => {
    test("Should return the sum of num1 and num2", () => {
        expect(add(1, 2)).toEqual(3)
    
        expect(add(5, 9)).toEqual(14)
    })
    test("The result is multiply by num1 and num2", () => {
        expect(multiply(1, 2)).toEqual(2)
    })
    test("Should return the substraction", () => {
        expect(substract(5, 2)).toEqual(3)
    })
    test("Should return the division", () => {
        expect(divide(4, 2)).toEqual(2)
    })
    
})

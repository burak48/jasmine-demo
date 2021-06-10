describe('calculator.js', function() {
    // TODO: Specs!
    it('should add numbers to total', function() {
        // TODO: Expectations
        const calculator = new Calculator();
        calculator.add(5);
        // expect total to be 5
        expect(calculator.total).toBe(5);
        // expect(10).toBe(10);
        // expect(10).toBe(5);

    });
    it('should subtract numbers from total', function() {
        // TODO: Expectations
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
    });
    it('should multiply total by number', function() {
        // TODO: Expectations
        const calculator = new Calculator();
        calculator.total = 100;
        calculator.multiply(2);
        expect(calculator.total).toBe(200);
    });
    it('should divide total by number', function() {
        // TODO: Expectations
        const calculator = new Calculator(); // why do I do this every time?
        calculator.total = 200;
        calculator.divide(2);
        expect(calculator.total).toBe(100);
    });

    it('should initialize the total', function() {
        const calculator = new Calculator();
        expect(calculator.total).toBe(0);
    });

    it('has constructor', function() {
        const calculator = new Calculator();
        const calculator2 = new Calculator();
        // calculator.total = 10
        expect(calculator).toEqual(calculator2);
    });

    it('can be instantiated', function() {
        // jasmine.addMatchers(customMatchers);

        const calculator = new Calculator();
        const calculator2 = new Calculator();

        // expect(calculator).toBeCalculator();  // custom! 

        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2);
        // expect(calculator.constructor.name  /* Calculator */).toContain("Calc1");
    });

    it('should initialize the total', function() {
        const calculator = new Calculator();

        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy();
    });

    it('instantiates unique object', function() {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator1).not.toBe(calculator2);
    });

    it('has common operations', function() {
        const calculator = new Calculator();

        expect(calculator.add).toBeDefined(); // or not.toBeUndefined();
        expect(calculator.subtract).toBeDefined(); // or not.toBeUndefined();
        expect(calculator.multiply).not.toBeUndefined();
        expect(calculator.divide).not.toBeUndefined();
    });

    it('can overwrite total', function() {
        const calculator = new Calculator();

        calculator.total = null;
        expect(calculator.total).toBeNull();
    });

    it('does not handle NaN', function() {
        const calculator = new Calculator();

        calculator.total = 20;
        calculator.multiply('a');

        expect(calculator.total).toBeNaN();
    });

    // it('handles divide by zero', function() {
    //     const calculator = new Calculator();

    //     expect(calculator.divide(0)).toThrow();
    // });

    it('handles divide by zero', function() {
        const calculator = new Calculator();

        expect(function() { calculator.divide(0) }).toThrow();
        expect(function() { calculator.divide(0) }).toThrowError(Error);
        expect(function() { calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero');
    });

    it('returns total', function() {
        const calculator = new Calculator();

        calculator.total = 50;

        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('number');
        expect(calculator.total).toEqual(jasmine.anything());
        expect(function() {}).toEqual(jasmine.anything());
        // expect(null).toEqual(jasmine.anything());
        // expect(undefined).toEqual(jasmine.anything());

        // expect(calculator.total).toBeNumber();
    });

});

describe('imagine-another-file.js', function() {
    // TODO: Specs!
});

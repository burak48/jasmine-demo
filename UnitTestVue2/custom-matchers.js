const customMatchers = {
    toBeCalculator: function() {
        return {
            compare: function(actual) {
                const result = {
                    pass: actual instanceof Calculator, // true, false ->  TODO
                    message: ''
                }

                if (result.pass) {
                    // TODO
                    result.message = 'Expected ' + actual + ' not to be instance of Calculator';
                } else {
                    result.message = 'Expected ' + actual + ' to be instance of Calculator';
                }

                return result;
            }
        }
    }
};

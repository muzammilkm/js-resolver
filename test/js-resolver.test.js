var resolver = require('../src/js-resolver').$resolver;
var assert = require('chai').assert;


describe('resolver', function() {
    it('ioc container should exists', function() {
        assert.isFunction(resolver);
    });

    it('ioc container should contain resolved number value', function() {
        var expected = 1;
        resolver('data', expected);
        var actual = resolver('data');
        assert.equal(expected, actual);
        assert.isNumber(actual);
    });

    it('ioc container should contain resolved string value', function() {
        // Arrange
        var expected = "1";
        resolver('data', expected);

        // Act
        var actual = resolver('data');

        // Assert
        assert.equal(expected, actual);
        assert.isString(actual);
    });

    it('ioc container should contain resolved object - singleton', function() {
        // Arrange
        var expected = {
            firstName: 'Muzammil',
            lastName: 'Mohammed'
        };
        resolver('person', expected);

        // Act
        var actual = resolver('person');

        // Assert
        assert.equal(expected, actual);
        assert.isObject(actual);
    });

    it('ioc container should contain resolved function', function() {
        // Arrange
        var expected = function() {
            var person = {
                firstName: '',
                lastName: ''
            };
            return person;
        };
        resolver('person', expected);

        // Act
        var actual = resolver('person');

        // Assert
        assert.equal(expected, actual);
        assert.isFunction(actual);
    });

    it('ioc container resolved function should be able create object', function() {
        // Arrange
        var expected = function() {
                var person = {
                    firstName: '',
                    lastName: ''
                };
                return person;
            },
            firstName = "Muzammil",
            lastName = "Mohammed";
        resolver('person', expected);


        // Act
        var actual = resolver('person');
        var person = actual();
        person.firstName = "Muzammil";
        person.lastName = "Mohammed";

        // Assert
        assert.equal(expected, actual);
        assert.isFunction(actual);
        assert.equal(firstName, person.firstName);
        assert.equal(lastName, person.lastName);
    });

    it('ioc container resolved function should create different object', function() {
        // Arrange
        var expected = function() {
            var person = {
                firstName: '',
                lastName: ''
            };
            return person;
        };
        resolver('person', expected);


        // Act
        var actual = resolver('person');
        var person1 = actual();
        var person2 = actual();

        // Assert
        assert.isFunction(actual);
        assert.equal(expected, actual);
        assert.notEqual(person1, person2);
    });

});
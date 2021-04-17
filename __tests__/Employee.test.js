const { TestScheduler } = require('@jest/core');
const Employee = require('../lib/Employee');

//creates employee object test 
test('creates an employee object', () => {
    const employee = new Employee('Jim', "1", 'jim@gmail.com');

    expect(employee.name).toBe('Jim');
    expect(employee.id).toBe("1");
    expect(employee.email).toBe('jim@gmail.com');

});

test('checks employee object contents', () => {
    const employee = new Employee("Jim", "1", "jim@gmail.com");

     expect(employee.getName()).toBe("Jim");
     expect(employee.getId()).toBe("1");
     expect(employee.getEmail()).toBe("jim@gmail.com");
     expect(employee.getRole()).toBe("Employee");
});


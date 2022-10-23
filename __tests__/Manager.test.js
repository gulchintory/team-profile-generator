// My Attempt
const Manager = require("../lib/Manager");

test("Test office number", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Gulcin", 1, "avgulcin@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Test getRole()", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Gulcin", 1, "avgulcin@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});
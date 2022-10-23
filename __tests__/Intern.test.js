// My Attempt
const Intern = require("../lib/Intern");

test("Test school", () => {
    const testSchool = "Monash";
    const employeeInstance = new Intern("Gulcin", 1, "avgulcin@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});


test("Test getRole()", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Gulcin", 1, "avgulcin@gmail.com", "Monash");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
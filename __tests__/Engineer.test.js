const Engineer = require("../lib/Engineer");

test("Test github", () => {
    const testGithub = "gulchintory";
    const employeeInstance = new Engineer("Gulcin", 1, "avgulcin@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Test getGithub()", () => {
    const testGithub = "gulchintory";
    const employeeInstance = new Engineer("Gulcin", 1, "avgulcin@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Test getRole()", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Gulcin", 1, "avgulcin@gmail.com", "gulchintory");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
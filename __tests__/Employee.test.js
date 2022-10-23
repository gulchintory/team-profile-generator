const Employee = require("../lib/Employee");

test("Test employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Test id", () => {
    const id = 1;
    const employeeInstance = new Employee("Gulcin", id);
    expect(employeeInstance.id).toBe(id);
})

test("Test name", () => {
    const name = "Gulcin";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})


test("Test email", () => {
    const email = "avgulcin@gmail.com";
    const employeeInstance = new Employee("Gulcin", 1, email);
    expect(employeeInstance.email).toBe(email);
})



test("Test getName()", () => {
    const testName = "Gulcin";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Test getID()", () => {
    const testID = 1;
    const employeeInstance = new Employee("Gulcin", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Test getEmail()", () => {
    const testEmail = "avgulcin@gmail.com";
    const employeeInstance = new Employee("Gulcin", 1, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Test getRole()", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Gulcin", 1, "avgulcin@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})


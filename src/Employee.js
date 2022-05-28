export class Employee {
    constructor(name, email, address, phone) {
        this._name = name;
        this._email = email;
        this._address = address;
        this._phone = phone;
        this._ID = Employee.ID++;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
}
Employee.ID = 0;
//# sourceMappingURL=Employee.js.map
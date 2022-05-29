export class User {
    constructor(firstName, lastName, emailAddress, password) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._emailAddress = emailAddress;
        this._password = password;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get emailAddress() {
        return this._emailAddress;
    }
    set emailAddress(value) {
        this._emailAddress = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}
//# sourceMappingURL=User.js.map
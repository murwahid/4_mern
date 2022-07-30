const { faker } = require('@faker-js/faker');
class User {
    constructor(password,email,phoneNumber,lastName,firstName,id) {
       this.password = faker.internet.password(4);
       this.email = faker.internet.email();
       this.phoneNumber = faker.phone.phoneNumber();
       this.lastName = faker.name.lastName();
       this.firstName = faker.name.firstName();
       this.id = faker.datatype.uuid();
    }


}

module.exports = User;
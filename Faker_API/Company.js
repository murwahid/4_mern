const { faker } = require('@faker-js/faker'); 
class Company {
    constructor(id, name,address,city) {
        this.name = faker.company.companyName();
        this.address = {
            street:faker.address.streetAddress(),
            city:faker.address.city(),
            state:faker.address.state(), 
            zipCode:faker.address.zipCode(), 
            country:faker.address.country()
        }
    }
}

module.exports = Company;
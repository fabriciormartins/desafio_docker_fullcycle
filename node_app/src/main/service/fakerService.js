const { faker } = require('@faker-js/faker');


class FakerService {
    static createRadomName(){
        return faker.person.fullName()
    }
}
module.exports = FakerService;

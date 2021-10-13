const mock = require('../datas/mock.json');
const Person = require('../models/Person');
const validator = require('../utils/validator');

class PersonController {

    constructor() {
        this._listPerson = mock;
    }

    add(name, age) {

        validator(name, age);

        let person = new Person(name, age);

        this._listPerson.push(person);

        return person;
    }

    getList(count) {
        return this._listPerson.slice(0, count);
    }

    getListSortedByName(count) {
        return this._listPerson.sort(this._sortByName).slice(0, count);
    }

    getListSortedByAge(count) {
        return this._listPerson.sort(this._sortByAge).slice(0, count);
    }

    getListByGroup(group, count) {

        if (["kid", "teenager", "elder", "adult"].indexOf(group.toLowerCase()) >= 0) {

            return this._listPerson.filter(person => {
                return person.group === group;
            }).slice(0, count);

        } else {

            throw new Error(`there is no ${group} group`);

        }

    }

    _sortByName(first, second) {

        if (first.name.toUpperCase() < second.name.toUpperCase()) {
            return -1;
        }

        if (first.name.toUpperCase() > second.name.toUpperCase()) {
            return 1;
        }

        return 0;
    }

    _sortByAge(first, second) {

        if (first.age < second.age) {
            return -1;
        }

        if (first.age > second.age) {
            return 1;
        }

        return 0;
    }

}

module.exports = PersonController;
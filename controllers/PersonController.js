const mock = require('../datas/mock.json');
const Person = require('../models/Person');
const validator = require('../utils/validator');

class PersonController {

    constructor() {
        this._listPerson = mock;
        //this._listPerson = new Array();
    }

    add(name, age) {

        validator(name, age);

        let person = new Person(name.trim(), age.trim());

        this._listPerson.push(person);

        return person;
    }

    getList(count) {

        if (!this._isEmpty()) {
            return this._listPerson.slice(0, count);
        }

    }

    getListSortedByName(count) {

        if (!this._isEmpty()) {
            return this._listPerson.sort(this._sortByName).slice(0, count);
        }

    }

    getListSortedByAge(count) {

        if (!this._isEmpty()) {
            return this._listPerson.sort(this._sortByAge).slice(0, count);
        }

    }

    getListByGroup(group, count) {

        if (!this._isEmpty()) {

            if (["kid", "teenager", "elder", "adult"].indexOf(group.toLowerCase()) >= 0) {

                return this._listPerson.filter(person => {
                    return person.group === group;
                }).slice(0, count);

            } else {

                throw new Error(`there is no ${group} group`);

            }

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

    _isEmpty() {
        return this._listPerson.length == 0;
    }
}

module.exports = PersonController;
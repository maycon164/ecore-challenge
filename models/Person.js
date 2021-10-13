class Person {

    constructor(name, age) {
        this.name = name;
        this.age = parseInt(age);
        this._rankToGroup();
    }


    _rankToGroup() {

        if (this.age > 0 && this.age <= 12) {
            this.group = "kid";
        } else if (this.age > 12 && this.age <= 19) {
            this.group = "teenager";
        } else if (this.age >= 20 && this.age < 65) {
            this.group = "adult";
        } else if (this.age > 65) {
            this.group = "elder"
        }

    }

}

module.exports = Person;
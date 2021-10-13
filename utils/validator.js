module.exports = function (name, age) {
    
    let regex = /[0-9]/

    if (!name) {
        throw new Error("name is empty");
    }

    if (!isNaN(name) | regex.test(name)) {
        throw new Error("name can't be a number");
    }

    if (age < 0) {
        throw new Error("age must be greater than 0");
    }

    if (isNaN(age)) {
        throw new Error("age must be a number");
    }

    age = parseInt(age);

    if (!age & age != 0) {
        throw new Error("age is empty");
    }
    
    return true;
}
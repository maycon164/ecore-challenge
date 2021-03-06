
const PersonController = require('../controllers/PersonController');

module.exports = (app) => {

    const route = "/api/v1/person";
    const controller = new PersonController();

    app.get(`${route}/`, (req, res) => {

        let count = req.query.count;
        let sort = req.query.sort;

        let list;

        if (sort == "name") {

            list = controller.getListSortedByName(count);

        } else if (sort == "age") {

            list = controller.getListSortedByAge(count);

        } else {

            list = controller.getList(count);

        }

        if (list) {
            return res.status(200).json({ person: list });
        }

        return res.status(200).json({ message: "list is empty" });

    });

    app.get(`${route}/:group`, (req, res) => {

        let group = req.params.group.trim();
        let count = req.query.count;

        let list;

        try {

            list = controller.getListByGroup(group, count);

        } catch (error) {
            return res.status(400).json({ error: error.message })
        }

        if (list) {
            return res.status(200).json({ person: list });
        }

        return res.status(200).json({ message: "list is empty" });
    });

    app.post(`${route}/`, (req, res) => {

        let person;

        try {

            person = controller.add(req.body.name, req.body.age);

        } catch (error) {

            return res.status(400).json({ error: error.message });

        }

        if (person) {

            return res.status(200).json({
                person
            });

        }

        return res.status(500).send("something went wrong...");

    });

}
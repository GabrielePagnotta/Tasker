const { Op } = require('sequelize');
const ArchiveModel = require('../Models/ArchiveModel');

exports.getArchive = async (req, res) => {
    try {
        const alltask = await ArchiveModel.findAll({
            where: {
                userIdUser: req.params.id
            }
        })
        res.json(alltask)
    } catch (err) {
        console.log(err)
    }
};

exports.addTasksToArchive = async (req, res) => {
    try {
        console.log(req.body);
        await ArchiveModel.create({
            Task_name: req.body.Task_name,
            Task_description: req.body.Task_description,
            Task_hours: req.body.Task_hours,
            Task_creation: req.body.Task_creation,
            Task_end: req.body.Task_end,
            userIdUser: req.body.Id_user,
            id: req.params.id
        }, {
            where: {
                id_task: {
                    [Op.eq]: req.params.id_task
                },
                userIdUser: {
                    [Op.eq]: req.body.Id_user
                }
            }
        });

        res.status(201).send("Task archiviata correttamente!");
    } catch (err) {
        console.log(err);
    }
};

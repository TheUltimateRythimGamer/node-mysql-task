const { response } = require('express');
const repository = require('../repository/tasks.repository');
// const repository = new TasksRepository();

getHelloWolrd = async (req, res) => {
    console.log('Somebody is sending a hello world');
    return res.status(200).json('Hello world');
}

getTasks = async (req, res) => {
    await repository.getAll(r => {
        if (r === 'ERROR')
            res.status(500).send();
        else
            res.status(200).send(r);
    });
}

getTask = async (req, res) => {
    const id = req.params.id;
    await repository.getById(id, r => {
        if (r === 'ERROR')
            res.status(500).send();
        else
            res.status(200).send(r);
    });
}

saveTask = async (req, res) => {
    const title = req.body.title;
    const descp = req.body.description;
    const id = req.body.id;
    if (id === 0)
        await repository.save(title, descp, (result) => {
            if (result)
                res.status(200).send();
            else
                res.status(500).send();
        }, (err) => {
            res.status(200).send(err);
        });
    else
        await repository.update(id, title, descp, (result) => {
            if (result)
                res.status(200).send();
            else
                res.status(500).send();
        }, (err) => {
            res.status(200).send(err);
        });
}

countTaks = async (req, res) => {
    await repository.count(r => {
        if (r === 'ERROR')
            res.status(500).send();
        else
            res.status(200).send(r);
    })
}

deleteTask = async (req, res) => {
    const id = req.params.id;
    await repository.deleteById(id, r => {
        if (r === 'ERROR')
            res.status(500).send();
        else
            res.status(200).send(r);
    });
}

module.exports = {
    getHelloWolrd,
    getTasks,
    getTask,
    saveTask,
    countTaks,
    deleteTask
}
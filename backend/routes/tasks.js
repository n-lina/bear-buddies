const router = require('express').Router();
let Task = require('../models/task.model');
const checkIfAuthenticated = require('../admin').checkIfAuthenticated;

// GET ALL TASKS
router.get('/', (req, res) => {
    console.log('You are on /tasks');
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

// ADD TASK
/* POST body example:
{
    taskRequester: 'mary1950',
    title: 'Pls buy me bread',
    description: 'wonder bread',
    dueDate: Date('__').toISOString(),
    startLoc: [90, 90], // grocery store [lat, lng]
    endLoc: [120, 90],  // mary's house
}
*/
router.post('/add', (req, res) => {
    console.log('You are on /add');
    // required
    const taskRequester = req.body.taskRequester;
    const status = 'OPEN';
    const title = req.body.title;
    const dueDate = req.body.dueDate;
    const startLoc = req.body.startLoc;
    const endLoc = req.body.endLoc;
    const requesterID = req.body.requesterID;
    console.log(req.body.description);
    // optional
    const description = ('description' in req.body) ? req.body.description : null;

    const newTask = new Task({
        requesterID: requesterID,
        taskRequester: taskRequester,
        taskDoer: null,
        status: status,
        title: title,
        description: description,
        dueDate: dueDate,
        startLoc: startLoc,
        endLoc: endLoc,
    });

    newTask.save()
        .then(() => res.json('New task added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET TASK BY ID
router.get('/:id', (req, res) => {
    console.log('You are on /:id');
    console.log(req.params.id);
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => {console.log(err); res.status(400).json('Error: ' + err)});
});

// GET TASKS BY USER
router.get('/user/:user', (req, res) => {
    console.log('You are on /user/:user');
    console.log(req.params.user);
    Task.find({
            requesterID: req.params.user
        })
        .then(tasksReq => {
            Task.find({
                    taskDoer: req.params.user
                })
                .then(tasksDo => {
                    const ans = tasksReq.concat(tasksDo);
                    res.json(ans);
                })
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET COMPLETED TASKS BY USER
router.get('/done/:user', (req, res) => {
    console.log('You are on /done/:user');
    Task.find({
            status: 'DONE',
            taskDoer: req.params.user,
        })
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE TASK STATUS
/* POST body example:
{
    status: 'IN-PROGRESS',
    taskDoer: 'user100',
}
*/
router.post('/update/:id', (req, res) => {
    console.log('You are on /update/:id');
    Task.findById(req.params.id)
        .then(task => {
            task.status = req.body.status;
            if (task.status === 'IN-PROGRESS') {
                task.taskDoer = req.body.taskDoer;
            }

            task.save()
                .then(() => res.json('Task updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE TASK BY ID
router.delete('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
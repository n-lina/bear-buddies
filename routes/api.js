const router = require('express').Router();
let User = require('../models/user.model');

// GET ALL TASKS
router.get('/:id', (req, res) => {
    User.findOne({requesterID: req.params.id})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// ADD TASK
/* POST body example:
{
    "requesterID": "abc",
    "level": 1,
    "experience": 0,
    "animalName": "Odie",
    "hunger": 0,
    "happiness": 100,
    "cleanliness": 100
}
*/
router.post('/', (req, res) => {
    // required
    const requesterID = req.body.requesterID;
    const level = req.body.level;
    const experience = req.body.experience;
    const animalName = req.body.animalName;
    const hunger = req.body.hunger;
    const happiness = req.body.happiness;
    const cleanliness = req.body.cleanliness;

    const newUser = new User({
        requesterID: requesterID,
        level: level,
        experience: experience,
        animalName: animalName,
        hunger: hunger,
        happiness: happiness,
        cleanliness: cleanliness
    });

    newUser.save()
        .then(() => res.json('New user added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Updates values in DB
router.put('/', (req, res) => {
    const requesterID = req.body.requesterID;

    User.findOneAndUpdate({ requesterID: requesterID }, req.body)
        .then(() => res.json('User updated'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('The Root of all doggos'))

router.post('/volunteer', controllers.createVolunteer)
router.post('/pets', controllers.createPet)
router.get('/volunteer', controllers.getVolunteers)
router.get('/pets', controllers.getPets)
router.get('/pets/:id', controllers.getPetById)
router.get('/volunteer/:id', controllers.getVolunteerById)
router.put('/volunteer/:id', controllers.updateVolunteerInfo)
router.put('/pets/:id', controllers.updatePets)
router.delete('/volunteer/:id', controllers.deleteVolunteer)

module.exports = router;
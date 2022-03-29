const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('The Root of all doggos'))

router.post('/volunteer', controllers.createVolunteer)
router.get('/volunteer', controllers.getVolunteers)
router.get('/pets', controllers.getPets)
router.get('/volunteer/:id', controllers.getVolunteerById)
router.put('/volunteer/:id', controllers.updateVolunteerInfo)
router.delete('/volenteer/:id', controllers.deleteVolunteer)

module.exports = router;
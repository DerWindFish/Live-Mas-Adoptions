const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('The Root of all doggos'))

router.post('/volunteer', controllers.createVolunteer)
router.get('/volunteer', controllers.getVolunteers)

module.exports = router;
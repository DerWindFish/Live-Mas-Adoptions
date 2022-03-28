const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('The Root of all doggos'))

module.exports = router;
const Volunteer = require('../models/volunteer')

const createVolunteer = async (req, res) => {
    try {
        const volunteer = await new Volunteer(req.body)
        await volunteer.save()
        return res.status(201).json({
            volunteer,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getVolunteers = async (req, res) => {
    try{
        const volunteers = await Volunteer.find()
        return res.status(200).json({ volunteers })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createVolunteer,
    getVolunteers
}
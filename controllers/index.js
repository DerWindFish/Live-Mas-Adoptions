const Volunteer = require('../models/volunteer');
const Pets = require('../models/pet');

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

const getPets = async (req, res) => {
    try{
        const pets = await Pets.find()
        return res.status(200).json({ pets })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPetById = async (req, res) => {
    try {
        const { id } = req.params;
        const pets = await Pets.findById(id)
        if (pets) {
            return res.status(200).json({ pets })
        }
        return res.status(404).send('That pet does not exsit')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getVolunteerById = async (req, res) => {
    try {
        const { id } = req.params;
        const volunteer = await Volunteer.findById(id)
        if (volunteer) {
            return res.status(200).json({ volunteer })
        }
        return res.status(404).send('That volunteer does not exsit')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateVolunteerInfo = async (req, res) => {
    try {
        const { id } = req.params;
        await Volunteer.findByIdAndUpdate(id, req.body, { new: true }, (err, volunteer) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!volunteer) {
                res.status(500).send('Volunteer not found');
            }
            return res.status(200).json(volunteer)
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteVolunteer = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Volunteer.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Volunteer deleted");
        }
        throw new Error("Volunteer not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createVolunteer,
    getVolunteers,
    getPets,
    getPetById,
    getVolunteerById,
    updateVolunteerInfo,
    deleteVolunteer
}
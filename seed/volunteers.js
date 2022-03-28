const db = require('../db')
const Volunteer = require('../models/volunteer')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const volunteers = [
        {
            name: 'Tiffany GreenThumb',
            email: 'TGreenT@gmail.com',
            phone: '714-892-8555'
        },
        {
            name: 'Steven with a Ph',
            email: 'StephenPH@email.com',
            phone: '924-637-8555'
        },
        {
            name: 'Cark Ruin',
            email: 'MarkwithaC@email.com',
            phone: '895-543-8555'
        }
    ]

    await Volunteer.insertMany(volunteers)
    console.log('Volunteers are ready to pet dogs')
}

const run = async () => {
    await main()
    db.close()
}

run()
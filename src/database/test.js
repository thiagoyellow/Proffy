const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // inserir dados

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8262516515",
        bio: "Entusiasta das melhores tecnologias de química avançada.",
    }

    classValue = {
        subject: 1,
        cost: "20",
        // o proffy id virá daqui a pouco
    }

    classScheduleValues = [
    // class_id virá pelo banco de dados, apos cadastrarmos a class
    {
        weekday: 1,
        time_from: 720,
        time_to:1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to:1220
    }
    ]

        // await createProffy(db, {proffyValue, classValue, classScheduleValues})
        //consultar os dados inseridos


    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)


    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)

    const selecteClassesShedules = await db.all(`
        SELECT class_schedule.*
        FROM class_shedule
        WHERE class_schedule.class_id = "1"
        AND class_shedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"

    `)
})


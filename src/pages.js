const Database = require('./database/db')

const { subjects, weekdays, getSubject } = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query

    if (!filters.subjects || !filters.weekday || !filters.time) {
        return res.render("study.html", { filters, subjects, weekdays })
    }

    console.log("não tem campos vazios!")
    

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_shedule
            WHERE class_schedule.class_id = classes.id
            AND class_shedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${filters.time}
            AND class_schedule.time_to > ${filters.time}
        )
    `


}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        // adicionar dados a lista de proffys
        proffys.push(data) 
        
        return res.redirect("/study")

    }

    //se não, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}
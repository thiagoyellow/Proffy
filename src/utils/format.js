const subjects = [
    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",                       
    "Matemática",
    "Portugûes",
    "Química",

]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",      
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

module.exports = {
    subjects,
    weekdays,
    getSubject
}
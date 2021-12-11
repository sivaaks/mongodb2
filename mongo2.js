db.users.insertOne({
    name:"Student 1",
    email:"demo@example.com",
    batch:'001',
    course:'Mern stack',
})

db.codekata.insertOne({
    problem:"123456",
    studentId:"65d6sdssddjfrfdo",
    category:'arrays',
    completed:true,
    points:20
})

db.attendance.insertOne({
    date:"ISODate(2021-11-12)",
    studentId:"65d6sdssddjfrfdo",
    present:true,
})

db.topics.insertOne({
    name:"Arrays",
    category:"Programming",
    date:ISODate("2021-11-12"),
})

db.tasks.insertOne({
    name:"URL shortner",
    date:ISODate("2021-11-12"),
    submitted:true,
    submittedURL:'https://reus.ml',
    tags:['Node.js','React.js','MongoDb'],
})

db.company_drives.insertOne({
    name:"Company 1",
    date:ISODate("2021-11-12"),
    students:['dd65sd56sd56s','sd5sd4sd64s6ds','5sd45sd4s5d45sd','sdsdlksdolsdk'],
    position:'Full stack developer',
    ctc:'8L',
})

db.mentors.insertOne({
    name:"Mentor 1",
    students:['dd65sd56sd56s','sd5sd4sd64s6ds','5sd45sd4s5d45sd','sdsdlksdolsdk'],
    topics:'React',
})

db.topics.find({
   date:{$gte:ISODate("2021-10-01"),$lt:ISODate("2021-11-01")}
})
db.tasks.find({
   date:{$gte:ISODate("2021-10-01"),$lt:ISODate("2021-11-01")}
})
db.company_drives.find({
   date:{$gte:ISODate("2020-15-10"),$lt:ISODate("2020-11-01")}
})
db.company_drives.find({},{name:1,students:1})
db.codekata.count({student:"65d6sdssddjfrfdo"})

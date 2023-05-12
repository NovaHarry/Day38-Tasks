// CREATING ZEN PROGRAMME

use Zen Programme

// CREATING USERS COLLECTIONS

db.createCollection("users")

// INSERTING DATA INTO USERS

db.users.insertMany([
    {
        "id": "1",
        "user_name": "Nova",
        "company_drive": true,
    },
    {
        "id": "2",
        "user_name": "Michael Scott",
        "company_drive": false,
    },
    {
        "id": "3",
        "user_name": "Walter White",
        "company_drive": true,
    },
    {
        "id": "4",
        "user_name": "Thomas Shelby",
        "company_drive": true,
    },
    {
        "id": "5",
        "user_name": "Barney Stinson",
        "company_drive": false,
    },
    {
        "id": "6",
        "user_name": "Phil Dunphy",
        "company_drive": false,
    }
])

// CREATING CODEKATA COLLECTIONS

db.createCollection("codekata")

// INSERTING DATA INTO CODEKATA

db.codekata.insertMany([
    {
        "id": "1",
        "user_name": "Nova",
        "codekata": "70/100",
    },
    {
        "id": "2",
        "user_name": "Michael Scott",
        "codekata": "1/100",
    },
    {
        "id": "3",
        "user_name": "Walter White",
        "codekata": "100/100",
    },
    {
        "id": "4",
        "user_name": "Thomas Shelby",
        "codekata": "99/100",
    },
    {
        "id": "5",
        "user_name": "Barney Stinson",
        "codekata": "69/100",
    },
    {
        "id": "6",
        "user_name": "Phil Dunphy",
        "codekata": "5/100",
    }
])

// CREATING ATTENDANCE COLLECTIONS

db.createCollection("attendance")

// INSERTING DATA INTO ATTENDANCE

db.attendance.insertMany([
    {
        "id": "1",
        "user_name": "Nova",
        "attendance": "present",
        "task_submission" : new Date("10-15-2020")
    },
    {
        "id": "2",
        "user_name": "Michael Scott",
        "attendance": "absent",
        "task_submission" : new Date("11-11-2020")
    },
    {
        "id": "3",
        "user_name": "Walter White",
        "attendance": "present",
        "task_submission" : new Date("10-15-2020")
    },
    {
        "id": "4",
        "user_name": "Thomas Shelby",
        "attendance": "present",
        "task_submission" : new Date("10-15-2020")
    },
    {
        "id": "5",
        "user_name": "Barney Stinson",
        "attendance": "absent",
        "task_submission" : new Date("11-02-2020")
    },
    {
        "id": "6",
        "user_name": "Phil Dunphy",
        "attendance": "absent",
        "task_submission" : new Date("11-05-2020")
    }
])

// CREATING TOPICS COLLECTIONS

db.createCollection("topics")

// INSERTING DATA INTO TOPICS

db.topics.insertMany([
    {
        "topics":"HTML",
        "month":"October"
    },
    {
        "topics":"JavaScript",
        "month":"October"
    },
    {
        "topics":"CSS",
        "month":"October"
    },
    {
        "topics":"React",
        "month":"November"
    },
    {
        "topics":"MongoDB",
        "month":"December"
    },
    {
        "topics":"MySQL",
        "month":"December"
    }
])

// CREATING TASKS COLLECTIONS

db.createCollection("tasks")

// INSERTING DATA INTO TASKS

db.tasks.insertMany([
    {
        "submitted":"yes",
        "month":"october"
    },
    {
        "submitted":"yes",
        "month":"october"
    },
    {
        "submitted":"yes",
        "month":"october"
    },
    {
        "submitted":"no",
        "month":"november"
    },
    {
        "submitted":"no",
        "month":"november"
    },
    {
        "submitted":"no",
        "month":"november"
    }
])

// CREATING COMPANY_DRIVES COLLECTIONS

db.createCollection("company_drives")

// INSERTING DATA INTO TASKS

db.company_drives.insertMany([
    {
        "company_drive": true,
        "date": new Date("10-15-2020")
    },
    {
        "company_drive": true,
        "date": new Date("10-25-2020")
    },
    {
        "company_drive": true,
        "date": new Date("10-28-2020")
    },
    {
        "company_drive": true,
        "date": new Date("10-31-2020")
    },
    {
        "company_drive": false,
        "date": new Date("11-11-2020")
    },
    {
        "company_drive": true,
        "date": new Date("11-05-2020")
    },
])

// CREATING MENTORS COLLECTIONS

db.createCollection("mentors")

// INSERTING DATA INTO MENTORS

db.mentors.insertMany([
    {
        "mentor_name":"John",
        "mentees" : 15
    },
    {
        "mentor_name":"Elton",
        "mentees" : 12
    },
    {
        "mentor_name":"Em",
        "mentees" : 25
    },
    {
        "mentor_name":"Alan",
        "mentees" : 15
    },
    {
        "mentor_name":"Shelton",
        "mentees" : 5
    },
    {
        "mentor_name":"Bae",
        "mentees" : 18
    }
])

// Find all the topics and tasks which are taught in the month of October

db.topics.aggregate([
    {
        $lookup: {
     from: 'tasks',
     localField: 'month',
     foreignField: 'month',
     
     as: 'months'
        },
    },{
        $match:{
            month:"October"
        }
    }

]);

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.find({
    date:{
        $gte: ISODate("2020-10-15T07:00:00.000+00:00"),
        $lte: ISODate("2020-10-31T07:00:00.000+00:00"),
    }
})

// Find all the company drives and students who are appeared for the placement.

db.users.find({company_drive:true})

// Find the number of problems solved by the user in codekata

db.codekata.find({},{codekata:1})

// Find all the mentors with who has the mentee's count more than 15

db.mentors.find({
    mentees:{
        $gte: 15,
    }
})

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance.find({
    attendance:"absent", task_submission:{
        $gte: ISODate("2020-10-31T08:00:00.000+00:00"),
    }}
)

export const mockedUserData = 
    {
        id: 18,
        userInfos : {
            firstName: "",
            lastName: "",
            age: 56
        },
        score: 0.6,

        keyData : {
            calorieCount:2233,
            proteinCount:76,
            carbohydrateCount:150,
            lipidCount: 120
        }
    }



export const mockedUserPerformance = 
    {
        userId: 18,
        kind: {
            1:"cardio",
            2:"energy",
            3:"endurance",
            4:"strength",
            5:"speed",
            6:"intendity"
        },

        data : {
            0: {
                value:210,
                kind: 1
            },
            1: {
                value: 200,
                kind: 2
            },
            2: {
                value: 95,
                kind: 3
            },
            3: {
                value: 70,
                kind: 4
            },
            4: {
                value: 230,
                kind: 5
            },
            6: {
                value: 130,
                kind: 6
            }
        }
    }



export const mockedUserSessions = 
    {
        userId: 18,
        sessions: {
            0: {
                day: 1,
                sessionLength: 20
            },
            1: {
                day: 2,
                sessionLength: 40
            },
            2: {
                day: 3,
                sessionLength: 45
            },
            3: {
                day: 4,
                sessionLength: 30
            },
            4: {
                day: 5,
                sessionLength: 50
            },
            5: {
                day: 6,
                sessionLength: 55
            },
            6: {
                day: 7,
                sessionLength: 45
            }
        }
    }



export const mockedUserActivity =  {
    userId: 18,
    sessions: {
        0: {
            day: "2020-07-01",
            kilogram: 80,
            calories: 300
        },
        1: {
            day: "2020-07-02",
            kilogram: 80,
            calories: 280
        },
        2: {
            day: "2020-07-03",
            kilogram: 81,
            calories: 260
        },
        3: {
            day: "2020-07-04",
            kilogram: 80,
            calories: 200
        },
        4: {
            day: "2020-07-05",
            kilogram: 81,
            calories: 230
        },
        5: {
            day: "2020-07-06",
            kilogram: 81,
            calories: 200
        },
        6: {
            day: "2020-07-07",
            kilogram: 80,
            calories: 180
        }
    }
}
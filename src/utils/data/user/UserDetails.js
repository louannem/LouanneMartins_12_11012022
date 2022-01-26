/**
 * Basic class for user's infos
 */
class User {
    constructor(data) {
        this.id = data.id
        this.firstName = data.userInfos.firstName
        this.lastName = data.userInfos.lastName   

        this.score = data.score || data.todayScore

        this.calories = data.keyData.calorieCount
        this.proteines = data.keyData.proteinCount
        this.glucides = data.keyData.carbohydrateCount
        this.lipides = data.keyData.lipidCount
    }
}

export default User
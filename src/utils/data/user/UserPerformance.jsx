/**
 * Basic class for user's performance
 */
 class UserPerformance {
    constructor(data) {
        this.id = data.userId
        this.performance = data.data
        this.kind = data.kind
    }
}

export default UserPerformance
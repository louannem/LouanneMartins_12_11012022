/**
 * Basic class for user's average sessions
 */
 class UserSessions {
    constructor(data) {
        this.id = data.userId
        this.sessions = data.sessions
    }
}

export default UserSessions
/**
 * Basic class for user's infos
 */
 class UserActivity {
    constructor(data) {
        this.id = data.userId
        this.activity = data.sessions
        
    }
}

export default UserActivity
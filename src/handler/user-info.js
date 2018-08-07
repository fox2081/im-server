class UserInfo {
    constructor() {
        this.a = '1'
    }

    judgeToken(token) {
        if (!token || 'string' !== typeof token) {
            return false;
        }
    }
}

module.exports = UserInfo;
class Github {
    constructor() {
        this.client_id = 'b4c0f516686f77d5e6cc';
        this.client_secret = '8e41b2390bb5632d2fc8addb6ec308e53c0fa5b6';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
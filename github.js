class Github {
    constructor(){
        this.client_id = '860a8abba76b58d4e1f3'
        this.client_secret = '8bcd39fc5e6ae2c3c16de8e6ef349b467437a35d'
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // Get User 
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile,
            repos
        }
    }




}
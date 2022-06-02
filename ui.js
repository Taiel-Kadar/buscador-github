class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
          <div class="row">
                <div class="col-md-3">
                 <img class="img-fluid mb-2" src="${user.avatar_url}">
                 <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block col-md-12 mb-3">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge bg-success">Public Followers: ${user.followers}</span>
                    <span class="badge bg-info">Public Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                      <li class="list-group-item">Company: ${user.company}</li>
                      <li class="list-group-item">Website/Blog: <a href="${user.blog}">${user.blog}</a></li>
                      <li class="list-group-item">Location: ${user.company}</li>
                      <li class="list-group-item">Member since: ${user.created_at}</li>
                    </ul>  
                </div>
          </div>  
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    // Show alert
    showAlert(message, className){
        // Clear any remaining alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    // Show user repos
    showRepos(repos){
        let output = '';

        repos.forEach(function(repo){
            output += `
            <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                  <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
                  <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
                  <span class="badge bg-success">Forks: ${repo.forks_count}</span>
                </div>
              </div>  
            </div>
            `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
    }

    // Clear alert
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    // Clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}
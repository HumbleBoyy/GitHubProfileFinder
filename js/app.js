$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        let userName = e.target.value;


        // Make Request to GitHub
        $.ajax({
            url:'https://api.github.com/users/'+userName,
            data:{
                client_id:"Ov23lihR8bCCl8xecdyI",
                client_secret:"0200c80294c0b4ef418415d3f853ff1ea0260c55"
            }
        }).done(function(user){
            console.log(user)
           $('#profile').html(`
               <div class="panel panel-default">
                   <div class="panel-heading">
                      <h3 class="panel-title">${user.name}</h3>
                   </div>
                   <div class="panel-body">
                      <div class="panel-body">
                         <div class="row">
                             <div class="col-md-3">
                                <img class="thumbnail avatar" src="${user.avatar_url}">
                                <a  target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">Visit Profile</a>
                             </div>
                             <div class="col-md-9">
                                 <span class="badge badge-dark">Public Repos: ${user.public_repos}</span>
                                <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                                <span class="badge badge-success">Followers: ${user.followers}</span>
                                <span class="badge badge-info">Following: ${user.following}</span>
                                <br></br>
                                 <ul class="list-group">
                                   <li class="list-group-item">Company: ${user.company}</li>
                                   <li class="list-group-item">Bio: ${user.bio}</li>
                                   <li class="list-group-item">Twitter Name: ${user.twitter_username}</li>
                                   <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                   <li class="list-group-item">Location: ${user.location}</li>
                                   <li class="list-group-item">Members Since: ${user.created_at}</li>
                                 </ul>
                             </div>
                         </div>
                      </div>
                   </div>
               </div>
            `);
        })
    })
});
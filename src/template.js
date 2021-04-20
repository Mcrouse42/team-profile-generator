//gives value of github link or school depending on whether or not they are a manager or intern
function getRole(profile) {
    if (profile.getRole() === "Manager") {
        return ("Manager")
    } else if (profile.getRole() === "Engineer") {
        return ("Engineer")
    } else if (profile.getRole() === "Intern") {
        return ("Intern")
    }
}


function getLastValue(profile) {
    if (profile.getRole() === "Manager") {
        return innerHTML = "Office Number: " + profile.getOfficeNumber()
    } else if (profile.getRole() === "Engineer") {
        return innerHTML = "GitHub: " + profile.getGithub()
    } else if (profile.getRole() === "Intern") {
        return innerHTML = "School: " + profile.getSchool()
    }
}

function createTeamProfile(teamProfile) {
    console.log(teamProfile);
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Document</title>
    </head>
    <body>
        <div class="container justify-content-center">
        <div class="row p-3 mb-2 justify-content-center bg-danger text-white">
        <h1>My Team</h1>
        </div>`;
    
    teamProfile.forEach(profile => {
        let card = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <div class= "bg-info text-white">
                        <h4 class="card-title">${profile.name}</h4>
                        <h5 class="card-title">${getRole(profile)}</h5>
                    </div>
                    <div>
                        <p class="card-text">ID: ${profile.id}</p>
                        <p class="card-text">Email: <a href="mailto:${profile.email}">${profile.email}</a> </p>
                        <p class="card-text">${getLastValue(profile)}</p>
                    </div>
                </div>
            </div>`;
   html = html + card
    })
    
    
    
    
    
    
    
    html =
      html +
      `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      </body>
      </html>`;
    
    return html
}

    


module.exports = createTeamProfile
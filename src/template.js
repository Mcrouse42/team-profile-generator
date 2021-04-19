//figure out how to connect index to this
function getLastValue(profile) {
    if (profile.getRole() === "Manager") {
        return profile.getOfficeNumber()
    } else if (profile.getRole() === "Engineer") {
        return profile.getGithub()
    } else if (profile.getRole() === "Intern") {
        return profile.getSchool()
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
<body>`;
    teamProfile.forEach(profile => {
        let card = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${profile.name}</h5>
    <p class="card-text">${profile.id}</p>
    <p class="card-text">${profile.email}</p>
    <p class="card-text">${getLastValue(profile)}</p>
  </div>
</div>`;
   html = html + card
    })
    
    
    
    
    
    
    
    html =
      html +
      `</body>
</html>`;
    
    return html
}

    


module.exports = createTeamProfile
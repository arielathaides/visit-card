const LinksSocialMidia = {
  github: 'arielathaides',
  instagram: '4rielathaides,'
}

function changeSocialMidiaLinks() {
  userName.textContent = 'Ariel'
}

changeSocialMidiaLinks()

function getGitHubProfilesInfos () {
  const url= `https://api.github.com/users/${LinksSocialMidia.github}`
  fetch(url)
  .then(response=> response.json())
  .then(data => {
    userName.textContent = data.name
   } )


}

getGitHubProfilesInfos ()

// Find and replace
const story = 'There was once an employee named Dwight. Dwigt was not very smart, but he was loyal. I could have promoted dwight but I did not.'
const app = document.querySelector('#app')

/*
    The "g" after the last forward slash means. Find all instances of it
    The "i" means case insensitive if there are uppercase & lowercase letters
*/
const varSearch = /Dwigh?t/gi
const updateVarSearched = story.replace(varSearch, 'Baho')

app.insertAdjacentHTML('beforeend', `<div>${story}</div>`)

if(updateVarSearched !== null) app.innerHTML = `<div>${updateVarSearched}</div>`
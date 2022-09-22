const pets = [
    "dog: mikey, barksalot",
    "cat: skittle, meowsalot",
    "rabbit: squishy, toocutetohandle"
]

/*
    Regex
    ~ [a-z] refers to "search the letters from a-z"
    ~ \s refers to spaces
    ~ + equivalent to {1,} one or nothing/more-times 
    ~ ? equivalent to {0, 1}
    ~ () referred to as capturing group
    ~ // equivalent to making it as regex
    The "i" means case insensitive if there are uppercase & lowercase letters
*/
const regexPattern = /([a-z\s]+):\s([a-z]+),\s([a-z]+)/i
const speciesUpdated = pets.map(specie => {
    return specie.replace(regexPattern, '$3 $2 <span class="highlight">$1</span>')
})

const app = document.getElementById('app')

pets.map(pet => {
    // const eachPet = pet
    app.innerHTML += `<li>${pet}</li>`
})

speciesUpdated.map(specie => {
    // const eachSpecie = specie
    app.innerHTML += `<li>${specie}</li>`
})
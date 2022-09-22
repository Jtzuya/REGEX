const story = "There are a lot of phone numbers. One is 5555555555, and another is 123-123-1234. Yet another is 321.321.4321. Another is 555 555 5555. Did you know another phone number is 1 555 555 5555 and my friend has a number of (555) 123 1234. My other friend has a number of 555 555-5555 and another has 1.987.654.3210."

document.querySelector("#app").insertAdjacentHTML("beforeend", story)

const phonePattern = /1?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/g

let results = story.match(phonePattern)
if (!results) results = []

const resultsUniform = results.map(x => x.replace(phonePattern, '($1) $2-$3'))

document.querySelector("#app").insertAdjacentHTML("beforeend", `
        <hr>
            <p>There are ${results.length} phone numbers in this string of text.</p>
        <ul>
            ${resultsUniform.map(x => `
                <li>${x}</li>
            `).join('')}
        </ul>
    `
)
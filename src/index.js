
// let title = document.querySelector('#exhibit-title')
// let totalTicketsText = document.querySelector('#tickets-bought')
// let ticketsButton = document.querySelector('#buy-tickets-button')
// let description = document.querySelector('#exhibit-description')
// let image = document.querySelector('#exhibit-image')
// let form = document.querySelector('form')

// fetch('http://localhost:3000/current-exhibits')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     renderDetails(data[0])
// });

// function renderDetails(exhibit) {
//     title.innerText = exhibit.title
//     totalTicketsText.innerText = `${exhibit['tickets_bought']} tickets bought`
//     description.innerText = exhibit.description
//     image.src = exhibit.image

//     for (let comment of exhibit.comments) {
//         addComment(comment)}

//     let totalTickets = exhibit.tickets_bought
//         function incrementTickets() {
//             count += 1
//             totalTicketsText.innerText = `${count} tickets bought`

//             fetch('http://localhost:3000/current-exhibits',{
//                 method: "PATCH",
//                 headers: {
//                     "content-type" : "application/json"
//                 },
//                 body: JSON.stringify({
//                     ticketCount : count
//                 })
//             })
//             .then(res => res.json())
//             .then(data => data)
//         }
        
//     ticketsButton.addEventListener('click', incrementTickets)
// }

// function addComment(comment) {
//     let p = document.createElement('p')
//     let commentSection = document.querySelector('#comments-section')
//     p.textContent = comment
//     commentSection.appendChild(p)
// }

// function handleNewComment(e) {
//     e.preventDefault()
//     let newComment = e.target['comment-input'].value
//     addComment(newComment)
// }

// form.addEventListener('submit', handleNewComment)

fetch('http://localhost:3000/current-exhibits')
.then(res => res.json())
.then(data => {
    renderExhibit(data[0])
})

function renderExhibit(exhibit) {
    let title = document.querySelector('#exhibit-title')
    title.innerText = exhibit.title

    let ticketsBought = document.querySelector('#tickets-bought')
    ticketsBought.innerText = `${exhibit.tickets_bought} Tickets Bought`

    let description = document.querySelector('#exhibit-description')
    description.innerText = exhibit.description

    for (let comment of exhibit.comments) {
        renderComments(comment)
    }

    let clickCount = exhibit.tickets_bought
    let button = document.querySelector('#buy-tickets-button')
    button.addEventListener('click', () => {
        clickCount++
        ticketsBought.innerText = `${clickCount} Tickets Bought`
    })
}

function renderComments(comment) {
    let commentDiv = document.querySelector('#comments-section')
    let newComment = document.createElement('p')
    newComment.innerText = comment

    commentDiv.appendChild(newComment)
}

let form = document.querySelector('#form')
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e.target['comment-input'].value);

    let commentSubmission = e.target['comment-input'].value
    renderComments(commentSubmission)
})
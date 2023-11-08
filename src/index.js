
let title = document.querySelector('#exhibit-title')
let totalTicketsText = document.querySelector('#tickets-bought')
let ticketsButton = document.querySelector('#buy-tickets-button')
let description = document.querySelector('#exhibit-description')
let image = document.querySelector('#exhibit-image')
let form = document.querySelector('form')

let totalTickets = 0

fetch('http://localhost:3000/current-exhibits')
.then(res => res.json())
.then(data => {
    console.log(data)
    for (let exhibit of data) {
        renderDetails(exhibit)
    }
});

function renderDetails(exhibit) {
    title.innerText = exhibit.title
    totalTicketsText.innerText = `${exhibit['tickets_bought']} tickets bought`
    description.innerText = exhibit.description
    image.src = exhibit.image
    renderComments(exhibit.comments)
}

function renderComments(comments) {
    comments.forEach(comment => addComment(comment));
}

function addComment(comment) {
    let p = document.createElement('p')
    let commentSection = document.querySelector('#comments-section')
    p.textContent = comment
    commentSection.appendChild(p)
}

function incrementTickets() {
    totalTickets += 1
    totalTicketsText.innerText = `${totalTickets} tickets bought`
}

ticketsButton.addEventListener('click', incrementTickets)

function handleNewComments(e) {
    e.preventDefault()
    let newComment = e.target['comment-input'].value
    addComment(newComment)
}

form.addEventListener('submit', handleNewComments)




        


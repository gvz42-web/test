import { Content, Form, Popup } from "./classes.js"


const start = document.getElementById('start')
const submit = document.getElementById('submit')

const form = new Form('name', 'lastname', 'country', 'city', 'hobby')
const popup = new Popup('popup')
const content = new Content('content')

const sumbitForm = () => {
    content.showInfo(form.data, form.json)
    popup.toggle()
}


submit.addEventListener('click', sumbitForm)
start.addEventListener('click', () => popup.toggle())
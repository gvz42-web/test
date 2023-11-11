export class Popup {
    constructor(id) {
        this.element = document.getElementById(id)
        this.element.addEventListener('click', (event) => {
            if (event.target.classList.contains('popup-wrapper')) {
                this.toggle()
            }
        })
    }

    toggle() {
        this.element.classList.toggle('open')
    }
}

export class Form {
    constructor(...ids) {
        this.elements = ids.map(e => ({
            name: e, 
            element: document.getElementById(e)
        }))
    }

    get data() {
        const data = {}
        for (let i = 0; i < this.elements.length; i++) {
            data[this.elements[i].name] = this.elements[i].element.value
        }
        return data
    }

    get json() {
        return JSON.stringify(this.data)
    }

    reset() {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].element.value = ''
        }
    }
}

export class Content {
    constructor(id) {
        this.element = document.getElementById(id)
    }

    showInfo(data, json) {
        this.element.style.display = 'block'
        this.element.innerText = ''
        for (let item in data) {
            this.element.innerText +=  `${item}: ${data[item] ? data[item] : ''}\n`
        }
        this.element.innerText += '\n\nJSON: ' + json 
    }
}
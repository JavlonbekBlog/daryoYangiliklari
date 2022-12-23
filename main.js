let quticha = document.querySelector(".daryo")
let inputTitle = document.createElement("input")
let img = document.createElement("img")

let currentIndex
let selectPhoto
let r


reRender(daryoYangiliklari)
function reRender(selectValue) {
    quticha.innerHTML = ""
    selectValue.map((daryo, index) => {

        let col = document.createElement("col")
        col.classList = ("col-4")

        let card = document.createElement("div")
        card.classList.add("card", "m-3", "p-3")

        let title = document.createElement("p")
        title.innerText = daryo.title.slice(0, 40) + "...."

        let rasm = document.createElement("img")
        rasm.src = daryo.photo


        let button = document.createElement("button")
        button.innerText = "Batafsil.."
        button.setAttribute("data-bs-toggle", "modal")
        button.setAttribute("data-bs-target", "#staticBackdrop")
        button.setAttribute("onclick", `batafsil(${index})`)

        let buttonDelete = document.createElement("button")
        buttonDelete.setAttribute("class", "btn btn-primary")
        buttonDelete.setAttribute("onclick", `buttonDelete(${index})`)
        buttonDelete.innerText = "Delete"

        let buttonEdit = document.createElement("button")
        buttonEdit.setAttribute("class", "btn btn-warning")
        buttonEdit.setAttribute("onclick", `buttonEdit(${index})`)
        buttonEdit.setAttribute("data-bs-target", "#editBackdrop")
        buttonEdit.setAttribute("data-bs-toggle", "modal")
        buttonEdit.innerText = "Edit"

        card.appendChild(rasm)
        card.appendChild(title)
        card.appendChild(button)
        card.appendChild(buttonEdit)
        card.appendChild(buttonDelete)

        col.appendChild(card)

        quticha.appendChild(col)
    })
}

function findTitle(option) {
    let newCurrentValue = daryoYangiliklari.filter(daryo => {
        return daryo.title.toLowerCase().includes(option.toLowerCase())

    })
    console.log(option.value)
    reRender(newCurrentValue)
}

function batafsil(index) {
    let card = document.querySelector(".modal-body")
    img.src = daryoYangiliklari[index].photo
    img.style.width = "100%"

    let title = document.createElement("p")
    title.innerText = daryoYangiliklari[index].title


    card.innerHTML = ""

    card.appendChild(img)
    card.appendChild(title)
}

function buttonEdit(index) {
    currentIndex = index

    let card = document.querySelector(".edit")


    inputTitle.setAttribute("placeholder", "title kiriting..")
    inputTitle.setAttribute("class", "title form-control")

    card.appendChild(inputTitle)

    reRender(daryoYangiliklari)
}

function buttonDelete(index) {
    daryoYangiliklari.splice(index, 1)

    reRender(daryoYangiliklari)
}

function selectEdit() {
    daryoYangiliklari[currentIndex].title = inputTitle.value
    daryoYangiliklari[currentIndex].photo = selectPhoto

    document.querySelector(".title").value = ""
    r.value = ""


    reRender(daryoYangiliklari)
}

function currentImg(val) {
    val.src = window.URL.createObjectURL(val.files[0])
    src = val.src

    selectPhoto = val.src
    r = val
}
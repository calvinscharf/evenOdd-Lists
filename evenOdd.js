 let usersWord =""
let oddList = document.getElementById("odd")
let evenList =document.getElementById("even")

function updateWord(element){
     usersWord = element.value
     
     console.log(usersWord)
 }

function handleSubmit() {
    
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord
     
    if (wordlength=even) {
        console.log(even)
    }
    oddList.appendChild(newListItem)

    usersWord = ""
    document.getElementById("even-odd-form").reset()
}

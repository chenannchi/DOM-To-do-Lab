let input = document.getElementById("input")
let submitBtn = document.getElementById("submit-button")
let resetBtn = document.getElementById("reset")
let todoList = document.getElementById("todo-list")

// console.dir(input)
// console.dir(submitBtn)
// console.dir(resetBtn)
// console.dir(todoList)

submitBtn.addEventListener('click', function(evt){
  // Don’t Allow Empty Items to be Added to the To-do List
  if (input.value){
    let li = document.createElement('li')
    li.setAttribute("class","todo-content")
    let inp = document.querySelector("input")
    li.textContent = inp.value
    inp.value = ""
    document.querySelector("ul").appendChild(li)
    // console.dir(li)
    let todoContents = document.querySelectorAll(".todo-content")
    todoContents.forEach(function(content){
      content.addEventListener("click",function(evt){
        content.remove()
      })
    })
  }
})

// create a reset button to reset the to-do list 
resetBtn.addEventListener("click", function(evt){
  let li = document.getElementById("todo-list")
  while(li.firstChild){
    li.removeChild(li.firstChild)
  }
})

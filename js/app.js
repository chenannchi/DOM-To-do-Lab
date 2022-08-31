let input = document.getElementById("input")
let btn = document.getElementById("submit-button")
let todoList = document.getElementById("todo-list")

console.dir(input)
console.dir(btn)
console.dir(todoList)

btn.addEventListener('click', function(evt){
  let li = document.createElement('li')
  let inp = document.querySelector("input")
  li.textContent = inp.value
  inp.value = ""
  document.querySelector("ul").appendChild(li)
})
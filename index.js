const form = document.querySelector("#todo-form")
const taskTitleInput = document.querySelector("#task-title-input")
const todoListUl = document.querySelector("#todo-list")

let tasks = [];

form.addEventListener("submit", (event) => {
     event.preventDefault() //evita o comportamento de recarregar a página ao submeter o formulário

     const taskTitle = taskTitleInput.value

     if (taskTitle.length < 3) {
          alert("Sua tarefa precisa ter pelo menos 3 caracteres.")
          return;
     }

     tasks.push({
          title: taskTitle,
          done: false,
     })

     //adicionando as tarefas no html
     const li = document.createElement('li')

     const input = document.createElement('input')//<input/>
     input.setAttribute('type', 'checkbox')// <input type="checkbox"/>
     input.addEventListener('change', (event) => {
          const liToToggle = event.target.parentElement

          const spanToToggle = liToToggle.querySelector('span')
          const done = event.target.checked
          if (done) {
               spanToToggle.style.textDecoration = 'line-through'
          } else {
               spanToToggle.style.textDecoration = 'none'
          }

          tasks = tasks.map(t => {
               if (t.title === spanToToggle.textContent) {
                    return {
                         title: t.title,
                         done: !t.done,
                    }
               }
               return t
          }) 
     })

     const span = document.createElement('span')
     span.textContent = taskTitle

     const button = document.createElement('button')
     button.textContent = "Remover"
     button.addEventListener('click', (event) => {
          const liToRemove = event.target.parentElement
          
          const titleToRemove = liToRemove.querySelector('span').textContent

          tasks = tasks.filter(t => t.title !== titleToRemove)

          todoListUl.removeChild(liToRemove)
     })

     console.log(tasks)
     li.appendChild(input)
     li.appendChild(span)
     li.appendChild(button)

     todoListUl.appendChild(li)



     taskTitleInput.value = ''

})
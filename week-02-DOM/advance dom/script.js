// The Idea is divide the frontend logic into two parts
        // state and component
        // state is the dynamic content for a website i.e, object holds some variables for component
        // component is a skeleton structure where we render the state variables
        // state + component = render, render(painting the picture) the frontend mixture of state and component
        const todos = [];

        // State
        function addTodo(){
            todos.push({
                id: todos.length + 1,
                todoDescription: document.querySelector('input').value
            });
            document.querySelector('input').value="";
            render();
        }

        // Component designing
        function todoComponent(index, todo) {
            const divEl = document.createElement('div');
            const h3 = document.createElement('h3');
            const editEl = document.createElement('button');
            editEl.textContent = 'Edit';
            editEl.setAttribute('onclick', `editTodo(this, ${index})`)
            let buttonEl = document.createElement('button');
            buttonEl.textContent = 'Delete';
            buttonEl.setAttribute('onclick', `deleteTodo(${index})`);
            h3.innerHTML = todo.todoDescription;
            divEl.appendChild(h3);
            divEl.appendChild(editEl);
            divEl.appendChild(buttonEl);
            return divEl;
        }

        // TodoEdit Component
        function editTodo(element, index){
            let currentTodoValue = element.previousElementSibling.innerHTML;
            const inputEl = document.createElement('input');
            inputEl.setAttribute('value', currentTodoValue);
            inputEl.setAttribute('id', `updated-value-${index}`);

            element.previousElementSibling.innerHTML = "";
            element.previousElementSibling.appendChild(inputEl);
            element.textContent = 'Save';
            element.setAttribute('onclick', `updateTodo(${index})`)
            element.nextElementSibling.textContent = 'Cancel';
            element.nextElementSibling.setAttribute('onclick', 'doNothing()');
        }

        // state for edit
        function updateTodo(index){
            updatedValue = document.querySelector(`#updated-value-${index}`).value;
            todos[index].todoDescription = updatedValue;
            render();
        }

        // state for cancel
        function doNothing(){
            render();
        }

        // Rendering Designing
        function render(){
            document.querySelector('#todos').innerHTML = "";
            for(let i = 0; i< todos.length; i++){
                let element = todoComponent(i, todos[i]);
                document.querySelector('#todos').appendChild(element);
            }
        }

        function deleteTodo(todoIndex) {
            todos.splice(todoIndex, 1);
            render();
        }

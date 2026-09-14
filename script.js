const todoInput = document.getElementById('todoInput');
const dueDate = document.getElementById('dueDate');
const addBtn = document.getElementById('addBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const darkModeToggle = document.getElementById('darkModeToggle');
const todoList = document.getElementById('todoList');
const taskCount = document.getElementById('taskCount');

let todos = [];
let todosRef; // Firebase reference

addBtn.addEventListener('click', addTodo);
clearAllBtn.addEventListener('click', clearAllTodos);
darkModeToggle.addEventListener('click', toggleDarkMode);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

function loadTodos() {
    // Wait for Firebase to be ready
    if (typeof database === 'undefined') {
        console.error('Firebase not initialized yet. Retrying...');
        setTimeout(loadTodos, 500);
        return;
    }
    
    // Set up Firebase reference
    todosRef = database.ref('todos');
    console.log('Firebase connected! Listening for tasks...');
    
    // Listen for changes in Firebase
    todosRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log('Data from Firebase:', data);
        if (data) {
            todos = Object.values(data);
        } else {
            todos = [];
        }
        updateTaskCount();
        renderTodos();
    }, (error) => {
        console.error('Firebase error:', error);
        alert('Error connecting to Firebase. Check console.');
    });
    
    loadDarkMode();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    updateDarkModeIcon();
}

function loadDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    const icon = darkModeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

function saveTodos() {
    // Check if Firebase is ready
    if (!todosRef) {
        console.error('Firebase not ready yet');
        return;
    }
    
    // Save to Firebase instead of localStorage
    const todosObj = {};
    todos.forEach(todo => {
        todosObj[todo.id] = todo;
    });
    
    console.log('Saving to Firebase:', todosObj);
    
    todosRef.set(todosObj).then(() => {
        console.log('Task saved successfully!');
    }).catch(error => {
        console.error('Error saving to Firebase:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        alert('Error saving task:\n' + error.message);
    });
}

function updateTaskCount() {
    taskCount.textContent = todos.length;
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;

    const todo = {
        id: Date.now(),
        text: text,
        dueDate: dueDate.value || 'No date',
        completed: false
    };

    todos.push(todo);
    saveTodos();
    updateTaskCount();
    renderTodos();
    todoInput.value = '';
    dueDate.value = '';
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    updateTaskCount();
    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

function clearAllTodos() {
    if (todos.length === 0) {
        alert('No tasks to clear!');
        return;
    }
    if (confirm('Are you sure you want to delete all tasks?')) {
        todos = [];
        saveTodos();
        updateTaskCount();
        renderTodos();
    }
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="todo-content">
                <span class="todo-text">${todo.text}</span>
                <span class="todo-date"><i class="fas fa-calendar"></i> ${todo.dueDate}</span>
            </div>
            <button class="delete-btn" data-id="${todo.id}"><i class="fas fa-trash"></i> Delete</button>
        `;

        li.querySelector('.todo-text').addEventListener('click', () => toggleTodo(todo.id));
        li.querySelector('.delete-btn').addEventListener('click', () => deleteTodo(todo.id));

        todoList.appendChild(li);
    });
}

loadTodos();

const initialState = {
    isAuthenticated: false,
    user: {
        username: 'admin',
        password: 'admin',
        email: 'admin@gmail.com'
    },
    todos: [
        { id: 1, text: 'Task 1' },
        { id: 2, text: 'Task 2' },
        { id: 3, text: 'Task 3' },
    ],
    notifications: [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: false },
        { id: 3, message: 'Notification 3', isRead: false },
        { id: 4, message: 'Notification 4', isRead: false },
    ]
};


function authReducer (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            if (action.payload.username === state.user.username && action.payload.password === state.user.password) {
                return { ...state, isAuthenticated: true }
            }
            else {
                return state
            }
        case 'LOGOUT':
            return { ...state, isAuthenticated: false }
        case 'ADD_TODO':
            const newTodo = {
                id: state.todos.length + 1,
                text: action.payload.todo.text,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
            };
        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
        case 'NOTIFY':
            return {
                ...state,
                notifications: state.notifications.map((notification) =>
                    notification.id === action.payload ? { ...notification, isRead: true } : notification
                ),
            };
        default:
            return state
    }
};

export default authReducer;

// const initialState = {
//     isAuthenticated: false,
//     user: {
//         username: 'admin',
//         password: 'admin',
//         email: 'admin@gmail.com'
//     },
//     todos: [
//         { id: 1, text: 'Task 1' },
//         { id: 2, text: 'Task 2' },
//         { id: 3, text: 'Task 3' },
//     ],
//     notifications: [
//         { id: 1, message: 'Notification 1', isRead: false },
//         { id: 2, message: 'Notification 2', isRead: false },
//         { id: 3, message: 'Notification 3', isRead: false },
//         { id: 4, message: 'Notification 4', isRead: false },
//     ]
// };


// function Reducer (state = initialState, action) {
//     switch (action.type) {
//         case 'LOGIN':
//             if (action.payload.username === state.user.username && action.payload.password === state.user.password) {
//                 return { ...state, isAuthenticated: true }
//             }
//             else {
//                 return state
//             }
//         case 'LOGOUT':
//             return { ...state, isAuthenticated: false }
//         case 'ADD_TODO':
//             const newTodo = {
//                 id: state.todos.length + 1,
//                 text: action.payload.todo.text,
//             };
//             return {
//                 ...state,
//                 todos: [...state.todos, newTodo],
//             };
//         case 'REMOVE_TODO':
//             return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
//         case 'NOTIFY':
//             return {
//                 ...state,
//                 notifications: state.notifications.map((notification) =>
//                     notification.id === action.payload ? { ...notification, isRead: true } : notification
//                 ),
//             };
//         default:
//             return state
//     }
// };

// export default Reducer;


const initialState = {
    player1: 0,
    player2: 0,
    advantage: null,
    winner: null,
    playing: true,
};


function Reducer(state = initialState, action) {
    switch (action.type) {
        case "restart":
            return initialState
        case "playPause":
            if (state.winner) {
                return state;
            }
            return {
                ...state,
                playing: !state.playing,
            };
        case "pointScored":
            const player = action.payload.player;
            const otherPlayer = player === "player1" ? "player2" :
                "player1";
            if (state.winner) {
                return state;
            }
            if (state.playing === false) {
                return state;
            }
            const currentPlayerScore = state[player];
            if (currentPlayerScore <= 15) {
                return { ...state, [player]: currentPlayerScore + 15 };
            }
            if (currentPlayerScore === 30) {
                return { ...state, [player]: 40 };
            }
            if (currentPlayerScore === 40) {
                if (state[otherPlayer] !== 40) {
                    return { ...state, winner: player };
                }
                if (state.advantage === player) {
                    return { ...state, winner: player };
                }
                if (state.advantage === null) {
                    return { ...state, advantage: player };
                }
                return { ...state, advantage: null };
            }
        default:
            return state
    }}

    export default Reducer;

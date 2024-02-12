// actions.js
export const login = (username, password) => ({
    type: 'LOGIN',
    payload: { username, password },
});

export const logout = () => ({
    type: 'LOGOUT',
});
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: { todo },
});
export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload: id,
});
export const markAsRead = (id) => ({
    type: 'NOTIFY',
    payload: id,
});
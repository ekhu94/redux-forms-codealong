export const createTodoAction = todo => {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
};
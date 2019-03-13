export const updateTodos = todos => ({
  type: 'UPDATE_TODOS',
  payload: { todos }
})

export const addNewTodo = newTodo => {
  return {
    type: 'ADD_TODO',
    payload: {
      title: newTodo.payload.title,
      id: newTodo.payload.id
    }
  }
}

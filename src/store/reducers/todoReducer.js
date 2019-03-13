export const todoReducer = (todos = [], { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return [...todos, { title: payload.title, id: payload.id }]
    case 'UPDATE_TODOS':
      return todos
    default:
      return todos
  }
}

import React, { useState } from 'react'

export const TextInput = ({ add }) => {
  const [newTodo, setNewTodo] = useState('')
  return (
    <div>
      <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button
        onClick={() =>
          add({
            type: 'ADD_TODO',
            payload: { title: newTodo, id: Date.now() }
          })
        }>
        ADD
      </button>
    </div>
  )
}

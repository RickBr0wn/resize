import React from 'react'

const styles = {
  container: {
    border: '#000 1px solid',
    padding: '20px',
    width: 'fit-content'
  },
  id: {
    fontSize: '10px'
  }
}

export const ListComponent = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos &&
        todos.map(item => (
          <div key={item.id}>
            {item.title}
            <p style={styles.id}>{item.id}</p>
          </div>
        ))}
    </div>
  )
}

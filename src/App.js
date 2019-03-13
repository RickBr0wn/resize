import React from 'react'
import { connect } from 'react-redux'
import { ListComponent, TextInput } from './components'
import { addNewTodo } from './store/actions'

const styles = {
  app: {
    padding: '30px'
  }
}

const App = ({ todos, onAdd }) => {
  return (
    <div style={styles.app}>
      <h1>App!</h1>
      <ListComponent todos={todos} />
      <TextInput add={onAdd} />
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = {
  onAdd: addNewTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

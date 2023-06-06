import React from 'react'
import { addTodo } from '../redux/actions/actions'

const main = () => {
  return (
    <div>
      <h2>dispatch</h2>
    </div>
  )
}


const mapStateToProps=(state)=>({})

const mapDispatchToProps=(dispatch)=> ({
    addTodo: (todo)=> ( dispatch (addTodo (todo)))
})


export default main

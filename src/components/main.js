import { connect} from 'react-redux'
import React from 'react'
import { addTodo,appStatus } from '../redux/actions/actions'

const main = (props) => {
  console.log("props",props,props.appStatus(true))
  return (
    <div>
      <h2>dispatch</h2>
    </div>
  )
}


const mapStateToProps=(state)=>({})

const mapDispatchToProps=(dispatch)=> ({
    addTodo: (todo)=> ( dispatch (addTodo (todo))),
    appStatus: (todo)=> ( dispatch (appStatus (todo)))
})


export default connect(mapStateToProps,mapDispatchToProps)(main)

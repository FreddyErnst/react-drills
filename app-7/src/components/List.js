import React from 'react'
import Todo from '../components/Todo'


class List extends React.Component {
    render() {
    let list = this.props.tasks.map((element, index) => {
            return <Todo key={index} task={element} />
        })
        return (
            <div>
                {list}
            </div>
        )
        
    }
}
export default List;

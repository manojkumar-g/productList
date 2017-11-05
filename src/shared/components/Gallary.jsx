import React from 'react';
import {connect} from 'react-redux'
import {deleteItem, showAlert} from '../actions'

 class Gallary extends React.Component {
  constructor(props) {
    super(props);
    //Hello
    this.state = {

    }
  }
  render(){
    return(
      <main className = 'gallary-container'>
        <h1 className = 'modal-row'>Hello {this.props.userName.split('@')[0]} </h1>
        <div className = 'modal-row'>
        <article className = 'gallary-tile add-tile' onClick = {this.props.showAlert}>
            <h1>
            Add New <br/>
            +
          </h1>
        </article>
        {
          this.props.data.map(
            (game) =>
              <article key = {game.id} className = 'gallary-tile'>
                <span>{game.name}</span>
                <img src = 'https://a.disquscdn.com/get?url=http%3A%2F%2Ffreedesignfile.com%2Fupload%2F2014%2F07%2FMovie-time-design-elements-vector-backgrounds-04.jpg&key=JbjQ9AXRb3A859danz1FIg'/>
                <span>Rate: ${game.rate}</span>
                <span>Quality :{game.quality}</span>

                <button onClick = {this.props.deleteItem.bind(null,game.id)}>Delete</button>
              </article>
          )
        }
      </div>
      </main>
    )
  }
}

export default connect(
  ({data,userName}) => ({data,userName}),
  {deleteItem,showAlert}
)(Gallary)

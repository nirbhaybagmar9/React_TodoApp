import React, { Component } from "react";
import '../App.css'
export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
    <div className="Todo-item">
        <div >
            <span style={{paddingRight: '10px'}}>{title}</span>
        </div>
        <div className="Item-option">
            <span className="text" onClick={handleEdit}>Edit</span>
            <span className="text" onClick={handleDelete}>Delete</span>
        </div>
    </div>
    )
  }
}

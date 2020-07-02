import React, {Component} from 'react';
import './App.css';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

class  App extends Component {
  state = {
    id: Date.now(),
    item: "",
    items: [],
    editItem: false
  };
  onChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: Date.now(),
      editItem: false
    });
  };

  onEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  onDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  render () {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Todo App</h1>
      </header>
      <div className="Todo-input">
        <h3 className="text">Todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.onChange}
              handleSubmit={this.onSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.onDelete}
              handleEdit={this.onEdit}
            />
      </div>
    </div>
  );
 }
}

export default App;

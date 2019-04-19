import React, { Component } from 'react';
import { Modal,Button, Input} from 'antd';
import './App.css';
import TodoItems from './todolist';


class todo extends  Component{

    state = { visible: false }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }

      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

    state = {
        size: 'large',
      };
    
      handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
      }
      

    constructor(props) {
        super(props)
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        // this.createTasks = this.createTasks.bind(this);
    }
    
    addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }
         
        console.log(this.state.items);
           
        e.preventDefault();
      }


      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

    render() {
        const size = this.state.size;
        const { TextArea } = Input;
        return(
          <div className="container">
          <div className="row">
          <div className="col-md-12">
            <div className="todoListMain" style={{marginTop: '20px'}}> 
               <div className="mybutton">
            <Button type="primary" shape="circle" icon="plus" size={size} onClick={this.showModal}/> 
            </div>
            <div className="header">
            <h2 className="text-center">Todo App</h2>
            <Modal visible={this.state.visible} onOk={this.handleOk}  onCancel={this.handleCancel}>
                <form onSubmit={this.addItem}>
                <div className="form-group" style={{marginTop:"20px"}}>
                <input ref={(a) => this._inputElement = a} className="form-control" placeholder="enter task"/>
                </div>
                <div style={{marginTop:'20px'}} className="text-right">
                <button type="submit" className="btn btn-success">Add item </button>
                </div>
                </form>
            </Modal>
            </div>
            <TodoItems entries={this.state.items} delete={this.deleteItem}/>
            <div>
               <h2 className="text-center">Done</h2>
            </div>
            </div>
            </div>
            </div>
            </div>
           
        )
    }
}

export default todo;
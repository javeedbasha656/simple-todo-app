import React, { Component } from "react";
import { Checkbox   } from 'antd';



function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
class TodoItems extends Component {

  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return  <div className="col-md-3" key={item.key}><div className="panel panel-default"><div className="panel-body"><h4>{item.text}</h4>
    <Checkbox onChange={onChange} onClick={() => this.delete(item.key)} value=""></Checkbox></div></div>
    
    </div>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <div className="container">
      <div className="row">
       <div className="col-md-12">
          {listItems}
      </div>
      </div>
      </div>
    );
  }
};
 
export default TodoItems;
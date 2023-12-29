import React from 'react';
function AddTodo(){
    return (
    <div class="row kg-row">
            <div class="col-sm-6"><input type="text" placeholder="input todo her" /></div>
            <div class="col-sm-4"><input type="date" /></div>
            <div class="col-sm-2"><button className="btn btn-dark">add</button></div>
          </div>)
}
export default AddTodo;
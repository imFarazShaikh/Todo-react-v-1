import Heading from "./component/appname";
import AddTodo from "./component/AddTodo";
import TodoItem1 from "./component/TodoItem1";
import TodoItem2 from "./component/TodoItem2";
import "./app.css";

function App() {
  return (
    <>
      <center>
        <Heading />
        <div class="container text-center">
          <AddTodo />
          <div className="items">
            <TodoItem1 />
            <TodoItem2 />
          </div>
        </div>
      </center>
    </>
  );
}

export default App;

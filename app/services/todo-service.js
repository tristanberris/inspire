import store from "../store.js";
import List from "../models/list.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/tristan/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    // console.log("Getting the Todo List");
    todoApi.get()
    .then(res => {
      let list = res.data.data.map(rawListData => new List(rawListData))
      let numC = res.data.data.length
      console.log(numC)
      store.commit("todos", list)
      // store.commit("todoNum", list)
      // console.log(store.State.todos)
    })
    .catch(err => console.error(err))
    //TODO Handle this response from the server
    // let numCalc = store.State.todos
    // console.log(numCalc.length)
  }

  todoNum(){
    // let num = store.State.todos.length()
    // console.log(num)
    // return num;
  }

  addTodoAsync(todo) {
    todoApi.post('', todo)
    .then(res => {
      this.getTodos();
    })
    .catch(err => {
      throw new Error(err)
    })
    // console.log(store.State.todos)
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    todoApi.delete(todoId)
    .then(res => this.getTodos())
    .catch(err =>{
      throw new Error(err)
    })
  }
}

const todoService = new TodoService();
export default todoService;

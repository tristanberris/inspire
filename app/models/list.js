export default class List {
    constructor(data){
        this.description = data.description
        {
            //the server will create these properties for you
           this._id =  data._id //{type: String, required: true, unique: true }
            this.completed = data.completed //{ type: Boolean, required: true, default: false},
            this.user = data.user //{ type: String, required: true },
            //You will need to provide a description
            this.description = data.description //{ type: String, required: true},
        }
    }

    get Template(){
        return /*html*/ `  
        
        <p class="ml-5"> ${this.description}  
            <button type="button" class="close text-danger" onclick="app.todoController.removeTodo('${this._id}')">
                <span>&times;</span>
            </button>
        </p>

        `
    }
}
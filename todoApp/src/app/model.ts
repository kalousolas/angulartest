export class Model{
    user;
    items;
    title;

    constructor(){

        this.title = 'todoApp';
        this.user = 'Murat';
        this.items = [

            new TodoItem("Spor",true),
            new TodoItem("Kahvaltı",false),
            new TodoItem("Kitap Okumak",false),
            new TodoItem("Sinema",true)
        ]
    }
}

export class TodoItem{

    description;
    action;
    constructor(description,action){

        this.description = description;
        this.action = action;
    }
}
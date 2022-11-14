var app = new Vue({
    el: "#root",
    data: {
        todoList: [],
        todoDone: [],
        task: '',


    },
    methods: {
        aggiungiTodoList(){
            this.todoList.push(this.task)
            console.log(this.todoList)
        },
    }
})
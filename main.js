var app = new Vue({
    el: "#root",
    data: {
        todoList: [],
        todoDone: [],
        task: '',


    },
    methods: {
        aggiungiTodoList(){
            this.todoList.push({task: this.task, done: false})

            console.log(this.todoList)
        },
    }
})
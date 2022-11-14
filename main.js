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
        taskCompletata(element, index){
            this.todoList[index].done= true;
            console.log(this.todoList)

            // Rimuovo elemento
            this.todoList.splice (index, 1)

            // Aggiungo elemetnto ad array nuovo
            this.todoDone.push(element)
            console.log( this.todoDone)

        }
    }
})
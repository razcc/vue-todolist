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

        },
        eliminaDefinitivamente(element, index){
            this.todoDone.splice (index, 1)
        },
        ripristinaTask(element, index){
            this.todoDone.splice (index, 1);
            this.todoList.push (element)
        }
        
    }
})
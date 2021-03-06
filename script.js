/*Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il del todo sbarrato.testo 
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)*/

console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        newTask:'',
       tasks : [
           {todo: 'spesa', isDone: false},
           {todo: 'sport', isDone: false},
           {todo: 'aperitivo con amici', isDone: false},
       ]
    },
     methods: {
        deleteTask(index) {
            // ^ this.tasks.splice(index, 1);
            this.tasks = this.tasks.filter((task, i) => {
                if (i !== index) return true;
                else return false; 
            });
        },

        addTask(){
            const newTask = this.newTask.trim(); 
            if (newTask) {
                this.tasks.push({ todo: newTask, isDone: false});
            }
            this.newTask='';
        }
    },

        haveBeenDone(index) {
            this.tasks[index].isDone = !this.tasks[index].isDone;
        }

        // ° prendere elemento span da dom e aggingere classe text-decoration-line-through solo al clicl
})
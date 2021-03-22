var app = new Vue({
    el: '#root',
    data: {
        toDos: ['Fare la spesa'],
        cancelledToDos: [],
        doneToDos: []
    },
    methods: {
        getToDo: function() {
            var input = document.getElementById('to-do-input');
            if (input.value != 0) {
                this.toDos.push(input.value);
                input.value = '';
            }
        },
        removeToDo: function(index) {
            var cancelled = this.toDos.splice(index,1);
            this.cancelledToDos.push(cancelled[0]);
        },
        doneToDo: function(index) {
            var done = this.toDos.splice(index,1);
            this.doneToDos.push(done[0]);
        },
        removeDoneToDo: function(index) {
            var cancelled = this.doneToDos.splice(index,1);
            this.cancelledToDos.push(cancelled[0]);
        },
        undoDoneToDo: function(index) {
            var done = this.doneToDos.splice(index,1);
            this.toDos.push(done[0]);
        },
        restoreCancelledToDos: function() {
            this.cancelledToDos.forEach((element) => {
                this.toDos.push(element);
            });
            this.cancelledToDos = [];
        }
    }

});
Vue.config.devtools = true;
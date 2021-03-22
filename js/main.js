var app = new Vue({
    el: '#root',
    data: {
        toDos: ['ciao'],
        cancelledToDos: [],
        doneToDos: []
    },
    methods: {
        getToDo: function() {
            var input = document.getElementById('to-do-input');
            this.toDos.push(input.value);
            input.value = '';
        },
        removeToDo: function(index) {
            var cancelled = this.toDos.splice(index,1);
            this.cancelledToDos.push(cancelled[0]);
        },
        doneToDo: function(index) {
            var done = this.toDos.splice(index,1);
            this.doneToDos.push(done[0]);
        }
    }

});
Vue.config.devtools = true;
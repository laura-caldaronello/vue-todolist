var app = new Vue({
    el: '#root',
    data: {
        toDos: ['ciao']
    },
    methods: {
        getToDo: function() {
            var input = document.getElementById('to-do');
            this.toDos.push(input.value);
        },
        removeToDo: function(index) {
            this.toDos.splice(index,1);
        }
    }

});
Vue.config.devtools = true;
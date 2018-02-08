<template>
    <div id="todo-list-example">
        <input v-model="newTodoText" @keyup.enter="addNewTodo" placeholder="Add a todo"/>
        <ul>
            <li is="todo-item"
                v-for="(todo, index) in todos"
                :key="todo.id"
                :title="todo.title"
                @remove="todos.splice(index, 1)"
            >
            </li>
        </ul>
    </div>
</template>

<script>
  /* eslint-disable indent,no-new,no-unused-vars */
  import Vue from 'vue'

  Vue.component('todo-item', {
    template: '<li>{{title}}<button v-on:click="$emit(\'remove\')">X</button></li>',
    props: ['title']
  })

  new Vue({
    name: 'TodoList',
    el: '#todo-list-example',
    data () {
      return {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Do the dishes'
          },
          {
            id: 2,
            title: 'Take out the trash'
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
</script>

<style scoped>

</style>
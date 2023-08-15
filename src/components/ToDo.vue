<script>
export default {
  props: {
    msg: String,
  },
  setup() {
    return {
    }
  },
  data() {
    var items = []
    var message = ""
    return {
      items,
      message
    };
  },
  mounted() {

  },
  methods: {
    addTodo() {
      this.items.push(this.message)
      this.message = ""
    },
    removeTodo(index) {
      this.items.splice(index,1)
    }
  }

}

</script>

<template>
  <h1>{{ msg }}</h1>
  <label style="margin-right:30px">New Todo</label>
  <input v-model="message" type="text" id="newTodo" name="inputNewTodo" ref="newTodoRef"><br>
  <div class="card">
    <button id="btnAddTodo" type="button" v-on:click="addTodo()">Add Todo</button>
  </div>
  <h2>ToDo List</h2>
  <div class="card">
    <ul>
      <li v-for="(item, index) in this.items" :key="index">
        <input :id="'todo_' + index" type="text" name="todo" :value=item readonly>
        <button :id="'btnRemove_' + index" type="button" v-on:click="removeTodo(index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#newTodo {
  margin-right:10px
}
</style>

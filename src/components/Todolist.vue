<template>
  <div>
    <h1 class="is-title">ToDoList</h1>
    <ul id="todoul"></ul>
    {{this.test}}
  </div>
</template>

    <script>
export default {
  name: "todolist",
  props: {
    data: String,
  },
  data() {
    return {
      test: {},
    };
  },
  methods: {
    getFetchData() {
      fetch("http://127.0.0.1:8000/api/testroute")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          this.test = res;
        });
    },
  },
  created() {
    this.getFetchData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  list-style: none;
}

.is-title {
  color: lightblue;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, "微軟正黑體";
}

.down::before {
  content: "V";
  color: lightseagreen;
}
</style>

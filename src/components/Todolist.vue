<template>

<div>
  <h1 class="is-title">ToDoList</h1>
  <ul id="todoul"></ul>
    {{ddd}}
</div>

</template>

    <script>

  //  var item_tem = '<li class="{{class}}">{{id}}、{{status}}-{{content}}</li>'

  // var item_tem = new Vue({
  //   el:"#item_tem",
  //   data:{}
  // })

// fetch('http://127.0.0.1:8000/api/testroute')
//   .then(function(response) {
//     return response.json();

//   })
//   .then(function(myJson) {
//     console.log(myJson);

//   });





export default {
  name: 'todolist',
   props: {
    data: String
  },
 methods:{

getFetchData (){
   fetch('http://127.0.0.1:8000/api/testroute')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    this.ddd=myJson
  });
  }
},
created(){
  this.testCre()
},
data(){
    return ddd
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 ul li {
        list-style: none;
    }

    .is-title {
        color: lightblue;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, "微軟正黑體";

    }

      .down::before {
        content: "V";
        color: lightseagreen;
    }

</style>

<template>
  <div id="app">
    <div><strong>Создание новой задачи</strong></div>
    <br/>
    <my-button><router-link to="/">Домой</router-link></my-button>
    <my-button ><router-link to="/first">Название</router-link></my-button>
    <my-button v-show="task.title!==''"><router-link to="/second">Описание</router-link></my-button>
    <my-button v-show="task.description!==''"><router-link to="/third">Время</router-link></my-button>
    <my-button v-show="task.time!==''"><router-link to="/fourth">Исполнитель</router-link></my-button>
    <my-button v-show="task.executor!==''"><router-link to="/fifth">Файлы</router-link></my-button>
    <my-button v-show="task.files.length!==0"><router-link to="/">Создать</router-link></my-button>
    <br/>
    <div class="mybtns">Неработающие кнопки
      <my-button title="">Новая задача</my-button>
      <my-button>Назад</my-button>
      <my-button>Далее</my-button>
      <my-button>Создать</my-button>
    </div>
    <br/>
    <keep-alive>
      <router-view 
      @componAddTitle="addTitle" 
      @componSetExec="setExecutor"
      @componAddDescr="addDescription"
      @componSetTime="setTime"
      @componAddFiles="addFiles"
      />
    </keep-alive>
    <br/>
    <div><strong>Созданная задача</strong></div>
    <div>Название "{{task.title}}"</div>
    <div>Описание "{{task.description}}"</div>
    <div>Время "{{task.time}}"</div>
    <div>Исполнитель "{{task.executor}}"</div>
    <div>Файлы "{{task.files}}"</div>
  </div>
</template>

<script>
import MyButton from './components/userinterface/myButton.vue'

export default {
  name: 'App',
  components: {
    MyButton
  },
  data(){
    return{
      tasks:[],
      task:{
        title:'',
        description:'',
        time:'',
        executor:'',
        files:[]
      }
    }
  },
  methods:{
    addTitle(value){
      this.task.title = value
    },
    setExecutor(value){
      this.task.executor=value
    },
    addDescription(value){
      this.task.description=value
    },
    setTime(value){
      this.task.time=value
    },
    //??? как передать файлы в родительский компонент
    addFiles(value){
      this.task.files.push(value)
    },
    // toggleClass(){

    // }
  }
}
</script>

<style>
.mybtns{
  display: flex;
}
</style>

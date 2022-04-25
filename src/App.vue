<template>
  <div id="app">
    <div><strong>Создание новой задачи</strong></div>
    <br/>
      <my-button @click.native="$router.push({path: '/'})">Домой</my-button>
      <my-button @click.native="$router.push({name: 'First'})">Новая задача</my-button>
    <br/>
    <keep-alive>
      <router-view 
      :task="task"
      @componAddTitle="addTitle" 
      @componSetExec="setExecutor"
      @componAddDescr="addDescription"
      @componSetTime="setTime"
      @componAddFiles="addFiles"
      @componClearAllData="clearAllData"
      />
    </keep-alive>
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
      task:{
        title:'',
        description:'',
        time:0,
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
      // if(value<1){
      //   alert('Время не может быть меньше 1 часа')
      //   this.task.time=1
      // }
      // if(value>100){
      //   alert('Время не может быть больше 100 часов')
      //   this.task.time=100
      // } 
      // else {
        this.task.time=value
      // }
    },
    //??? как передать файлы в родительский компонент
    addFiles(value){
      this.task.files.push(value)
    },
    clearAllData(mytask){
      this.task=mytask
    }
  }
}
</script>

<style>
.mybtns{
  display: flex;
}
</style>

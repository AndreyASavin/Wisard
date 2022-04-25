<template>
    <div class="mainwrapper">
        <div class="main">
            <div><strong>Созданная задача</strong></div>
            <div>Название: {{task.title}}</div>
            <div>Описание: {{task.description}}</div>
            <div>Время: {{task.time}}</div>
            <div>Исполнитель: {{task.executor}}</div>
            <div>Файлы: {{task.files}}</div>
            <my-button @click.native="$router.push({path:'/'}); clearAll()">Закрыть</my-button>
        </div>
    </div>
</template>

<script>
import myButton from '@/components/userinterface/myButton.vue'
    export default {
  components: { myButton },
        name:'mainComp',
        props:{
            task:Object
        },
        methods:{
            clearAll(){
                let mytask={
                    title:'',
                    description:'',
                    time:'',
                    executor:'',
                    files:[],
                }
                this.$emit("componClearAll", mytask)
                console.log(mytask);
            }
        }
    }
</script>

<style scoped>
.mainwrapper{
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(128, 128, 128, 0.345);
}
.main{
    width: 250px;
    height: 200px;
    padding: 20px;
    background: white;
    border-radius: 20px;
}
</style>
<template>
    <div class='first'>
        <div>Название задачи</div>
        <input type="text" 
        placeholder="Введите название" 
        @input="addTitle"
        :value="task.title"/>
        <my-button @click.native="$router.push({name: 'Second'})" :disabled='disabled'>Далее</my-button>
    </div>
</template>

<script>
import MyButton from '@/components/userinterface/myButton.vue'
    export default {
        components:{MyButton },
        props:{
            task: Object
        },
        data(){
            return{
                disabled: true
            }
        },
        methods: {
            addTitle(event){
                this.$emit('componAddTitle', event.target.value)
            },
            activate(){
                if(this.task.title!==''){
                    this.disabled = false
                } else {
                    this.disabled = true
                }
            }
        },
        updated() {
            this.activate()
        },
    }
</script>

<style scoped>
.first{
    width: 30%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid gray;
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
}
</style>
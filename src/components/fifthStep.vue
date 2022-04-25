<template>
    <div class="fifth">
        <div>Приложения</div>
        <input type="file"
        multiple
        @input="addFiles"/>
        <my-button @click.native="$router.push({name: 'Fourth'})">Назад</my-button>
        <my-button @click.native="setVisible">Создать</my-button>
        <br/>
        <main-comp :task="task" v-show='visible' @componClearAll='clearAllData'></main-comp>
    </div>
</template>

<script>
import MyButton from '@/components/userinterface/myButton.vue'
import MainComp from './mainComp.vue'
    export default {
        components: {MyButton, MainComp },
        props:{
            task:Object
        },
        data(){
            return{
                disabled: true,
                visible: false
            }
        },
        methods: {
            addFiles(event){
                this.$emit('componAddFiles', event.target.files)
            },
            activate(){
                if(this.task.files!==''){
                    this.disabled = false
                } else {
                    this.disabled = true
                }
            },
            setVisible(){
                this.visible=true
            },
            clearAllData(event){
                this.visible=false
                this.$emit('componClearAllData', event)
            }
        },
        updated() {
            this.activate()
        },
    }
</script>

<style scoped>
.fifth{
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
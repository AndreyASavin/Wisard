<template>
    <div class="second">
        <div>Описание задачи</div>
        <input type="text" 
        :value="task.description" 
        @input="addDescription"
        placeholder="Введите описание"/>
        <my-button @click.native="$router.push({name: 'First'})">Назад</my-button>
        <my-button @click.native="$router.push({name: 'Third'})" :disabled='disabled'>Далее</my-button>
    </div>
</template>

<script>
import MyButton from '@/components/userinterface/myButton.vue'
    export default {
        components: {MyButton },
        props:{
            task:Object
        },
        data() {
            return {
                disabled: true
            }
        },
        methods: {
            addDescription(event){
                this.$emit('componAddDescr', event.target.value)
            },
            activate(){
                if(this.task.description!==''){
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
.second{
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
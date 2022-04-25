<template>
    <div class="fourth">
        <div>Выберете исполнителя</div>
        <select :value="task.executor" @change="setExecutor">
            <option value="Пень">Пень</option>
            <option value="Лень">Лень</option>
            <option value="День">День</option>
        </select>
        <my-button @click.native="$router.push({name: 'Third'})">Назад</my-button>
        <my-button @click.native="$router.push({name: 'Fifth'})" :disabled='disabled'>Далее</my-button>
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
            setExecutor(event){
                this.$emit('componSetExec', event.target.value)
            },
            activate(){
                if(this.task.executor!==''){
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
.fourth{
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
<template>
    <div class="third">
        <div>Время выполнения в часах</div>
        <input type="number" 
        :value="task.time" 
        @input="setTime"
        placeholder="Укажите время в часах"/>
        <my-button @click.native="$router.push({name: 'Second'})">Назад</my-button>
        <my-button @click.native="$router.push({name: 'Fourth'})" :disabled='disabled'>Далее</my-button>
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
            setTime(event){
                this.$emit('componSetTime', event.target.value)
            },
            activate(){
                if(this.task.time<1 || this.task.time>100){
                    this.disabled = true
                } else {
                    this.disabled = false
                }
            }
        },
        updated() {
            this.activate()
        },
    }
</script>

<style scoped>
.third{
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
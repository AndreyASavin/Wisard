<template>
    <div>
        <div>Название задачи</div>
        <input type="text" 
        placeholder="Введите текст" 
        @input="addTitle"
        :id="id"/>
    </div>
</template>

<script>
    export default {
        components:{ },
        data(){
            return{
                id:'first'
            }
        },
        methods: {
            addTitle(event){
                this.$emit('componAddTitle', event.target.value)
            },
            // sendId(){
            //     this.$emit('getId', this.id)
            // }
        },
    }
</script>

<style scoped>

</style>
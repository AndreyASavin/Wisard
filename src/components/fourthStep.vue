<template>
    <div>
        <div>Исполнитель</div>
        <select :value="executor" @change="setExecutor">
            <option value="Пень">Пень</option>
            <option value="Лень">Лень</option>
            <option value="День">День</option>
        </select>
    <div>{{executor}}</div>
    </div>
</template>

<script>
    export default {
        components: { },
        data() {
            return {
                executor:''
            }
        },
        methods: {
            setExecutor(event){
                this.executor = event.target.value;
                this.$emit('componSetExec', event.target.value)
            }
        },
    }
</script>

<style scoped>

</style>
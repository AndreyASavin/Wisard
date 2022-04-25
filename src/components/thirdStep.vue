<template>
    <div>
        <div>Время выполнения в часах</div>
        <input type="number" :input="time" @input="setTime"/>
    </div>
</template>

<script>
    export default {
        components: { },
        data() {
            return {
                time:''
            }
        },
        methods: {
            setTime(event){
                this.time=event.target.value
                this.$emit('componSetTime', event.target.value)
            }
        },
    }
</script>

<style scoped>

</style>
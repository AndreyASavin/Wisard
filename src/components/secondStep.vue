<template>
    <div>
        <div>Описание задачи</div>
        <input type="textarea" :value="description" @input="addDescription"/>
    </div>
</template>

<script>
    export default {
        components: { },
        data() {
            return {
                description:''
            }
        },
        methods: {
            addDescription(event){
                this.description=event.target.value
                this.$emit('componAddDescr', event.target.value)
            }
        },
    }
</script>

<style scoped>

</style>
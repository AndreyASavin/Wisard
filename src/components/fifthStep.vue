<template>
    <div>
        <div>Приложения</div>
        <input type="file" multiple @change="addFiles"/>
    </div>
</template>

<script>
    export default {
        components: { },
        data(){
            return{
                files:[]
            }
        },
        methods: {
            addFiles(event){
                this.files.push(event.target.files)
                this.$emit('componAddFiles', event.target.files)
            }
        },
    }
</script>

<style scoped>

</style>
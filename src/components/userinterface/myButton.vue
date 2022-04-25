<template>
    <div>
        <button :disabled="disabled" class="mybtn">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        props:{
            disabled:Boolean
        },
        name: "myButton"
    }
</script>

<style scoped>
.mybtn{
    width: 100px;
    height: 40px;
    margin: 5px;
    font-weight:bold;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgba(216, 201, 159, 0.749);
}
</style>
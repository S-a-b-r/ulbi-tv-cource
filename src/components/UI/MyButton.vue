<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
button {
    padding: 10px;
    background-color: white;
}
.btn__delete {
    border: 1px solid #ff5959;
}
</style>
<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text"/>
</template>

<script>
    export default {
        name: 'MyInput',
        props: {
            modelValue: [String, Number],
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>

<style scoped>
.input {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 100%;
    border: 1px solid teal
}
</style>
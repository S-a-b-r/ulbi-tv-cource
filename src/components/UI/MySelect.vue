<template>
    <select v-model="selected" @change="changeOption">
        <option disabled value="">Выберите из списка</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'MySelect',
        data(){
            return{
                selected: this.modelValue,
            }
        },
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: ()=> []
            }
        },
        methods: {
            changeOption() {
                this.$emit('update:modelValue', this.selected)
            }
        }
    }
</script>

<style scoped>

</style>
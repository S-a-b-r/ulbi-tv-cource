<template>
    <div class="navbar">
        <div>Vue3</div>
        <div class="navbar__btns">
            <MyButton @click="$router.push('/')">
                Главная
            </MyButton>
            <MyButton @click="$router.push('/posts')">
                Посты
            </MyButton>
            <MyButton @click="$router.push('/about')">
                О нас
            </MyButton>
        </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';

    export default {
    components: { MyButton }
}
</script>

<style>
.navbar{
    display: flex;
    justify-content: space-between;
    height: 60px;
    background-color: aquamarine;
    box-shadow: 2 px 2px 4px gray;
}
</style>
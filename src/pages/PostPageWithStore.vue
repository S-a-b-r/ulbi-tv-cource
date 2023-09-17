<template>
    <div>
        <div v-if="$store.state.isAuth">
            Вы авторизованы
            <MyButton @click="$store.commit('logout')">Выйти</MyButton>
        </div>
        <div v-else>
            <MyButton @click="$store.commit('login')">Войти</MyButton>
        </div>
        {{ $store.getters.doubleLikes }}
        <div>
            <MyButton @click="$store.commit('incrementLikes')">Поставить лайк</MyButton>
            <MyButton @click="$store.commit('decrementLikes')">Убавить лайк</MyButton>
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';

    export default {
    components: { MyButton }
}
</script>

<style  scoped>

</style>
<template>
    <div class="post">
        <div>Количество лайков: <strong>{{ likes }}</strong></div>
        <div>Количество дизлайков: <strong>{{ dislikes }}</strong></div>
        <button @click=addLike>Like</button> //v-on:click - альтернатива
        <button @click=addDislike>Dislike</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            likes: 0,
            dislikes: 0,
        }
    },
    methods: {
        addLike(){
            this.likes++;
        },
        addDislike(){
            this.dislikes++;
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.post {
    margin-top: 10px;
    padding: 15px;
    border: 2px solid teal;
}
</style>
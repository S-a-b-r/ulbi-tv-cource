<template>
    <div class="post">
        <div class="post__main">

            <div><strong>Id:</strong> {{ post.id }}</div>
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <MyButton @click="$router.push(`/posts/${post.id}`)">Смотреть</MyButton>
            <MyButton @click="$emit('remove', post);" class="btn__delete">Удалить</MyButton>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        deletePost() {
            
        }
    }
}
</script>

<style scoped>
.post {
    margin-top: 10px;
    padding: 15px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
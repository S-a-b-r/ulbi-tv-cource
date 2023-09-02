<template>
    <form @submit.prevent>
        <h3>Создание поста</h3>
        <MyInput 
            v-model="post.title"
            placeholder="Название"
        />
        <MyInput 
            v-model="post.body"
            placeholder="Описание"
        />
        <MyButton @click="addPost">Добавить</MyButton>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: '',
                }
            }
        },
        methods: {
            addPost() {
                const newPost = {
                    id: Date.now(),
                    title: this.post.title,
                    body: this.post.body,
                }

                this.$emit('createPost', newPost);

                //Очищаем inputы
                this.post.title = "";
                this.post.body = "";
            }
        }
    }
</script>

<style scoped>
    form {
        margin-top:10px;
        margin-bottom: 2rem;
    }
</style>
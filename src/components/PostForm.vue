<template>
    <form @submit.prevent>
        <h3>Создание поста</h3>
        <MyInput 
            v-model="post.title"
            placeholder="Название"
        />
        <MyInput 
            v-model="post.description"
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
                    description: '',
                }
            }
        },
        methods: {
            addPost() {
                const newPost = {
                    id: Date.now(),
                    title: this.post.title,
                    description: this.post.description,
                }

                this.$emit('createPost', newPost);

                //Очищаем inputы
                this.post.title = "";
                this.post.description = "";
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
<template>
    <form @submit.prevent>
        <h3>Создание поста</h3>
        <input 
            v-model="post.title"
            class="input" 
            type="text" 
            placeholder="Название"
        />
        <input 
            v-model="post.description"
            class="input" 
            type="text" 
            placeholder="Описание"
        />
        <button @click="addPost">Добавить</button>
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
    .input {
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;
        width: 100%;
        border: 1px solid teal
    }

    form {
        margin-top:10px;
        margin-bottom: 2rem;
    }
</style>
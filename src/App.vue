<template>
    <div class="mainContainer">
        <h1>Страница с постами</h1>
        <MyButton @click="setDialogVisible(true)">Создать пост</MyButton>
        <MyButton @click="fetchPosts">Получить посты</MyButton>
        <MyModal v-model:show="dialogVisible">
            <PostForm @createPost="addPost"/>
        </MyModal>
        <PostList v-if="isPostLoading != true" @remove="removePost" :posts="posts" />
        <div v-else>Идет загрузка...</div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from 'axios';

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
        }
    },
    methods: {
        addPost(post) {
            this.posts.push(post);
            this.setDialogVisible(false);
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        setDialogVisible(isVisible) {
            this.dialogVisible = isVisible;
        },
        async fetchPosts() {
            try{
                this.isPostLoading = true;
                setTimeout( async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = response.data;
                    this.isPostLoading = false;
                }, 1000);
            } catch (e) {
                alert('Ошибка')
            } finally {
            }
        }
    },
    mounted() {
        this.fetchPosts();
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.mainContainer{
    width: 90%;
    margin-right: 20px;
    margin-left: 20px;
}
</style>
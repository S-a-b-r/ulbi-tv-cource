<template>
    <div class="mainContainer">
        <h1>Страница с постами</h1>
        <MyInput v-model="searchQuery" placeholder="Поиск..."></MyInput>
        <div class="app__btns">
            <MyButton @click="setDialogVisible(true)">Создать пост</MyButton>
            <MySelect v-model="selectedSort" :options="sortOptions"/>
        </div>
       
        <MyModal v-model:show="dialogVisible">
            <PostForm @createPost="addPost"/>
        </MyModal>
        <PostList v-if="isPostLoading != true" @remove="removePost" :posts="sortedAndSearchPosts" />
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
            selectedSort: "",
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: "По описанию"}
            ],
            searchQuery: "",
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
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
            } catch (e) {
                alert('Ошибка')
            } finally {
                this.isPostLoading = false;
            }
        }
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
            })
        },
        sortedAndSearchPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase));
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
.mainContainer{
    width: 90%;
    margin-right: 20px;
    margin-left: 20px;
}
.app__btns{
    display: flex;
    justify-content: space-between;
}
</style>
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
        <div ref="observer" class="observer"></div>
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
            posts: [
            ],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: "",
            page: 0,
            limit: 10,
            totalPages: 0,
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
        async loadMorePosts() {
            try{
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit);
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert('Ошибка')
            }
        }
    },
    mounted() {
        this.loadMorePosts();
        const options = {
            rootMargin: '0px',
            threshold: 1.0,
        }
        const callback = (entries) => {
            if(entries[0].isIntersecting && this.page < this.totalPages) {
                this.loadMorePosts();
            }
        }
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
            })
        },
        sortedAndSearchPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
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
.page__wrapper{
    display: flex;
    margin-top:15px;
}
.page{
    border: 1px solid black;
    padding: 10px;
    margin-right: 10px;
}
.page:hover{
    cursor: pointer;
}
.current-page{
    border: 1px solid greenyellow;
}
.observer {
    height: 30px;
    background-color: green;
}
</style>
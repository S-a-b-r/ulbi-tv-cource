<template>
    <div class="mainContainer">
        <PostForm @createPost="addPost"/>
        <PostList @remove="removePost" :posts="posts"/>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [
                {id:1, title:"Пост 1", description:"Hello world"},
                {id:2, title:"Пост 2", description:"Manera krutit mir"},
                {id:3, title:"Пост 3", description:"test"},
            ],
        }
    },
    methods: {
        addPost(post) {
            this.posts.push(post);
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
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
</style>
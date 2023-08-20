<template>
    <div class="mainContainer">
        <PostForm @createPost="addPost"/>
        <PostList :posts="posts"/>
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
                {id:1, title:"Пост 1", description:""},
                {id:2, title:"Пост 2", description:""},
                {id:3, title:"Пост 3", description:""},
            ],
        }
    },
    methods: {
        addPost(post) {
            this.posts.push(post);
        },
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

.mainContainer button {
    padding: 10px;
    background-color: white;
}
</style>
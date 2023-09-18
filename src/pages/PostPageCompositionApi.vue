<template>
    <div class="mainContainer">
        <NavbarComponent></NavbarComponent>
        {{ likes }}
        <MyButton @click="addLike">Like</MyButton>
        <!-- <h1>Страница с постами</h1>
        <MyInput v-model="searchQuery" v-focus placeholder="Поиск..."></MyInput>
        <div class="app__btns"> 
            <MyButton @click="setDialogVisible(true)">Создать пост</MyButton>
            <MySelect v-model="selectedSort" :options="sortOptions"/>
        </div>
       
        <MyModal v-model:show="dialogVisible">
            <PostForm @createPost="addPost"/>
        </MyModal>
        <PostList v-if="isPostLoading != true" @remove="removePost" :posts="sortedAndSearchPosts" />
        <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMorePosts" class="observer"></div> -->
    </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
// import PostForm from "@/components/PostForm.vue";
// import PostList from "@/components/PostList.vue";
import {ref} from 'vue';

export default {
    components: {
    // PostForm, PostList,
    NavbarComponent
},
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: "По описанию"}
            ],
        }
    },
    setup() {
        const likes = ref(0);
        const addLike = () => {
            likes.value += 1
        }
        return {
            likes,
            addLike
        };
    }
}
</script>

<style>

</style>
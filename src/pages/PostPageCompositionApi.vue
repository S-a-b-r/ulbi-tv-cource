<template>
    <div class="mainContainer">
        <NavbarComponent></NavbarComponent>
        <h1>Страница с постами</h1>
        <MyInput v-focus placeholder="Поиск..."></MyInput>
        <div class="app__btns"> 
            <MyButton>Создать пост</MyButton>
            <MySelect v-model="selectedSort" :options="sortOptions"/>
        </div>
       
        <MyModal v-model:show="dialogVisible">
            <PostForm @createPost="addPost"/>
        </MyModal>
        <PostList v-if="isPostLoading != true" :posts="sortedAndSearchedPosts" />
        <div v-else>Идет загрузка...</div>
        <!-- <div v-intersection="loadMorePosts" class="observer"></div> -->
    </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import usePosts from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
    components: {
        PostForm, PostList,
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
        const {posts, isPostLoading, totalPages} = usePosts(10, 1);
        const {sortedPosts, selectedSort} = useSortedPosts(posts);
        const {sortedAndSearchedPosts, searchQuery} = useSortedAndSearchedPosts(sortedPosts);

        return {
            posts, totalPages, isPostLoading, selectedSort, sortedPosts, sortedAndSearchedPosts, searchQuery
        }
    }
}
</script>

<style>

</style>
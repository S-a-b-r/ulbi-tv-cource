<template>
    <div v-if="posts.length > 0">
        <h3>Список элементов</h3>
        <PostItem @remove="$emit('remove', post);" v-for="post in posts" :key="post.id" :post="post"/>
    </div>
    <div v-else>
        <h3 class="noPosts">
            К сожалению, постов нет
        </h3>
    </div>
</template>

<script>
    import PostItem from "@/components/PostItem.vue";
    export default {
        components: {
            PostItem
        },
        props: {
            posts: {
                type: Array,
                required: true,
            }
        },
    }
</script>

<style scoped>
.noPosts {
    color: rgb(255, 83, 83);
}
</style>
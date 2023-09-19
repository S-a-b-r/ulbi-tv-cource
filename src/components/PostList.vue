<template>
    <div v-if="posts.length > 0">
        <h3>Список элементов</h3>
        <TransitionGroup name="post-list">
            <PostItem @remove="$emit('remove', post);" v-for="post in posts" :key="post.id" :post="post"/>
        </TransitionGroup>
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
        }
    }
</script>

<style scoped>
.noPosts {
    color: rgb(255, 83, 83);
}
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all 1s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.post-list-move {
    transition: transform 0.8s ease;
}
</style>
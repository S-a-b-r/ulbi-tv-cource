<template>
    <div>
        <h3>Список элементов</h3>
        <PostItem @remove="$emit('remove', post);" v-for="post in posts" :key="post.id" :post="post"/>
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

</style>
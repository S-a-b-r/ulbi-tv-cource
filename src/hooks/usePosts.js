import axios from "axios";
import {onMounted, ref} from 'vue';

export default function usePosts(limit, page) {
    const posts = ref([])
    const totalPages = ref(0)
    const isPostLoading = ref(true)

    const fetchingData = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: page,
                    _limit: limit,
                }
            });
            totalPages.value = Math.ceil(response.headers['x-total-count']/limit);
            posts.value.push(...response.data);
        } catch (e) {
            alert('Ошибка')
        } finally {
            isPostLoading.value = false;
        }
    }

    onMounted(fetchingData);
    return {
        posts, isPostLoading, totalPages
    }
}
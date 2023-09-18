import axios from "axios";
import {onMounted, ref} from 'vue';

export function usePosts(limit) {
    const posts = ref([])
    const totalPages = ref(0)
    const isPostLoading = ref(true)

    const fetchingData = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: this.page,
                    _limit: this.limit,
                }
            });
            totalPages = Math.ceil(response.headers['x-total-count']/this.limit);
            posts.value = [...this.posts, ...response.data];
        } catch (e) {
            alert('Ошибка')
        } finally {
            isPostLoading = false;
        }
    }

    onMounted(fetching);
    return {
        posts, isPostLoading, totalPages
    }
}
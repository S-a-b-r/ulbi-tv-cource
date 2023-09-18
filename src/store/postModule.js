export const postModule = {
    state: ()=> {
        return {
            isPostLoading: false,
            searchQuery: "",
        }
    },
    getters: {
        sortedAndSearchPosts(state, sortedPosts) {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }
    },
    mutation: {
        setIsPostLoading(state, isPostLoading) {
            state.isPostLoading = isPostLoading;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {

    },
    namespaced: true
}
<template>
    <div class="app">
        <RouterView></RouterView>
    </div>
</template>

<script>
    export default {
        
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
.app__btns{
    display: flex;
    justify-content: space-between;
}
.page__wrapper{
    display: flex;
    margin-top:15px;
}
.page{
    border: 1px solid black;
    padding: 10px;
    margin-right: 10px;
}
.page:hover{
    cursor: pointer;
}
.current-page{
    border: 1px solid greenyellow;
}
.observer {
    height: 30px;
    background-color: green;
}
</style>
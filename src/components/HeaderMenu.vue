<template>
    <header >
        <div class="menu-container">
            <img src="../assets/logo.svg" alt="bola 8 combat assist">
            <span class="online-status">online: 1 / 3</span>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>

    header{
        z-index: 100;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .menu-container{
        display: flex;
        justify-content: space-between;
        padding: 16px 32px;
        flex-direction: row;
        background: var(--black-900);
        align-items: center;
        border-bottom: solid 2px #323535;;
    }

    .online-status{
        font-size: 16px;
        font-weight: 500;
        color:var(--black-600);
    }
</style>
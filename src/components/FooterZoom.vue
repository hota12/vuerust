<template>
    <footer>
        <div class="container">
            <span class="credits">Desenvolvido por ALFATHA TEAM</span>
            <div class="container-zoom">
                <div class="button-zoom"><img  class="icon-zoom" src="../assets/-.svg" @click="alteraZoom('diminuir')"></div>
                <div class="button-zoom"><img class="icon-zoom" src="../assets/+.svg" @click="alteraZoom('aumentar')"></div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    methods: {
        alteraZoom(a){
            if(a == "aumentar"){
                this.$emit('aumentaZoom')
            }else if(a == "diminuir"){
                this.$emit('diminuiZoom')
            }
        }
    },
}
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: space-between;
        padding: 16px 32px;
        flex-direction: row;
        background: #fff0;
        align-items: end;
    }

    .container-zoom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 114px;

    }

    .button-zoom{
        display: flex;
        background: var(--black-900);
        border-bottom: solid 1px #323535;
        border-right: solid 1px #323535;
        justify-content: center;
        align-content: center;
        width: 48px;
        height:48px ;

    }
    
    .icon-zoom{
        width: 22px;
        height: auto;
    }

    .credits{
        display: inline;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #9F9F9F;
    }
</style>
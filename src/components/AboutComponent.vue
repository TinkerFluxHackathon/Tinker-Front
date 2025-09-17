<script setup>
</script>

<template>

    <main>
        <h1>Sobre nós</h1>
        <div>
            <p class="ideia">Esse site foi criado com a ideia de ajudar pessoas a consertar de maneira autônoma seus objetos que não estão funcionando de maneira adequada, sem precisar de conhecimento especializado.</p>
            <img src="/public/caixa-de-ferramentas.png" class="ideia" alt="caixa-de-ferramentas.png">
        </div>
        <div class="assistente">
            <img src="/public/assistente-virtual.png" class="assistente" alt="assistente-virtual.png">
            <p class="assistente">Nosso site possui um diferencial, o nosso assistente virtual, ele se chama Daorinha, ele com poucas conversas, ele te ajuda a reconhecer e também te oferece guias para que você possa resolver os problemas que estão ocorrendo.</p>
        </div>
        <div class="catalogo">
            <p class="catalogo">Possuímos também um vasto catálogo que auxilia você a conseguir tudo o que precisa para o conserto com base no guia que o assistente te oferece.</p>
            <div class="overflow">
                <img src="/public/Products.png" class="catalogo" alt="products.png">
            </div>
        </div>
        <div class="quem-somos">
            <h1>Quem somos?</h1>
            <ul>
                <li>
                    <a href="https://github.com/Arthur15Goulart">
                        <img src="/public/Arthur.png" alt="arthur.png">
                    </a>
                    <h2>Arthur Goulart</h2>
                </li>
                <li>
                    <a href="https://github.com/joaogmotaa">
                        <img src="/public/joao.png" alt="joao.png">
                    </a>
                    <h2>João Gabriel</h2>
                </li>
                <li>
                    <a href="https://github.com/LFM20092">
                        <img src="/public/luiz.png" alt="luiz.png">
                    </a>
                    <h2>Luiz Fernando</h2>
                </li>
                <li>
                    <a href="https://github.com/doginvi">
                        <img src="/public/victor.png" alt="victor.png">
                    </a>
                    <h2>Victor de Sousa</h2>
                </li>
            </ul>
            
        </div>
    </main>


</template>

<style scoped>

main{
    background: url(/public/circulo.png) no-repeat;
    background-size: 394px 394px;
    background-position: -13vw 51vw;
    
}

main div{
    display: flex;
    margin: 2vw 0 0 0;
}

h1{
    margin: 12vw 4vw 0 6vw;
    font-size: 5vw;
    font-weight: 600;
}

p{
    font-size: 1.7vw;
}

p.ideia{
    margin: 9vw 26vw 0 6vw;
}

p.assistente{
    margin: 15vw 6vw 0 13vw;
    color: #FFFFFF;
    text-align: right;
}

div.assistente{
    background-color: #4584D3;
    margin: 7.5vw 0 0 0;
}

div.catalogo {
    overflow: hidden;
}

p.catalogo{
    margin: 13vw 16vw 0 6vw;
}

img.ideia{
    position: absolute;
    right: 0;
    top: 40%;
    width: 400px;
    height: auto;
    background: url(/public/circulo.png) no-repeat;
    background-size: 100%;
    background-position: 4vw 2vw;
}

img.assistente{
    margin: 1vw 0 0 5vw;
}

div.overflow {
    overflow: hidden;
    background: url(/public/circulo.png) no-repeat;
    background-position: 9vw 5vw;
    background-size: 20.5729vw 20.5729vw;
}



img.catalogo{
    margin: 8vw 30vw 0 0;
    transform: translateX(20%);

}

div.quem-somos{
    display: block;
    text-align: center;
    transform: translateY(-25%);
}
div ul{
    display: flex;
    justify-content: center;
    justify-content: space-between;
    margin: 6vw 15vw 0 15vw;
}

div ul li{
    list-style: none;
    border: 1px solid #4585d37c;
    padding: 4vw 2vw 4vw 2vw;
    border-radius: 40px;
    text-align: center;
}

div ul li h2 {
    font-size: 1.5vw;
    margin: 1vw 0 0 0;
    font-weight: 600;
}

</style>
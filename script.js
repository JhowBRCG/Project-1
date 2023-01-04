/* document. é a representação do documento em formato de objeto javascript, e dentro do document. aceesa a tag html onde está o light através do documentElement */


// if (se) é uma condicional = true or false , se a condição for verdadeira ele irá entra no código //

// else (se não) é uma condicional = true or false , se a condição for verdadeira ele irá entra no código //

//classList acessar uma lista de classes de um documento

// toggle : ele faz o que o if e o else fariam nesse caso. //
/*  if(html.classList.contains('light')) {
        html.classList.remove ('light')
    }
    else {
        html.classList.add('light')
    } */

// document.querySelector (pesquisa pelo seletor) : Ele pesquisa um selector como uma id ou uma class

//setAttribute() :  Adicionar, Ajustar ou modificar um atributo
//exemplo: img.setAttribute ('src' , './novoValor.png') 



function toggleMode () {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector("#imagem")

    // substituir a imagem
    if (html.classList.contains('light')) {
        
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './light-image.jpg')
    } 
    else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src','./pochita.png')

    }
    
}


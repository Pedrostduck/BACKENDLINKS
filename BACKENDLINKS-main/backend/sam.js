const texto = `Acesse https://meusite.com para mais informações.
Veja também http://Blog.exemplo.org/artigo?tag=js.
Evite erros como htp://errado.com,
https://bug.com ou apenas texto.com sem protocolo`


function extrairlinksvalidos(texto){
    const possiveislinks = texto.match(/\https?:\/\/[^/s]+/gi) || []
    const LinkValidos = []
        for(const link of possiveislinks){
            try{
                const url = new URL(link)
                if(url.protocol === "http:" || url.protocol === "https:"){
                    LinkValidos.push({
                        href: url.href,
                        host: url.hostname,
                        caminho: url.pathname,
                        parametros: url.search,
                })

            }
        }
        catch{}
    }
    return LinkValidos;
}

const links = extrairlinksvalidos(texto)
console.log("links válidos encontrados")
console.table(links)
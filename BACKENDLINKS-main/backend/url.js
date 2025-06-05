const texto = `Trabalho escolar siga https://site.com
Esse Link está invalido http://invalido..com
Esse esta incompleto htp://erro
Esse esta disponivel https://correto.org
Veja Tambem http://blog.exemplo.org/artigo?tag=js.`;

function extrairlinksvalidos(texto){
    const possiveislinks = texto.match(/https?:\/\/[^\s]+/gi) || [];
}
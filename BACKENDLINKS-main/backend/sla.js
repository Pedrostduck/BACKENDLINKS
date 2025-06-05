const texto = `Trabalho escolar siga https://site.com
Esse Link está invalido http://invalido..com
Esse esta incompleto htp://erro
Esse esta disponivel https://correto.org`;

const regex = /https?:\/\/[^\s]+/g;
const LinkValidos = texto.match(regex);

console.log("Links Encontrados");
console.log (LinkValidos);
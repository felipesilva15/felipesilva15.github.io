document.addEventListener("DOMContentLoaded", function() {
    if (typeof marked !== "function") {
        return;
    }

    // Realiza uma requisição HTTP para obter o texto do README
    fetch('https://raw.githubusercontent.com/felipesilva15/felipesilva15.github.io/main/README.md')
        .then(response => response.text())
        .then(data => {
            // Transforma o README.md em um HTML
            const readmeHtml = marked(data);

            // Obtém o container na DOM e adiciona o HTML no container
            const container = document.querySelector('#content-container');
            container.innerHTML = readmeHtml;

            // Formata as tags de pre e code de uma forma eleganta
            Prism.highlightAllUnder(container);
        })
        .catch(error => console.error("Oops:", error));
});
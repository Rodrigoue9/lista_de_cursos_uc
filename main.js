// function search() {
//     var input, filter, courses, course, h3, i, txtValue;
//     input = document.getElementById('searchInput');
//     filter = removeAccents(input.value).toUpperCase();
//     courses = document.getElementById('courses');
//     course = courses.getElementsByClassName('image-item');

//     for (i = 0; i < course.length; i++) {
//         h3 = course[i].getElementsByTagName('h3')[0];
//         txtValue = removeAccents(h3.textContent || h3.innerText).toUpperCase();

//         if (txtValue.indexOf(filter) > -1) {
//             course[i].style.display = '';
//         } else {
//             course[i].style.display = 'none';
//         }
//     }
// }

// function handleKeyDown(event) {
//     if (event.key === 'Enter') {
//         search();
//         document.querySelector('button[onclick="search()"]').click();
//     }
// }

// function removeAccents(str) {
//     return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
// }


//     function filtrarPorId(id) {
//         // Oculta todos os elementos
//         var elementos = document.querySelectorAll('.image-item');
//         elementos.forEach(function(elemento) {
//             elemento.style.display = 'none';
//         });

//         // Mostra os elementos com o ID desejado
//         var elementosFiltrados = document.querySelectorAll('.image-item#' + id);
//         elementosFiltrados.forEach(function(elemento) {
//             elemento.style.display = 'flex';
//         });
        
//     }

 // Função para download e redirecionamento
 function downloadAndRedirect(downloadUrl, redirectUrl) {
    // Inicia o download
    var downloadAnchor = document.createElement('a');
    downloadAnchor.href = downloadUrl;
    downloadAnchor.target = '_blank';
    downloadAnchor.download = 'seu-arquivo'; // Nome do arquivo a ser baixado
    downloadAnchor.click();

    // Redireciona para a página especificada após o download
    window.location.href = redirectUrl;
}

// Adiciona um evento de clique a todos os links com a classe "downloadLink"
var downloadLinks = document.querySelectorAll('.downloadLink');
downloadLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Impede o comportamento padrão de navegação
        event.preventDefault();

        // Obtém os URLs de download e redirecionamento dos atributos de dados
        var downloadUrl = link.getAttribute('data-download-url');
        var redirectUrl = link.getAttribute('data-redirect-url');

        // Chama a função de download e redirecionamento
        downloadAndRedirect(downloadUrl, redirectUrl);
    });
});

function search() {
    var input, filter, courses, course, h3, i, txtValue;
    input = document.getElementById('searchInput');
    filter = removeAccents(input.value).toUpperCase();
    courses = document.getElementById('courses');
    course = courses.getElementsByClassName('image-item');

    
    // Transforma a coleção HTML em um array
    course = Array.from(course);

    // Ordena os cursos alfabeticamente
    course.sort(function (a, b) {
        var textA = removeAccents(a.querySelector('h3').textContent || a.querySelector('h3').innerText).toUpperCase();
        var textB = removeAccents(b.querySelector('h3').textContent || b.querySelector('h3').innerText).toUpperCase();
        return textA.localeCompare(textB);
    });

    // Atualiza a ordem dos cursos no DOM
    course.forEach(function (item) {
        courses.appendChild(item);
    });

    // Atualiza a exibição dos cursos com base no filtro
    for (i = 0; i < course.length; i++) {
        h3 = course[i].getElementsByTagName('h3')[0];
        txtValue = removeAccents(h3.textContent || h3.innerText).toUpperCase();

        if (txtValue.indexOf(filter) > -1) {
            course[i].style.display = '';
        } else {
            course[i].style.display = 'none';
        }
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        search();
        document.querySelector('button[onclick="search()"]').click();
    }
}

function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function filtrarPorId(id) {
    // Oculta todos os cursos
    var elementos = document.querySelectorAll('.image-item');
    elementos.forEach(function (elemento) {
        elemento.style.display = 'none';
    });

    // Mostra apenas os cursos com a classe correspondente ao tipo
    var elementosFiltrados = document.querySelectorAll('.image-item.tipo-' + id);
    elementosFiltrados.forEach(function (elemento) {
        elemento.style.display = 'flex';
    });
}


function filtrarPorClasse(a) {
    // Oculta todos os elementos
    var elementos = document.querySelectorAll('.image-item');
    elementos.forEach(function(elemento) {
        elemento.style.display = 'none';
    });

    // Mostra os elementos com a classe desejada
    var elementosFiltrados = document.querySelectorAll('.image-item.' + a);
    elementosFiltrados.forEach(function(elemento) {
        elemento.style.display = 'flex';
    });
}
document.addEventListener('DOMContentLoaded', function () {
    search();
});


console.log("Cursos gerados:");
document.querySelectorAll('.image-item').forEach(curso => {
    console.log(curso.className);
});
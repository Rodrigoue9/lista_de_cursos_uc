document.addEventListener('DOMContentLoaded', function() {
    const filterButtonsContainer = document.getElementById('filterButtons');
    const coursesContainer = document.getElementById('courses');

    // Gerar botões de filtro (A-Z)
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    letters.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter.toUpperCase();
        button.onclick = () => filtrarPorClasse(letter);
        filterButtonsContainer.appendChild(button);
    });
    console.log("Verificando cursos gerados...");
    document.querySelectorAll('.image-item').forEach(item => {
        console.log(item.innerText, " → Classes:", item.classList);
    });
    // Gerar cursos dinamicamente
    cursos.forEach(curso => {
        const cursoElement = document.createElement('div');
        cursoElement.className = `image-item ${curso.classe} tipo-${curso.tipo}`; // Adiciona a classe do tipo corretamente
        cursoElement.innerHTML = `
            <a href="${curso.link}" target="_blank" class="modification-curse">
                <div class="textnamecourses">
                    <h3>${curso.nome}</h3>
                </div>
                <div class="textDuration">
                    <h3>${curso.duracao}</h3>
                </div>
            </a>
        `;
        coursesContainer.appendChild(cursoElement);
    });
});



function filtrarPorClasse(classe) {
    const cursos = document.querySelectorAll('.image-item');
    cursos.forEach(curso => {
        if (curso.classList.contains(classe)) {
            curso.style.display = 'block';
        } else {
            curso.style.display = 'none';
        }
    });
}

function filtrarPorId(id) {
    console.log("Filtrando por ID:", id);

    // Oculta todos os cursos
    document.querySelectorAll('.image-item').forEach(elemento => {
        elemento.style.display = 'none';
    });

    // Mostra apenas os cursos com a classe correspondente ao tipo
    var elementosFiltrados = document.querySelectorAll(`.image-item.tipo-${id}`);
    
    if (elementosFiltrados.length === 0) {
        console.warn("Nenhum curso encontrado para:", id);
    }

    elementosFiltrados.forEach(elemento => {
        elemento.style.display = 'flex';
    });
}


function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cursos = document.querySelectorAll('.image-item');
    cursos.forEach(curso => {
        const nomeCurso = curso.querySelector('h3').textContent.toLowerCase();
        if (nomeCurso.includes(input)) {
            curso.style.display = 'block';
        } else {
            curso.style.display = 'none';
        }
    });
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        search();
    }
}

console.log("Cursos gerados:");
document.querySelectorAll('.image-item').forEach(curso => {
    console.log(curso.className);
});
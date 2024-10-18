document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const matricula = document.getElementById('matricula').value;
    if (matricula == '222116322') { // Exemplo de número de matrícula
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('computadores').style.display = 'grid';
        // Gerar lista de computadores
        for (let i = 1; i <= 19; i++) {
            const compDiv = document.createElement('div');
            const status = localStorage.getItem(`computador${i}`) || 'disponivel';
            compDiv.className = 'computador';
            compDiv.innerHTML = `
                <div class="status-box">
                    <div class="computador-label">Computador ${i}</div>
                    <img src="img/computador.png" alt="Computador">
                    <span id="status${i}" class="${status}">${status}</span>
                    <button class="ocupado" onclick="updateStatus(${i}, 'ocupado')">Ocupado</button>
                    <button class="disponivel" onclick="updateStatus(${i}, 'disponivel')">Disponível</button>
                </div>`;
            document.getElementById('computadores').appendChild(compDiv);
        }
    } else {
        alert('Número de matrícula inválido!');
    }
});

function updateStatus(computador, status) {
    localStorage.setItem(`computador${computador}`, status);
    const statusElement = document.getElementById(`status${computador}`);
    statusElement.textContent = status;
    statusElement.className = status;
}

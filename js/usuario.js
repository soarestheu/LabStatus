function fetchStatus() {
    const statusDiv = document.getElementById('statusComputadores');
    statusDiv.innerHTML = '';
    for (let i = 1; i <= 19; i++) {
        const status = localStorage.getItem(`computador${i}`) || 'disponivel';
        const compDiv = document.createElement('div');
        compDiv.className = 'computador';
        compDiv.innerHTML = `
             <div class="status-box">
                <div class="computador-label">Computador ${i}</div>
                <img src="img/computador.png" alt="Computador">
                <span class="${status}">${status}</span>
            </div>`;
        statusDiv.appendChild(compDiv);
    }
}

setInterval(fetchStatus, 5000); // Atualiza a cada 5 segundos
fetchStatus(); // Atualiza imediatamente na carga da página

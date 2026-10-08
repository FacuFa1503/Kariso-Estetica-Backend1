const contenedor = document.getElementById('lista-servicios-js');
const displayTotal = document.getElementById('total-presupuesto');
const btnConfirmar = document.getElementById('btn-confirmar');

async function obtenerServicios() {
    try {
        const response = await fetch('../data/servicios.json');
        if (!response.ok) {
            throw new Error('Error al cargar servicios');
        }
        const data = await response.json();
        renderizarServicios(data);
    } catch (error) {
    }
}

function renderizarServicios(servicios) {
    contenedor.innerHTML = '';
    const categorias = {};
    
    servicios.forEach(serv => {
        if (!categorias[serv.categoria]) {
            categorias[serv.categoria] = [];
        }
        categorias[serv.categoria].push(serv);
    });

    for (const cat in categorias) {
        const tituloCat = document.createElement('h5');
        tituloCat.className = 'text-pink fw-bold mt-4 mb-3 border-bottom pb-2';
        tituloCat.innerText = cat;
        contenedor.appendChild(tituloCat);

        categorias[cat].forEach(serv => {
            const div = document.createElement('div');
            div.className = 'form-check custom-card-check mb-2';
            div.innerHTML = `
                <label class="form-check-label d-flex align-items-center w-100" for="serv-${serv.id}" style="cursor:pointer;">
                    <input class="form-check-input check-servicio ms-0 me-3" type="checkbox" 
                           value="${serv.precio}" id="serv-${serv.id}" data-nombre="${serv.nombre}">
                    <div class="d-flex justify-content-between w-100">
                        <span>${serv.nombre}</span> 
                        <span class="fw-bold">$${serv.precio.toLocaleString('es-AR')}</span>
                    </div>
                </label>
            `;
            contenedor.appendChild(div);
        });
    }

    const checkboxes = document.querySelectorAll('.check-servicio');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            let total = 0;
            const seleccionados = [];
            
            document.querySelectorAll('.check-servicio:checked').forEach(checked => {
                total += parseInt(checked.value);
                seleccionados.push(checked.getAttribute('data-nombre'));
            });

            displayTotal.innerText = total.toLocaleString('es-AR');
            localStorage.setItem('reserva_usuario', JSON.stringify(seleccionados));
        });
    });
}

btnConfirmar.onclick = () => {
    const elegidos = JSON.parse(localStorage.getItem('reserva_usuario')) || [];

    if (elegidos.length === 0) {
        Swal.fire({
            title: '¡Ups!',
            text: 'Seleccioná al menos un servicio para tu turno.',
            icon: 'warning',
            confirmButtonColor: '#ffb6c1'
        });
    } else {
        Swal.fire({
            title: '¿Confirmamos tu presupuesto?',
            text: `Elegiste: ${elegidos.join(', ')}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, ir a WhatsApp',
            cancelButtonText: 'Seguir eligiendo',
            confirmButtonColor: '#d63384'
        }).then((result) => {
            if (result.isConfirmed) {
                const tel = "5491161272389";
                const msg = `Hola Kariso! Quiero turno para: ${elegidos.join(', ')}. Total: $${displayTotal.innerText}`;
                window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, '_blank');
            }
        });
    }
};

obtenerServicios();
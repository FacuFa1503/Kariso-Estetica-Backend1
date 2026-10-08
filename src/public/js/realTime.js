const socket = io();

const servicesList = document.getElementById('services-list');

socket.on('services_updated', (services) => {
  servicesList.innerHTML = '';
  
  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.id = `service-${service._id}`;
    
    card.innerHTML = `
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <p><strong>Duración:</strong> ${service.duration} min</p>
      <p><strong>Precio:</strong> $${service.price}</p>
    `;
    
    servicesList.appendChild(card);
  });
});

// Función para abrir modal
function openModal(type) {
  let modalId = '';
  
  switch(type) {
    case 'terminos':
      modalId = 'modalTerminos';
      break;
    case 'indicaciones':
      modalId = 'modalIndicaciones';
      break;
    case 'descarga':
      modalId = 'modalDescarga';
      break;
  }
  
  if(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }
}

// Función para cerrar modal
function closeModal(type) {
  let modalId = '';
  
  switch(type) {
    case 'terminos':
      modalId = 'modalTerminos';
      break;
    case 'indicaciones':
      modalId = 'modalIndicaciones';
      break;
    case 'descarga':
      modalId = 'modalDescarga';
      break;
  }
  
  if(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  }
}

// Cerrar modal al hacer click fuera del contenido
window.addEventListener('click', function(event) {
  if(event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
  if(event.key === 'Escape') {
    const modals = document.querySelectorAll('.modal.show');
    modals.forEach(modal => {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
  }
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
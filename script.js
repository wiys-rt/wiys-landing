
const form = document.getElementById('form');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;

  const response = await fetch('https://script.google.com/macros/s/AKfycbwdXzFOJeJo2jW3GI5Bh5L-dgDi3glI6N7V070r9n01EtCIiT3h_5c9p8iiOPyYVHiQxQ/exec', {
    method: 'POST',
    body: JSON.stringify({ nombre, correo }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    mensaje.textContent = '¡Gracias por unirte!';
    form.reset();
  } else {
    mensaje.textContent = 'Hubo un error. Intenta de nuevo.';
  }
});

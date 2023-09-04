document.getElementById('BCasa').addEventListener('click', function() {
    const contenido1 = document.querySelector('.Contenido1');
    const contenido2 = document.querySelector('.Contenido2');
  
    contenido1.style.display = 'block';
    contenido2.style.display = 'none';
  });

  document.getElementById('BContactar').addEventListener('click', function() {
    const contenido1 = document.querySelector('.Contenido1');
    const contenido2 = document.querySelector('.Contenido2');
  
    contenido1.style.display = 'none';
    contenido2.style.display = 'block';
  });
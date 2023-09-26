<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>Contáctanos</h3>
            <p>¡Estamos aquí para ayudarte! Contáctanos si tienes alguna pregunta o sugerencia.</p>
            <ul>
              <li>Email: contacto@XComponent.com</li>
              <li>Teléfono: (123) 456-7890</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3>Síguenos en las redes sociales</h3>
            <ul class="social-icons">
              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              <!-- Agrega más iconos y enlaces a tus redes sociales aquí -->
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  /* Agrega estilos CSS personalizados para tu footer aquí */
  .footer {
    background-color: #333;
    color: #fff;
    padding: 30px 0;
  }
  
  .social-icons {
    list-style: none;
    padding: 0;
  }
  
  .social-icons li {
    display: inline-block;
    margin-right: 10px;
  }
  
  .social-icons a {
    color: #fff;
    font-size: 20px;
  }
  
  /* Puedes personalizar más estilos según tus necesidades */
  </style>
  
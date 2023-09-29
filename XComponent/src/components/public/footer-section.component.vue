<template>
  <footer class="p-grid footer">
    <div class="p-col">
      <h3 class="footer-title">GARANTÍAS</h3>
      <ul>
        <li>Términos y condiciones</li>
        <li>Términos de garantía</li>
        <li>Política de privacidad</li>
        <li>Envíos a provincia</li>
        <li>Reclamos</li>
        <li>Modalidades de pago</li>
      </ul>
    </div>
  
    <div class="p-col">
      <h3 class="footer-title">ACERCA DE NOSOTROS</h3>
      <ul>
        <li>Soporte técnico</li>
        <li>Trabaja con nosotros</li>
        <li>Formulario de contacto</li>
        <li>Nuestros locales</li>
        <li>Sobre nosotros</li>
      </ul>
    </div>

    <div class="p-col">
      <h3 class="footer-title">UBICANOS</h3>
      <ul>
        <li>Tienda-Av Alameda San Marcos 11, Chlls 15067</li>
        <li>Central(01)313-3333</li>
        <li>Esta página permite pagos online con:</li>
        <li>
          <i class="pi pi-cc-visa"></i>
          <i class="pi pi-cc-mastercard"></i>
        </li>
      </ul>
    </div>
  
    <div class="p-col">
      <h3 class="footer-title">CONTACTOS</h3>
      <ul>
        <li><a href="mailto:anthony482B2B@gmail.com">anthony482B2B@gmail.com</a></li>
        <li><a href="mailto:martinezcarbajalmari186@gmail.com">martinezcarbajalmari186@gmail.com</a></li>
        <li><a href="mailto:javiermartinsebastian74@gmail.com">javiermartinsebastian74@gmail.com</a></li>
        <li><a href="mailto:a.varquispe@gmail.com">a.varquispe@gmail.com</a></li>
        <li>¡CHATEA CON NOSOTROS!</li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  align-items: flex-start;
  gap: 20px;
}

.footer-title {
  text-decoration: underline;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

.pi {
  font-size: 20px;
  margin-right: 5px;
}

@media (max-width: 768px) {
  .footer {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  .p-col {
    width: 100%;
    margin-bottom: 5px;
  }
}

@media (min-width: 1625px) {
  .footer {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

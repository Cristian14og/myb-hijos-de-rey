// SIMULACIÓN DE BASE DE DATOS DE PRODUCTOS
const productsData = {
  // Poltronas
  'silla-clasica-roble': {
    name: 'Silla Clásica de Roble',
    price: 350000,
    description: 'Una silla que combina elegancia atemporal y la robustez del roble macizo. Perfecta para cualquier rincón de lectura o como pieza de acento en tu sala.',
    features: ['<strong>Material:</strong> Madera de roble colombiano', '<strong>Acabado:</strong> Barniz mate', '<strong>Dimensiones:</strong> 90cm x 60cm x 70cm', '<strong>Garantía:</strong> 2 años'],
    images: ['img/Silla Clásica de Roble.jpg', 'img/silla-clasica-roble-detalle1.jpg', 'img/silla-clasica-roble-detalle2.jpg'],
    category: 'poltronas'
  },
  'silla-moderna-tapizada': {
    name: 'Silla Moderna Tapizada',
    price: 420000,
    description: 'Comodidad y estilo se unen en esta silla moderna, con un tapizado suave y resistente y patas de madera que le dan un toque contemporáneo.',
    features: ['<strong>Material:</strong> Tela de lino y madera', '<strong>Color:</strong> Gris claro (tapizado)', '<strong>Dimensiones:</strong> 85cm x 65cm x 75cm', '<strong>Relleno:</strong> Espuma de alta densidad'],
    images: ['img/Silla Moderna Tapizada.png', 'img/silla-moderna-detalle1.jpg', 'img/silla-moderna-detalle2.jpg'],
    category: 'poltronas'
  },
  'butaca-descanso': {
    name: 'Butaca de Descanso',
    price: 680000,
    description: 'La pieza ideal para tus momentos de relax. Su diseño ergonómico y materiales de alta calidad te invitan a descansar con estilo.',
    features: ['<strong>Material:</strong> Microfibra y estructura de pino', '<strong>Color:</strong> Azul petróleo', '<strong>Dimensiones:</strong> 100cm x 80cm x 85cm', '<strong>Incluye:</strong> Cojín lumbar'],
    images: ['img/Butaca de Descanso.jpg', 'img/butaca-descanso-detalle1.jpg', 'img/butaca-descanso-detalle2.jpg'],
    category: 'poltronas'
  },
  // Comedores
  'mesa-comedor-rustica': {
    name: 'Mesa de Comedor Rústica',
    price: 1200000,
    description: 'El centro de todas tus reuniones familiares. Esta mesa rústica de madera maciza está diseñada para durar generaciones y contar historias.',
    features: ['<strong>Material:</strong> Madera de pino recuperada', '<strong>Capacidad:</strong> 6 personas', '<strong>Dimensiones Mesa:</strong> 180cm x 90cm x 78cm', '<strong>Acabado:</strong> Cera natural'],
    images: ['img/Mesa de Comedor Rústica.png', 'img/mesa-rustica-detalle1.jpg', 'img/mesa-rustica-detalle2.jpg'],
    category: 'comedores'
  },
  'mesa-centro-minimalista': {
    name: 'Mesa de Centro Minimalista',
    price: 550000,
    description: 'Funcionalidad y elegancia en un diseño simple y limpio. Perfecta para complementar tu sala sin sobrecargar el espacio.',
    features: ['<strong>Material:</strong> MDF con enchape de alta resistencia', '<strong>Color:</strong> Blanco y madera natural', '<strong>Dimensiones:</strong> 100cm x 60cm x 45cm', '<strong>Compartimentos:</strong> 1 inferior'],
    images: ['img/Mesa de Centro Minimalista.jpg', 'img/mesa-centro-detalle1.jpg', 'img/mesa-centro-detalle2.jpg'],
    category: 'comedores'
  },
  'escritorio-clasico': {
    name: 'Escritorio Clásico',
    price: 950000,
    description: 'Un espacio de trabajo que inspira. Este escritorio clásico cuenta con acabados detallados y la solidez de la madera para que trabajes con estilo.',
    features: ['<strong>Material:</strong> Madera de cedro', '<strong>Cajones:</strong> 3 con rieles metálicos', '<strong>Dimensiones:</strong> 140cm x 70cm x 76cm', '<strong>Acabado:</strong> Laca brillante'],
    images: ['img/Escritorio Clásico.jpg', 'img/escritorio-clasico-detalle1.jpg', 'img/escritorio-clasico-detalle2.jpg'],
    category: 'comedores'
  },
  'comedor-moderno-4-puestos': {
    name: 'Comedor Moderno 4 Puestos',
    price: 2100000,
    description: 'Ideal para apartamentos y espacios contemporáneos. Este comedor combina vidrio y madera para un look ligero y muy moderno.',
    features: ['<strong>Materiales:</strong> Vidrio templado y base de madera', '<strong>Sillas:</strong> 4 tapizadas en cuero sintético', '<strong>Dimensiones Mesa:</strong> 120cm (diámetro) x 75cm (alto)', '<strong>Color:</strong> Natural y blanco'],
    images: ['img/Comedor Moderno 4 Puestos.jpeg', 'img/comedor-moderno-detalle1.jpg', 'img/comedor-moderno-detalle2.jpg'],
    category: 'comedores'
  },
  'comedor-clasico-6-puestos': {
    name: 'Comedor Clásico 6 Puestos',
    price: 3200000,
    description: 'Elegancia atemporal que nunca pasa de moda. Un comedor robusto con sillas capitoneadas para cenas memorables.',
    features: ['<strong>Material:</strong> Madera de roble', '<strong>Sillas:</strong> 6 tapizadas en tela con capitoneado', '<strong>Dimensiones Mesa:</strong> 200cm x 100cm x 78cm', '<strong>Color:</strong> Caoba'],
    images: ['img/Comedor Clásico 6 Puestos.png', 'img/comedor-clasico-detalle1.jpg', 'img/comedor-clasico-detalle2.jpg'],
    category: 'comedores'
  },
  'juego-desayunador-compacto': {
    name: 'Juego Desayunador Compacto',
    price: 1500000,
    description: 'La solución perfecta para espacios pequeños. Este juego desayunador es práctico, funcional y lleno de estilo.',
    features: ['<strong>Material:</strong> Madera y metal', '<strong>Incluye:</strong> 1 mesa alta y 2 bancos', '<strong>Dimensiones Mesa:</strong> 120cm x 50cm x 90cm', '<strong>Ideal para:</strong> Cocinas o balcones'],
    images: ['img/Juego Desayunador Compacto.jpg', 'img/desayunador-detalle1.jpg', 'img/desayunador-detalle2.jpg'],
    category: 'comedores'
  },
  // Sofás
  'sofa-modular-gris': {
      name: 'Sofá Modular Gris',
      price: 2800000,
      description: 'Un sofá versátil y extremadamente cómodo que se adapta a tu espacio. Configúralo como quieras para disfrutar de tus momentos de relax.',
      features: ['<strong>Material:</strong> Tela antifluidos', '<strong>Estructura:</strong> Madera de pino', '<strong>Módulos:</strong> 3 (esquinero, central, puff)', '<strong>Color:</strong> Gris oscuro'],
      images: ['img/Sofá Modular Gris.jpg', 'img/sofa-modular-detalle1.jpg', 'img/sofa-modular-detalle2.jpg'],
      category: 'sofas'
  },
  'sofa-chesterfield-cuero': {
      name: 'Sofá Chesterfield Cuero',
      price: 4500000,
      description: 'Un ícono del diseño. El sofá Chesterfield en cuero es una inversión en elegancia y durabilidad que se convierte en el protagonista de cualquier sala.',
      features: ['<strong>Material:</strong> Cuero genuino', '<strong>Estructura:</strong> Madera maciza', '<strong>Detalles:</strong> Capitoneado profundo y brazos curvos', '<strong>Color:</strong> Marrón envejecido'],
      images: ['img/Sofá Chesterfield Cuero.jpg', 'img/chesterfield-detalle1.jpg', 'img/chesterfield-detalle2.jpg'],
      category: 'sofas'
  },
  // Habitación
  'cama-king-size-lujo': {
      name: 'Cama King Size Lujo',
      price: 2500000,
      description: 'Noches de máximo confort te esperan en esta cama King Size. Su cabecero alto y tapizado le da un toque de hotel de lujo a tu habitación.',
      features: ['<strong>Tamaño:</strong> King (200cm x 200cm)', '<strong>Material:</strong> Cabecero en terciopelo y base de madera', '<strong>Color:</strong> Gris perla', '<strong>No incluye:</strong> Colchón ni mesas de noche'],
      images: ['img/Cama King Size Lujo.png', 'img/cama-king-detalle1.jpg', 'img/cama-king-detalle2.jpg'],
      category: 'habitacion'
  }
};

function toggleInfo() {
  const content = document.getElementById('info-content');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

  let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 7000); // ← 7 segundos
}



function toggleInfo(id = 'info-content') {
  const section = document.getElementById(id);
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

// Función para agregar productos al carrito

function agregarAlCarrito(nombre, precio, cantidad = 1) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const productoExistente = carrito.find(p => p.nombre === nombre);
  if (productoExistente) {
    productoExistente.cantidad += cantidad;
  } else {
    carrito.push({ nombre, precio, cantidad });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  
  // Llamamos a la nueva notificación en lugar del alert
  showToast(`"${nombre}" añadido al carrito`);

  // Opcional: Actualizar la visualización del carrito si el usuario está en carrito.html
  if (window.location.pathname.endsWith('carrito.html')) {
    mostrarCarrito();
  }
}
// NUEVA función para mostrar la notificación
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove('toast-hidden');

  // Ocultar la notificación después de 3 segundos
  setTimeout(() => {
    toast.classList.add('toast-hidden');
  }, 3000);
}
// Mostrar productos en carrito.html
// REEMPLAZA tu función mostrarCarrito actual por esta
function mostrarCarrito() {
  const contenedor = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const cartContainer = document.querySelector(".cart-container"); // El div principal del carrito
  if (!contenedor || !totalEl || !cartContainer) return;

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
  if (carrito.length === 0) {
    // Si el carrito está vacío, muestra un mensaje amigable
    cartContainer.innerHTML = `
      <h2>Tu Carrito está Vacío</h2>
      <p>Parece que aún no has añadido ningún mueble. ¡Explora nuestro catálogo para encontrar el ideal para ti!</p>
      <br>
      <a href="catalogo.html" class="btn primary-btn">Ir al Catálogo</a>
    `;
    return;
  }

  contenedor.innerHTML = "";
  let totalCompra = 0;

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    totalCompra += subtotal;

    contenedor.innerHTML += `
      <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
        <div>
          <h4>${producto.nombre}</h4>
          <p>Precio: $${producto.precio.toLocaleString('es-CO')}</p>
          <p>Subtotal: $${subtotal.toLocaleString('es-CO')}</p>
        </div>
        <div>
          <input type="number" min="1" value="${producto.cantidad}" onchange="cambiarCantidad(${index}, this.value)" style="width: 60px; padding: 5px; text-align: center;">
          <button onclick="eliminarProducto(${index})" class="btn secondary-btn" style="background: #c94c4c; color: white; margin-left: 10px;">Eliminar</button>
        </div>
      </div>
    `;
  });

  totalEl.textContent = totalCompra.toLocaleString('es-CO');
}

function cambiarCantidad(index, nuevaCantidad) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito[index].cantidad = parseInt(nuevaCantidad);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function eliminarProducto(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function finalizarCompra() {
  const logueado = localStorage.getItem("usuarioLogueado");
  if (!logueado) {
    alert("Debes iniciar sesión para finalizar la compra.");
    window.location.href = "login.html";
    return;
  }

  alert("Compra realizada con éxito. ¡Gracias por tu pedido!");
  localStorage.removeItem("carrito");
  mostrarCarrito();
}

// Detectar si estamos en carrito.html para mostrar los productos
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("carrito.html")) {
    mostrarCarrito();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Filtro por categoría desde URL
  const params = new URLSearchParams(window.location.search);
  const categoria = params.get("categoria");

  if (categoria) {
    const filtro = document.getElementById("category");
    if (filtro) {
      filtro.value = categoria.toLowerCase();
      filtrarProductos(); // Aplica el filtro automáticamente
    }
  }

  // Filtro por búsqueda rápida
  const buscador = document.getElementById("busquedaRapida");
  if (buscador) {
    buscador.addEventListener("input", () => {
      const texto = buscador.value.toLowerCase();
      document.querySelectorAll(".product-card").forEach(card => {
        const nombre = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = nombre.includes(texto) ? "block" : "none";
      });
    });
  }

  // Aplicar filtro cuando se cambia el select de categoría
  const filtroSelect = document.getElementById("category");
  if (filtroSelect) {
    filtroSelect.addEventListener("change", filtrarProductos);
  }
});

function filtrarProductos() {
  const filtro = document.getElementById("category").value;
  document.querySelectorAll(".product-card").forEach(card => {
    const categoria = card.getAttribute("data-category");
    card.style.display = !filtro || categoria === filtro ? "block" : "none";
  });
}
function ordenarProductos(criterio) {
  const contenedor = document.querySelector('.product-grid');
  const productos = Array.from(document.querySelectorAll('.product-card'));

  let productosOrdenados = productos.slice();

  if (criterio === 'price-asc') {
    productosOrdenados.sort((a, b) => getPrecio(a) - getPrecio(b));
  } else if (criterio === 'price-desc') {
    productosOrdenados.sort((a, b) => getPrecio(b) - getPrecio(a));
  } else if (criterio === 'name') {
    productosOrdenados.sort((a, b) => getNombre(a).localeCompare(getNombre(b)));
  }

  productosOrdenados.forEach(p => contenedor.appendChild(p));
}

function getPrecio(card) {
  const texto = card.querySelector('.price').textContent.replace(/\D/g, '');
  return parseInt(texto);
}

function getNombre(card) {
  return card.querySelector('h3').textContent.trim().toLowerCase();
}

document.addEventListener("DOMContentLoaded", () => {
  const ordenSelect = document.getElementById("sort");
  if (ordenSelect) {
    ordenSelect.addEventListener("change", () => {
      ordenarProductos(ordenSelect.value);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const categoria = params.get("categoria");

  // Aplicar categoría desde URL al cargar
  if (categoria) {
    const filtro = document.getElementById("category");
    if (filtro) {
      filtro.value = categoria.toLowerCase();
      filtrarProductos();
    }
  }

  // Buscar por texto en buscador rápido (si lo agregas)
  const buscador = document.getElementById("busquedaRapida");
  if (buscador) {
    buscador.addEventListener("input", () => {
      const texto = buscador.value.toLowerCase();
      document.querySelectorAll(".product-card").forEach(card => {
        const nombre = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = nombre.includes(texto) ? "block" : "none";
      });
    });
  }

  // Filtro select de categoría
  const filtroSelect = document.getElementById("category");
  if (filtroSelect) {
    filtroSelect.addEventListener("change", filtrarProductos);
  }

  // Ordenamiento
  const ordenSelect = document.getElementById("sort");
  if (ordenSelect) {
    ordenSelect.addEventListener("change", () => {
      ordenarProductos(ordenSelect.value);
    });
  }
});

function filtrarProductos() {
  const filtro = document.getElementById("category").value;
  document.querySelectorAll(".product-card").forEach(card => {
    const categoria = card.getAttribute("data-category");
    card.style.display = !filtro || categoria === filtro ? "block" : "none";
  });
}

function ordenarProductos(criterio) {
  const contenedor = document.querySelector('.product-grid');
  const productos = Array.from(document.querySelectorAll('.product-card'));

  let productosOrdenados = productos.slice();

  if (criterio === 'price-asc') {
    productosOrdenados.sort((a, b) => getPrecio(a) - getPrecio(b));
  } else if (criterio === 'price-desc') {
    productosOrdenados.sort((a, b) => getPrecio(b) - getPrecio(a));
  } else if (criterio === 'name') {
    productosOrdenados.sort((a, b) => getNombre(a).localeCompare(getNombre(b)));
  }

  productosOrdenados.forEach(p => contenedor.appendChild(p));
}

function getPrecio(card) {
  const texto = card.querySelector('.price').textContent.replace(/\D/g, '');
  return parseInt(texto);
}

function getNombre(card) {
  return card.querySelector('h3').textContent.trim().toLowerCase();
}

// ... (código existente en main.js) ...

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio, cantidad = 1) { // Añadimos 'cantidad = 1' como parámetro por defecto
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const productoExistente = carrito.find(p => p.nombre === nombre);
  if (productoExistente) {
    productoExistente.cantidad += cantidad; // Suma la cantidad existente con la nueva
  } else {
    carrito.push({ nombre, precio, cantidad });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`"${nombre}" añadido al carrito. Cantidad: ${cantidad}`);
  // Opcional: Actualizar la visualización del carrito si el usuario está en carrito.html
  if (window.location.pathname.endsWith('carrito.html')) {
    mostrarCarrito();
  }
}

// --- "BASE DE DATOS" DE PRODUCTOS SIMULADA ---
// Elimina la declaración duplicada de productsData aquí. 
// Ya existe una declaración válida de productsData como objeto al inicio del archivo.
// Si quieres agregar productos nuevos, agrégalos al objeto original productsData, por ejemplo:

/*
productsData['sofa-seccional-moderno'] = {
  name: 'Sofá Seccional Moderno',
  price: 1200000,
  description: 'Este elegante sofá seccional es la adición perfecta para cualquier sala de estar contemporánea. Fabricado con una estructura robusta de madera y tapizado en tela de lino de alta calidad, ofrece una comodidad excepcional y un diseño versátil. Ideal para familias o para quienes disfrutan de un espacio amplio y sofisticado.',
  features: [
    '<strong>Material:</strong> Estructura de madera maciza, tapizado en tela de lino.',
    '<strong>Dimensiones:</strong> 280cm (Largo) x 180cm (Profundidad Seccional) x 85cm (Alto).',
    '<strong>Color:</strong> Gris oscuro (disponible en otros tonos bajo pedido).',
    '<strong>Capacidad:</strong> 5 a 6 personas.',
    '<strong>Ensamblaje:</strong> Mínimo (pies y conectores).'
  ],
  images: [
    'https://via.placeholder.com/600x400/222222/FFFFFF?text=Sofá+Principal',
    'https://via.placeholder.com/150x100/333333/FFFFFF?text=Sofá+Detalle+1',
    'https://via.placeholder.com/150x100/444444/FFFFFF?text=Sofá+Detalle+2',
    'https://via.placeholder.com/150x100/555555/FFFFFF?text=Sofá+Detalle+3'
  ],
  category: 'salas'
};
*/

// No declares nuevamente productsData como array ni como objeto.
// Si necesitas más productos, sigue el formato del objeto original.

// --- LÓGICA PARA LA PÁGINA DE PRODUCTO DINÁMICA ---

document.addEventListener("DOMContentLoaded", () => {
  // Comprueba si estamos en la página de detalle de producto
  if (window.location.pathname.includes("producto.html")) {
    loadProductDetails();
  }
});

function loadProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = productsData[productId];

  // Si no se encuentra el producto, muestra un mensaje de error
  if (!product) {
    document.getElementById('productName').innerText = "Producto no encontrado";
    document.querySelector('.product-detail-container').innerHTML = '<h2 style="text-align: center; padding: 50px;">Lo sentimos, el producto que buscas no existe o no está disponible.</h2><div style="text-align: center;"><a href="catalogo.html" class="btn primary-btn">Volver al Catálogo</a></div>';
    return;
  }

  // Actualizar elementos de la página con la información del producto
  document.getElementById('productName').innerText = product.name;
  document.getElementById('productPrice').innerText = `$ ${product.price.toLocaleString('es-CO')}`;
  document.getElementById('productDescription').innerText = product.description;
  document.getElementById('mainProductImage').src = product.images[0];
  document.getElementById('mainProductImage').alt = product.name;

  // Cargar imágenes en miniatura en la galería
  const thumbnailContainer = document.getElementById('thumbnailImages');
  thumbnailContainer.innerHTML = ''; // Limpiar miniaturas de ejemplo
  product.images.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `Miniatura ${index + 1} de ${product.name}`;
    img.classList.add('thumbnail');
    if (index === 0) {
      img.classList.add('active'); // La primera miniatura está activa por defecto
    }
    // Asigna la función para cambiar la imagen principal al hacer clic
    img.onclick = () => changeMainImage(img, imgSrc);
    thumbnailContainer.appendChild(img);
  });

  // Cargar lista de características del producto
  const featuresList = document.getElementById('productFeatures');
  featuresList.innerHTML = ''; // Limpiar características de ejemplo
  product.features.forEach(feature => {
    const li = document.createElement('li');
    li.innerHTML = feature; // Usamos innerHTML para renderizar etiquetas como <strong>
    featuresList.appendChild(li);
  });
}

// Función para cambiar la imagen principal al hacer clic en una miniatura
function changeMainImage(thumbnailElement, newSrc) {
  // Cambia la fuente de la imagen principal
  document.getElementById('mainProductImage').src = newSrc;

  // Actualiza cuál miniatura tiene la clase 'active' para el estilo visual
  document.querySelectorAll('.thumbnail-images .thumbnail').forEach(thumb => {
    thumb.classList.remove('active');
  });
  thumbnailElement.classList.add('active');
}

// Función para el botón "Añadir al Carrito" en la página de detalle
function agregarAlCarritoDesdeDetalle() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = productsData[productId];
  
  if (!product) {
      alert("Error: No se pudo añadir el producto.");
      return;
  }
  
  // Obtiene la cantidad seleccionada por el usuario
  const quantity = parseInt(document.getElementById('productQuantity').value);
  
  // Llama a la función principal para agregar al carrito
  agregarAlCarrito(product.name, product.price, quantity);
}
// Agregar al final de tu archivo main.js

// Función para cambiar entre pestañas
function cambiarTab(tabName) {
    // Ocultar todos los contenidos de las pestañas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Desactivar todos los botones de las pestañas
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar el contenido de la pestaña seleccionada
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Activar el botón de la pestaña seleccionada
    document.querySelector(`.tab-button[onclick="cambiarTab('${tabName}')"]`).classList.add('active');
}

// Manejar el envío del formulario de cotización
document.getElementById('cotizacionForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para procesar la cotización
    alert('Cotización enviada con éxito. Nos pondremos en contacto contigo pronto.');
    this.reset();
});
// Vista previa de la imagen
document.getElementById('imagen')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        if (file.size > 5 * 1024 * 1024) { // 5MB límite
            alert('La imagen es demasiado grande. Por favor selecciona una imagen menor a 5MB.');
            this.value = '';
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            // Aquí podrías mostrar una vista previa de la imagen
            // Por ejemplo, creando un elemento img
        };
        reader.readAsDataURL(file);
    }
});

// Formatear el campo de presupuesto como moneda
document.getElementById('presupuesto')?.addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value) {
        value = parseInt(value).toLocaleString('es-CO');
        this.value = value;
    }
});
// Agregar al inicio del documento
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en la página del carrito
    if (window.location.pathname.includes('carrito.html')) {
        // Obtener el parámetro tab de la URL
        const params = new URLSearchParams(window.location.search);
        const tab = params.get('tab');
        
        // Si el parámetro es cotización, mostrar esa pestaña
        if (tab === 'cotizacion') {
            // Encontrar y hacer clic en el botón de cotización
            const cotizacionTab = document.querySelector('[onclick="cambiarTab(\'cotizacion\')"]');
            if (cotizacionTab) {
                cotizacionTab.click();
            }
        }
    }
});
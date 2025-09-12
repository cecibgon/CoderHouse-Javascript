// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Obtener referencias a los elementos del DOM
    const ninosInput = document.getElementById('ninos');
    const adultosInput = document.getElementById('adultos');
    const productoSelect = document.getElementById('producto-select');
    const agregarBtn = document.getElementById('agregar-btn');
    const listaProductosUl = document.getElementById('lista-productos');
    const totalPresupuestoSpan = document.getElementById('total-presupuesto');
    const guardarBtn = document.getElementById('guardar-btn');
    const cargarBtn = document.getElementById('cargar-btn');

    // Array para almacenar los productos del presupuesto
    let productosPresupuesto = [];
    
    // Función para actualizar la interfaz de usuario
    const actualizarUI = () => {
        listaProductosUl.innerHTML = ''; // Limpiar la lista
        let total = 0;

        // Recorrer el array para renderizar la lista y calcular el total
        productosPresupuesto.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio}`;
            listaProductosUl.appendChild(li);
            total += item.precio;
        });

        // Actualizar el total en el DOM
        totalPresupuestoSpan.textContent = total;
    };

    // 2. Manejar eventos
    // Evento para agregar productos
    agregarBtn.addEventListener('click', () => {
        const productoNombre = productoSelect.value;
        let precio = 0;

        // Asignar precio basado en el producto seleccionado
        switch (productoNombre) {
            case 'Torta':
                precio = 500;
                break;
            case 'Golosinas':
                precio = 200;
                break;
            case 'Decoracion':
                precio = 300;
                break;
            case 'Bebidas':
                precio = 150;
                break;
        }

        // Agregar el nuevo producto al array
        productosPresupuesto.push({ nombre: productoNombre, precio: precio });
        
        // Actualizar la UI
        actualizarUI();
    });

    // Evento para guardar el presupuesto en LocalStorage
    guardarBtn.addEventListener('click', () => {
        // Obtener los datos actuales del presupuesto
        const dataToSave = {
            ninos: ninosInput.value,
            adultos: adultosInput.value,
            productos: productosPresupuesto
        };
        // Convertir el objeto a una cadena JSON y guardarlo
        localStorage.setItem('presupuestoCumple', JSON.stringify(dataToSave));
        alert('¡Presupuesto guardado!');
    });

    // Evento para cargar el presupuesto desde LocalStorage
    cargarBtn.addEventListener('click', () => {
        // Obtener la cadena JSON del LocalStorage
        const storedData = localStorage.getItem('presupuestoCumple');
        
        if (storedData) {
            // Convertir la cadena JSON de vuelta a un objeto
            const loadedData = JSON.parse(storedData);

            // Cargar los datos en los elementos del DOM y el array
            ninosInput.value = loadedData.ninos;
            adultosInput.value = loadedData.adultos;
            productosPresupuesto = loadedData.productos;

            // Actualizar la interfaz de usuario con los datos cargados
            actualizarUI();
            alert('¡Presupuesto cargado!');
        } else {
            alert('No hay presupuesto guardado para cargar.');
        }
    });

    // Cargar datos al iniciar si existen
    const storedData = localStorage.getItem('presupuestoCumple');
    if (storedData) {
        productosPresupuesto = JSON.parse(storedData).productos;
        actualizarUI();
    }
});

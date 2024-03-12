// Validación formulario con JavaScript

document.addEventListener("DOMContentLoaded", function () {
    // Configuración de Bootstrap Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });



    // Función para el desplazamiento suave al hacer clic en los enlaces de la barra de navegación
  
  


    // Manejo del evento submit del formulario de contacto
   
    document.getElementById("fcontacto").addEventListener("submit", function(event) {
        event.preventDefault();
        var nombre = document.getElementById("inombre").value;
        var asunto = document.getElementById("iasunto").value;
        var mensaje = document.getElementById("imensaje").value;
        if(nombre === "" || asunto === "" || mensaje === ""){
            alert("Complete todos los campos");
        } else {
            alert("Mensaje enviado con éxito");
        }
    });


    // Manejo del evento clic en elementos con la clase .p-toggle
    document.querySelectorAll(".p-toggle").forEach(function (element) {
        element.addEventListener("click", function () {
            this.closest('.card-body').querySelector('.toggle').classList.toggle("fold", 1000);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Configuración de Bootstrap Tooltips
    var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (tooltipTriggerList.length > 0) {
        tooltipTriggerList.forEach(function(tooltipTriggerEl) {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Manejo del evento cambio para el checkbox de términos y condiciones
    var checkboxTerminos = document.getElementById('flexCheckIndeterminate');
    if (checkboxTerminos) {
        checkboxTerminos.addEventListener('change', function() {
            if (this.checked) {
                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
                    keyboard: false
                });
                myModal.show();
            }
        });
    }

    // Validación del formulario al intentar enviarlo
    var formularioContacto = document.getElementById("enviarCorreo");
    if (formularioContacto) {
        formularioContacto.addEventListener("submit", function(event) {
            event.preventDefault();
            var nombre = document.getElementById("inombre").value;
            var asunto = document.getElementById("iasunto").value;
            var mensaje = document.getElementById("imensaje").value;
            if (nombre === "" || asunto === "" || mensaje === "") {
                alert("Complete todos los campos");
            } else {
                alert("Mensaje enviado con éxito");
            }
        });
    }



    // Manejo del evento clic en elementos con la clase .p-toggle para mostrar/ocultar contenido
    var elementosToggle = document.querySelectorAll(".p-toggle");
    if (elementosToggle.length > 0) {
        elementosToggle.forEach(function(element) {
            element.addEventListener("click", function () {
                var toggle = this.closest('.card-body').querySelector('.toggle');
                if (toggle) {
                    toggle.classList.toggle("fold");
                }
            });
        });
    }
});

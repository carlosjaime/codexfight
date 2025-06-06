$(document).ready(function() {
    // Animación para los elementos de servicios
    $('.transform').hover(
        function() {
            $(this).addClass('scale-105');
        },
        function() {
            $(this).removeClass('scale-105');
        }
    );

    // Animación para el botón de contacto
    $('button').click(function() {
        alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
    });
});

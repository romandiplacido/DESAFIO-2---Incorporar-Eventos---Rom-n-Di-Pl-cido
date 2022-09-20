addEventListener('DOMContentLoaded', inicio);

        function inicio() {
            document.getElementById('recuadro1').addEventListener('click', presion1);
            document.getElementById('recuadro2').addEventListener('dblclick', presion2);
        }

        function presion1() {
            alert('se hizo click');
        }

        function presion2() {
            alert('se hizo doble click');
        }
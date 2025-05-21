function calcularArea() {
      const a = parseFloat(document.getElementById('altura').value);
      const b = parseFloat(document.getElementById('base').value);
      const c = parseFloat(document.getElementById('alturat').value);

      if (!(a > 0 && b > 0 && c >= 0 && c <= a)) {
        alert("Por favor, ingrese valores válidos. (A y B mayores a 0, C entre 0 y A)");
        return;
      }

      const areaRectangulo = b * (a - c);
      const areaTriangulo = (b * c) / 2;
      const areaTotal = areaRectangulo + areaTriangulo;

      document.getElementById('resultado').textContent = 
        `El área del terreno es: ${areaTotal.toFixed(2)} m²`;
    }
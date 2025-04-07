// Primero, define el array con todas las preguntas
const questionBank = [
    // --- TEMA 1: Vectores (25 preguntas) ---
    {
        theme: 'Vectores',
        question: '¿Qué es un vector en el plano?',
        options: ['Un número real', 'Un segmento orientado con magnitud y dirección', 'Una recta infinita', 'Un punto en el espacio'],
        correctOption: 1
    },
    {
        theme: 'Vectores',
        question: 'Si v = (3, -4), ¿cuál es su módulo (magnitud)?',
        options: ['5', '7', '-1', '25'],
        correctOption: 0 // sqrt(3^2 + (-4)^2) = sqrt(9 + 16) = sqrt(25) = 5
    },
    {
        theme: 'Vectores',
        question: 'Dado u = (1, 2) y v = (3, -1), calcula u + v.',
        options: ['(4, 1)', '(2, 3)', '(-2, 3)', '(4, -1)'],
        correctOption: 0 // (1+3, 2+(-1)) = (4, 1)
    },
    {
        theme: 'Vectores',
        question: 'Si w = (2, 5), calcula 3w.',
        options: ['(6, 15)', '(5, 8)', '(-1, 2)', '(6, 5)'],
        correctOption: 0 // (3*2, 3*5) = (6, 15)
    },
    {
        theme: 'Vectores',
        question: '¿Qué representa geométricamente el producto escalar de dos vectores?',
        options: ['El área del paralelogramo que forman', 'Un vector perpendicular a ambos', 'Una medida relacionada con la proyección de un vector sobre otro y el ángulo entre ellos', 'La suma de sus módulos'],
        correctOption: 2
    },
    {
        theme: 'Vectores',
        question: 'Calcula el producto escalar de a = (2, 1) y b = (-3, 4).',
        options: ['-2', '10', '2', '-10'],
        correctOption: 0 // (2*-3) + (1*4) = -6 + 4 = -2
    },
    {
        theme: 'Vectores',
        question: '¿Cuándo son dos vectores u y v ortogonales (perpendiculares)?',
        options: ['Cuando su suma es el vector nulo', 'Cuando su producto escalar es 0', 'Cuando tienen el mismo módulo', 'Cuando son paralelos'],
        correctOption: 1
    },
    {
        theme: 'Vectores',
        question: 'Encuentra un vector ortogonal a v = (3, 2).',
        options: ['(-2, 3)', '(3, -2)', '(2, 3)', '(3, 2)'],
        correctOption: 0 // Producto escalar (3*-2) + (2*3) = -6 + 6 = 0. También vale (2,-3) o sus múltiplos.
    },
    {
        theme: 'Vectores',
        question: '¿Qué condición cumplen dos vectores para ser paralelos?',
        options: ['Su producto escalar es 1', 'Son ortogonales', 'Uno es múltiplo escalar del otro', 'Su suma es cero'],
        correctOption: 2
    },
    {
        theme: 'Vectores',
        question: 'Si u = (1, 1) y v = (k, 3) son ortogonales, ¿cuánto vale k?',
        options: ['-3', '3', '1', '-1'],
        correctOption: 0 // u·v = 1*k + 1*3 = k + 3 = 0 => k = -3
    },
    {
        theme: 'Vectores',
        question: 'El vector que une el punto A(1, 2) con el punto B(4, 6) es:',
        options: ['(3, 4)', '(5, 8)', '(-3, -4)', '(3, -4)'],
        correctOption: 0 // B - A = (4-1, 6-2) = (3, 4)
    },
    {
        theme: 'Vectores',
        question: 'La magnitud de un vector también se conoce como:',
        options: ['Dirección', 'Sentido', 'Norma o Módulo', 'Componente'],
        correctOption: 2
    },
    {
        theme: 'Vectores',
        question: 'Si F1 = (5, 0) y F2 = (0, 5) son dos fuerzas actuando sobre un objeto, ¿cuál es la fuerza resultante F1 + F2?',
        options: ['(5, 5)', '(0, 0)', '(5, 0)', '(0, 5)'],
        correctOption: 0
    },
     {
        theme: 'Vectores',
        question: '¿Qué significa que un conjunto de vectores sea linealmente dependiente?',
        options: ['Todos los vectores son nulos', 'Uno de los vectores se puede escribir como combinación lineal de los otros', 'Todos los vectores son ortogonales entre sí', 'Todos los vectores tienen el mismo módulo'],
        correctOption: 1
    },
    {
        theme: 'Vectores',
        question: 'Las componentes del vector v = (-1, 6) son:',
        options: ['x=-1, y=6', 'x=6, y=-1', 'x=1, y=-6', 'x=-1, y=-6'],
        correctOption: 0
    },
    {
        theme: 'Vectores',
        question: 'El producto escalar de un vector por sí mismo, v·v, es igual a:',
        options: ['Cero', 'El módulo del vector', 'El cuadrado del módulo del vector', 'Uno'],
        correctOption: 2 // v·v = |v| |v| cos(0) = |v|^2
    },
    {
        theme: 'Vectores',
        question: 'Si u=(a, b) y v=(c, d), la fórmula del producto escalar u·v es:',
        options: ['ac + bd', 'ad - bc', 'ac - bd', 'ad + bc'],
        correctOption: 0
    },
    {
        theme: 'Vectores',
        question: '¿Qué representa el vector (0, 0)?',
        options: ['El vector unidad', 'Un vector sin dirección definida', 'El vector nulo u origen', 'Un vector paralelo al eje X'],
        correctOption: 2
    },
    {
        theme: 'Vectores',
        question: 'El vector opuesto a v = (-2, 5) es:',
        options: ['(2, -5)', '(-2, -5)', '(2, 5)', '(5, -2)'],
        correctOption: 0 // -v = -1 * (-2, 5) = (2, -5)
    },
    {
        theme: 'Vectores',
        question: '¿Cuál es el coseno del ángulo entre u=(1,0) y v=(0,1)?',
        options: ['0', '1', '-1', '1/2'],
        correctOption: 0 // u·v = |u||v|cos(α) => 0 = 1*1*cos(α) => cos(α) = 0 (son ortogonales)
    },
    {
        theme: 'Vectores',
        question: 'Un vector unitario es un vector que tiene:',
        options: ['Módulo 0', 'Módulo 1', 'Dirección horizontal', 'Componentes enteras'],
        correctOption: 1
    },
    {
        theme: 'Vectores',
        question: 'Para normalizar un vector v (obtener un vector unitario en su misma dirección), se debe:',
        options: ['Multiplicarlo por su módulo', 'Dividirlo por su módulo', 'Sumarle el vector opuesto', 'Calcular su producto escalar consigo mismo'],
        correctOption: 1 // v / |v|
    },
    {
        theme: 'Vectores',
        question: 'La combinación lineal de vectores w = a*u + b*v requiere que a y b sean:',
        options: ['Vectores', 'Números reales (escalares)', 'Matrices', 'Puntos'],
        correctOption: 1
    },
    {
        theme: 'Vectores',
        question: 'El vector director de una recta indica su:',
        options: ['Posición', 'Longitud', 'Dirección', 'Punto de corte con el eje Y'],
        correctOption: 2
    },
    {
        theme: 'Vectores',
        question: 'Si la velocidad de un barco es v=(10, 5) km/h, ¿qué representa la componente x=10?',
        options: ['La velocidad hacia el Este', 'La velocidad hacia el Norte', 'La velocidad total', 'La aceleración'],
        correctOption: 0 // Asumiendo sistema de coordenadas estándar (Este=X+, Norte=Y+)
    },

    // --- TEMA 2: Trigonometría (25 preguntas) ---
    {
        theme: 'Trigonometría',
        question: '¿Cuántos grados son π radianes?',
        options: ['180°', '90°', '360°', '270°'],
        correctOption: 0
    },
    {
        theme: 'Trigonometría',
        question: 'En un triángulo rectángulo, el seno de un ángulo agudo se define como:',
        options: ['Cateto adyacente / Hipotenusa', 'Cateto opuesto / Hipotenusa', 'Cateto opuesto / Cateto adyacente', 'Hipotenusa / Cateto opuesto'],
        correctOption: 1
    },
    {
        theme: 'Trigonometría',
        question: '¿Cuál es el valor del coseno de 60°?',
        options: ['1/2', '√3/2', '√2/2', '1'],
        correctOption: 0
    },
    {
        theme: 'Trigonometría',
        question: '¿Cuál es el valor de la tangente de 45°?',
        options: ['1', '0', 'Indefinido', '1/2'],
        correctOption: 0 // sen(45)/cos(45) = (√2/2)/(√2/2) = 1
    },
    {
        theme: 'Trigonometría',
        question: 'La relación fundamental de la trigonometría establece que sen²(α) + cos²(α) es igual a:',
        options: ['1', '0', 'tan(α)', '2'],
        correctOption: 0
    },
    {
        theme: 'Trigonometría',
        question: 'Si sen(α) = 3/5 y α está en el primer cuadrante, ¿cuánto vale cos(α)?',
        options: ['4/5', '3/4', '5/4', '-4/5'],
        correctOption: 0 // cos²(α) = 1 - (3/5)² = 1 - 9/25 = 16/25 => cos(α) = 4/5 (positivo por ser primer cuadrante)
    },
    {
        theme: 'Trigonometría',
        question: 'En un triángulo rectángulo con hipotenusa 10 y un ángulo de 30°, ¿cuánto mide el cateto opuesto a ese ángulo?',
        options: ['5', '10√3', '5√3', '10'],
        correctOption: 0 // sen(30) = opuesto / hipotenusa => 1/2 = opuesto / 10 => opuesto = 5
    },
    {
        theme: 'Trigonometría',
        question: '¿En qué cuadrante el seno es positivo y el coseno es negativo?',
        options: ['Primer cuadrante', 'Segundo cuadrante', 'Tercer cuadrante', 'Cuarto cuadrante'],
        correctOption: 1
    },
    {
        theme: 'Trigonometría',
        question: '¿Cómo se define la tangente de un ángulo α?',
        options: ['cos(α) / sen(α)', 'sen(α) / cos(α)', '1 / sen(α)', '1 / cos(α)'],
        correctOption: 1
    },
    {
        theme: 'Trigonometría',
        question: 'Si tan(α) = 1, un posible valor para α en grados es:',
        options: ['45°', '30°', '60°', '90°'],
        correctOption: 0
    },
    {
        theme: 'Trigonometría',
        question: 'Un ángulo de 270° equivale en radianes a:',
        options: ['3π/2', 'π', '2π', 'π/2'],
        correctOption: 0 // 270 * (π/180) = 27/18 * π = 3/2 * π
    },
     {
        theme: 'Trigonometría',
        question: 'La cosecante de un ángulo α (csc α) es:',
        options: ['1 / sen(α)', '1 / cos(α)', '1 / tan(α)', 'cos(α) / sen(α)'],
        correctOption: 0
    },
    {
        theme: 'Trigonometría',
        question: 'La secante de un ángulo α (sec α) es:',
        options: ['1 / sen(α)', '1 / cos(α)', '1 / tan(α)', 'sen(α) / cos(α)'],
        correctOption: 1
    },
    {
        theme: 'Trigonometría',
        question: 'La cotangente de un ángulo α (cot α) es:',
        options: ['sen(α) / cos(α)', '1 / sen(α)', 'cos(α) / sen(α)', '1 / cos(α)'],
        correctOption: 2
    },
    {
        theme: 'Trigonometría',
        question: 'Si cos(α) = -1/2 y α está en el tercer cuadrante, ¿cuánto vale sen(α)?',
        options: ['-√3/2', '√3/2', '1/2', '-1/2'],
        correctOption: 0 // sen²(α) = 1 - (-1/2)² = 1 - 1/4 = 3/4. En el III cuadrante, seno es negativo => sen(α) = -√3/2
    },
    {
        theme: 'Trigonometría',
        question: '¿Qué ángulo forman las manecillas de un reloj a las 3:00?',
        options: ['90°', '0°', '180°', '30°'],
        correctOption: 0
    },
    {
        theme: 'Trigonometría',
        question: 'Desde la cima de un faro de 50m de altura se observa un barco con un ángulo de depresión de 30°. ¿A qué distancia está el barco del faro?',
        options: ['50√3 m', '50 m', '100 m', '50/√3 m'],
        correctOption: 0 // tan(30) = 50 / d => d = 50 / tan(30) = 50 / (1/√3) = 50√3
    },
    {
        theme: 'Trigonometría',
        question: 'El teorema del seno se utiliza en triángulos:',
        options: ['Solo rectángulos', 'Solo isósceles', 'De cualquier tipo', 'Solo equiláteros'],
        correctOption: 2
    },
    {
        theme: 'Trigonometría',
        question: 'El teorema del coseno es una generalización del teorema de:',
        options: ['Pitágoras', 'Tales', 'Seno', 'Ruffini'],
        correctOption: 0
    },
    {
        theme: 'Trigonometría',
        question: '¿Cuál es el valor de sen(0°)?',
        options: ['0', '1', '-1', 'Indefinido'],
        correctOption: 0
    },
    {
        theme: 'Trigonometría',
        question: '¿Cuál es el valor de cos(90°)?',
        options: ['0', '1', '-1', 'Indefinido'],
        correctOption: 0
    },
    {
        theme: 'Trigonometría',
        question: 'Un radián es el ángulo central que subtiende un arco de longitud igual a:',
        options: ['El radio', 'El diámetro', 'La circunferencia', 'La mitad del radio'],
        correctOption: 0
    },
    {
        theme: 'Trigonometría',
        question: 'Si cos(α) = 0.8, ¿cuál es el valor de cos(-α)?',
        options: ['0.8', '-0.8', '0.6', '-0.6'],
        correctOption: 0 // Coseno es una función par: cos(-α) = cos(α)
    },
    {
        theme: 'Trigonometría',
        question: 'Si sen(α) = 0.5, ¿cuál es el valor de sen(180° - α)?',
        options: ['0.5', '-0.5', '0.866', '-0.866'],
        correctOption: 0 // sen(180° - α) = sen(α)
    },
    {
        theme: 'Trigonometría',
        question: '¿Cuál es el periodo de la función y = sen(x)?',
        options: ['2π', 'π', 'π/2', '180'],
        correctOption: 0
    },

    // --- TEMA 3: Geometría Analítica (Rectas y Distancias) (25 preguntas) ---
    {
        theme: 'Geometría Analítica',
        question: 'La ecuación y = mx + n se llama forma...',
        options: ['Explícita o pendiente-intercepto', 'General', 'Punto-pendiente', 'Vectorial'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: 'En la ecuación y = -2x + 5, ¿cuál es la pendiente (m)?',
        options: ['-2', '5', '2', '-5'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: 'En la ecuación y = 3x - 1, ¿cuál es la ordenada en el origen (n)?',
        options: ['-1', '3', '1', '-3'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: '¿Cuál es la pendiente de la recta que pasa por los puntos A(1, 2) y B(3, 8)?',
        options: ['3', '1/3', '-3', '2'],
        correctOption: 0 // m = (8-2)/(3-1) = 6/2 = 3
    },
    {
        theme: 'Geometría Analítica',
        question: 'La ecuación general de una recta tiene la forma:',
        options: ['Ax + By + C = 0', 'y = mx + n', 'y - y₀ = m(x - x₀)', '(x, y) = (p₁, p₂) + t(v₁, v₂)'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: '¿Cuál es la pendiente de la recta 4x - 2y + 6 = 0?',
        options: ['2', '-2', '1/2', '-1/2'],
        correctOption: 0 // -2y = -4x - 6 => y = 2x + 3. Pendiente = 2.
    },
    {
        theme: 'Geometría Analítica',
        question: 'Dos rectas son paralelas si tienen:',
        options: ['La misma pendiente', 'Pendientes opuestas', 'Pendientes inversas', 'Pendientes negativo-inversas'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: 'Dos rectas son perpendiculares si sus pendientes m₁ y m₂ cumplen:',
        options: ['m₁ * m₂ = -1', 'm₁ = m₂', 'm₁ + m₂ = 0', 'm₁ / m₂ = 1'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: 'Calcula la distancia entre los puntos P(1, 1) y Q(4, 5).',
        options: ['5', '7', '25', '√7'],
        correctOption: 0 // d = sqrt((4-1)² + (5-1)²) = sqrt(3² + 4²) = sqrt(9 + 16) = sqrt(25) = 5
    },
    {
        theme: 'Geometría Analítica',
        question: 'La fórmula de la distancia entre un punto P(x₀, y₀) y la recta Ax + By + C = 0 es:',
        options: ['|Ax₀ + By₀ + C| / √(A² + B²)', '|Ax₀ + By₀ + C|', '√(A² + B²)', '(Ax₀ + By₀ + C) / √(A² + B²)'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: 'Una recta horizontal tiene pendiente:',
        options: ['0', '1', 'Indefinida', '-1'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: 'Una recta vertical tiene pendiente:',
        options: ['Indefinida', '0', '1', '-1'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: '¿Cuál es la ecuación de la recta que pasa por (2, 3) y tiene pendiente 4?',
        options: ['y - 3 = 4(x - 2)', 'y - 2 = 4(x - 3)', 'y = 4x + 3', 'x - 3 = 4(y - 2)'],
        correctOption: 0 // Forma punto-pendiente: y - y₀ = m(x - x₀)
    },
     {
        theme: 'Geometría Analítica',
        question: 'Encuentra el punto de corte con el eje Y de la recta 5x + 2y - 10 = 0.',
        options: ['(0, 5)', '(2, 0)', '(0, -5)', '(0, 10)'],
        correctOption: 0 // Hacemos x=0 => 2y - 10 = 0 => 2y = 10 => y = 5. Punto (0, 5).
    },
    {
        theme: 'Geometría Analítica',
        question: 'Encuentra el punto de corte con el eje X de la recta 5x + 2y - 10 = 0.',
        options: ['(2, 0)', '(0, 5)', '(-2, 0)', '(0, -5)'],
        correctOption: 0 // Hacemos y=0 => 5x - 10 = 0 => 5x = 10 => x = 2. Punto (2, 0).
    },
    {
        theme: 'Geometría Analítica',
        question: '¿Cuál es la pendiente de una recta paralela a y = -x + 7?',
        options: ['-1', '1', '7', '-7'],
        correctOption: 0 // Misma pendiente.
    },
    {
        theme: 'Geometría Analítica',
        question: '¿Cuál es la pendiente de una recta perpendicular a y = 2x - 1?',
        options: ['-1/2', '1/2', '2', '-2'],
        correctOption: 0 // Pendiente negativo-inversa: -1/2.
    },
    {
        theme: 'Geometría Analítica',
        question: 'Calcula la distancia del punto P(0, 0) a la recta 3x + 4y - 10 = 0.',
        options: ['2', '10', '5', '1'],
        correctOption: 0 // d = |3*0 + 4*0 - 10| / √(3² + 4²) = |-10| / √25 = 10 / 5 = 2
    },
    {
        theme: 'Geometría Analítica',
        question: 'La mediatriz de un segmento es la recta que:',
        options: ['Pasa por su punto medio y es perpendicular a él', 'Une los extremos del segmento', 'Es paralela al segmento', 'Pasa por uno de sus extremos'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: 'El punto medio del segmento con extremos A(1, 5) y B(7, -1) es:',
        options: ['(4, 2)', '(8, 4)', '(6, -6)', '(3, 3)'],
        correctOption: 0 // M = ((1+7)/2, (5-1)/2) = (8/2, 4/2) = (4, 2)
    },
    {
        theme: 'Geometría Analítica',
        question: '¿Cuál es la ecuación del eje X?',
        options: ['y = 0', 'x = 0', 'y = x', 'y = 1'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: '¿Cuál es la ecuación del eje Y?',
        options: ['x = 0', 'y = 0', 'y = x', 'x = 1'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: 'Para calcular la distancia entre dos rectas paralelas, se calcula la distancia desde:',
        options: ['Un punto cualquiera de una recta a la otra recta', 'El origen a ambas rectas', 'Sus puntos de corte con el eje X', 'Sus puntos de corte con el eje Y'],
        correctOption: 0
    },
    {
        theme: 'Geometría Analítica',
        question: 'El vector director de la recta y = 5x - 2 es:',
        options: ['(1, 5)', '(5, 1)', '(1, -2)', '(-2, 5)'],
        correctOption: 0 // Si y = mx+n, un vector director es (1, m). Aquí (1, 5).
    },
    {
        theme: 'Geometría Analítica',
        question: 'La recta que pasa por (0,0) y (1,1) tiene ecuación:',
        options: ['y = x', 'y = -x', 'y = 1', 'x = 1'],
        correctOption: 0 // Pendiente (1-0)/(1-0) = 1. Ordenada en origen 0. y = 1x + 0.
    },

    // --- TEMA 4: Ecuaciones y Sistemas (25 preguntas) ---
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Resuelve la ecuación 2x + 5 = 11.',
        options: ['x = 3', 'x = 8', 'x = -3', 'x = 5.5'],
        correctOption: 0 // 2x = 11 - 5 => 2x = 6 => x = 3
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Resuelve la ecuación 3(x - 1) = x + 7.',
        options: ['x = 5', 'x = 2', 'x = 4', 'x = -5'],
        correctOption: 0 // 3x - 3 = x + 7 => 2x = 10 => x = 5
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Una ecuación de primer grado también se llama ecuación:',
        options: ['Lineal', 'Cuadrática', 'Cúbica', 'Exponencial'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'La fórmula general para resolver ax² + bx + c = 0 es:',
        options: ['x = [-b ± √(b² - 4ac)] / 2a', 'x = [b ± √(b² - 4ac)] / 2a', 'x = [-b ± √(b² + 4ac)] / 2a', 'x = [-b ± √(b² - 4ac)] / a'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Resuelve la ecuación x² - 4x + 3 = 0.',
        options: ['x=1, x=3', 'x=-1, x=-3', 'x=1, x=-3', 'x=-1, x=3'],
        correctOption: 0 // x = [4 ± √(16 - 12)] / 2 = [4 ± √4] / 2 = (4 ± 2) / 2. x1=6/2=3, x2=2/2=1.
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Resuelve la ecuación x² - 9 = 0.',
        options: ['x=3, x=-3', 'x=3', 'x=-3', 'No tiene solución real'],
        correctOption: 0 // x² = 9 => x = ±√9 => x = ±3
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Resuelve la ecuación x² + 4 = 0.',
        options: ['No tiene solución real', 'x=2, x=-2', 'x=2', 'x=-2'],
        correctOption: 0 // x² = -4. No hay raíz real de -4.
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'El discriminante de ax² + bx + c = 0 es Δ = b² - 4ac. Si Δ > 0, la ecuación tiene:',
        options: ['Dos soluciones reales distintas', 'Una solución real doble', 'Ninguna solución real', 'Dos soluciones complejas'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Si el discriminante Δ = 0, la ecuación cuadrática tiene:',
        options: ['Una solución real doble', 'Dos soluciones reales distintas', 'Ninguna solución real', 'Una solución real y una compleja'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Si el discriminante Δ < 0, la ecuación cuadrática tiene:',
        options: ['Ninguna solución real', 'Una solución real doble', 'Dos soluciones reales distintas', 'Una solución real'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Resuelve el sistema: x + y = 5; x - y = 1',
        options: ['x=3, y=2', 'x=2, y=3', 'x=4, y=1', 'x=1, y=4'],
        correctOption: 0 // Sumando: 2x = 6 => x=3. Sustituyendo: 3 + y = 5 => y=2.
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: '¿Qué método consiste en despejar una variable en una ecuación y sustituirla en la otra?',
        options: ['Sustitución', 'Igualación', 'Reducción', 'Gráfico'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: '¿Qué método consiste en despejar la misma variable en ambas ecuaciones e igualar las expresiones?',
        options: ['Igualación', 'Sustitución', 'Reducción', 'Gauss'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: '¿Qué método consiste en multiplicar las ecuaciones por números adecuados para que una variable desaparezca al sumarlas?',
        options: ['Reducción', 'Sustitución', 'Igualación', 'Cramer'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Un sistema de ecuaciones es compatible determinado si tiene:',
        options: ['Una única solución', 'Infinitas soluciones', 'Ninguna solución', 'Dos soluciones'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Un sistema de ecuaciones es compatible indeterminado si tiene:',
        options: ['Infinitas soluciones', 'Una única solución', 'Ninguna solución', 'Solución trivial'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Un sistema de ecuaciones es incompatible si tiene:',
        options: ['Ninguna solución', 'Una única solución', 'Infinitas soluciones', 'Solución (0,0)'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Resuelve: 2x - y = 4; x + y = 5',
        options: ['x=3, y=2', 'x=2, y=3', 'x=1, y=-2', 'x=4, y=1'],
        correctOption: 0 // Sumando: 3x = 9 => x=3. Sustituyendo: 3 + y = 5 => y=2.
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: '¿Cuál es el grado de la ecuación 5x³ - 2x + 1 = 0?',
        options: ['3', '1', '5', '2'],
        correctOption: 0 // El mayor exponente de la variable.
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'La ecuación x/2 + 3 = 5 se resuelve como:',
        options: ['x = 4', 'x = 1', 'x = 16', 'x = 8'],
        correctOption: 0 // x/2 = 5 - 3 => x/2 = 2 => x = 4.
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: '¿Las soluciones de x² = 16 son?',
        options: ['x=4, x=-4', 'x=4', 'x=-4', 'x=8, x=-8'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'En la ecuación 3x² - 5x + 2 = 0, ¿cuáles son los coeficientes a, b y c?',
        options: ['a=3, b=-5, c=2', 'a=3, b=5, c=2', 'a=-5, b=3, c=2', 'a=2, b=-5, c=3'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: '¿Qué tipo de ecuación es 5/x + x = 3?',
        options: ['Racional (conduce a cuadrática)', 'Lineal', 'Exponencial', 'Logarítmica'],
        correctOption: 0 // Al multiplicar por x, queda 5 + x² = 3x => x² - 3x + 5 = 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Geométricamente, la solución de un sistema de dos ecuaciones lineales con dos incógnitas representa:',
        options: ['El punto de intersección de dos rectas', 'La pendiente de una recta', 'La distancia entre dos puntos', 'El área de un triángulo'],
        correctOption: 0
    },
    {
        theme: 'Álgebra: Ecuaciones',
        question: 'Si al resolver un sistema por reducción llegas a 0 = 0, el sistema es:',
        options: ['Compatible indeterminado (infinitas soluciones)', 'Incompatible (sin solución)', 'Compatible determinado (solución única)', 'Erróneo'],
        correctOption: 0
    },

    // --- TEMA 5: Polinomios (25 preguntas) ---
    {
        theme: 'Polinomios',
        question: '¿Cuál es el grado del polinomio P(x) = 3x⁴ - 5x² + 7x - 1?',
        options: ['4', '3', '7', '1'],
        correctOption: 0
    },
    {
        theme: 'Polinomios',
        question: 'Dado P(x) = 2x² + x - 3 y Q(x) = x² - 5x + 1, calcula P(x) + Q(x).',
        options: ['3x² - 4x - 2', 'x² + 6x - 4', '3x² + 6x - 2', '3x² - 4x + 2'],
        correctOption: 0 // (2+1)x² + (1-5)x + (-3+1) = 3x² - 4x - 2
    },
    {
        theme: 'Polinomios',
        question: 'Dado P(x) = x + 2 y Q(x) = x - 1, calcula P(x) * Q(x).',
        options: ['x² + x - 2', 'x² - 2', 'x² - x + 2', '2x + 1'],
        correctOption: 0 // x(x-1) + 2(x-1) = x² - x + 2x - 2 = x² + x - 2
    },
    {
        theme: 'Polinomios',
        question: '¿Qué es el valor numérico de un polinomio P(x) para x = a?',
        options: ['El resultado de sustituir x por a en P(x)', 'El grado del polinomio', 'El coeficiente principal', 'La derivada de P(x) en a'],
        correctOption: 0
    },
    {
        theme: 'Polinomios',
        question: 'Calcula el valor numérico de P(x) = x³ - 2x + 4 para x = 2.',
        options: ['8', '4', '0', '12'],
        correctOption: 0 // P(2) = 2³ - 2(2) + 4 = 8 - 4 + 4 = 8
    },
    {
        theme: 'Polinomios',
        question: 'La Regla de Ruffini se utiliza para dividir un polinomio por:',
        options: ['Un binomio de la forma (x - a)', 'Un monomio', 'Cualquier polinomio', 'Un número'],
        correctOption: 0
    },
    {
        theme: 'Polinomios',
        question: 'Al dividir P(x) entre (x - a), el resto de la división es igual a:',
        options: ['P(a) (Teorema del Resto)', 'P(0)', 'El cociente', 'El grado de P(x)'],
        correctOption: 0
    },
    {
        theme: 'Polinomios',
        question: 'Calcula el resto de dividir (x³ + x² - 5x + 3) entre (x - 1) usando el Teorema del Resto.',
        options: ['0', '1', '-1', '3'],
        correctOption: 0 // P(1) = 1³ + 1² - 5(1) + 3 = 1 + 1 - 5 + 3 = 0
    },
    {
        theme: 'Polinomios',
        question: 'Si el resto de dividir P(x) entre (x - a) es 0, entonces:',
        options: ['x = a es una raíz de P(x) y (x - a) es un factor', 'P(x) no tiene raíces reales', 'a = 0', 'El grado de P(x) es 1'],
        correctOption: 0
    },
    {
        theme: 'Polinomios',
        question: 'Desarrolla la identidad notable (x + 3)². ',
        options: ['x² + 6x + 9', 'x² + 9', 'x² - 6x + 9', 'x² + 3x + 9'],
        correctOption: 0 // (a+b)² = a² + 2ab + b²
    },
    {
        theme: 'Polinomios',
        question: 'Desarrolla la identidad notable (2x - 1)². ',
        options: ['4x² - 4x + 1', '4x² - 1', '2x² - 4x + 1', '4x² + 4x + 1'],
        correctOption: 0 // (a-b)² = a² - 2ab + b²
    },
    {
        theme: 'Polinomios',
        question: 'Desarrolla la identidad notable (x + 5)(x - 5).',
        options: ['x² - 25', 'x² + 25', 'x² - 10x + 25', 'x² + 10x + 25'],
        correctOption: 0 // (a+b)(a-b) = a² - b²
    },
    {
        theme: 'Polinomios',
        question: 'Factoriza el polinomio x² - 4x.',
        options: ['x(x - 4)', '(x - 2)(x + 2)', 'x(x + 4)', 'No se puede factorizar'],
        correctOption: 0 // Factor común x
    },
    {
        theme: 'Polinomios',
        question: 'Factoriza el polinomio x² - 4x + 4.',
        options: ['(x - 2)²', '(x + 2)²', '(x - 2)(x + 2)', 'x(x - 4) + 4'],
        correctOption: 0 // Identidad notable (a-b)²
    },
    {
        theme: 'Polinomios',
        question: 'Factoriza el polinomio x² - 9.',
        options: ['(x + 3)(x - 3)', '(x - 3)²', '(x + 3)²', 'x(x - 9)'],
        correctOption: 0 // Identidad notable a² - b²
    },
    {
        theme: 'Polinomios',
        question: 'Una raíz de un polinomio P(x) es un valor \'a\' tal que:',
        options: ['P(a) = 0', 'P(a) = 1', 'P(0) = a', 'El grado es \'a\''],
        correctOption: 0
    },
    {
        theme: 'Polinomios',
        question: '¿Cuál es el primer paso habitual para factorizar un polinomio?',
        options: ['Sacar factor común si es posible', 'Aplicar Ruffini', 'Usar identidades notables', 'Calcular el valor numérico'],
        correctOption: 0
    },
    {
        theme: 'Polinomios',
        question: 'Simplifica la fracción algebraica (x² - 1) / (x + 1).',
        options: ['x - 1', 'x + 1', 'x² + 1', '1 / (x + 1)'],
        correctOption: 0 // (x-1)(x+1) / (x+1) = x - 1
    },
    {
        theme: 'Polinomios',
        question: 'El grado del producto de dos polinomios es:',
        options: ['La suma de sus grados', 'El producto de sus grados', 'El mayor de sus grados', 'El menor de sus grados'],
        correctOption: 0
    },
    {
        theme: 'Polinomios',
        question: '¿Qué es una fracción algebraica?',
        options: ['El cociente de dos polinomios', 'Un polinomio con exponentes fraccionarios', 'Una ecuación con polinomios', 'Un número racional'],
        correctOption: 0
    },
    {
        theme: 'Polinomios',
        question: 'Al dividir x³ + 8 entre x + 2, ¿el resto es cero?',
        options: ['Sí', 'No', 'Depende del cociente', 'Siempre es 1'],
        correctOption: 0 // Teorema del resto: P(-2) = (-2)³ + 8 = -8 + 8 = 0. Sí, x+2 es factor.
    },
    {
        theme: 'Polinomios',
        question: 'Calcula (x² + 1) - (x² - 1).',
        options: ['2', '0', '2x²', '-2'],
        correctOption: 0 // x² + 1 - x² + 1 = 2
    },
    {
        theme: 'Polinomios',
        question: '¿Un polinomio de grado n puede tener como máximo...?',
        options: ['n raíces reales', 'n+1 raíces reales', 'n-1 raíces reales', '2n raíces reales'],
        correctOption: 0
    },
    {
        theme: 'Polinomios',
        question: '¿El término independiente de P(x) = 5x³ - x + 6 es?',
        options: ['6', '5', '-1', '0'],
        correctOption: 0 // El término sin x, equivale a P(0).
    },
    {
        theme: 'Polinomios',
        question: 'Calcula 2x * (x² - 3x + 5).',
        options: ['2x³ - 6x² + 10x', '2x² - 6x + 10', '2x³ - 3x + 5', '2x³ - 6x² + 5'],
        correctOption: 0 // Aplicar distributiva.
    },

    // --- TEMA 6: Estadística Descriptiva (25 preguntas) ---
    {
        theme: 'Estadística Descriptiva',
        question: '¿Qué tipo de variable es el "color de ojos"?',
        options: ['Cualitativa nominal', 'Cuantitativa discreta', 'Cuantitativa continua', 'Cualitativa ordinal'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: '¿Qué tipo de variable es el "número de hermanos"?',
        options: ['Cuantitativa discreta', 'Cualitativa nominal', 'Cuantitativa continua', 'Cualitativa ordinal'],
        correctOption: 0 // Se cuenta, no se mide, valores aislados.
    },
    {
        theme: 'Estadística Descriptiva',
        question: '¿Qué tipo de variable es la "altura de una persona"?',
        options: ['Cuantitativa continua', 'Cuantitativa discreta', 'Cualitativa nominal', 'Cualitativa ordinal'],
        correctOption: 0 // Puede tomar cualquier valor en un intervalo.
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'La media aritmética de los datos 2, 4, 6 es:',
        options: ['4', '3', '6', '12'],
        correctOption: 0 // (2+4+6) / 3 = 12 / 3 = 4
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'La mediana de los datos 2, 5, 1, 8, 3 es:',
        options: ['3', '2.8', '5', '1'],
        correctOption: 0 // Ordenados: 1, 2, 3, 5, 8. El valor central es 3.
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'La moda de los datos 2, 3, 5, 3, 7, 3, 1 es:',
        options: ['3', '7', '1', 'No tiene moda'],
        correctOption: 0 // El valor que más se repite.
    },
    {
        theme: 'Estadística Descriptiva',
        question: '¿Qué parámetro de centralización se ve más afectado por valores extremos?',
        options: ['La media', 'La mediana', 'La moda', 'Los cuartiles'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'El recorrido (o rango) de los datos 10, 15, 12, 18, 11 es:',
        options: ['8', '18', '10', '5'],
        correctOption: 0 // Max - Min = 18 - 10 = 8
    },
    {
        theme: 'Estadística Descriptiva',
        question: '¿Qué medida de dispersión indica la separación promedio de los datos respecto a la media?',
        options: ['Desviación típica', 'Recorrido', 'Mediana', 'Moda'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'La varianza es:',
        options: ['El cuadrado de la desviación típica', 'La raíz cuadrada de la desviación típica', 'Igual a la desviación típica', 'El rango intercuartílico'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: '¿Qué gráfico es adecuado para representar frecuencias de variables cualitativas?',
        options: ['Diagrama de barras o de sectores', 'Histograma', 'Polígono de frecuencias', 'Diagrama de caja'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: '¿Qué gráfico se utiliza principalmente para representar frecuencias de variables cuantitativas continuas agrupadas en intervalos?',
        options: ['Histograma', 'Diagrama de barras', 'Diagrama de sectores', 'Pictograma'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'El primer cuartil (Q1) deja por debajo de sí al...',
        options: ['25% de los datos', '50% de los datos', '75% de los datos', '10% de los datos'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'La mediana coincide con el...',
        options: ['Segundo cuartil (Q2)', 'Primer cuartil (Q1)', 'Tercer cuartil (Q3)', 'Percentil 25'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'El tercer cuartil (Q3) deja por debajo de sí al...',
        options: ['75% de los datos', '25% de los datos', '50% de los datos', '90% de los datos'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'El rango intercuartílico (IQR) se calcula como:',
        options: ['Q3 - Q1', 'Q3 + Q1', 'Q2 - Q1', 'Q3 - Q2'],
        correctOption: 0
    },
     {
        theme: 'Estadística Descriptiva',
        question: 'En un diagrama de sectores, ¿qué representa el ángulo de cada sector?',
        options: ['La frecuencia relativa (proporcionalmente)', 'La frecuencia absoluta', 'El valor de la variable', 'El número total de datos'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'La frecuencia absoluta (fi) de un valor es:',
        options: ['El número de veces que aparece ese valor', 'El porcentaje de veces que aparece', 'La suma de las frecuencias anteriores', 'El valor dividido por el total'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'La frecuencia relativa (hi) se calcula como:',
        options: ['Frecuencia absoluta / Número total de datos (fi / N)', 'Frecuencia absoluta * 100', 'Número total de datos / Frecuencia absoluta', 'Frecuencia absoluta acumulada'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'La suma de todas las frecuencias relativas debe ser:',
        options: ['1', '100', 'El número total de datos (N)', '0'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: '¿Qué es la frecuencia absoluta acumulada (Fi)?',
        options: ['La suma de las frecuencias absolutas de los valores menores o iguales al considerado', 'La suma de todas las frecuencias absolutas', 'La frecuencia relativa acumulada', 'El porcentaje acumulado'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: '¿Qué indica una desviación típica pequeña?',
        options: ['Los datos están muy agrupados alrededor de la media', 'Los datos están muy dispersos', 'La media y la mediana son iguales', 'Hay muchos valores atípicos'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'Para calcular la media de datos agrupados en intervalos, se utiliza:',
        options: ['La marca de clase de cada intervalo', 'El límite inferior del intervalo', 'El límite superior del intervalo', 'La amplitud del intervalo'],
        correctOption: 0 // Marca de clase = punto medio del intervalo
    },
    {
        theme: 'Estadística Descriptiva',
        question: 'Un polígono de frecuencias se construye uniendo los puntos medios de la parte superior de las barras de un...',
        options: ['Histograma', 'Diagrama de sectores', 'Diagrama de caja', 'Pictograma'],
        correctOption: 0
    },
    {
        theme: 'Estadística Descriptiva',
        question: '¿Qué medida de centralización es preferible usar si hay valores muy extremos en los datos?',
        options: ['La mediana', 'La media', 'El rango', 'La desviación típica'],
        correctOption: 0 // La mediana es más robusta a outliers
    },

    // --- TEMA 7: Probabilidad (Compuesta, Condicionada, Bayes) (25 preguntas) ---
    {
        theme: 'Probabilidad',
        question: 'La probabilidad de un suceso seguro es:',
        options: ['1', '0', '0.5', 'Depende del suceso'],
        correctOption: 0
    },
    {
        theme: 'Probabilidad',
        question: 'La probabilidad de un suceso imposible es:',
        options: ['0', '1', '-1', 'Infinito'],
        correctOption: 0
    },
    {
        theme: 'Probabilidad',
        question: 'Si P(A) = 0.6, ¿cuál es la probabilidad del suceso contrario P(Aᶜ)?',
        options: ['0.4', '0.6', '1', '0'],
        correctOption: 0 // P(Aᶜ) = 1 - P(A) = 1 - 0.6 = 0.4
    },
    {
        theme: 'Probabilidad',
        question: 'Al lanzar un dado, ¿cuál es la probabilidad de sacar un número par?',
        options: ['1/2', '1/3', '1/6', '2/3'],
        correctOption: 0 // Casos favorables (2, 4, 6) = 3. Casos posibles = 6. P = 3/6 = 1/2.
    },
    {
        theme: 'Probabilidad',
        question: 'Se lanzan dos monedas. ¿Cuál es la probabilidad de obtener dos caras (CC)?',
        options: ['1/4', '1/2', '1/3', '2/4'],
        correctOption: 0 // Espacio muestral: {CC, CX, XC, XX}. 1 caso favorable de 4 posibles.
    },
    {
        theme: 'Probabilidad',
        question: 'Si A y B son sucesos independientes, P(A ∩ B) es igual a:',
        options: ['P(A) * P(B)', 'P(A) + P(B)', 'P(A | B)', 'P(B | A)'],
        correctOption: 0
    },
    {
        theme: 'Probabilidad',
        question: 'La fórmula de la probabilidad condicionada P(A|B) es:',
        options: ['P(A ∩ B) / P(B)', 'P(A ∩ B) / P(A)', 'P(A) * P(B)', 'P(B) / P(A)'],
        correctOption: 0
    },
    {
        theme: 'Probabilidad',
        question: 'En una baraja española de 40 cartas, ¿cuál es la probabilidad de sacar un As?',
        options: ['1/10', '1/40', '4/10', '1/4'],
        correctOption: 0 // Hay 4 Ases. P = 4/40 = 1/10.
    },
    {
        theme: 'Probabilidad',
        question: 'En una urna hay 3 bolas rojas y 2 azules. Se extrae una bola al azar. ¿Cuál es la probabilidad de que sea roja?',
        options: ['3/5', '2/5', '1/3', '1/2'],
        correctOption: 0 // Total 5 bolas. Favorables 3. P = 3/5.
    },
    {
        theme: 'Probabilidad',
        question: 'Se lanza un dado. Si ha salido un número par, ¿cuál es la probabilidad de que sea el 2?',
        options: ['1/3', '1/6', '1/2', '2/6'],
        correctOption: 0 // Espacio reducido {2, 4, 6}. 1 caso favorable de 3 posibles. P(2 | Par) = P(2 ∩ Par)/P(Par) = P(2)/P(Par) = (1/6)/(3/6) = 1/3.
    },
    {
        theme: 'Probabilidad',
        question: '¿Qué herramienta gráfica es útil para calcular probabilidades en experimentos compuestos secuenciales?',
        options: ['Diagrama de árbol', 'Histograma', 'Diagrama de sectores', 'Tabla de contingencia'],
        correctOption: 0
    },
    {
        theme: 'Probabilidad',
        question: '¿Qué herramienta se usa para organizar datos de dos variables categóricas y calcular probabilidades conjuntas y marginales?',
        options: ['Tabla de contingencia', 'Diagrama de árbol', 'Polígono de frecuencias', 'Diagrama de caja'],
        correctOption: 0
    },
    {
        theme: 'Probabilidad',
        question: 'Si P(A)=0.5, P(B)=0.4 y P(A∪B)=0.7, ¿cuánto es P(A∩B)?',
        options: ['0.2', '0.9', '0.1', '0.3'],
        correctOption: 0 // P(A∪B) = P(A) + P(B) - P(A∩B) => 0.7 = 0.5 + 0.4 - P(A∩B) => 0.7 = 0.9 - P(A∩B) => P(A∩B) = 0.2
    },
    {
        theme: 'Probabilidad',
        question: 'Dos sucesos son incompatibles o mutuamente excluyentes si:',
        options: ['Su intersección es vacía (P(A ∩ B) = 0)', 'Son independientes', 'Su unión es el espacio muestral', 'Tienen la misma probabilidad'],
        correctOption: 0
    },
    {
        theme: 'Probabilidad',
        question: 'El Teorema de la Probabilidad Total se utiliza para calcular la probabilidad de un suceso a partir de:',
        options: ['Las probabilidades condicionadas a una partición del espacio muestral', 'La independencia de los sucesos', 'La probabilidad de la unión', 'La probabilidad del contrario'],
        correctOption: 0
    },
    {
        theme: 'Probabilidad',
        question: 'El Teorema de Bayes permite calcular:',
        options: ['P(A|B) conociendo P(B|A)', 'P(A ∪ B)', 'P(A ∩ B) si son independientes', 'La probabilidad total'],
        correctOption: 0 // Calcula probabilidades "a posteriori"
    },
    {
        theme: 'Probabilidad',
        question: 'Se extraen dos cartas de una baraja española SIN reemplazamiento. Si la primera es un Rey, ¿cuál es la probabilidad de que la segunda también sea Rey?',
        options: ['3/39', '4/40', '3/40', '4/39'],
        correctOption: 0 // Quedan 39 cartas, y 3 Reyes. P(Rey2 | Rey1) = 3/39.
    },
    {
        theme: 'Probabilidad',
        question: 'Se extraen dos cartas de una baraja española CON reemplazamiento. ¿Cuál es la probabilidad de sacar dos Reyes?',
        options: ['(4/40) * (4/40)', '(4/40) * (3/39)', '4/40 + 4/40', '4/40'],
        correctOption: 0 // Son independientes. P(Rey1 y Rey2) = P(Rey1) * P(Rey2) = (4/40) * (4/40).
    },
    {
        theme: 'Probabilidad',
        question: 'En una clase, el 70% aprueba Matemáticas, el 60% aprueba Física y el 40% aprueba ambas. ¿Qué probabilidad hay de aprobar al menos una?',
        options: ['0.9', '1.3', '0.5', '0.8'],
        correctOption: 0 // P(M∪F) = P(M) + P(F) - P(M∩F) = 0.7 + 0.6 - 0.4 = 0.9
    },
    {
        theme: 'Probabilidad',
        question: '¿Cuándo se dice que dos sucesos A y B son independientes?',
        options: ['Si P(A|B) = P(A) o P(B|A) = P(B) (o si P(A∩B)=P(A)P(B))', 'Si P(A∩B) = 0', 'Si P(A∪B) = 1', 'Si P(A) = P(B)'],
        correctOption: 0
    },
     {
        theme: 'Probabilidad',
        question: 'La probabilidad siempre es un número entre:',
        options: ['0 y 1', '-1 y 1', '0 e infinito', '1 y 100'],
        correctOption: 0
    },
    {
        theme: 'Probabilidad',
        question: 'Una urna contiene 5 bolas blancas y 3 negras. Se extraen dos bolas SIN reemplazamiento. Probabilidad de que ambas sean blancas:',
        options: ['(5/8) * (4/7)', '(5/8) * (5/8)', '5/8 + 4/7', '5/8'],
        correctOption: 0 // P(B1 ∩ B2) = P(B1) * P(B2|B1) = (5/8) * (4/7)
    },
    {
        theme: 'Probabilidad',
        question: 'La ley de Laplace (casos favorables / casos posibles) solo se aplica si:',
        options: ['Los sucesos elementales son equiprobables', 'Los sucesos son independientes', 'Los sucesos son incompatibles', 'La probabilidad es condicionada'],
        correctOption: 0
    },
    {
        theme: 'Probabilidad',
        question: 'Si A está contenido en B (A ⊆ B), entonces P(A|B) es:',
        options: ['P(A) / P(B)', 'P(A)', 'P(B)', '1'],
        correctOption: 0 // P(A|B) = P(A∩B)/P(B). Si A ⊆ B, entonces A∩B = A. Luego P(A|B) = P(A)/P(B).
    },
    {
        theme: 'Probabilidad',
        question: 'Experimento aleatorio es aquel cuyo resultado:',
        options: ['No se puede predecir con certeza', 'Siempre es el mismo', 'Es equiprobable', 'Sigue una distribución normal'],
        correctOption: 0
    },

    // --- TEMA 8: Distribuciones de Probabilidad (Normal y Binomial) (25 preguntas) ---
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'Una variable aleatoria que solo puede tomar un número finito o infinito numerable de valores se llama:',
        options: ['Discreta', 'Continua', 'Normal', 'Binomial'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'Una variable aleatoria que puede tomar cualquier valor dentro de un intervalo se llama:',
        options: ['Continua', 'Discreta', 'Bernoulli', 'Poisson'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'La función que asigna a cada valor de una v.a. discreta su probabilidad se llama:',
        options: ['Función de probabilidad o de masa', 'Función de distribución', 'Función de densidad', 'Varianza'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'La función F(x) = P(X ≤ x) se llama:',
        options: ['Función de distribución (acumulada)', 'Función de probabilidad', 'Función de densidad', 'Esperanza matemática'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'La esperanza matemática E[X] de una variable aleatoria representa su:',
        options: ['Valor medio esperado', 'Varianza', 'Desviación típica', 'Moda'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: '¿Qué mide la varianza Var(X) de una variable aleatoria?',
        options: ['La dispersión de los valores respecto a la media', 'El valor más probable', 'La probabilidad acumulada', 'El valor esperado'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'La distribución Binomial B(n, p) modela el número de éxitos en:',
        options: ['n ensayos de Bernoulli independientes con probabilidad de éxito p', 'Un único ensayo', 'Un proceso continuo', 'Experimentos dependientes'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'En una B(n, p), ¿cuál es la fórmula de la probabilidad P(X=k)?',
        options: ['(n choose k) * p^k * (1-p)^(n-k)', 'n * p', 'n * p * (1-p)', 'p^k'],
        correctOption: 0 // (n choose k) es el número combinatorio n sobre k
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'La media de una distribución Binomial B(n, p) es:',
        options: ['n * p', 'n * p * (1-p)', 'p', 'n'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'La varianza de una distribución Binomial B(n, p) es:',
        options: ['n * p * (1-p)', 'n * p', '√(n * p * (1-p))', '(1-p)'],
        correctOption: 0 // (1-p) también se escribe como q
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'Se lanza una moneda 10 veces. Sea X = número de caras. ¿Qué distribución sigue X?',
        options: ['Binomial B(10, 0.5)', 'Normal', 'Bernoulli', 'Poisson'],
        correctOption: 0 // n=10, p=0.5 (probabilidad de cara)
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: '¿Qué forma tiene la gráfica de la función de densidad de una distribución Normal?',
        options: ['Campana de Gauss', 'Rectangular', 'Triangular', 'Exponencial'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'La distribución Normal N(μ, σ) está caracterizada por:',
        options: ['Su media μ y su desviación típica σ', 'n y p', 'Solo la media', 'Solo la desviación típica'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'La distribución Normal estándar es una N(μ, σ) con:',
        options: ['μ = 0, σ = 1', 'μ = 1, σ = 0', 'μ = 0, σ = 0', 'μ = 1, σ = 1'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: '¿Para qué sirve la tipificación de una variable Normal X ~ N(μ, σ)?',
        options: ['Para convertirla en una Normal estándar Z ~ N(0, 1) y usar tablas', 'Para calcular su media', 'Para calcular su varianza', 'Para convertirla en Binomial'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'La fórmula de tipificación para una variable X ~ N(μ, σ) es Z = ...',
        options: ['(X - μ) / σ', '(X - σ) / μ', 'X / μ', '(X - μ) * σ'],
        correctOption: 0
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'En una N(0, 1), ¿qué probabilidad aproximada hay entre -1 y 1 desviaciones típicas?',
        options: ['68%', '95%', '99.7%', '50%'],
        correctOption: 0 // Regla 68-95-99.7
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'En una N(0, 1), ¿qué probabilidad aproximada hay entre -2 y 2 desviaciones típicas?',
        options: ['95%', '68%', '99.7%', '90%'],
        correctOption: 1
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'Si Z ~ N(0, 1), P(Z ≤ 0) es:',
        options: ['0.5', '0', '1', '0.68'],
        correctOption: 0 // La Normal es simétrica respecto a la media 0.
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: '¿Cuándo se puede aproximar una Binomial B(n, p) por una Normal?',
        options: ['Cuando n es grande y np ≥ 5 y n(1-p) ≥ 5', 'Siempre', 'Nunca', 'Cuando p es cercano a 0.5'],
        correctOption: 0 // Criterio habitual
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'Al aproximar B(n, p) por N(μ, σ), ¿qué valores se usan para μ y σ?',
        options: ['μ = np, σ = √(np(1-p))', 'μ = n, σ = p', 'μ = p, σ = n', 'μ = np, σ = np(1-p)'],
        correctOption: 0 // Se usa la media y desviación típica de la Binomial
    },
    {
        theme: 'Distribuciones de Probabilidad',
        question: 'En una v.a. continua, la probabilidad P(X = a) para cualquier valor 'a' es:',
        options: ['0', '1', 'Depende de 'a'', 'Igual a la función de densidad en 'a''],
        correctOption: 0 // La probabilidad solo se define para intervalos.
    },
     {
        theme: 'Distribuciones de Probabilidad',
        question: 'El área total bajo la curva de cualquier función de densidad es siempre:',
        options: ['1', '0', 'Infinita', 'Depende de la distribución'],
        correctOption: 0
    },
     {
        theme: 'Distribuciones de Probabilidad',
        question: 'Si las alturas de una población siguen una N(170, 5), ¿qué significa σ=5?',
        options: ['La desviación típica de las alturas es 5 cm', 'La altura media es 5 cm', 'La varianza es 5 cm²', 'El rango es 5 cm'],
        correctOption: 0
    },
     {
        theme: 'Distribuciones de Probabilidad',
        question: 'Un ensayo de Bernoulli es un experimento con solo dos resultados posibles, llamados habitualmente:',
        options: ['Éxito y Fracaso', 'Cara y Cruz', 'Sí y No', 'Verdadero y Falso'],
        correctOption: 0
    }
];

// 1. Convertir el array a una cadena de texto JSON
const questionBankJSON = JSON.stringify(questionBank);

// 2. Guardar en localStorage con una clave (por ejemplo, 'myQuestionBank')
localStorage.setItem('questionBank', questionBankJSON);

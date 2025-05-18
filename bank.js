// bank.js
const questionBank = [
    {
        theme: 'La observación meteorológica',
        question: '¿Qué variable meteorológica mide un termómetro?',
        options: ['La presión atmosférica', 'La temperatura del aire', 'La velocidad del viento'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Cuál es la unidad de medida estándar para la presión atmosférica en meteorología?',
        options: ['Grados Celsius (°C)', 'Hectopascales (hPa)', 'Metros por segundo (m/s)'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué instrumento se utiliza para medir la dirección del viento?',
        options: ['Anemómetro', 'Veleta', 'Higrómetro'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'La cantidad de vapor de agua presente en el aire se conoce como:',
        options: ['Precipitación', 'Humedad', 'Nubosidad'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué mide un pluviómetro?',
        options: ['La cantidad de nieve caída', 'La cantidad de lluvia recogida en un periodo determinado', 'La intensidad de la radiación solar'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿En qué unidad se expresa comúnmente la velocidad del viento en los informes meteorológicos?',
        options: ['Kilómetros por hora (km/h) o nudos (kt)', 'Grados Fahrenheit (°F)', 'Milímetros (mm)'],
        correctOption: 0
    },
    {
        theme: 'La observación meteorológica',
        question: 'El instrumento que combina la medición de la velocidad y la dirección del viento se llama:',
        options: ['Barómetro aneroide', 'Anemoveleta o cinemómetro', 'Termohigrógrafo'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué es la "sensación térmica"?',
        options: ['La temperatura real del aire medida por un termómetro.', 'La temperatura que percibe el cuerpo humano, influenciada por el viento y la humedad.', 'La temperatura del punto de rocío.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Para qué se utiliza una garita meteorológica (o abrigo meteorológico)?',
        options: ['Para proteger los instrumentos de la lluvia directa y permitir la observación de nubes.', 'Para proteger los instrumentos de medición de la radiación solar directa y la precipitación, asegurando una ventilación adecuada.', 'Para almacenar los registros de las observaciones meteorológicas.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'La visibilidad horizontal se define como:',
        options: ['La distancia máxima a la que se puede ver y reconocer un objeto negro de tamaño especificado contra el cielo en el horizonte.', 'La altura a la que se encuentra la base de las nubes.', 'La cantidad de cielo cubierto por nubes.'],
        correctOption: 0
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué variable mide un higrómetro?',
        options: ['La temperatura', 'La presión atmosférica', 'La humedad relativa del aire'],
        correctOption: 2
    },
    {
        theme: 'La observación meteorológica',
        question: 'El "punto de rocío" es la temperatura a la cual:',
        options: ['El agua comienza a hervir a una presión dada.', 'El aire se satura de vapor de agua y comienza la condensación.', 'La nieve comienza a derretirse.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué tipo de nube se asocia comúnmente con tormentas y fuertes precipitaciones?',
        options: ['Cirrus', 'Cumulonimbus', 'Stratus'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'La nubosidad se expresa generalmente en:',
        options: ['Porcentaje de cielo cubierto', 'Octas (octavos de cielo cubierto)', 'Kilómetros de espesor'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'Un barómetro de mercurio mide la presión atmosférica basándose en:',
        options: ['La deformación de una cápsula metálica al vacío.', 'La altura de una columna de mercurio en un tubo de vidrio.', 'La velocidad del sonido en el aire.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Cuál de los siguientes es un tipo de precipitación sólida?',
        options: ['Llovizna', 'Granizo', 'Niebla'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿A qué altura estándar sobre el nivel del suelo se suele medir la temperatura del aire?',
        options: ['A nivel del suelo exacto.', 'Entre 1.25 y 2 metros.', 'A 10 metros de altura.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'La radiación solar directa es medida por un:',
        options: ['Piranómetro', 'Heliógrafo', 'Pirheliómetro'],
        correctOption: 2
    },
    {
        theme: 'La observación meteorológica',
        question: 'Un nefoscopio se utiliza para determinar:',
        options: ['La altura de la base de las nubes.', 'La dirección y velocidad aparente del movimiento de las nubes.', 'El tipo de precipitación.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué es un radiosondeo?',
        options: ['Un informe meteorológico generado por un radar.', 'El lanzamiento de un globo con instrumentos para medir variables en la alta atmósfera.', 'Un pronóstico del tiempo a muy corto plazo.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'La unidad "nudo" (kt) utilizada para la velocidad del viento equivale a:',
        options: ['Un kilómetro por hora.', 'Una milla náutica por hora.', 'Un metro por segundo.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué es la evaporación?',
        options: ['El proceso por el cual el agua pasa de estado líquido a gaseoso.', 'El proceso por el cual el vapor de agua pasa a estado líquido.', 'La caída de agua, líquida o sólida, desde la atmósfera a la superficie terrestre.'],
        correctOption: 0
    },
    {
        theme: 'La observación meteorológica',
        question: 'Un psicrómetro se compone de dos termómetros, uno seco y otro húmedo, y se utiliza para determinar:',
        options: ['La presión atmosférica y su tendencia.', 'La humedad relativa y el punto de rocío.', 'La temperatura máxima y mínima del día.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Cuál de los siguientes fenómenos NO es una forma de precipitación?',
        options: ['Nieve', 'Rocío', 'Lluvia engelante'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'La observación de la dirección del viento se refiere a:',
        options: ['La dirección hacia la cual sopla el viento.', 'La dirección desde la cual sopla el viento.', 'La velocidad máxima que alcanza el viento.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué información principal proporciona un radar meteorológico?',
        options: ['La temperatura y humedad en diferentes capas de la atmósfera.', 'La ubicación, intensidad y movimiento de las zonas de precipitación.', 'La cobertura nubosa y el tipo de nubes.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'Un termómetro de máxima y mínima registra:',
        options: ['La temperatura actual y la media del día.', 'Las temperaturas más alta y más baja alcanzadas en un periodo.', 'La temperatura a diferentes profundidades del suelo.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'El "tiempo presente" en una observación meteorológica se refiere a:',
        options: ['Las condiciones atmosféricas predominantes en el momento de la observación.', 'El pronóstico del tiempo para las próximas horas.', 'Un resumen del clima del mes anterior.'],
        correctOption: 0
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué variable se mide con un heliógrafo?',
        options: ['La duración del brillo solar (insolación).', 'La intensidad de la radiación ultravioleta.', 'La temperatura de la superficie del mar.'],
        correctOption: 0
    },
    {
        theme: 'La observación meteorológica',
        question: 'La presión atmosférica disminuye con:',
        options: ['El aumento de la altitud.', 'La disminución de la altitud.', 'El aumento de la temperatura a nivel del mar.'],
        correctOption: 0
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Cuál es el procedimiento básico para leer un termómetro de líquido en vidrio?',
        options: ['Leer el valor más alto que alcanza el líquido.', 'Colocar el ojo al nivel del menisco del líquido y leer la graduación correspondiente.', 'Agitar el termómetro vigorosamente antes de la lectura.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué es un "mapa sinóptico"?',
        options: ['Un mapa que muestra la distribución geográfica de los climas.', 'Un mapa que representa las condiciones meteorológicas sobre una amplia área en un momento específico.', 'Un mapa detallado de las corrientes oceánicas.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'La niebla es esencialmente:',
        options: ['Una nube de tipo alto y delgada.', 'Una nube de tipo stratus cuya base está en contacto con la superficie terrestre.', 'Humo y partículas de polvo en suspensión.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'Un piranómetro mide:',
        options: ['La radiación solar global (directa + difusa) sobre una superficie horizontal.', 'Únicamente la radiación solar difusa.', 'La duración de la luz solar.'],
        correctOption: 0
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Cómo se clasifican las nubes principalmente según su altitud?',
        options: ['Nubes frías, templadas y cálidas.', 'Nubes de tormenta, de lluvia y de buen tiempo.', 'Nubes altas, medias y bajas.'],
        correctOption: 2
    },
    {
        theme: 'La observación meteorológica',
        question: 'La "tendencia barométrica" se refiere a:',
        options: ['El valor actual de la presión atmosférica.', 'La variación de la presión atmosférica durante un periodo de tiempo determinado (generalmente 3 horas).', 'La presión atmosférica máxima registrada en el día.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Para qué se utiliza un evaporímetro o tanque de evaporación?',
        options: ['Para medir la cantidad de agua que se evapora desde una superficie de agua libre.', 'Para medir la humedad del suelo.', 'Para crear niebla artificialmente en laboratorios.'],
        correctOption: 0
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué significa la sigla OMM?',
        options: ['Observatorio Marino Mundial.', 'Organización Meteorológica Mundial.', 'Oficina de Medidas Meteorológicas.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'En el sistema de observación de nubes, "Cb" es la abreviatura de:',
        options: ['Cirrostratus', 'Cumulonimbus', 'Contralto (nube media)'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Cuál es el objetivo principal de realizar observaciones meteorológicas de forma regular y estandarizada?',
        options: ['Únicamente para la navegación aérea y marítima.', 'Para el estudio del clima, la predicción del tiempo y la investigación científica.', 'Para determinar los mejores lugares para la agricultura.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿A qué altura se instala normalmente un anemómetro para medir el viento estándar?',
        options: ['A 2 metros sobre el suelo.', 'A 10 metros sobre el suelo en un área despejada.', 'A la altura del techo del edificio de la estación meteorológica.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué es la "isobara"?',
        options: ['Una línea en un mapa meteorológico que une puntos de igual temperatura.', 'Una línea en un mapa meteorológico que une puntos de igual presión atmosférica.', 'Una línea en un mapa meteorológico que une puntos de igual altitud.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'El "albedo" de una superficie es:',
        options: ['La cantidad de radiación solar que absorbe.', 'La proporción de radiación solar que es reflejada por la superficie.', 'La temperatura que alcanza la superficie bajo el sol.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué instrumento se podría utilizar para medir la altura de la base de las nubes de forma automática?',
        options: ['Barómetro', 'Ceilómetro (Nefobasímetro láser)', 'Psicrómetro'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'La "precipitación oculta" se refiere a:',
        options: ['Lluvia muy ligera que apenas moja el suelo.', 'La deposición de agua en forma de rocío, escarcha o niebla helada.', 'La nieve que se derrite antes de llegar al suelo.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Cuál es la función de un pararrayos en una estación meteorológica?',
        options: ['Medir la cantidad de rayos durante una tormenta.', 'Proteger los equipos y personal de las descargas eléctricas atmosféricas.', 'Atraer los rayos para estudiar su composición.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'La observación de "fenómenos especiales" o "tiempo significativo" incluye reportar:',
        options: ['Solo la temperatura máxima y mínima.', 'Tormentas, niebla, granizo, ventiscas, etc.', 'La fase lunar y la marea.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Qué es un "climograma"?',
        options: ['Un gráfico que representa la variación horaria de la temperatura.', 'Un gráfico que muestra los valores medios mensuales de temperatura y precipitación de un lugar.', 'Un instrumento para medir la inclinación de los rayos solares.'],
        correctOption: 1
    },
    {
        theme: 'La observación meteorológica',
        question: 'Si se observa que el cielo está completamente cubierto de nubes, la nubosidad en octas es de:',
        options: ['0/8', '4/8', '8/8'],
        correctOption: 2
    },
    {
        theme: 'La observación meteorológica',
        question: '¿Por qué es importante la calibración periódica de los instrumentos meteorológicos?',
        options: ['Para asegurar que sigan funcionando, aunque las mediciones no sean precisas.', 'Para garantizar la exactitud y fiabilidad de los datos recolectados.', 'Para adaptar los instrumentos a las diferentes estaciones del año.'],
        correctOption: 1
    }
    // Puedes añadir aquí las preguntas de ejemplo de Historia, Ciencias, etc.,
    // si quieres que estén disponibles por defecto junto con las de meteorología.
    // Por ejemplo:
    // ,{
    //     theme: 'Historia',
    //     question: '¿En qué año comenzó la Segunda Guerra Mundial?',
    //     options: ['1939', '1941', '1945'],
    //     correctOption: 0
    // }
];

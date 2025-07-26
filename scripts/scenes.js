const scenes = {
    start: {
        id: 'start',
        text: 'Te despiertas en una habitación pixelada con dos puertas: una ROJA a la izquierda y una AZUL a la derecha. La luz parpadea y escuchas un zumbido electrónico en la distancia. En la mesa hay una LLAVE y una BOTELLA de agua.',
        options: [
            { text: 'Abrir la puerta ROJA', nextScene: 'redDoor' },
            { text: 'Abrir la puerta AZUL', nextScene: 'blueDoor' },
            { text: 'Tomar la LLAVE', nextScene: 'takeKey', requiresItem: null, givesItem: 'key' },
            { text: 'Tomar la BOTELLA', nextScene: 'takeBottle', requiresItem: null, givesItem: 'bottle' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(45deg, #292f36 0%, #292f36 45%, #ff6b6b 45%, #ff6b6b 55%, #292f36 55%, #292f36 100%),
                    linear-gradient(-45deg, #292f36 0%, #292f36 45%, #4ecdc4 45%, #4ecdc4 55%, #292f36 55%, #292f36 100%),
                    linear-gradient(0deg, #f7fff7 0%, #f7fff7 10%, #292f36 10%, #292f36 100%),
                    linear-gradient(90deg, transparent 0%, transparent 70%, #ffd166 70%, #ffd166 80%, transparent 80%, transparent 100%)`
            }}></div>
        )
    },
    takeKey: {
        id: 'takeKey',
        text: 'Has cogido la LLAVE brillante. Parece antigua pero bien conservada. ¿Qué puerta abrirá?',
        options: [
            { text: 'Abrir la puerta ROJA', nextScene: 'redDoor' },
            { text: 'Abrir la puerta AZUL', nextScene: 'blueDoor' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(45deg, #292f36 0%, #292f36 45%, #ff6b6b 45%, #ff6b6b 55%, #292f36 55%, #292f36 100%),
                    linear-gradient(-45deg, #292f36 0%, #292f36 45%, #4ecdc4 45%, #4ecdc4 55%, #292f36 55%, #292f36 100%),
                    linear-gradient(0deg, #f7fff7 0%, #f7fff7 10%, #292f36 10%, #292f36 100%),
                    linear-gradient(90deg, transparent 0%, transparent 70%, #ffd166 70%, #ffd166 80%, transparent 80%, transparent 100%)`
            }}></div>
        )
    },
    takeBottle: {
        id: 'takeBottle',
        text: 'Has cogido la BOTELLA de agua. El líquido brilla con un tono azulado. Podría ser útil más adelante.',
        options: [
            { text: 'Abrir la puerta ROJA', nextScene: 'redDoor' },
            { text: 'Abrir la puerta AZUL', nextScene: 'blueDoor' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(45deg, #292f36 0%, #292f36 45%, #ff6b6b 45%, #ff6b6b 55%, #292f36 55%, #292f36 100%),
                    linear-gradient(-45deg, #292f36 0%, #292f36 45%, #4ecdc4 45%, #4ecdc4 55%, #292f36 55%, #292f36 100%),
                    linear-gradient(0deg, #f7fff7 0%, #f7fff7 10%, #292f36 10%, #292f36 100%),
                    linear-gradient(90deg, transparent 0%, transparent 70%, #4ecdc4 70%, #4ecdc4 80%, transparent 80%, transparent 100%)`
            }}></div>
        )
    },
    redDoor: {
        id: 'redDoor',
        text: 'La puerta ROJA te lleva a un pasillo iluminado con luces de neón. Al final hay un ascensor y una escalera de emergencia. Hay un panel de control junto al ascensor que parece requerir una LLAVE.',
        options: [
            { text: 'Tomar el ASCENSOR (requiere LLAVE)', nextScene: 'elevator', requiresItem: 'key' },
            { text: 'Forzar el ASCENSOR sin llave', nextScene: 'forceElevator' },
            { text: 'Usar la ESCALERA', nextScene: 'stairs' },
            { text: 'Volver atrás', nextScene: 'start' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(90deg, #ff6b6b 0%, #ff6b6b 20%, #292f36 20%, #292f36 100%),
                    repeating-linear-gradient(0deg, #ff6b6b 0%, #ff6b6b 2%, transparent 2%, transparent 10%),
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 10%, #292f36 10%, #292f36 100%),
                    linear-gradient(90deg, transparent 0%, transparent 80%, #ffd166 80%, #ffd166 90%, transparent 90%, transparent 100%)`
            }}></div>
        )
    },
    forceElevator: {
        id: 'forceElevator',
        text: 'Intentas forzar el ascensor pero la puerta no se abre. De repente, una alarma comienza a sonar y las luces parpadean en rojo.',
        options: [
            { text: 'Correr hacia la ESCALERA', nextScene: 'stairs' },
            { text: 'Usar la BOTELLA de agua', nextScene: 'useBottleOnPanel', requiresItem: 'bottle' },
            { text: 'Intentar romper el panel', nextScene: 'breakPanel' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(90deg, #ff6b6b 0%, #ff6b6b 20%, #292f36 20%, #292f36 100%),
                    repeating-linear-gradient(0deg, #ff0000 0%, #ff0000 5%, transparent 5%, transparent 10%),
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 10%, #292f36 10%, #292f36 100%)`
            }}></div>
        )
    },
    useBottleOnPanel: {
        id: 'useBottleOnPanel',
        text: 'Viertes el líquido azulado sobre el panel. Sorprendentemente, el ascensor se activa y las puertas se abren. ¡El líquido era algún tipo de conductor eléctrico!',
        options: [
            { text: 'Entrar al ASCENSOR', nextScene: 'elevator' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(90deg, #ff6b6b 0%, #ff6b6b 20%, #292f36 20%, #292f36 100%),
                    repeating-linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 5%, transparent 5%, transparent 10%),
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 10%, #292f36 10%, #292f36 100%)`
            }}></div>
        )
    },
    breakPanel: {
        id: 'breakPanel',
        text: 'Golpeas el panel con todas tus fuerzas. Chispas vuelan por todas partes y el ascensor comienza a moverse de forma errática. Las puertas se abren pero parece peligroso entrar.',
        options: [
            { text: 'Arriesgarse y entrar', nextScene: 'dangerousElevator' },
            { text: 'Correr hacia la ESCALERA', nextScene: 'stairs' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(90deg, #ff6b6b 0%, #ff6b6b 20%, #292f36 20%, #292f36 100%),
                    repeating-linear-gradient(0deg, #ffd166 0%, #ffd166 5%, transparent 5%, transparent 10%),
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 10%, #292f36 10%, #292f36 100%)`
            }}></div>
        )
    },
    dangerousElevator: {
        id: 'dangerousElevator',
        text: 'El ascensor sube de forma brusca, deteniéndose en pisos aleatorios. Finalmente se detiene en un piso desconocido. La puerta se abre a un laboratorio lleno de pantallas de computadora.',
        options: [
            { text: 'Explorar el laboratorio', nextScene: 'labScene' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #292f36 0%, #292f36 70%, #ffd166 70%, #ffd166 100%),
                    repeating-linear-gradient(90deg, #f7fff7 0%, #f7fff7 5%, transparent 5%, transparent 10%),
                    linear-gradient(90deg, transparent 0%, transparent 40%, #ff6b6b 40%, #ff6b6b 60%, transparent 60%, transparent 100%)`
            }}></div>
        )
    },
    labScene: {
        id: 'labScene',
        text: 'En el laboratorio encuentras un terminal con un mensaje: "Sistema de control de simulación". Hay un botón grande rojo que dice "APAGADO".',
        options: [
            { text: 'Presionar el botón', nextScene: 'shutdownSystem' },
            { text: 'Buscar más información', nextScene: 'searchLab' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #292f36 0%, #292f36 70%, #ff6b6b 70%, #ff6b6b 80%, #292f36 80%, #292f36 100%),
                    repeating-linear-gradient(90deg, #f7fff7 0%, #f7fff7 5%, transparent 5%, transparent 10%)`
            }}></div>
        )
    },
    shutdownSystem: {
        id: 'shutdownSystem',
        text: 'Presionas el botón y todas las pantallas se apagan. De repente, todo a tu alrededor comienza a desvanecerse en un mar de píxeles. ¡Has encontrado la salida de la simulación! FINAL SECRETO.',
        final: true,
        achievement: 'Hacker de la Matrix',
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    repeating-linear-gradient(45deg, #ff6b6b 0%, #ff6b6b 5%, #4ecdc4 5%, #4ecdc4 10%, #ffd166 10%, #ffd166 15%, #f7fff7 15%, #f7fff7 20%)`
            }}></div>
        )
    },
    searchLab: {
        id: 'searchLab',
        text: 'Buscas en los archivos del laboratorio y encuentras un mapa de la instalación. Siguiendo las indicaciones, encuentras una salida secreta. ¡Has escapado!',
        final: true,
        achievement: 'Investigador Curioso',
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #292f36 0%, #292f36 70%, #4ecdc4 70%, #4ecdc4 100%),
                    repeating-linear-gradient(90deg, #f7fff7 0%, #f7fff7 5%, transparent 5%, transparent 10%)`
            }}></div>
        )
    },
    stairs: {
        id: 'stairs',
        text: 'Subes las escaleras de emergencia hasta el techo. Hay una cuerda que lleva al edificio contiguo y una antena con un cartel que dice "Transmisor de salida".',
        options: [
            { text: 'Usar la cuerda', nextScene: 'rope' },
            { text: 'Interactuar con la antena', nextScene: 'antenna' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #292f36 0%, #292f36 70%, #ff6b6b 70%, #ff6b6b 100%),
                    linear-gradient(90deg, transparent 0%, transparent 30%, #f7fff7 30%, #f7fff7 40%, transparent 40%, transparent 100%)`
            }}></div>
        )
    },
    rope: {
        id: 'rope',
        text: 'La cuerda parece vieja pero resistente. Logras cruzar al otro edificio y encuentras una salida de emergencia. ¡Has escapado!',
        final: true,
        achievement: 'Equilibrista Urbano',
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #292f36 0%, #292f36 70%, #ffd166 70%, #ffd166 100%),
                    linear-gradient(90deg, transparent 0%, transparent 40%, #4ecdc4 40%, #4ecdc4 60%, transparent 60%, transparent 100%)`
            }}></div>
        )
    },
    antenna: {
        id: 'antenna',
        text: 'Al activar la antena, recibes un mensaje: "Código de salida: PIXEL". El edificio comienza a desvanecerse alrededor tuyo. ¡Has encontrado la salida! FINAL SECRETO.',
        final: true,
        achievement: 'Hacker de Señales',
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    repeating-linear-gradient(45deg, #ff6b6b 0%, #ff6b6b 5%, #4ecdc4 5%, #4ecdc4 10%, #ffd166 10%, #ffd166 15%, #f7fff7 15%, #f7fff7 20%)`
            }}></div>
        )
    },
    elevator: {
        id: 'elevator',
        text: 'El ascensor sube rápidamente hasta el piso 100. La puerta se abre a un helipuerto con un DRON gigante esperando.',
        options: [
            { text: 'Subir al DRON', nextScene: 'drone' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #292f36 0%, #292f36 70%, #ffd166 70%, #ffd166 100%),
                    linear-gradient(90deg, transparent 0%, transparent 40%, #4ecdc4 40%, #4ecdc4 60%, transparent 60%, transparent 100%)`
            }}></div>
        )
    },
    drone: {
        id: 'drone',
        text: 'El DRON despega y te lleva a través de la ciudad pixelada. De repente, aparece una tormenta eléctrica y el DRON comienza a fallar.',
        options: [
            { text: 'Intentar pilotar manualmente', nextScene: 'manualPilot' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #292f36 0%, #292f36 30%, #4ecdc4 30%, #4ecdc4 100%),
                    repeating-linear-gradient(45deg, #ffd166 0%, #ffd166 5%, transparent 5%, transparent 10%)`
            }}></div>
        )
    },
    manualPilot: {
        id: 'manualPilot',
        text: 'Logras estabilizar el DRON y evitas la tormenta. Llegas a una isla segura donde encuentras un centro de control. ¡Has escapado con éxito! FINAL BUENO.',
        final: true,
        achievement: 'Piloto Experto',
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 60%, #ffd166 60%, #ffd166 100%),
                    linear-gradient(90deg, transparent 0%, transparent 30%, #f7fff7 30%, #f7fff7 70%, transparent 70%, transparent 100%)`
            }}></div>
        )
    },
    blueDoor: {
        id: 'blueDoor',
        text: 'La puerta AZUL se abre a un jardín pixelado bajo la lluvia. Ves un COCHE descapotable y una BICICLETA estacionados cerca. También hay un CARTEL que dice "Peligro: Área de Construcción".',
        options: [
            { text: 'Tomar el COCHE', nextScene: 'car' },
            { text: 'Usar la BICICLETA', nextScene: 'bike' },
            { text: 'Leer el CARTEL', nextScene: 'readSign' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 30%, #292f36 30%, #292f36 100%),
                    repeating-linear-gradient(45deg, transparent 0%, transparent 5%, #4ecdc4 5%, #4ecdc4 6%, transparent 6%, transparent 100%),
                    linear-gradient(90deg, #ffd166 0%, #ffd166 10%, #292f36 10%, #292f36 20%, #ff6b6b 20%, #ff6b6b 30%, #292f36 30%, #292f36 100%),
                    linear-gradient(90deg, transparent 0%, transparent 70%, #f7fff7 70%, #f7fff7 80%, transparent 80%, transparent 100%)`
            }}></div>
        )
    },
    readSign: {
        id: 'readSign',
        text: 'El cartel advierte: "Zona inestable - No todas las rutas llevan a salidas reales". También muestra un mapa pequeño que parece indicar un atajo a través del túnel.',
        options: [
            { text: 'Usar la BICICLETA y buscar el atajo', nextScene: 'bikeShortcut' },
            { text: 'Tomar el COCHE de todas formas', nextScene: 'car' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 30%, #292f36 30%, #292f36 100%),
                    repeating-linear-gradient(45deg, transparent 0%, transparent 5%, #4ecdc4 5%, #4ecdc4 6%, transparent 6%, transparent 100%),
                    linear-gradient(90deg, #ffd166 0%, #ffd166 10%, #292f36 10%, #292f36 20%, #ff6b6b 20%, #ff6b6b 30%, #292f36 30%, #292f36 100%),
                    linear-gradient(90deg, transparent 0%, transparent 20%, #f7fff7 20%, #f7fff7 80%, transparent 80%, transparent 100%)`
            }}></div>
        )
    },
    bikeShortcut: {
        id: 'bikeShortcut',
        text: 'Siguiendo el mapa del cartel, encuentras un camino oculto que lleva directamente al PUENTE, evitando las áreas peligrosas.',
        options: [
            { text: 'Cruzar el PUENTE', nextScene: 'bridgeSafe' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 40%, #292f36 40%, #292f36 100%),
                    linear-gradient(90deg, #ff6b6b 0%, #ff6b6b 30%, transparent 30%, transparent 70%, #ffd166 70%, #ffd166 100%),
                    linear-gradient(90deg, transparent 0%, transparent 40%, #f7fff7 40%, #f7fff7 60%, transparent 60%, transparent 100%)`
            }}></div>
        )
    },
    bridgeSafe: {
        id: 'bridgeSafe',
        text: 'El puente parece sólido y seguro gracias al atajo. Al otro lado ves una salida brillante.',
        options: [
            { text: 'Cruzar rápidamente', nextScene: 'safeCrossing' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 60%, #292f36 60%, #292f36 100%),
                    linear-gradient(90deg, #ffd166 0%, #ffd166 30%, transparent 30%, transparent 70%, #ffd166 70%, #ffd166 100%),
                    linear-gradient(90deg, transparent 0%, transparent 45%, #f7fff7 45%, #f7fff7 55%, transparent 55%, transparent 100%)`
            }}></div>
        )
    },
    safeCrossing: {
        id: 'safeCrossing',
        text: 'Has cruzado el puente con éxito. La salida te lleva a una playa pixelada con un barco esperando. ¡Has escapado de la simulación usando el atajo secreto! FINAL ALTERNATIVO.',
        final: true,
        achievement: 'Explorador de Atajos',
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 60%, #ffd166 60%, #ffd166 100%),
                    linear-gradient(90deg, transparent 0%, transparent 30%, #f7fff7 30%, #f7fff7 70%, transparent 70%, transparent 100%)`
            }}></div>
        )
    },
    car: {
        id: 'car',
        text: 'El COCHE arranca pero el motor suena extraño. Llegas a un puente colgante que parece inestable.',
        options: [
            { text: 'Cruzar el puente rápido', nextScene: 'bridgeDanger' },
            { text: 'Bajar del COCHE y caminar', nextScene: 'walkBridge' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 30%, #292f36 30%, #292f36 100%),
                    linear-gradient(90deg, #ff6b6b 0%, #ff6b6b 20%, #292f36 20%, #292f36 100%)`
            }}></div>
        )
    },
    bridgeDanger: {
        id: 'bridgeDanger',
        text: 'El puente colapsa bajo el peso del COCHE. Caes al vacío...',
        final: true,
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    repeating-linear-gradient(45deg, #292f36 0%, #292f36 5%, #ff6b6b 5%, #ff6b6b 10%),
                    linear-gradient(0deg, transparent 0%, transparent 80%, #ff0000 80%, #ff0000 100%)`
            }}></div>
        )
    },
    walkBridge: {
        id: 'walkBridge',
        text: 'Decides caminar por el puente con cuidado. A mitad de camino, encuentras una trampilla que lleva a un túnel secreto.',
        options: [
            { text: 'Entrar al túnel secreto', nextScene: 'secretTunnel' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 30%, #292f36 30%, #292f36 100%),
                    linear-gradient(90deg, #ff6b6b 0%, #ff6b6b 20%, #292f36 20%, #292f36 100%),
                    linear-gradient(90deg, transparent 0%, transparent 45%, #f7fff7 45%, #f7fff7 55%, transparent 55%, transparent 100%)`
            }}></div>
        )
    },
    secretTunnel: {
        id: 'secretTunnel',
        text: 'El túnel te lleva directamente a una sala de servidores. Encuentras un interruptor marcado como "Apagado de emergencia".',
        options: [
            { text: 'Accionar el interruptor', nextScene: 'emergencyShutdown' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #292f36 0%, #292f36 70%, #ff6b6b 70%, #ff6b6b 80%, #292f36 80%, #292f36 100%),
                    repeating-linear-gradient(90deg, #4ecdc4 0%, #4ecdc4 5%, transparent 5%, transparent 10%)`
            }}></div>
        )
    },
    emergencyShutdown: {
        id: 'emergencyShutdown',
        text: 'Al accionar el interruptor, todo se vuelve negro. Cuando despiertas, estás en tu cama. ¿Fue todo un sueño? FINAL MISTERIOSO.',
        final: true,
        achievement: 'Desconector de Realidad',
        image: () => (
            <div className="pixel-art" style={{
                backgroundColor: '#000',
                backgroundImage: `
                    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 1%, transparent 1%, transparent 10%)`
            }}></div>
        )
    },
    bike: {
        id: 'bike',
        text: 'La bicicleta es lenta pero segura. Llegas a un cruce con dos caminos: uno hacia las montañas y otro hacia la ciudad.',
        options: [
            { text: 'Ir hacia las montañas', nextScene: 'mountains' },
            { text: 'Ir hacia la ciudad', nextScene: 'city' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #4ecdc4 0%, #4ecdc4 30%, #292f36 30%, #292f36 100%),
                    linear-gradient(90deg, #ffd166 0%, #ffd166 20%, #292f36 20%, #292f36 100%)`
            }}></div>
        )
    },
    mountains: {
        id: 'mountains',
        text: 'Las montañas te llevan a un valle secreto donde encuentras una comunidad que vive fuera de la simulación. ¡Has encontrado la libertad!',
        final: true,
        achievement: 'Montañista Digital',
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #292f36 0%, #292f36 40%, #4ecdc4 40%, #4ecdc4 100%),
                    linear-gradient(90deg, transparent 0%, transparent 30%, #ffd166 30%, #ffd166 70%, transparent 70%, transparent 100%)`
            }}></div>
        )
    },
    city: {
        id: 'city',
        text: 'Al llegar a la ciudad, te das cuenta de que todo es parte de la simulación. Encuentras un terminal oculto con un botón de "Apagado".',
        options: [
            { text: 'Presionar el botón', nextScene: 'shutdownSystem' }
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(0deg, #292f36 0%, #292f36 70%, #ff6b6b 70%, #ff6b6b 80%, #292f36 80%, #292f36 100%),
                    repeating-linear-gradient(90deg, #f7fff7 0%, #f7fff7 5%, transparent 5%, transparent 10%)`
            }}></div>
        )
    }
};
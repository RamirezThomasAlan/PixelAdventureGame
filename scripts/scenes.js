const scenes = {
    start: {
        id: 'start',
        text: 'Te despiertas en una habitación pixelada con dos puertas...',
        options: [
            { text: 'Abrir la puerta ROJA', nextScene: 'redDoor' },
            // ... todas las opciones
        ],
        image: () => (
            <div className="pixel-art" style={{
                backgroundImage: `
                    linear-gradient(45deg, 
                        #292f36 0%, #292f36 45%, 
                        #ff6b6b 45%, #ff6b6b 55%, 
                        #292f36 55%, #292f36 100%),
                    // ... más gradientes
                `}}></div>
        )
    },
    // ... todas las demás escenas
};
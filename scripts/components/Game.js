const Game = () => {
    const [currentScene, setCurrentScene] = React.useState(scenes.start);
    const [inventory, setInventory] = React.useState([]);
    const [health, setHealth] = React.useState(100);
    const [history, setHistory] = React.useState([scenes.start]);
    const [showHistory, setShowHistory] = React.useState(false);
    const [achievements, setAchievements] = React.useState([]);
    const [showAchievement, setShowAchievement] = React.useState(false);
    const [currentAchievement, setCurrentAchievement] = React.useState('');

    const handleOptionSelect = (option) => {
        if (option.requiresItem && !inventory.includes(option.requiresItem)) {
            alert(`Necesitas ${option.requiresItem} para esta opción!`);
            return;
        }

        if (option.givesItem) {
            setInventory([...inventory, option.givesItem]);
        }

        const nextScene = scenes[option.nextScene];
        setHistory([...history, nextScene]);
        setCurrentScene(nextScene);

        if (nextScene.final && nextScene.achievement && !achievements.includes(nextScene.achievement)) {
            setAchievements([...achievements, nextScene.achievement]);
            setCurrentAchievement(nextScene.achievement);
            setShowAchievement(true);
            setTimeout(() => setShowAchievement(false), 3000);
        }
    };

    const restartGame = () => {
        setCurrentScene(scenes.start);
        setInventory([]);
        setHealth(100);
        setHistory([scenes.start]);
    };

    return (
        <div id="app">
            <h1 className="title">AVENTURA PIXEL ART</h1>
            
            <button className="history-btn" onClick={() => setShowHistory(true)}>
                Ver Historial
            </button>
            
            <div className="stats">
                <div className="stat">
                    <div className="stat-icon"></div>
                    <span>Salud: </span>
                    <div className="health-bar">
                        <div className="health-fill" style={{ width: `${health}%` }}></div>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-icon"></div>
                    <span>Ítems: {inventory.length}</span>
                </div>
            </div>
            
            {inventory.length > 0 && (
                <div className="inventory">
                    {inventory.map((item, index) => (
                        <div key={index} className="inventory-item" title={item}></div>
                    ))}
                </div>
            )}
            
            <div className="scene">
                <div className="scene-image">
                    {currentScene.image && currentScene.image()}
                </div>
                <div className="scene-text">
                    {currentScene.text}
                </div>
            </div>
            
            {currentScene.final ? (
                <button className="restart-btn" onClick={restartGame}>
                    JUGAR DE NUEVO
                </button>
            ) : (
                <div className="options">
                    {currentScene.options?.map((option, index) => (
                        <button 
                            key={index} 
                            className="option-btn"
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            )}
            
            <div className={`history-panel ${showHistory ? 'active' : ''}`}>
                <div className="history-content">
                    <button className="close-history" onClick={() => setShowHistory(false)}>
                        ×
                    </button>
                    <h2>Historial de Aventura</h2>
                    {history.map((scene, index) => (
                        <div key={index} className="history-item">
                            <p>{scene.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={`achievement-badge ${showAchievement ? 'show' : ''}`}>
                ¡Logro desbloqueado: {currentAchievement}!
            </div>
        </div>
    );
};
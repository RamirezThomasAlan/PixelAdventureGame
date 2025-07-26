const Game = () => {
    const [currentScene, setCurrentScene] = useState(scenes.start);
    const [inventory, setInventory] = useState([]);
    const [health, setHealth] = useState(100);
    const [history, setHistory] = useState([scenes.start]);
    const [showHistory, setShowHistory] = useState(false);
    const [achievements, setAchievements] = useState([]);
    const [showAchievement, setShowAchievement] = useState(false);
    const [currentAchievement, setCurrentAchievement] = useState('');
    const { useState } = React;

    // ... funciones handleOptionSelect, restartGame, etc.

    return (
        <div id="app">
            {/* ... estructura del juego ... */}
        </div>
    );
};
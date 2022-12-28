import 'phaser';
import { CSSProperties, useEffect } from 'react';
import './App.css';
import MainScene from './game/main';

const config: Phaser.Types.Core.GameConfig = {
    width: 1280,
    height: 720,
    type: Phaser.AUTO,
    pixelArt: false,
    backgroundColor: 0xcdcdcd,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_VERTICALLY,
        parent: 'game',
        fullscreenTarget: 'game',
    },

    scene: [MainScene],
};

/**
 * Phaserのゲームを作るクラス
 */
class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

function App({ className }: { className?: string }) {
    const style: CSSProperties = {
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
    };

    // 画面の再描写時に実行する
    // 画面の終了時にGameを削除する
    useEffect(() => {
        const game = new Game(config);

        return () => {
            game?.destroy(true);
        };
    }, []);

    return (
        <div id="game" className={className} style={style}>
            Hello
        </div>
    );
}

export default App;

import 'phaser';

/**
 * メインシーン
 */
class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Main',
        });
    }

    init() {
        console.log('init');
        console.log('初期化処理ー');
    }

    preload() {
        console.log('preload');
        console.log('アセットデータを読み込みます');
    }

    create() {
        console.log('create');
        console.log('ゲーム画面の作成処理やイベントを書くところ');

        this.add.text(10, 10, 'Hello, Phaser!!');
    }

    update() {}
}

export default MainScene;

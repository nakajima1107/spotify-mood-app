// 1. 感情キーワードと、対応するSpotifyプレイリストIDの定義
// (Spotify公式の厳選されたプレイリストのIDを設定しています)
const moodMap = {
    happy: "37i9dQZF1DXdPec7aLTREg",     // Happy Hits! (元気が出るポップス)
    sad: "37i9dQZF1DX3YSRunp9v9e",       // Sad Songs (心に寄り添うバラード)
    tired: "37i9dQZF1DWZ0JDw08Gw36",     // Chill Lofi Study Beats (疲れを癒やすチル・ローファイ)
    angry: "37i9dQZF1DX1tyCD927uEk",     // Heavy Metal (怒りを吹き飛ばす激しい曲)
    energetic: "37i9dQZF1DX76t638Vqet8", // Beast Mode (やる気を爆上げするワークアウト曲)
    romance: "37i9dQZF1DX7r97f606TXJ"    // Romantic Ballads (エモい・恋愛気分)
};

// 2. ボタンがタップされたときの処理
document.getElementById('searchBtn').addEventListener('click', () => {
    // 入力されたテキストを取得
    const text = document.getElementById('moodInput').value.trim();
    
    // 未入力チェック
    if (!text) {
        alert('今の気持ちを教えてください！');
        return;
    }

    // デフォルトの気分を「happy」に設定
    let selectedMood = 'happy'; 

    // 3. 入力された文章のキーワードチェック（感情分析）
    if (text.match(/(悲しい|泣く|失恋|振られた|辛い|つらい|寂しい|さみしい|落ち込む|凹む|ダメだ)/)) {
        selectedMood = 'sad';
    } else if (text.match(/(疲れた|眠い|しんどい|癒やし|だるい|休みたい|仕事終わり|残業|お疲れ)/)) {
        selectedMood = 'tired';
    } else if (text.match(/(腹立つ|怒り|むかつく|イライラ|うざい|最悪|キレそう|壁)/)) {
        selectedMood = 'angry';
    } else if (text.match(/(最高|やる気|元気|いけそう|爆上げ|うれしい|嬉しい|楽しい|ワクワク|勝つ)/)) {
        selectedMood = 'energetic';
    } else if (text.match(/(恋|愛|好き|デート|キュン|エモい|ロマンチック)/)) {
        selectedMood = 'romance';
    }

    // 4. 決定した感情に対応するプレイリストIDを取得
    const playlistId = moodMap[selectedMood];
    
    // 5. Spotifyの「埋め込みプレイヤー」を画面に生成
    const playerContainer = document.getElementById('playerContainer');
    playerContainer.innerHTML = `
        <iframe 
            src="https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0" 
            width="100%" 
            height="380" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
    `;

    // 6. 非表示になっていた結果エリアを画面に表示する
    const resultArea = document.getElementById('resultArea');
    resultArea.classList.remove('hidden');

    // スマホの画面を結果部分まで自動スクロールさせる（小さな優しさ機能）
    resultArea.scrollIntoView({ behavior: 'smooth' });
});

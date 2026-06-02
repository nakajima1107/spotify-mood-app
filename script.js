// 1. 感情キーワードと、対応するSpotifyプレイリストのURL定義
// (アプリ起動用に、Spotify公式のWebリンクを設定しています)
const moodMap = {
    happy: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTREg",     // Happy Hits!
    sad: "https://open.spotify.com/playlist/37i9dQZF1DX3YSRunp9v9e",       // Sad Songs
    tired: "https://open.spotify.com/playlist/37i9dQZF1DWZ0JDw08Gw36",     // Chill Lofi Study Beats
    angry: "https://open.spotify.com/playlist/37i9dQZF1DX1tyCD927uEk",     // Heavy Metal
    energetic: "https://open.spotify.com/playlist/37i9dQZF1DX76t638Vqet8", // Beast Mode
    romance: "https://open.spotify.com/playlist/37i9dQZF1DX7r97f606TXJ"    // Romantic Ballads
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

    // 4. 決定した感情に対応するSpotifyのURLを取得
    const spotifyUrl = moodMap[selectedMood];
    
    // 5. 【ココを変更】画面の中に埋め込むのではなく、直接Spotifyのページ/アプリを開く！
    // 3秒後に自動でジャンプします
    const playerContainer = document.getElementById('playerContainer');
    playerContainer.innerHTML = `
        <div style="text-align: center; padding: 20px; border: 2px dashed #1DB954; border-radius: 8px;">
            <p style="color: #1DB954; font-weight: bold; font-size: 18px;">🎧 音楽が見つかりました！</p>
            <p>まもなく自動的にSpotifyが開きます...</p>
            <a href="${spotifyUrl}" target="_blank" style="display: inline-block; background-color: #1DB954; color: white; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; margin-top: 10px;">
                自動で開かない場合はここをタップ
            </a>
        </div>
    `;

    // 結果エリアを表示
    const resultArea = document.getElementById('resultArea');
    resultArea.classList.remove('hidden');
    resultArea.scrollIntoView({ behavior: 'smooth' });

    // 1.5秒後に自動でSpotifyのプレイリスト画面へジャンプ
    setTimeout(() => {
        window.open(spotifyUrl, '_blank');
    }, 1500);
});

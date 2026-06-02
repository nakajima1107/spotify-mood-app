// 1. 日本のアカウントで100%再生できる公式プレイリストURL
const moodMap = {
    happy: "https://open.spotify.com/playlist/37i9dQZF1DX1X3m996g6is",     // Happy J-Pop (元気が出る曲)
    sad: "https://open.spotify.com/playlist/37i9dQZF1DX592KAtEInS8",       // J-Popバラード (泣ける・切ない曲)
    tired: "https://open.spotify.com/playlist/37i9dQZF1DXbSOnGszb0nI",     // Chill Out J-Pop (疲れた心を癒やす曲)
    angry: "https://open.spotify.com/playlist/37i9dQZF1DX68pXvU4Y6Zp",     // J-Rock Now (モヤモヤを吹き飛ばすロック)
    energetic: "https://open.spotify.com/playlist/37i9dQZF1DX6SBySIsCby8", // 令和ポップス (テンション爆上げ)
    romance: "https://open.spotify.com/playlist/37i9dQZF1DX3fT9XW8r8m7"    // 恋するJ-Pop (恋愛・エモい気分)
};

// 2. ボタンがタップされたときの処理
document.getElementById('searchBtn').addEventListener('click', () => {
    const text = document.getElementById('moodInput').value.trim();
    
    if (!text) {
        alert('今の気持ちを教えてください！');
        return;
    }

    let selectedMood = 'happy'; 

    // 3. 感情分析
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

    const spotifyUrl = moodMap[selectedMood];
    
    // 4. 案内画面の表示
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

    const resultArea = document.getElementById('resultArea');
    resultArea.classList.remove('hidden');
    resultArea.scrollIntoView({ behavior: 'smooth' });

    // 1.5秒後に自動でSpotifyを起動
    setTimeout(() => {
        window.open(spotifyUrl, '_blank');
    }, 1500);
});

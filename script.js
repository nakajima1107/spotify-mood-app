// 感情キーワードと、対応するSpotifyプレイリスト（または楽曲）のID
// ※気に入ったプレイリストのIDに自由に変更可能です
const moodMap = {
    happy: "37i9dQZF1DXdPec7aLTREg",  // Happy Hits!
    sad: "37i9dQZF1DX3YSRunp9v9e",    // Sad Songs
    tired: "37i9dQZF1DWZ0JDw08Gw36",  // Chill Lofi Study Beats
    angry: "37i9dQZF1DX1tyCD927uEk",  // Heavy Metal
    energetic: "37i9dQZF1DX76t638Vqet8" // Beast Mode (筋トレ・爆上げ)
};

document.getElementById('searchBtn').addEventListener('click', () => {
    const text = document.getElementById('moodInput').value;
    if (!text) return alert('気持ちを入力してください！');

    // 簡易的なネガポジ・感情判定
    let selectedMood = 'happy'; // デフォルト

    if (text.match(/(悲しい|泣く|失恋|辛い|つらい|ダメ)/)) {
        selectedMood = 'sad';
    } else if (text.match(/(疲れた|眠い|しんどい|癒やし|だるい)/)) {
        selectedMood = 'tired';
    } else if (text.match(/(腹立つ|怒り|むかつく|イライラ|壁)/)) {
        selectedMood = 'angry';
    } else if (text.match(/(最高|やる気|元気|いけそう|爆上げ)/)) {
        selectedMood = 'energetic';
    }

    const playlistId = moodMap[selectedMood];
    
    // Spotifyの埋め込みプレイヤー（Widget）を生成
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

    // 結果エリアを表示
    document.getElementById('resultArea').classList.remove('hidden');
});

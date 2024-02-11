export default function soundPlayer(docs){
    return(
        <div className="mp3-player">
        <div className="cover-art">
            <img src="cover-art.jpg" alt="Couverture de la chanson" id="cover-image">
        </div>

        <div className="song-info">
            <h2 id="song-title">Titre de la chanson</h2>
            <h3 id="artist-name">Nom de l'artiste</h3>
        </div>

        <div className="controls">
            <button id="prev">Précédent</button>
            <button id="play">Lire/Pause</button>
            <button id="next">Suivant</button>
        </div>

        <div className="progress-bar">
            <div id="progress" class="progress"></div>
        </div>
    </div> 
    )
}
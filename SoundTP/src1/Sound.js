import React from "react";

export default class Sound extends React.Component{
    constructor(props) {
        super(props);
      }
      render(){
        return (

            <div className='mp3-player'>
           
            <div className='cover-art'>
                <img src={this.props.sound.image} alt="Couverture de la chanson" id="cover-image"/>
            </div>
    
            <div className='song-info'>
                <h2 id="song-title">Titre de la chanson{this.props.sound.titre}</h2>
                <h3 id="artist-name">Nom de l'artiste{this.props.sound.description}</h3>
            </div>
    
            <div className='controls'>
                
                <button id="play" onClick={this.playSound}>Lire/Pause</button>    
            </div>
            <div className='progress-bar'>
                <div id="progress" className='progress'></div>
            </div>         
        </div>
        
        )
           
      }


}
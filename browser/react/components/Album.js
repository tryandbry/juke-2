import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
    constructor () {
        super();
    }

    componentDidMount () {
        this.props.selectAlbum(this.props.routeParams.albumId)
    }

    render () {
        // variables
        const album = this.props.album;
        const currentSong = this.props.currentSong;
        const isPlaying = this.props.isPlaying;
        const toggleOne = this.props.toggleOne;
        console.log("Album:", this.props.routeParams.albumId, this.props);
        
        return (
            <div className="album">
              <div>
                <h3>{ album.name }</h3>
                <img src={ album.imageUrl } className="img-thumbnail" />
              </div>
              <Songs
                songs={album.songs}
                currentSong={currentSong}
                isPlaying={isPlaying}
                toggleOne={toggleOne} />
            </div>
        );
    }

}

export default Album;

import React from 'react';
import Songs from '../components/Songs';
import {Link} from 'react-router';

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
	  this.props.routeParams.albumId != album.id ?
            <div className="album">
              <div>
                <h3>Album not found!</h3>
		<p>Try going back to <Link to="albums">Albums</Link> to find another one</p>
              </div>
            </div>
	    :
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

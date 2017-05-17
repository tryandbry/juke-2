import React from 'react';
import Songs from './Songs';
import Albums from './Albums';

class Artist extends React.Component {
    constructor () {
        super();
    }
    
    componentDidMount () {
        this.props.selectArtist(this.props.routeParams.artistId);
    }

    
    render () { 
        const selectedArtist = this.props.selectedArtist;
        console.log(selectedArtist)
        return (
            <div>
                <h3>{(selectedArtist.artist) ? selectedArtist.artist.name : ''}</h3>
                <h4>ALBUMS</h4>
                <Albums 
                    albums={selectedArtist.albums || []}
                />
                <h4>SONGS</h4>
                <Songs
                    songs={selectedArtist.songs}
                    currentSong={this.props.currentSong}
                    isPlaying={this.props.isPlaying}
                    toggleOne={this.props.toggle}
                />
            </div>
        )
    }
}


export default Artist;
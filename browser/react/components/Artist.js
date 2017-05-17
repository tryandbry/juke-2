import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';
import Albums from './Albums';

class Artist extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(){
    this.props.selectArtist(this.props.routeParams.artistId);
  }

  render () {
    const selectedArtist = this.props.selectedArtist;
    const children = this.props.children;
    const propsToPassToChildren = {
      songs:selectedArtist.songs,
      albums:selectedArtist.albums || [],
      currentSong:this.props.currentSong,
      isPlaying:this.props.isPlaying,
      toggleOne:this.props.toggle
    }
    console.log("Artist:",this.props.params.artistId,this.props);
    const artistId = Object.keys(selectedArtist).length === 0 || selectedArtist.artist.id;

    return (
      this.props.routeParams.artistId != artistId ? 
      <div>
	<h3>Artist not found!</h3>
	<p>Try going back to <Link to="artists">Artists</Link> to find another one</p>
      </div>
      :
      <div>
	<h3>{ selectedArtist.name }</h3>
	<ul className="nav nav-tabs">
	  <li><Link to={`/artists/${this.props.params.artistId}/albums`}>ALBUMS</Link></li>
	  <li><Link to={`/artists/${this.props.params.artistId}/songs`}>SONGS</Link></li>
	</ul>
	{ children && React.cloneElement(children, propsToPassToChildren) }
      </div>
    )
  }
}

export default Artist;

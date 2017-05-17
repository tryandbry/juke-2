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

    return (
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

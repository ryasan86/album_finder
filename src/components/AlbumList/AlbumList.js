import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { client } from './../../client';
import AlbumDetail from './../AlbumDetail/AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    client.getAlbums(data => {
      this.setState({ albums: data });
    });
  }

  render() {
    return (
      <ScrollView>
        {this.state.albums.map((album, i) => {
          return <AlbumDetail key={i} album={album} />;
        })}
      </ScrollView>
    );
  }
}

export default AlbumList;

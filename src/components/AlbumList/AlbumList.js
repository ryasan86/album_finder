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

  renderAlbums() {
    return this.state.albums.map((album, i) => {
      return <AlbumDetail key={i} album={album} />;
    });
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;

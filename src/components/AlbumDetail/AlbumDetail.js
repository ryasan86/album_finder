import React from 'react';
import { Image, View, Text } from 'react-native';
import Card from './../Card/Card';
import CardSection from './../CardSection/CardSection';

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist, image } = album;
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    thumbnailStyle,
    imgStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imgStyle} source={{ uri: image }} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  imgStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};

export default AlbumDetail;

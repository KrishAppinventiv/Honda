import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { CustomYouTubePlayer } from '../../components/CustomYouTubePlyaer';

const YouTubePlayerScreen = ({ route }: { route: any }) => {
  const { videoId } = route.params;

  console.log('logggggggg',videoId);
  
  return (
    <View style={styles.container}>
      <CustomYouTubePlayer videoId={videoId} autoPlay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: 'black',
     justifyContent:'center'
  },
});

export default YouTubePlayerScreen;

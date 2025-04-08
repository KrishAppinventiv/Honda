import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import CustomWebView from '../../components/customWebView';



type RouteParams = {
  url: string;
};

type Props = {
  route: { params: RouteParams };
};

const WebView = ({ route }:Props) => {
  const insets = useSafeAreaInsets();
  const { url } = route?.params;
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <CustomWebView url={url} />
    </View>
  );
};

export default WebView
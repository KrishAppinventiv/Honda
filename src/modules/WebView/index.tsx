import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomWebViewComponent from '../../components/CustomWebView';
import styles from './style';

type RouteParams = {
  url: string;
};

type Props = {
  route: { params: RouteParams };
};

const CustomWebView: React.FC<Props> = ({ route }) => {
  const insets = useSafeAreaInsets();
  const { url } = route.params;
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <CustomWebViewComponent url={url} />
    </View>
  );
};

export default CustomWebView
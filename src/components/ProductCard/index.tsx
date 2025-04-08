import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ImageProps, ViewStyle } from 'react-native';
import { FONTS, vh, vw } from '../../styles';
import colors from '../../utils/colors';

const { width: screenWidth } = Dimensions.get('window');

interface ProductProps {
  item: {
    id: string;
    name: string;
    price?: string;
    categoryName?: string;
    image: ImageProps;
  };
  textAlign?: 'left' | 'center' | 'right';
  onPress?: () => void;
  extraCardStyle?: ViewStyle;
}

const ProductCard = React.memo(({ item, textAlign = 'left', onPress,extraCardStyle }: ProductProps) => {
  const cardHeight = useMemo(() => (item.categoryName ? vh(183) : vh(168)), [item.categoryName]);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card,extraCardStyle, { height: cardHeight }]}> 
      <View style={styles.greyView}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.name, { textAlign }]}>{item.name}</Text>
        {item.categoryName && <Text style={[styles.category, { textAlign }]}>{item.categoryName}</Text>}
        {item.price && <Text style={[styles.price, { textAlign }]}>{item.price}</Text>}
      </View>
    </TouchableOpacity>
  );
});

export default ProductCard;

const styles = StyleSheet.create({
  greyView: {
    backgroundColor: '#F3F6FA',
    alignItems: 'center',
    justifyContent: 'center',
    height:vh(94),
    borderRadius: vh(8),
  },
  card: {
    width: screenWidth / 3 + vh(3),
    backgroundColor: colors.white,
    borderRadius: vh(8),
    borderWidth: vw(2),
    borderColor: colors.backButtonBackground,
  },
  image: {
    width: vh(100),
    height: vh(100),
    resizeMode: 'contain',
  },
  textContainer: {
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    width:vw(92)
  },
  name: {
    fontSize: vh(14),
    fontFamily:FONTS.ROBOTO_MEDIUM,
    marginStart: vh(5),
  },
  category: {
    fontSize: vh(13),
    fontFamily:FONTS.ROBOTO_MEDIUM,
    color: 'gray',
    marginTop: 2,
    marginStart: vh(5),
  },
  price: {
    fontSize: vh(13),
    color: colors.black,
    fontWeight: '600',
    marginTop: vh(5),
    marginStart: vh(5),
  },
});

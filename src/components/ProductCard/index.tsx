import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { vh } from '../../utils/dimension';
import { colors } from '../../theme';
const {width: screenWidth} = Dimensions.get('window');
interface ProductProps {
  item: {
    id: string;
    name: string;
    price?: string;
    categoryName?: string;
    image: any;
  };
  textAlign?: 'left' | 'center' | 'right';
}

const ProductCard: React.FC<ProductProps> = ({ item, textAlign }) => {
  return (
    <View style={[styles.card,item.categoryName && {height:vh(183)}]}>
      <View style={styles.greyView}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={{ paddingVertical: vh(10) }}>
        <Text style={[styles.name, { textAlign }]}>{item.name}</Text>
        {item.categoryName && <Text style={[styles.category, { textAlign }]}>{item.categoryName}</Text>}
        {item.price && <Text style={[styles.price, { textAlign }]}>{item.price}</Text>}
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  greyView: {
    backgroundColor: '#F3F6FA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: vh(10),
    borderRadius: vh(8),
  },
  card: {
    width:screenWidth/3 + vh(3),
    height:vh(168),
    backgroundColor: colors.white,
    borderRadius: vh(8),
    borderWidth: 1,
    borderColor: '#F3F6FA',
   
  },
  image: {
    width: vh(100),
    height: vh(100),
    resizeMode: 'contain',
  },
  name: {
    fontSize: vh(14),
    fontWeight: '500',
   
    marginStart:vh(5)
  },
  category: {
    fontSize: vh(13),
    fontWeight: '400',
    color: 'gray',
    marginTop: 2,
    marginStart:vh(5)
  },
  price: {
    fontSize: vh(13),
    color: colors.black,
    fontWeight:'600',
    marginTop: vh(5),
   marginStart:vh(5)
  },
});

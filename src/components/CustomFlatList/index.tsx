import React, { forwardRef } from 'react';
import { FlatList, ViewStyle, TextStyle, ListRenderItem } from 'react-native';

interface CustomFlatListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor?: (item: T, index: number) => string;
  horizontal?: boolean;
  pagingEnabled?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  contentContainerStyle?: ViewStyle;
  onScroll?: (event: any) => void;
  onMomentumScrollEnd?: (event: any) => void;
  style?: ViewStyle;
  ListFooterComponent?: React.ComponentType | null;
  ListEmptyComponent?: React.ComponentType | null;
}

const CustomFlatList = forwardRef<FlatList, CustomFlatListProps<any>>(
  (
    {
      data,
      renderItem,
      keyExtractor = (item, index) => index.toString(),
      horizontal = false,
      pagingEnabled = false,
      showsHorizontalScrollIndicator = false,
      contentContainerStyle,
      onScroll,
      onMomentumScrollEnd,
      style,
      ListFooterComponent,
      ListEmptyComponent,
    },
    ref
  ) => {
    return (
      <FlatList
        ref={ref}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={horizontal}
        pagingEnabled={pagingEnabled}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        contentContainerStyle={contentContainerStyle}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
        style={style}
        ListFooterComponent={ListFooterComponent || undefined}
        ListEmptyComponent={ListEmptyComponent || undefined}
      />
    );
  }
);

export default CustomFlatList;

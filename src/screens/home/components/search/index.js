import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import BottomSheet, { BottomSheetTextInput, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import colors from '../../../../components/colors';
import Text from '../../../../components/Text';

function Search({ onChangeText, results, searchTextValue }) {
  const bottomSheetRef = useRef(null);
  const inputTextRef = useRef(null);

  const [snapPoints, setSnapPoints] = useState([60]);
  const [margin, setMargin] = useState(0);

  const setFullBottomSheet = () => {
    setMargin(15);
    setSnapPoints(['40%']);
  };

  const setSmallBottomSheet = () => {
    setMargin(0);
    setSnapPoints([60]);

    bottomSheetRef.current.collapse();
  };

  useEffect(() => {
    if (searchTextValue) {
      setFullBottomSheet();

      inputTextRef.current.focus();
    }
  }, [searchTextValue]);

  const handleSheetChanges = useCallback((index) => {
    if (index === 0) {
      setSmallBottomSheet();
    }
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      detached
      bottomInset={40}
      snapPoints={snapPoints}
      onClose={setSmallBottomSheet}
      style={{ marginHorizontal: 10, overflow: 'hidden' }}
      onChange={handleSheetChanges}
      containerStyle={{ overflow: 'hidden' }}
      handleStyle={{ overflow: 'hidden' }}
      backgroundStyle={{
        backgroundColor: colors.primary.blue,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: margin,
      }}
      handleComponent={null}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <BottomSheetTextInput
          ref={inputTextRef}
          placeholder="Type here to search"
          placeholderTextColor={colors.primary.gray}
          onChangeText={onChangeText}
          value={searchTextValue}
          style={{
            height: 56,
            color: colors.primary.white,
            width: '100%',
            fontSize: 18,
            fontWeight: 'bold',
          }}
          onFocus={() => {
            setFullBottomSheet();
          }}
          onBlur={() => {
            setSmallBottomSheet();
          }}
        />

        <BottomSheetFlatList
          data={results}
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          renderItem={({ item }) => {
            return (
              <View>
                <Text
                  style={{ fontSize: 18 }}
                >{`${item.flag} ${item.name.common} - ${item.subregion}`}</Text>
              </View>
            );
          }}
        />
      </View>
    </BottomSheet>
  );
}

export default Search;

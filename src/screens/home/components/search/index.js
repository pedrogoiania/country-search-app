import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ImageBackground, TextInput, View } from 'react-native';

import BottomSheet, { BottomSheetTextInput, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import colors from '../../../../components/colors';
import Text from '../../../../components/Text';

function Search({ onChangeText, results }) {
  const bottomSheetRef = useRef(null);

  const [snapPoints, setSnapPoints] = useState([60]);
  const [margin, setMargin] = useState(0);

  const [showFlatList, setShowFlatList] = useState(false);

  const setFullBottomSheet = () => {
    setMargin(15);
    setSnapPoints(['40%']);
    setShowFlatList(true);
  };

  const setSmallBottomSheet = () => {
    setMargin(0);
    setSnapPoints([60]);
    setShowFlatList(false);

    bottomSheetRef.current.collapse();
  };

  //   const snapPoints = useMemo(() => [60, '40%'], []);

  // variables

  // callbacks
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
      //   handleIndicatorStyle={{ display: 'none' }}
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
          placeholder="Type here"
          placeholderTextColor={colors.primary.gray}
          onChangeText={onChangeText}
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

        {/* {showFlatList ? (
          
        ) : null} */}

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

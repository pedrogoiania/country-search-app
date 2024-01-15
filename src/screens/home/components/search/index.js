import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ImageBackground, TextInput, View } from 'react-native';

import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import colors from '../../../../components/colors';

function Search() {
  const bottomSheetRef = useRef(null);

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

  //   const snapPoints = useMemo(() => [60, '40%'], []);

  // variables

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);

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
          style={{
            height: 56,
            color: colors.primary.white,
            width: '100%',
          }}
          onFocus={() => {
            setFullBottomSheet();
          }}
          onBlur={() => {
            setSmallBottomSheet();
          }}
        />
      </View>
    </BottomSheet>
  );
}

export default Search;

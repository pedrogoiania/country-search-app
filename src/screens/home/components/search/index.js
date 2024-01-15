import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import BottomSheet, { BottomSheetTextInput, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import colors from '../../../../components/colors';
import Text from '../../../../components/Text';
import strings from '../../../../utils/strings';
import ResultItem from './components/ResultItem';
import Separator from '../../../../components/Separator';

const styles = StyleSheet.create({
  bottomSheetBackgroundStyle: {
    backgroundColor: colors.primary.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetStyle: { marginHorizontal: 10, overflow: 'hidden' },
  bottomSheetHiddenStyle: { overflow: 'hidden' },

  contentStyle: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  inputStyle: {
    height: 56,
    color: colors.primary.white,
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

function Search({ onChangeText, results, searchTextValue }) {
  const bottomSheetRef = useRef(null);
  const inputTextRef = useRef(null);

  const initialSnapPointValue = 0;
  const bottomSheetBottomInset = 40;

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

  const onFocus = () => {
    setFullBottomSheet();
  };

  const onBlur = () => {
    setSmallBottomSheet();
  };

  const renderItem = ({ item }) => <ResultItem item={item} />;

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={initialSnapPointValue}
      detached
      bottomInset={bottomSheetBottomInset}
      snapPoints={snapPoints}
      onClose={setSmallBottomSheet}
      style={styles.bottomSheetStyle}
      onChange={handleSheetChanges}
      containerStyle={styles.bottomSheetHiddenStyle}
      handleStyle={styles.bottomSheetHiddenStyle}
      backgroundStyle={[styles.bottomSheetBackgroundStyle, { marginBottom: margin }]}
      handleComponent={null}
    >
      <View style={styles.contentStyle}>
        <BottomSheetTextInput
          ref={inputTextRef}
          placeholder={strings.home.searchPlaceHolder}
          placeholderTextColor={colors.primary.gray}
          onChangeText={onChangeText}
          value={searchTextValue}
          style={styles.inputStyle}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <BottomSheetFlatList
          data={results}
          ItemSeparatorComponent={<Separator />}
          renderItem={renderItem}
        />
      </View>
    </BottomSheet>
  );
}

export default Search;

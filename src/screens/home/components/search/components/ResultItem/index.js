import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../../../../../../components/Text';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

const ResultItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.text}>{`${item.flag} ${item.name.common} - ${item.subregion}`}</Text>
    </View>
  );
};

export default ResultItem;

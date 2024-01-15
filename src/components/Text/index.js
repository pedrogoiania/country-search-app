import React from 'react';

import { Text as RNText, StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  text: {
    color: colors.primary.white,
    fontSize: 18,
  },
});

function Text(props) {
  const { children } = props;

  return (
    <RNText {...props} style={{ ...styles.text, ...props.style }}>
      {children}
    </RNText>
  );
}

const Bold = (props) => {
  return <Text {...props} />;
};

Text.Bold = Bold;

export default Text;

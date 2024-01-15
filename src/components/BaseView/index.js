import React, { useCallback, useMemo, useRef } from 'react';
import { ImageBackground, View } from 'react-native';

import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const background = require('../../assets/home-background.png');

function BaseView(props) {
  const { children } = props;

  return (
    <ImageBackground source={background} style={{ flex: 1 }}>
      <View {...props} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', ...props.style }}>
        {children}
      </View>
    </ImageBackground>
  );
}

export default BaseView;

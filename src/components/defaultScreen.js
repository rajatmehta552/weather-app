import React from 'react';
import { View } from 'react-native';
import { style } from '../common/style';

const DefaultScreen = ({children}) => {
    return(
        <View style={style.body}>{children}</View>
    )
}

export default DefaultScreen;
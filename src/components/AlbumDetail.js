import React from 'react';
import { View, Text } from 'react-native';

const AlbumnDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    )
};

export default AlbumnDetail;
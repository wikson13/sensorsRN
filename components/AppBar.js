import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
    return (
        <Appbar.Header>
            <Appbar.BackAction
                onPress={this._goBack}
            />
            <Appbar.Content
                title="Title"
                subtitle="Subtitle"
            />
            {/*<Appbar.Action icon="magnify" onPress={this._handleSearch} />*/}
            <Appbar.Action icon="plus" onPress={()=>console.log('a')} />
            {/*<Appbar.Action icon="dots-vertical" onPress={this._handleMore} />*/}
        </Appbar.Header>
    );
};

export default AppBar;

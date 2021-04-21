import React from 'react';

const StackScreen = ({Stack, name, screen}) => {
    return (
        <Stack.Screen options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} name={name} component={screen} />
    );
}

export default StackScreen;

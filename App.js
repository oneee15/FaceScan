import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { Onboard, Scanner, Output, Details } from './src';

const Stack = createNativeStackNavigator();

export default () => {

  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <>
      <IconRegistry icons={[EvaIconsPack]} />
      {/* <ThemeContext.Provider value={{ theme, toggleTheme }}> */}
      <ApplicationProvider {...eva} theme={eva[theme]}>
        <AutocompleteDropdownContextProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboard">
              <Stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }} />
              <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: false }} />
              <Stack.Screen name="Result" component={Output} options={{ headerShown: false }} />
              <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </AutocompleteDropdownContextProvider>
      </ApplicationProvider>
      {/* </ThemeContext.Provider> */}

    </>
  )

};
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Envio} from '../pages/Envio';
import {Recarga} from '../pages/Recarga';
import {Retiro} from '../pages/Retiro';
import {Servicios} from '../pages/Servicios';

export type MainPages = {
  Retiro: undefined;
  Recarga: undefined;
  Envio: undefined;
  Servicios: undefined;
};
interface Props {}

const Tab = createBottomTabNavigator<MainPages>();

export const MainRoutes: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Retiro" component={Retiro} />
        <Tab.Screen name="Recarga" component={Recarga} />
        <Tab.Screen name="Envio" component={Envio} />
        <Tab.Screen name="Servicios" component={Servicios} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

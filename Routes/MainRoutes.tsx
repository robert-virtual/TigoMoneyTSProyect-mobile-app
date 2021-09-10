import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Envio} from '../pages/Envio';
import {Recarga} from '../pages/Recarga';
import {Retiro} from '../pages/Retiro';
import {Servicios} from '../pages/Servicios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Historial} from '../pages/historial';

export type MainPages = {
  Retiro: undefined;
  Recarga: undefined;
  Envio: undefined;
  Servicios: undefined;
  Historial: undefined;
};
interface Props {}

const Tab = createBottomTabNavigator<MainPages>();

export const MainRoutes: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName: string = 'angle-double-right';
            //focus Color: rgb(0, 122, 255)

            if (route.name === 'Retiro') {
              iconName = 'address-card';
            }

            if (route.name === 'Recarga') {
              iconName = 'id-badge';
            }

            if (route.name === 'Envio') {
              iconName = 'paper-plane';
            }

            if (route.name === 'Servicios') {
              iconName = 'ambulance';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Retiro" component={Retiro} />
        <Tab.Screen name="Recarga" component={Recarga} />
        <Tab.Screen name="Envio" component={Envio} />
        <Tab.Screen name="Servicios" component={Servicios} />
        <Tab.Screen name="Historial" component={Historial} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

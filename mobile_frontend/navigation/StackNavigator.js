import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SiteManagerHome from '../screens/SiteManagerHome';
import CreateRequisition from '../screens/CreateRequisition';
import RequisitionHome from '../screens/RequisitionHome';
import RequisitionRequests from '../screens/RequisitionRequests';
import SiteManagerOrders from '../screens/SiteManagerOrders';
import SiteManagerDeliveryInfo from '../screens/SiteManagerDeliveryInfo';
import SupplierHome from '../screens/SupplierHome';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
                <Stack.Screen name="SiteManagerHome" component={SiteManagerHome} options={{headerShown: false}}/>
                <Stack.Screen name="RequisitionHome" component={RequisitionHome} options={{headerShown: false}}/>
                <Stack.Screen name="CreateRequisition" component={CreateRequisition} options={{headerShown: false}}/>
                <Stack.Screen name="RequisitionRequests" component={RequisitionRequests} options={{headerShown: false}}/>
                <Stack.Screen name="SiteManagerOrders" component={SiteManagerOrders} options={{headerShown: false}}/>
                <Stack.Screen name="SiteManagerDeliveryInfo" component={SiteManagerDeliveryInfo} options={{headerShown: false}}/>
                <Stack.Screen name="SupplierHome" component={SupplierHome} options={{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})
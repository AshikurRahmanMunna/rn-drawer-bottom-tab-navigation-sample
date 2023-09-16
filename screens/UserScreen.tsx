import React from "react";
import { Text, View, Button } from "react-native";
import {
  CustomBottomTabNavigationProp,
  CustomBottomTabRouteProp,
  CustomDrawerNavigationProp,
  CustomDrawerRouteProp,
} from "../types/navigation";
interface IUserScreen {
  // navigation: CustomDrawerNavigationProp<"User">;
  // route: CustomDrawerRouteProp<"User">;
  navigation: CustomBottomTabNavigationProp<"User">;
  route: CustomBottomTabRouteProp<"User">;
}
const UserScreen = ({ navigation }: IUserScreen) => {
  // const handleToggle = () => {
  //   navigation.toggleDrawer();
  // };
  return (
    <View>
      <Text>This is user screen</Text>
      {/* <Button title="Open Drawer" onPress={handleToggle} /> */}
    </View>
  );
};

export default UserScreen;

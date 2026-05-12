import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./DrawerRoutes";
// import { BottomRoutes } from "./BottomRoutes";
// import { StackRoutes } from "./StackRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}

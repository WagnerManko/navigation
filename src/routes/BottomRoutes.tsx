import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import { RouteList } from "@/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator<RouteList>();

export function BottomRoutes() {
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen name="home" component={Home} />
      <BottomTab.Screen name="product" component={Product} />
    </BottomTab.Navigator>
  );
}

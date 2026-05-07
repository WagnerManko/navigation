import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { StackRoutesProps } from "@/types/navigation";
import { View } from "react-native";

export function Product({ navigation, route }: StackRoutesProps<"product">) {
  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        paddingTop: 64,
      }}
    >
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product {route.params?.id}</Title>
      </Header>
    </View>
  );
}

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { BottomTabRoutesProps, StackRoutesProps } from "@/types/navigation";
import { View } from "react-native";

export function Home({
  navigation,
}: StackRoutesProps<"product"> | BottomTabRoutesProps<"home">) {
  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        paddingTop: 64,
      }}
    >
      <Header>
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product")}
        />
      </Header>
    </View>
  );
}

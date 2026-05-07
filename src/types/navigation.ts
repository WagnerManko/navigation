import { NativeStackScreenProps } from "@react-navigation/native-stack";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type RootStackParamList = {
  home: undefined;
  product:
    | undefined
    | {
        id: string;
      };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type StackRoutesProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

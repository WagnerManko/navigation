import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type RouteList = {
  home: undefined;
  product:
    | undefined
    | {
        id: string;
      };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RouteList {}
  }
}

export type StackRoutesProps<T extends keyof RouteList> =
  NativeStackScreenProps<RouteList, T>;

export type BottomTabRoutesProps<T extends keyof RouteList> =
  BottomTabScreenProps<RouteList, T>;

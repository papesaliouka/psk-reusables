import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Report from "./components/Report/Report";
import { AuthenticationContext } from "./services/login/login.context";
import { useTranslation } from "react-i18next";
import { Linking } from "react-native";
import StorageUtils from "./services/storage/storage";
import { StackNavigationProp } from "@react-navigation/stack";

// Define types for props (if you're using React Navigation)
export interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
  api_url: string;
}

import LoginScreen from "./pages/Login";

export default {
  LoginScreen,
  Button,
  Loader,
  Report,
  AuthenticationContext,
  useTranslation,
  Linking,
  StorageUtils,
}
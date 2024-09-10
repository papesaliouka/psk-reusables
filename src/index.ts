import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Report from "./components/Report/Report";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { AuthenticationContext } from "./services/login/login.context";
import StorageUtils from "./services/storage/storage";
import LoginScreen from "./pages/Login";
import ProjectCard from "./components/ProjectCard/ProjectCard";

import i18next from "./services/i18next/i18next"

import styles from "./infrastructure/theme/style";

import colors from "./infrastructure/theme/colors";
import spacing from "./infrastructure/theme/spacing";


import { AuthenticationContextProvider } from './services/login/login.context';


export {
  LoginScreen,
  Button,
  Loader,
  Report,
  AuthenticationContext,
  AuthenticationContextProvider,
  StorageUtils,
  i18next,
  Header,
  Profile,
  styles,
  ProjectCard,
  colors,
  spacing,
};

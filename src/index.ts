import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Report from "./components/Report/Report";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { AuthenticationContext } from "./services/login/login.context";
import StorageUtils from "./services/storage/storage";
import LoginScreen from "./pages/Login";
import ProjectViewScreen from "./pages/ProjectView";

import FarmerCard from "./components/Farmer/FarmerCard/FarmerCard";
import FarmerList from "./components/Farmer/FarmerList/FarmerList";
import FarmerViewScreen from "./pages/FarmerView";


import ZoneViewScreen from "./pages/ZoneView";

import { 
  ProjectCard,
  ProjectCulture,
  ProjectHeader,
  ProjectItemCard,
  ProjectLegend,
  ProjectLegendItem,
} from "./components/Project";

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
  ProjectCulture,
  ProjectHeader,
  ProjectItemCard,
  ProjectLegend,
  ProjectLegendItem,
  ProjectViewScreen,
  FarmerViewScreen,
  ZoneViewScreen,
  FarmerCard,
};

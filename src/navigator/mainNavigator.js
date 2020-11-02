import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen6166565Navigator from '../features/BlankScreen6166565/navigator';
import BlankScreen8166564Navigator from '../features/BlankScreen8166564/navigator';
import BlankScreen8166563Navigator from '../features/BlankScreen8166563/navigator';
import BlankScreen11166500Navigator from '../features/BlankScreen11166500/navigator';
import BlankScreen10166495Navigator from '../features/BlankScreen10166495/navigator';
import BlankScreen9166494Navigator from '../features/BlankScreen9166494/navigator';
import BlankScreen7166493Navigator from '../features/BlankScreen7166493/navigator';
import BlankScreen4166489Navigator from '../features/BlankScreen4166489/navigator';
import BlankScreen5166470Navigator from '../features/BlankScreen5166470/navigator';
import BlankScreen3166468Navigator from '../features/BlankScreen3166468/navigator';
import BlankScreen2166467Navigator from '../features/BlankScreen2166467/navigator';
import BlankScreen1166449Navigator from '../features/BlankScreen1166449/navigator';
import BlankScreen0166448Navigator from '../features/BlankScreen0166448/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen6166565: { screen: BlankScreen6166565Navigator },
BlankScreen8166564: { screen: BlankScreen8166564Navigator },
BlankScreen8166563: { screen: BlankScreen8166563Navigator },
BlankScreen11166500: { screen: BlankScreen11166500Navigator },
BlankScreen10166495: { screen: BlankScreen10166495Navigator },
BlankScreen9166494: { screen: BlankScreen9166494Navigator },
BlankScreen7166493: { screen: BlankScreen7166493Navigator },
BlankScreen4166489: { screen: BlankScreen4166489Navigator },
BlankScreen5166470: { screen: BlankScreen5166470Navigator },
BlankScreen3166468: { screen: BlankScreen3166468Navigator },
BlankScreen2166467: { screen: BlankScreen2166467Navigator },
BlankScreen1166449: { screen: BlankScreen1166449Navigator },
BlankScreen0166448: { screen: BlankScreen0166448Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

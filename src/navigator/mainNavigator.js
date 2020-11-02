import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen5166470Navigator from '../features/BlankScreen5166470/navigator';
import CopyOfBlankScreen0166469Navigator from '../features/CopyOfBlankScreen0166469/navigator';
import BlankScreen3166468Navigator from '../features/BlankScreen3166468/navigator';
import BlankScreen2166467Navigator from '../features/BlankScreen2166467/navigator';
import BlankScreen1166449Navigator from '../features/BlankScreen1166449/navigator';
import BlankScreen0166448Navigator from '../features/BlankScreen0166448/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen5166470: { screen: BlankScreen5166470Navigator },
CopyOfBlankScreen0166469: { screen: CopyOfBlankScreen0166469Navigator },
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

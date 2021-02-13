import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Detect from './Detect';
import Results from './Results';
import PastResults from "./PastResults";

const navigator = createStackNavigator({
  Detect: Detect,
  Results: Results,
  PastResults: PastResults
}, {
  initialRouteName: "PastResults",
  defaultNavigationOptions: {
    title: "Detection App"
  }
});

export default createAppContainer(navigator);

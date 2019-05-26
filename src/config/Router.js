import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CourseList from '../components/course/CourseList';
import ScoreList from '../components/score/ScoreList';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tabs = createBottomTabNavigator(
  {
  Courses: CourseList,
  Scores: ScoreList,
  }
);

export default createAppContainer(Tabs);
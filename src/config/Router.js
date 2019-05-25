import { TabNavigator } from 'react-navigation';
import CourseList from '../components/course/CourseList';
import ScoreList from '../components/score/ScoreList';


export const Tabs = TabNavigator({
  CourseList: {
    screen: CourseList,
  },
  ScoreList: {
    screen: ScoreList,
  },
});
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CreatePost from '../screens/createpost'
import Feed from '../screens/feed'
import Ionicons from 'react-nativ-vector-icons/Ionicons'
import { gray } from 'ansi-colors';
import { TRAVIS } from 'ci-info';

const Tab = createBottomTabNavigator();

const BottomTabNvigator = ()=>{
    return(
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(route.njame === 'Feed'){
                        iconName = focused
                            ? 'book'
                            : 'book-outline'
                    }else if(route.name === 'CreatePost'){
                        iconName = focused ? 'create':'create-outline'
                    }
                    return <Ionicons name = {iconName} size = {size} color = {color}/>;
                },
            })}
            tabBarOptions = {{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name = "Feed" components = {Feed}/>
            <Tab.Screen name = "CreatePost" components = {CreatePost}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;
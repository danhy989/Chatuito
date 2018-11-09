import React from 'react'
import  {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import MainNavigator from '../component/BottomTab/Main/MainNavigator'
import  People from '../component/BottomTab/People/People'
import Camera from '../component/BottomTab/Camera/Camera'
import Images from '../component/BottomTab/Images/Images'
import Setting from '../component/BottomTab/Setting/Setting'
import Icon from 'react-native-vector-icons/Ionicons'


export default BottomTabNavigator = createMaterialBottomTabNavigator(
    {
        Home:{
            screen:MainNavigator,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(<Icon name="md-home" size={25} color={tintColor} />)
            }
        },
        People:{
            screen:People,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(<Icon name="md-people" size={25} color={tintColor} />)
            }
        },
        Camera:{
            screen:Camera,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(<Icon name="md-camera" size={25} color={tintColor} />)
            }
        },
        Image:{
            screen:Images,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(<Icon name="md-images" size={25} color={tintColor} />)
            }
        },
        Setting:{
            screen:Setting,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(<Icon name="md-settings"size={25} color={tintColor} />)
            }
        }
    },
    {
        barStyle:{
            backgroundColor:'white',
        }
    } ,
    {

    }

)
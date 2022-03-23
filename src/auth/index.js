// import storage from './../api/storage';
// import Constants from 'expo-constants';
//  import AsyncStorage from '@react-native-async-storage/async-storage';
// const envMode = Constants.manifest.extra.APP_ENV;
// const isLoogedIn = await storage.getData(`@Agenda4Pets${envMode}:token`).then((value) => {
//     if (value !== null || !value) return false;
//     return value;
// });

//  const value = AsyncStorage.getItem(`@Agenda4Pets${envMode}:token`);
import { useUser } from './useUser';
// console.log('isLoogedIn >>>>>>>>>>>>>', value);

export const isLoggedIn = props => {
    const user = useUser();
    return true
}
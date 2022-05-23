import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const envMode = Constants.manifest.extra.APP_ENV;
const saveAndUpdateData = async (key, value) => {
    const item = await AsyncStorage.getItem(`@Agenda4Pets${envMode}:${key}`);
    try {
        if (item === null) {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@Agenda4Pets${envMode}:${key}`, jsonValue);
            return { success: true }
        }
        else {
            console.warn(`${key} updated!`);
            await AsyncStorage.setItem(`@Agenda4Pets${envMode}:${key}`, value);
            return { success: true }
        }
    } catch (e) {
        console.error(e);
        return  { success: false }
    }
}

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(`@Agenda4Pets${envMode}:${key}`);
        console.warn(`@Agenda4Pets${envMode}:${key}`, value);
        return value;
    } catch (e) {
        console.error(e);
        return e;
    }
}

const removeData = async (key) => {
    try {
        const value = await AsyncStorage.removeItem(`@Agenda4Pets${envMode}:${key}`);
        return value;
    } catch (e) {
        console.error(e);
        return e;
    }
}

export default { getData, saveAndUpdateData, removeData  }
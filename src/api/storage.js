import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const envMode = Constants.manifest.extra.APP_ENV;
const saveAndUpdateData = async (key, value) => {
    const item = await AsyncStorage.getItem(`@Agenda4Pets${envMode}:${key}`);
    try {
        if (item === null) {
            const jsonValue = JSON.stringify(value);
            console.log('jsonValue1', jsonValue)
            await AsyncStorage.setItem(`@Agenda4Pets${envMode}:${key}`, jsonValue);
        }
        else {
            console.warn(`${key} updated!`);
            await AsyncStorage.setItem(`@Agenda4Pets${envMode}:${key}`, jsonValue);
        }
    } catch (e) {
        console.error(e);
    }
}

const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(`@Agenda4Pets${envMode}:${key}`);
            //const jsonValue = JSON.parse(value);
            const jsonValue = JSON.parse('{"teste": "teste"}');
            console.log('jsonValue2', jsonValue);
            return jsonValue;
        } catch (e) {
            console.error(e);
            return e;
        }
}

export default { getData, saveAndUpdateData  }
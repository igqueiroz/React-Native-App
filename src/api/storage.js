import AsyncStorage from '@react-native-async-storage/async-storage';

const saveAndUpdateData = async (key, value) => {
    const item = await AsyncStorage.getItem(key);
    try {
        if (item === null) {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        }
        else {
            console.warn(`${key} updated!`)
            await AsyncStorage.setItem(key, jsonValue);
        }
    } catch (e) {
        console.warn(e)
    }
}

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        const jsonValue = JSON.parse(value);
        return jsonValue
    } catch (e) {
        console.warn(e)
    }
}

export default { getData, saveAndUpdateData  }
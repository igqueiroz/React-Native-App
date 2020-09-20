

// const setTime = async () => {
//     const jsonValue = await AsyncStorage.getItem('info');
//     console.log('jsonValue', jsonValue)
//     if (jsonValue === null) {
//         const jsonValue = JSON.stringify(infoModel);
//         console.log('>>> CRIAÇÃO', jsonValue)
//         await AsyncStorage.setItem('item', jsonValue);
//     } else {
//         console.log('>>> NA MEMÓRIA', jsonValue)
//         stateUpdate(jsonValue)
//     }
//     const result = await AsyncStorage.saveAndUpdateData('info');
//     console.log('result', result)
// }





// const setFirstTimeFalse = async () => {
//     const updateConfig = { userFirstTime: false };
//     //config.stateUpdate(updateConfig);
//     // Seta o estado do userFirstTime como false
//     // {state: config, newState: updateConfig }
//     // props.execute.state.stateUpdate(props.execute.newState);
//     console.log(1, config.state.userFirstTime)
//     if (config.state.userFirstTime) removeFirstTime(config, updateConfig);
//     console.log(2, config.state.userFirstTime)

// }

// export default { setFirstTimeFalse, saveAndUpdateData, getData }
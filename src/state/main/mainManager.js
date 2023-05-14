
import Spiccato from 'spiccato';

import stateSchema from './stateSchema'
import getters from './getters'
import setters from './setters'
import methods from './methods'


const mainManager = new Spiccato(stateSchema, { id: "main", })

mainManager.addCustomGetters(getters)
mainManager.addCustomSetters(setters)
mainManager.addCustomMethods(methods)

mainManager.connectToLocalStorage({
    persistKey: "main",
    initializeFromLocalStorage: true,
    providerID: "main",
    clearStorageOnUnload: false,
    removeChildrenOnUnload: true,
    privateState: []
})


mainManager.init();

export default mainManager; 

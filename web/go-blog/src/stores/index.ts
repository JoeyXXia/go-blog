import {createPinia} from 'pinia'

const pinia = createPinia()

pinia.use( ({store}) => {
  if(store.$id === 'website') {
    store.initializeWebsite()
  }
})

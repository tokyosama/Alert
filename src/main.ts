import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { AMapResource } from './plugin/AMapResource'
await AMapResource.Instance.Run()

createApp(App)
.use(router)
.mount('#app')

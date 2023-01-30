import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/main.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import { fas} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas, faTwitter)

const app = createApp(App)
    app.use(router)
    app.mount('#app')
    app.component('font-awesome-icon', FontAwesomeIcon)
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

import App from './App.vue';
import router from './router';
import './style/global.css';

// const ApiId = import.meta.env.VITE_APPID;
// const ApiKey = import.meta.env.VITE_APIKEY;
// const ProjectId = import.meta.env.VITE_PROJECTID;
// const AuthDomain = import.meta.env.VITE_AUTHDOMAIN;
// const StorageBucket = import.meta.env.VITE_STORAGEBUCKET;
// const MeasurementId = import.meta.env.VITE_MEASUREMENTID;
// const MessagingSenderId = import.meta.env.VITE_MESSAGINGSENDERID;

// const firebaseConfig = {
//   apiKey: ApiKey,
//   authDomain: AuthDomain,
//   projectId: ProjectId,
//   storageBucket: StorageBucket,
//   messagingSenderId: MessagingSenderId,
//   appId: ApiId,
//   measurementId: MeasurementId,
// };

const app = createApp(App);
app.use(router);

// const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

app.use(createPinia());
app.mount('#app');

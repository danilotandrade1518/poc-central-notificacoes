importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'AIzaSyBWhEOcVfU3WkQafspMIrypE6KqNUp9Gpc',
  authDomain: 'poc-central-de-notificacoes.firebaseapp.com',
  projectId: 'poc-central-de-notificacoes',
  storageBucket: 'poc-central-de-notificacoes.appspot.com',
  messagingSenderId: '185292569649',
  appId: '1:185292569649:web:70efda4ae55e77a98da910',
  measurementId: 'G-PM87NMQ7ML'
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

<script setup lang="ts">
import { onMounted } from 'vue'

import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

// CREDENCIAIS FIREBASE
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}
const VAPID_KEY = ''

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

onMounted(async () => {
  try {
    // Solicitar permissão para notificações
    await Notification.requestPermission()
    // Obter o token FCM
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY
    })
    console.log('FCM Token:', token)

    // Escutar mensagens foreground
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload)
      // Mostrar notificação aqui
      new Notification(payload?.notification?.title || '', {
        body: payload?.notification?.body,
        icon: payload?.notification?.icon
      })
    })
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error)
  }
})
</script>

<template>
  <h1>POC Push Notification</h1>
</template>

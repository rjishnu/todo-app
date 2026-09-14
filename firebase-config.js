// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4j2Kw6wnd7yYK57utjXNt2V6nOXGBebw",
    authDomain: "todo-app-12d73.firebaseapp.com",
    databaseURL: "https://todo-app-12d73-default-rtdb.firebaseio.com",
    projectId: "todo-app-12d73",
    storageBucket: "todo-app-12d73.firebasestorage.app",
    messagingSenderId: "897993162706",
    appId: "1:897993162706:web:d63e4c6d8d952b7274120b"
};

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log('✅ Firebase initialized successfully!');
} catch (error) {
    console.error('❌ Firebase initialization error:', error);
}

// Get reference to the database
const database = firebase.database();
console.log('✅ Database reference created');

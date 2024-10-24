<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800" v-if="isLoginMode">Connexion</h2>
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800" v-else>Inscription</h2>

        <form @submit.prevent="submitForm">
        <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
            type="email" 
            v-model="email" 
            required 
            class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Entrez votre email" 
            />
        </div>

        <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
            <input 
            type="password" 
            v-model="password" 
            required 
            class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Entrez votre mot de passe"
            />
        </div>

        <div v-if="!isLoginMode" class="mb-4">
            <label for="photo" class="block text-sm font-medium text-gray-700 mb-2">Photo de profil</label>
            <input 
            type="file" 
            @change="onFileChange" 
            class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
        </div>

        <button 
            type="submit" 
            class="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
        >
            {{ isLoginMode ? 'Se connecter' : 'S’inscrire' }}
        </button>

        <p 
            @click="toggleMode" 
            class="mt-4 text-center text-blue-500 cursor-pointer hover:underline"
        >
            {{ isLoginMode ? 'Créer un compte' : 'J’ai déjà un compte' }}
        </p>
        </form>
    </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTaskStore } from '@/stores/taskstore';

const store = useTaskStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const photo = ref(null);
const isLoginMode = ref(true);

const toggleMode = () => {
    isLoginMode.value = !isLoginMode.value;
};

const onFileChange = (event) => {
    photo.value = event.target.files[0];
};

const submitForm = async () => {
    const user = {
    email: email.value,
      password: password.value, // Ajoute le mot de passe pour l'authentification
    photo: photo.value ? URL.createObjectURL(photo.value) : null
    };

    if (isLoginMode.value) {
    try {
        // Connexion utilisateur
        console.log("Tentative de connexion avec", email.value, password.value);
        await store.login(user); // Assure-toi que store.login gère l'authentification côté backend.
        
        // Si la connexion réussit, rediriger
        router.push('/');
    } catch (error) {
        console.error('Erreur de connexion:', error);
        // Afficher une notification d'erreur à l'utilisateur
    }
    } else {
    try {
        // Inscription utilisateur
        console.log("Tentative d'inscription avec", email.value, password.value, photo.value);
        await store.register(user); // Assure-toi d'avoir une méthode register distincte dans le store.

        // Si l'inscription réussit, rediriger
        router.push('/');
    } catch (error) {
        console.error('Erreur d\'inscription:', error);
        // Afficher une notification d'erreur à l'utilisateur
    }
    }
};
</script>

<template>
    <div class="form-container">
      <img src="/images/logo.png" alt="Logo" class="logo"> <!-- Logo added here -->
      <h2 class="text-center">Login to Your Account</h2>
      <form @submit.prevent="handleLogin">
        <div v-if="error" class="error-message">{{ error }}</div>
  
        <div class="form-group">
          <label class="form-label" for="email">Email:</label>
          <input type="email" id="email" class="form-control" v-model="email" required>
        </div>
  
        <div class="form-group">
          <label class="form-label" for="password">Password:</label>
          <input type="password" id="password" class="form-control" v-model="password" required>
        </div>
  
        <button type="submit" class="btn">Login</button>
        <br><br>
        <div class="redirect-link">
          <p>Don't have an account? <router-link to="/">Sign up here</router-link></p>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  // Example of a basic handleLogin method
  import { auth } from '../firebase'; // Adjust the import path as necessary
  import { signInWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '', // To store any error messages
      };
    },
    methods: {
        async handleLogin() {
  // Basic validation
  if (!this.email || !this.password) {
    this.error = 'Please enter your email and password.';
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
    const user = userCredential.user;

    // Check if email is verified
    if (!user.emailVerified) {
      this.error = 'Please verify your email before logging in.';
      // Optionally log out the user
      await auth.signOut();
      return;
    }

    // Proceed with login and redirect to the main page
    this.error = ''; // Clear any previous errors
    // Redirect to your main application page here
  } catch (error) {
    console.error('Error logging in:', error);
    this.error = error.message; // Display the error message
  }
},

    },
  };
  </script>
  
  <style>
  /* Reuse the same styles as in the UserSignup.vue */
  
  /* Overall body style with background image */
  body {
    background-image: url('/public/images/background.jpg'); /* Adjusted path */
    background-size: cover; /* Cover the entire background */
    background-position: center; /* Center the background */
    font-family: 'Montserrat', sans-serif; /* Consistent font */
    color: #333; /* Default text color */
  }
  
  /* Styles for a smaller, minimalist, and transparent container */
  .form-container {
    max-width: 350px; /* Smaller width for a minimalist look */
    margin: 50px auto;
    padding: 20px; /* Increased padding for better spacing */
    background-color: rgba(255, 255, 255, 0.7); /* More transparent */
    border-radius: 20px; /* Rounded edges */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  }
  
  /* Flexbox layout for the header */
  .header {
    display: flex; /* Use flexbox */
    align-items: center; /* Align items vertically */
    margin-bottom: 5px; /* Space below the header */
  }
  
  /* Header styles */
  .form-container h2 {
    text-align: center; 
    color: #ff6f61;
    margin: 0; /* Remove margin */
    font-family: 'Georgia', serif;
    font-size: 1.5rem; /* Adjusted font size for minimalism */
    font-weight: bold;
  }
  
  /* Form group styles */
  .form-group {
    margin-bottom: 10px; /* Space between each form group */
  }
  
  /* Form label styles */
  .form-label {
    font-weight: bold;
    display: block; /* Make labels block elements */
    margin-bottom: 5px; /* Space between label and input */
  }
  
  /* Input styles */
  .form-control {
    width: calc(90% - 20px); /* Full width minus padding */
    border: none; /* Remove edges */
    border-radius: 20px; /* Rounded edges */
    padding: 10px; /* Reduced padding for inputs */
    font-size: 1rem; /* Smaller font size */
    margin-bottom: 10px; /* Space below each textbox */
    background-color: rgba(255, 255, 255, 0.5); /* More transparent background for inputs */
    color: #333; /* Text color for better readability */
    transition: box-shadow 0.3s ease;
    text-align: center;
  }
  
  .form-control:focus {
    outline: none; /* Remove outline on focus */
    box-shadow: 0 0 5px rgba(255, 111, 97, 0.5); /* Focus shadow */
  }
  
  /* Button styles */
  .btn {
    background-color: #ff6f61;
    color: white;
    border: none;
    padding: 10px; /* Reduced padding for minimalism */
    border-radius: 20px; /* Rounded edges */
    cursor: pointer;
    font-size: 0.9rem; /* Smaller font size */
    transition: background-color 0.3s ease;
    width: 100%; /* Full width for the button */
  }
  
  .btn:hover {
    background-color: #e6554f; /* Darker shade on hover */
  }
  
  /* Logo styles */
  .logo {
    display: block; /* Center the logo */
    margin: 0 150px; /* Align left with bottom margin for spacing */
    max-width: 90px; /* Set a maximum width for the logo */
    height: auto; /* Maintain aspect ratio */
  }
  
  .error-message {
    color: red; /* Text color for error */
    background-color: #f8d7da; /* Light red background */
    border: 1px solid #f5c6cb; /* Border color */
    padding: 10px; /* Padding for spacing */
    border-radius: 5px; /* Rounded corners */
    margin-top: 10px; /* Space above the error message */
  }
  </style>
  
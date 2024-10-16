# Notes Web App

This project is a simple **Notes Web App** that allows users to sign up, log in, and save personal notes. The notes are stored locally in the browser's `localStorage`, so each user has their own set of notes.

## Features

- **Sign Up:** New users can register by providing a username and password.
- **Log In:** Registered users can log in with their credentials.
- **Save Notes:** Once logged in, users can add notes which are saved to their `localStorage`.
- **Persistent Storage:** Notes are saved using the `localStorage`, meaning they persist even if the browser is closed or the page is refreshed.
- **User-Specific Notes:** Each user’s notes are stored separately based on their username.

## Technologies Used

- HTML
- CSS
- JavaScript (with `localStorage` for persistence)

## How to Use

1. **Sign Up:**
   - Navigate to the sign-up page.
   - Enter a valid username and password.
   - Click the "Sign Up" button. Your account is now stored in the `localStorage`.

2. **Log In:**
   - On the login page, enter your username and password.
   - Click the "Log In" button. If the credentials are correct, you will be redirected to the notes page.

3. **Add Notes:**
   - After logging in, enter a note in the input field.
   - Click the "Submit" button to save the note. The note will be displayed on the page and stored in `localStorage`.

4. **View Notes:**
   - All notes for the logged-in user are displayed on the page.

## Local Setup Instructions

To run the project locally:

1. Download or clone the repository from GitHub:
   ```bash
   git clone https://github.com/yourusername/JsNoteProject.git

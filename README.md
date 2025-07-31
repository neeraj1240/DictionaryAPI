# Dictionary API

A simple Node.js-based API that provides dictionary functionalities, including word meanings and random word generation.

---


## ✨ Features

- 🔍 Fast word lookup with detailed meanings
- 🎲 Random word generation capabilities
- 📝 Comprehensive word definitions
- ⚡ Lightweight and efficient
- 🛡️ Built-in input validation
- 🚀 Easy to integrate
- 💻 Developer-friendly responses

---




## API Endpoints

### 1. Get Word Meaning
- **URL**: `/meaning/:word`
- **Method**: `GET`
- **Description**: Returns the meaning of the specified word.
- **Examples**:
  - **Request**: `/meaning/hello`
    ```json
    {
      "word": "hello",
      "meaning": "A greeting or expression of goodwill."
    }
    ```
  - **Error (Invalid Input)**: `/meaning/123`
    ```json
    {
      "error": "Invalid input. Please enter a valid word."
    }
    ```
  - **Error (Word Not Found)**: `/meaning/nonexistentword`
    ```json
    {
      "error": "Word not found"
    }
    ```

---

### 2. Get a Random Word
- **URL**: `/randomWord`
- **Method**: `GET`
- **Description**: Returns a random word.
- **Example**:
  - **Response**:
    ```json
    {
      "word": "serendipity"
    }
    ```

---

### 3. Get a Random Word with Meaning
- **URL**: `/randomWordWithMeaning`
- **Method**: `GET`
- **Description**: Returns a random word along with its meaning.
- **Example**:
  - **Response**:
    ```json
    {
      "word": "serendipity",
      "meaning": "The occurrence of events by chance in a happy or beneficial way."
    }
    ```

---

### 4. Handle Missing Word Input
- **URL**: `/meaning/`
- **Method**: `GET`
- **Description**: Informs the user to provide a word when no word is entered.
- **Example**:
  - **Response**:
    ```json
    {
      "error": "Please provide a word to search for its meaning."
    }
    ```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Dictionary-API.git
   cd Dictionary-API


---

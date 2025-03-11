# 📱 React Native User Information App

A simple React Native app that fetches and displays user information from a public API. The app allows users to navigate through 80 randomly generated users, showcasing details such as name, email, username, and avatar.

## 🚀 Features
- Fetches user data from **Random Data API**.
- Displays user details including **avatar, name, email, and more**.
- Navigation buttons to move between users.
- Optimized UI with a modern and responsive design.

---

## 📦 Tech Stack
- **React Native**
- **React Navigation**
- **Fetch API**

---

## ⚙️ Installation & Running

### **🔧 Prerequisites**
Ensure you have the following installed:
- **Node.js** and **Watchman** (for macOS users):
  ```sh
  brew install node watchman
  ```
- **CocoaPods** (for iOS):
  ```sh
  sudo gem install cocoapods
  ```

### **📥 Clone the Repository**
```sh
git clone https://github.com/yourusername/react-native-user-app.git
cd react-native-user-app
```

### **📦 Install Dependencies**
```sh
npm install
cd ios && pod install && cd ..
```

### **▶️ Run the App**
#### **For iOS (Simulator)**
```sh
npx react-native run-ios
```
#### **For Android**
```sh
npx react-native run-android
```

---

## 📡 API Reference
This app fetches user data from **Random Data API**.

Example API request:
```sh
https://random-data-api.com/api/users/random_user?size=80
```

---

## 📌 Additional Notes
- If you face issues with iOS, try:
  ```sh
  cd ios && pod install && cd ..
  ```
- Ensure that an **Android emulator** or a **physical device** is running before executing `npx react-native run-android`.
- If the Metro bundler isn't running, start it manually:
  ```sh
  npx react-native start
  ```

---

## 📜 License
This project is licensed under the **MIT License**.

---

Made with ❤️ by Akash Duttachowdhury


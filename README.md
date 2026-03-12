# AwesomeProject — React Native Tutorial

> A hands-on [**React Native**](https://reactnative.dev) example project covering drawer navigation, form handling, React hooks, and dark mode — designed as a practical reference and learning resource.

![React Native](https://img.shields.io/badge/React%20Native-0.72.3-blue?logo=react)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## Table of Contents

1. [About This Project](#about-this-project)
2. [Features Overview](#features-overview)
3. [JavaScript Features](#javascript-features)
   - [Drawer Navigation](#1-drawer-navigation)
   - [Custom Drawer Content](#2-custom-drawer-content)
   - [Home Screen](#3-home-screen)
   - [Notifications Screen](#4-notifications-screen)
   - [Countdown Timer](#5-countdown-timer)
   - [Form with React Hook Form](#6-form-with-react-hook-form)
   - [Custom Manual Form](#7-custom-manual-form)
   - [Dark Mode Support](#8-dark-mode-support)
   - [Shared Stylesheet](#9-shared-stylesheet)
4. [Tech Stack](#tech-stack)
5. [Project Structure](#project-structure)
6. [Getting Started](#getting-started)
7. [Running Tests](#running-tests)
8. [Troubleshooting](#troubleshooting)

---

## About This Project

This project was built as a **learning reference** for developers who want to:

- Set up Drawer Navigation with multiple screens
- Manage forms both manually and with `react-hook-form`
- Work with React hooks (`useState`, `useEffect`, `useRef`)
- Support dark mode natively

---

## Features Overview

| Feature | File(s) | Description |
|---|---|---|
| Drawer Navigation | `MyDrawer.jsx` | 5-screen slide-out navigation |
| Custom Drawer | `MyCustomExample.jsx` | Custom drawer content with toggle controls |
| Home Screen | `Home.jsx` | Landing screen with navigation |
| Notifications | `Notifications.jsx` | Simple back-navigation screen |
| Countdown Timer | `CountDown.jsx` | Hooks-driven 1-second timer |
| React Hook Form | `ReactFormExample.jsx` | Controlled form with validation |
| Manual Form | `FormEx.js` | useState-based form with save/cancel |
| Dark Mode | `Section.jsx` | System-aware color scheme support |
| Shared Styles | `CommonStyle.js` | Centralized StyleSheet |

---

## JavaScript Features

### 1. Drawer Navigation

**File:** `components/MyDrawer.jsx`

The main navigation structure uses `@react-navigation/drawer` wrapped in a `NavigationContainer`. Five screens are registered in the drawer:

```jsx
const MyDrawer = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home"        component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="FormExample" component={FormExample} />
      <Drawer.Screen name="Count Down"  component={CountDown} />
      <Drawer.Screen name="MyForm"      component={MyFrom} />
    </Drawer.Navigator>
  </NavigationContainer>
);
```

| Screen | What it demonstrates |
|---|---|
| **Home** | `navigation.navigate()` |
| **Notifications** | `navigation.goBack()` |
| **FormExample** | `react-hook-form` with validation |
| **Count Down** | `useState` + `useEffect` + `useRef` |
| **MyForm** | Manual `useState` form management |

---

### 2. Custom Drawer Content

**File:** `components/MyCustomExample.jsx`

Demonstrates how to replace the default drawer menu with a fully custom component using `DrawerContentScrollView`, `DrawerItemList`, and custom `DrawerItem` entries.

```jsx
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer"  onPress={() => props.navigation.closeDrawer()} />
      <DrawerItem label="Toggle drawer" onPress={() => props.navigation.toggleDrawer()} />
    </DrawerContentScrollView>
  );
}
```

> **Use this pattern** when you want to add custom items, headers, user profile sections, or logout buttons to your drawer.

---

### 3. Home Screen

**File:** `components/Home.jsx`

A centered landing screen that navigates to Notifications on button press:

```jsx
const HomeScreen = ({ navigation }) => (
  <View style={styles.defaultStyle}>
    <Text>Home Screen</Text>
    <Button
      title="Go to notifications"
      onPress={() => navigation.navigate('Notifications')}
    />
  </View>
);
```

---

### 4. Notifications Screen

**File:** `components/Notifications.jsx`

A simple screen that demonstrates `navigation.goBack()`:

```jsx
const Notifications = ({ navigation }) => (
  <View style={styles.defaultStyle}>
    <Button title="Go back home" onPress={() => navigation.goBack()} />
  </View>
);
```

---

### 5. Countdown Timer

**File:** `components/CountDown.jsx`

Demonstrates how to build a timer using three React hooks together:

```jsx
const CountDown = () => {
  const [count, setCount]   = useState(0);
  const [start, setStart]   = useState(false);
  const timerIdRef          = useRef(null);

  useEffect(() => {
    if (start) {
      timerIdRef.current = setTimeout(() => setCount(count + 1), 1000);
    }
    return () => clearTimeout(timerIdRef.current);
  }, [count, start]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Start" onPress={() => setStart(true)} />
      <Button title="Stop"  onPress={() => { clearTimeout(timerIdRef.current); setStart(false); }} />
    </View>
  );
};
```

| Hook | Purpose |
|---|---|
| `useState(count)` | Tracks the current counter value |
| `useState(start)` | Tracks whether the timer is running |
| `useRef` | Holds the `setTimeout` ID to allow cancellation |
| `useEffect` | Re-runs the tick every time `count` or `start` changes |

---

### 6. Form with React Hook Form

**File:** `components/ReactFormExample.jsx`

Shows how to use `react-hook-form` with React Native `TextInput` via the `Controller` component:

```jsx
const FormExample = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { firstName: '', lastName: '' },
  });

  return (
    <View>
      <Controller
        control={control}
        name="firstName"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="First name" onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />
      {errors.firstName && <Text>This field is required.</Text>}

      <Controller
        control={control}
        name="lastName"
        rules={{ maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="Last name" onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />

      <Button title="Submit" onPress={handleSubmit((data) => console.log(data))} />
    </View>
  );
};
```

| Field | Validation |
|---|---|
| First Name | Required — shows error if empty on submit |
| Last Name | Optional — max 100 characters |

---

### 7. Custom Manual Form

**File:** `components/FormEx.js`

A hand-rolled form built entirely with `useState` — no library required. Good reference for simple forms:

```jsx
const MyFrom = () => {
  const [name, setName]       = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge]         = useState('');
  const [data, setData]       = useState('');

  const onSave   = () => setData(`${name}\n${address}\n${age}`);
  const onCancel = () => { setName(''); setAddress(''); setAge(''); setData(''); };

  return (
    <View>
      <TextInput placeholder="Enter your name"    value={name}    onChangeText={setName} />
      <TextInput placeholder="Enter your address" value={address} onChangeText={setAddress} />
      <TextInput placeholder="Enter your age"     value={age}     onChangeText={setAge} keyboardType="numeric" />
      <Text>{data}</Text>
      <Button title="Save"   onPress={onSave} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};
```

---

### 8. Dark Mode Support

**File:** `components/Section.jsx`

Uses the `useColorScheme()` hook to detect the system appearance and adapt text colors at runtime:

```jsx
const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black }]}>
        {title}
      </Text>
      <Text style={[styles.sectionDescription, { color: isDarkMode ? Colors.light : Colors.dark }]}>
        {children}
      </Text>
    </View>
  );
};
```

> No third-party theming library needed — `useColorScheme()` is built into React Native and reacts to system-level changes automatically.

---

### 9. Shared Stylesheet

**File:** `components/CommonStyle.js`

A single `StyleSheet.create()` object imported by multiple components, keeping styles consistent and avoiding duplication:

```js
const styles = StyleSheet.create({
  sectionContainer: { marginTop: 32, paddingHorizontal: 24 },
  sectionTitle:     { fontSize: 24, fontWeight: '600' },
  sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: '400' },
  highlight:        { fontWeight: '700' },
  defaultStyle:     { flex: 1, justifyContent: 'center', alignItems: 'center' },
  pmyadding:        { padding: 4, borderColor: 'black', borderWidth: 2,
                      backgroundColor: 'lightgrey', margin: 6 },
});
```

---

## Tech Stack

| Package | Version | Purpose |
|---|---|---|
| react-native | 0.72.3 | Core framework |
| react | 18.2.0 | UI library |
| @react-navigation/native | ^6.1.7 | Navigation container |
| @react-navigation/drawer | ^6.6.3 | Drawer navigator |
| @react-navigation/stack | ^6.3.17 | Stack navigator |
| react-hook-form | ^7.45.4 | Form state & validation |
| react-native-gesture-handler | ^2.12.0 | Touch gesture support |
| react-native-reanimated | ^3.3.0 | Animation engine |
| react-native-safe-area-context | ^4.7.1 | Safe area insets |
| react-native-screens | ^3.22.1 | Native screen containers |

---

## Project Structure

```
AwesomeProject/
├── App.jsx                            # Root component — mounts MyDrawer
├── index.js                           # App entry point (registers "AwesomeProject")
├── components/
│   ├── MyDrawer.jsx                   # Main drawer navigator (5 screens)
│   ├── MyCustomExample.jsx            # Custom drawer content example
│   ├── Home.jsx                       # Home screen
│   ├── Notifications.jsx              # Notifications screen
│   ├── CountDown.jsx                  # Countdown timer (hooks demo)
│   ├── ReactFormExample.jsx           # react-hook-form example
│   ├── FormEx.js                      # Manual useState form
│   ├── Section.jsx                    # Dark-mode aware section component
│   └── CommonStyle.js                 # Shared StyleSheet
├── android/
└── ios/
```

---

## Getting Started

### Prerequisites

Complete the [React Native — Environment Setup](https://reactnative.dev/docs/environment-setup) guide for your target platform before proceeding. You will need:

- **Node.js** >= 16
- **Watchman** (macOS)
- **Android Studio** + Android SDK (for Android)
- **Xcode** 13+ (for iOS, macOS only)
- **CocoaPods** (for iOS)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/AwesomeProject.git
cd AwesomeProject

# 2. Install JavaScript dependencies
npm install

# 3. iOS — install native CocoaPods dependencies
cd ios && pod install && cd ..

# 4. Android — clean the Gradle build cache (recommended on first run)
cd android && ./gradlew clean && cd ..
```

### Running the App

**Step 1 — Start the Metro bundler** (keep this terminal open):

```bash
npm start
```

**Step 2 — Launch on your target platform** (open a new terminal):

```bash
# Android
npm run android

# iOS
npm run ios
```

Your app will open in the Android Emulator or iOS Simulator. You should see the drawer navigator with all five screens accessible from the hamburger menu.

---

## Running Tests

```bash
npm test
```

The test suite uses **Jest** with `react-test-renderer`. The iOS side also includes an Objective-C integration test (`AwesomeProjectTests.m`) that verifies the React Native bridge renders the JS bundle into a native `RCTRootView`.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Metro not starting | Delete `.metro-cache` and re-run `npm start` |
| Android build fails | Run `cd android && ./gradlew clean` then retry |
| iOS pod issues | Run `cd ios && pod deintegrate && pod install` |
| Navigation crash | Ensure `react-native-gesture-handler` import is the first line in `index.js` |
| Hermes not working | Verify `IS_HERMES_ENABLED=true` in `android/gradle.properties` |

For more help, see the official [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

---

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

---

## License

This project is open source and available under the [MIT License](LICENSE).


const { AppRegistry, View, Text, StyleSheet } = window.ReactNativeWeb;
const React = window.React;
const ReactDOM = window.ReactDOM;

const App = () => {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Text, null, "Hello from React Native Web!")
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
});

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root"),
});

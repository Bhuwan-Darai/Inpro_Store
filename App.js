import { WebView } from "react-native-webview";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return loading ? (
    <View style={styles.container}>
      <Image
        source={require("./assets/inprologo.jpg")}
        style={styles.loadingImage}
      />
      <Image
        source={require("./assets/loading.gif")}
        style={styles.loadingImage}
      />
    </View>
  ) : (
    <WebView
      style={{ marginTop: 34 }}
      source={{ uri: "Inprostore.vercel.app" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingImage: {
    width: 100,
    height: 100,
  },
});

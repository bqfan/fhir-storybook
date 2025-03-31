import { Text, View } from "react-native";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

function App() {
  return (
    <GluestackUIProvider mode="light">
      <View className="flex-1 bg-white items-center justify-center">
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </GluestackUIProvider>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.rnstorybook").default;
}

export default AppEntryPoint;

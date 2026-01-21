import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default function Auth() {
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();

  const loadingFyn = () => {
    setIsloading(true);
    setTimeout(() => {
      router.push("/(auth)/terms_agree");
    }, 3000);
  };

  useEffect(() => {
    setTimeout(loadingFyn, 2000);
  }, []);
  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}></View>
      <View style={style.body}>
        <Image
          style={style.logo}
          source={require("@/src/assets/images/whatsapp_logo.png")}
        />
        <Text style={style.whatsapp_text}>WhatsApp</Text>
      </View>
      <View style={style.footer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text style={style.from_text}>From</Text>
            <Text style={style.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(50),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: moderateScale(70),
    height: moderateScale(70),
  },
  footer: {
    alignItems: "center",
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#9e9e9e",
  },
  facebook_text: {
    fontSize: moderateScale(16),
    color: "#000000",
    fontWeight: 600,
  },
  whatsapp_text: {
    fontSize: 30,
    fontWeight: 700,
  },
});

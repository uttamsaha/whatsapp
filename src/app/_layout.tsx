import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLoggedIn ? (
        <Redirect href={"/(main)"} />
      ) : (
        <Redirect href={"/(auth)"} />
      )}
    </>
  );
}

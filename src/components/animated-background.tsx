"use client";
import React, { Suspense } from "react";
import { Application } from "@splinetool/runtime";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { usePreloader } from "./preloader";

const AnimatedBackground = () => {
  const { bypassLoading } = usePreloader();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline
        onLoad={(app: Application) => {
          bypassLoading();
          const keyboard = app.findObjectByName("keyboard");
          const platform = app.findObjectByName("platform");
          const body = app.findObjectByName("body");
          const allObjects = app.getAllObjects();

          if (keyboard) keyboard.visible = false;
          if (platform) platform.visible = false;
          if (body) body.visible = false;

          allObjects.forEach((obj) => {
            if (obj.name.includes("keycap")) {
              obj.visible = true;
            }
          });
        }}
        scene="/assets/skills-keyboard.spline"
      />
    </Suspense>
  );
};

export default AnimatedBackground;

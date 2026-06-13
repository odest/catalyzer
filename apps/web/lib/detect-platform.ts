export type Platform =
  | "windows"
  | "macos"
  | "linux"
  | "android"
  | "ios"
  | "unknown";

const ANDROID_REGEX = /android/;
const IOS_REGEX = /iphone|ipad|ipod/;
const WIN_REGEX = /win/;
const MAC_REGEX = /mac/;
const LINUX_REGEX = /linux/;

export function detectPlatform(): Platform {
  if (typeof navigator === "undefined") {
    return "unknown";
  }
  const ua = navigator.userAgent.toLowerCase();
  if (ANDROID_REGEX.test(ua)) {
    return "android";
  }
  if (IOS_REGEX.test(ua)) {
    return "ios";
  }
  if (WIN_REGEX.test(ua)) {
    return "windows";
  }
  if (MAC_REGEX.test(ua)) {
    return "macos";
  }
  if (LINUX_REGEX.test(ua)) {
    return "linux";
  }
  return "unknown";
}

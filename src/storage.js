import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "TRAIL_COMPASS_PINS_V1";

// Load the saved pins
export async function loadPins() {
  try {
    const json=await AsyncStorage.getItem(KEY)
    return json? JSON.parse(json):[]
  } catch (err) {
    console.error("Error loading pins:", err)
    return [];
  }
}

// Save the pins locally
export async function savePins(pins) {
  try {
    const json=JSON.stringify(pins)
    await AsyncStorage.setItem(KEY, json)
  } catch (err) {
    console.error("Error saving pins:", err)
  }
}
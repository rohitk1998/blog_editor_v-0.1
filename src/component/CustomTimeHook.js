import { useState } from "react";
export function useCustomTimeHooks() {
  console.log("Hello Custom Hook")
  function getCurrentTime() {
    let date = new Date();
    return (
      date.getHours() + ": " + date.getMinutes() + ": " + date.getSeconds()
    );
  }

  let [time, setTime] = useState(getCurrentTime());

  setTimeout(() => {
    setTime(getCurrentTime());
  }, 1000);

  return time;
}

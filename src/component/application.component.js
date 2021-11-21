import { useCustomTimeHooks } from "./CustomTimeHook";
export function ApplicationComponent() {
  const time = useCustomTimeHooks();

  return (
    <div>
      <h1>Current Time: {time}</h1>
    </div>
  );
}

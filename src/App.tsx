import { SecondsCard } from "components";
import { useEffect, useState } from "react";

function App() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-evenly">
      <div className="flex w-full items-center justify-between px-16">
        <SecondsCard type="day"></SecondsCard>
        <SecondsCard type="hour"></SecondsCard>
        <SecondsCard type="minute"></SecondsCard>
        <SecondsCard type="sec"></SecondsCard>
      </div>
    </main>
  );
}

export default App;

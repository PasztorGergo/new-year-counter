import { NumberCard } from "components";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState<number>(0);
  const date = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0, 0);

  useEffect(() => {
    setInterval(() => {
      setTime(date.getTime() - new Date().getTime());
    }, 1000);
  }, []);

  return (
    <main className="h-full w-full flex flex-col items-center justify-evenly">
      <div className="flex w-full items-center justify-between px-16">
        <NumberCard>
          {Math.floor(time / (24 * 60 * 60 * 1000))
            .toString()
            .padStart(3, "0")}
        </NumberCard>
        <NumberCard>
          {Math.floor(
            (time / (24 * 60 * 60 * 1000) -
              Math.floor(time / (24 * 60 * 60 * 1000))) *
              24
          )
            .toString()
            .padStart(2, "0")}
        </NumberCard>
        <NumberCard>
          {Math.floor(
            ((time / (24 * 60 * 60 * 1000) -
              Math.floor(time / (24 * 60 * 60 * 1000))) *
              24 -
              Math.floor(
                (time / (24 * 60 * 60 * 1000) -
                  Math.floor(time / (24 * 60 * 60 * 1000))) *
                  24
              )) *
              60
          )
            .toString()
            .padStart(2, "0")}
        </NumberCard>
        <NumberCard>
          {Math.floor(
            (((time / (24 * 60 * 60 * 1000) -
              Math.floor(time / (24 * 60 * 60 * 1000))) *
              24 -
              Math.floor(
                (time / (24 * 60 * 60 * 1000) -
                  Math.floor(time / (24 * 60 * 60 * 1000))) *
                  24
              )) *
              60 -
              Math.floor(
                ((time / (24 * 60 * 60 * 1000) -
                  Math.floor(time / (24 * 60 * 60 * 1000))) *
                  24 -
                  Math.floor(
                    (time / (24 * 60 * 60 * 1000) -
                      Math.floor(time / (24 * 60 * 60 * 1000))) *
                      24
                  )) *
                  60
              )) *
              60
          )
            .toString()
            .padStart(2, "0")}
        </NumberCard>
      </div>
    </main>
  );
}

export default App;

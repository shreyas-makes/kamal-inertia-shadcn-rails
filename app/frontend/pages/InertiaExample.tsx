import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const TimerComponent: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Timer: {time} seconds</h1>
      <div className="space-x-2">
        <Button onClick={toggleTimer} variant="outline">
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button onClick={resetTimer} variant="destructive">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default TimerComponent;

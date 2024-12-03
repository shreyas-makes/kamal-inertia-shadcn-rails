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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Timer: {time} seconds
        </h1>
        <div className="space-x-4">
          <Button onClick={toggleTimer} variant="outline" className="w-24">
            {isRunning ? "Pause" : "Start"}
          </Button>
          <Button onClick={resetTimer} variant="destructive" className="w-24">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimerComponent;

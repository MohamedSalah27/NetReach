import { useState, useEffect } from 'react';

export const PerformanceCard = () => {
  const [metrics, setMetrics] = useState(() => ({
    reach: 1240000,
    engagement: 24.5,
    intent: 6.2,
    sessionId: Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, '0'),
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        reach: prev.reach + (Math.floor(Math.random() * 200) - 50),
        engagement: parseFloat(
          (prev.engagement + (Math.random() * 0.4 - 0.2)).toFixed(1)
        ),
        intent: parseFloat(
          (prev.intent + (Math.random() * 0.2 - 0.1)).toFixed(2)
        ),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-10 rounded-4xl sm:rounded-[2.5rem] flex flex-col backdrop-blur-sm w-[calc(100%-2rem)] mx-auto sm:w-full sm:max-w-md relative overflow-hidden">
      <div className="w-full flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_purple]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-black">
            System Live
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          NODE_ID: {metrics.sessionId}
        </span>
      </div>

      <div className="space-y-10 w-full text-left">
        <div>
          <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 font-bold">
            Aggregated Network Reach
          </p>
          <div className="sm:text-6xl text-5xl font-mono font-black tracking-tighter text-white tabular-nums">
            {metrics.reach.toLocaleString()}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 w-full">
          <div>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 font-bold">
              Engagement
            </p>
            <div className="text-3xl font-mono font-black text-purple-500 tabular-nums">
              {metrics.engagement}%
            </div>
          </div>
          <div>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 font-bold">
              Conv. Velocity
            </p>
            <div className="text-3xl font-mono font-black text-white tabular-nums">
              {metrics.intent}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function GreexExperienceDetails() {
  return (
    <div className="-tracking-[4%] text-[14px] flex flex-col gap-4">
      <div>
        <strong>Led by ex-Binance folks, GreeX</strong> was an early stage
        Crypto CEX, aimed at making crypto options easier and accessible by
        providing a gamified experience.
      </div>
      <div>
        Responsibilites:
        <ul className="list-disc list-outside ml-4.5">
          <li>
            Built <strong>core exchange infra</strong>: ultra-low-latency C++{" "}
            <strong>matching engine</strong> (based on Liquibooks) and{" "}
            <strong>risk & liquidation systems</strong>, with optimized API
            design, caching, and performance tuning.
          </li>
          <li>
            Engineered a <strong>high-throughput Kafka data bus</strong> for
            market data and order flow.
          </li>
          <li>
            Managed a <strong>3-person team</strong>, steering architecture,
            reviewing PRs, and driving delivery of critical systems.
          </li>
          <li>
            Designed and shipped a <strong>gamified Telegram mini-app</strong>{" "}
            for options trading, from UX to <strong>wallet integration</strong>.
          </li>
        </ul>
      </div>
    </div>
  );
}

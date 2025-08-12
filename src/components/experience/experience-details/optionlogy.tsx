export function OptionlogyExperienceDetails() {
  return (
    <div className="-tracking-[4%] text-[14px] flex flex-col gap-4">
      <div>
        <strong>Optionlogy</strong> began as an advanced{" "}
        <strong>options analytics</strong> platform, delivering in-depth
        insights such as Greeks, payoff analysis, and predictive modeling using
        a customized Black-Scholes model. Over time, it evolved into a
        full-fledged <strong>algorithmic trading</strong> platform, empowering
        options traders to automate and optimize their strategies with ease. At
        its peak, Optionlogy served over 60,000 active users, offering them a
        seamless, data-driven trading experience.
      </div>
      <div>
        Responsibilites:
        <ul className="list-disc list-outside ml-4.5">
          <li>
            <strong>Developed advanced options analytics</strong>, including
            Greeks, volatility metrics, OI, probability of profit, and
            breakevens.
          </li>
          <li>
            Designed intuitive UIs and scalable backend APIs with robust data
            operations using{" "}
            <strong>NextJS, GoLang, NodeJS, Python, Java</strong> and more.
          </li>
          <li>
            Implemented a custom Black-Scholes variant for combined IV-based
            options pricing.
          </li>
          <li>
            Engineered a <strong>distributed algo-trading engine</strong> in
            GoLang using an orchestrator - worker node architecture.
          </li>
          <li>
            Built <strong>real-time data pipelines</strong> with Kafka,
            TimescaleDB, WebSockets, and more for candle aggregation and
            streaming.
          </li>
          <li>
            Delivered a seamless, high-performance trading experience for 60K+
            active options traders.
          </li>
        </ul>
      </div>
    </div>
  );
}

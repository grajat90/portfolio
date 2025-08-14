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
            Built a <strong>multi-leg options analytics suite</strong> with
            payoff curves, <strong>greeks, implied volatility, deltas</strong>,
            breakevens, and probability of profit, powered by a{" "}
            <strong>custom Black-Scholes variant</strong> combining implied
            volatilities for more realistic pricing.
          </li>
          <li>
            Designed <strong>real-time data pipelines</strong> for market feeds
            and analytics using{" "}
            <strong>
              WebSockets, Kafka, TimescaleDB, Redis, Python, Go, and Celery
            </strong>
            , delivering <strong>millisecond-level updates</strong> to traders.
          </li>
          <li>
            Engineered a <strong>distributed algo trading system</strong> in Go
            using a <strong>master-slave architecture</strong>, managing load,
            job scheduling, and availability of strategy processor nodes,
            enabling <strong>parallel execution</strong> across thousands of
            trading strategies.
          </li>
          <li>
            Developed a clean, intuitive & bug free user interface with
            streaming analytics using{" "}
            <strong>NextJS, ReactJS, WS, Figma</strong>
          </li>
          <li>
            Worked with databases & <strong>caching</strong> layers such as{" "}
            <strong>redis and elasticsearch</strong> for fast & scalable trading
            & analysis
          </li>
          <li>
            Managed a <strong>tech team of 5 people</strong> providing them with{" "}
            <strong>architectural design</strong>, technical guidance and PR
            reviews
          </li>
        </ul>
      </div>
    </div>
  );
}

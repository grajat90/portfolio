export function OpynExperienceDetails() {
  return (
    <div className="-tracking-[4%] text-[14px] flex flex-col gap-4">
      <div>
        <strong>Opyn (acquired by Coinbase)</strong> was a DeFi company and the
        original inventor of the Power Perp - a ground breaking research and
        manifestation of options on chain. Their first iteration - squeeth - had
        massive popularity and they were on the way to creating opyn markets
        (2nd iteration) when they were qcquired.
      </div>
      <div>
        Responsibilites:
        <ul className="list-disc list-outside ml-4.5">
          <li>
            Created <strong>end-to-end trading flows</strong>, integrating{" "}
            <strong>EVM smart contracts</strong> via{" "}
            <strong>indexers, alchemy SDKs, and direct RPC calls</strong>.
          </li>
          <li>
            Implemented <strong>contract read, write & simulate logic</strong>{" "}
            for trade execution, <strong>transaction builder</strong>,{" "}
            <strong>position management</strong>, <strong>Uniswap calls</strong>
            , <strong>collateral and LP adjustments</strong> and more with{" "}
            <strong>viem/wagmi</strong> in <strong>NextJS</strong> to enable
            seamless trading experiences.
          </li>
          <li>
            Designed <strong>real-time on-chain data indexer</strong> for trade
            events, pricing, liquidity, and risk parameters, in{" "}
            <strong>ponder</strong>, ensuring{" "}
            <strong>&lt;200ms UI response</strong> for active DeFi traders.
          </li>
          <li>
            Engineered advanced off-chain calculations for{" "}
            <strong>
              liquidations, execution price, price impact, portfolio health,
              expected payoff, expected liquidations
            </strong>{" "}
            & more for a complete view of your existing portfolio as well as any
            new potential trade
          </li>
          <li>
            Collaborated with smart contract engineers to design user
            interaction patterns{" "}
            <strong>minimizing gas costs and failed transactions</strong>{" "}
            through batched <strong>multicalls</strong>, transaction
            simulations, and{" "}
            <strong>advanced validations based on liquidity and risk</strong>.
          </li>
          <li>
            Developed dashboards to visualize{" "}
            <strong>payoff & risk metrics</strong> for on-chain positions,
            leveraging <strong>advanced options knowledge</strong>.
          </li>
          <li>
            Worked closely with protocol researchers to translate{" "}
            <strong>DeFi economic mechanisms</strong> into clear, actionable
            user experiences.
          </li>
        </ul>
      </div>
    </div>
  );
}

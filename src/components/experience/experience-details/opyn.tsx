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
            Built entire exchange frontend using <strong>NextJS</strong>
          </li>
          <li>
            Analysed smart contract code and created calculations and
            estimations for{" "}
            <strong>liquidation prices, exec price, price impact</strong>, etc
          </li>
          <li>
            Created complex smart contract interactions using{" "}
            <strong>Wagmi, viem</strong>, ethers, rainbow kit wallet connection
            etc
          </li>
          <li>
            Built and maintained indexer for on-chain data and aggregations
          </li>
          <li>
            Created advanced charting, data streaming and user interactions for
            a fast paced exchange terminal
          </li>
        </ul>
      </div>
    </div>
  );
}

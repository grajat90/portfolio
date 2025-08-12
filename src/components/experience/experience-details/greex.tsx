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
            Managed a team of 3 engineers to implement core parts of the
            exchange
          </li>
          <li>
            Created the <strong>exchange architecture</strong> and execution
            logic including
            <strong>order mtching and risk</strong>
          </li>
          <li>
            Developed a <strong>matching engine</strong> in C++ built on top of
            liquibooks to facilitate the most nimble order matching process
          </li>
          <li>
            Built a <strong>telegram mini app</strong> to introduce people to
            the exchange in a gamified manner
          </li>
        </ul>
      </div>
    </div>
  );
}

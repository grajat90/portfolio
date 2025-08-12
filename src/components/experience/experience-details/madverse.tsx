export function MadverseExperienceDetails() {
  return (
    <div className="-tracking-[4%] text-[14px] flex flex-col gap-4">
      <div>
        <strong>Madverse</strong> is a tech-driven platform that empowers
        independent artists to distribute, monetize, and promote their music. It
        offers tools like AI-generated cover art, streamlined payments, and
        marketing features, enabling artists to reach audiences and grow without
        relying on traditional labels.
      </div>
      <div>
        Responsibilites:
        <ul className="list-disc list-outside ml-4.5">
          <li>
            Interacted with CTO and leadership to discuss product plans and
            provided timelines, suggestions & blockers
          </li>
          <li>
            Implemented features such as <strong>AI Cover Art</strong> using
            NextJs, Prisma, OpenAi & Stability SDXL APIs, tRPC and S3
          </li>
          <li>
            Developed new internal flows for payment processing for
            multi-country users using Stripe + Razorpay
          </li>
          <li>
            Fixed UX flows and bugs throughout the platform, reducing customer
            churn significantly
          </li>
          <li>
            Ideated with leadership on new venues within the platform such as
            Label platform and Manager View
          </li>
        </ul>
      </div>
    </div>
  );
}

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray py-5 md:py-10">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
        <h3 className="text-4xl md:text-6xl">It&apos;s easy.</h3>
        <div className="flex flex-col gap-5 md:gap-10 md:col-span-3">
          <article className="grid grid-cols-2 gap-5 md:gap-10 border-t pt-5">
            <h4 className="text-2xl md:text-4xl">Choose your type of yoga</h4>
            <p>
              The classic Hatha yoga suits most of people, but it can be
              practiced in many ways. Together we&apos;ll choose what benefits
              you most. Healthy back, stretching, balancing, restoration – I
              cover it all.
            </p>
          </article>
          <article className="grid grid-cols-2 gap-5 md:gap-10 border-t pt-5">
            <h4 className="text-2xl md:text-4xl">From comfort of your home</h4>
            <p>
              All you need is a suitable device with camera and mic, and a
              stable Internet connection. Online private lessons are very
              similar to in-person ones, but much more convenient and
              affordable.
            </p>
          </article>
          <article className="grid grid-cols-2 gap-5 md:gap-10 border-t pt-5">
            <h4 className="text-2xl md:text-4xl">
              Scheduled to suit your needs
            </h4>
            <p>
              My goal is to make yoga accessible to everyone. Either you
              consider a 30-minute weekly practice or 2-hour daily lessons,
              contact me and we&apos;ll find a schedule that works best for you.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

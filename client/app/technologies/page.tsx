const TechnologiesPage = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start bg-white pt-32 px-4 pb-20 relative gap-12">
      <div className="absolute inset-0 h-screen w-screen flex items-center justify-center z-0 mx-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-auto w-full object-contain pointer-events-none"
          src="/assets/coming-soon.webm"
          controlsList="nodownload"
          controls={false}
        />
      </div>
    </section>
  );
};

export default TechnologiesPage;

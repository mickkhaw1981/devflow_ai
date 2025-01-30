export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="h1-bold text-primary-500 text-gradient animate-fade-in">
          DevFlow AI
        </h1>
        <p className="text-muted-foreground mt-4 animate-fade-in animation-delay-200 text-center max-w-lg roboto_mono">
          Your go-to platform for developer Q&A and knowledge sharing
        </p>
      </div>
    </main>
  );
}

import Card from "@/components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('../public/assets/pattern-background-mobile.svg')] bg-cover bg-no-repeat bg-primary-pale-blue md:bg-[url('../public/assets/pattern-background-desktop.svg')] md:bg-contain">
      <Card/>
    </main>
  );
}

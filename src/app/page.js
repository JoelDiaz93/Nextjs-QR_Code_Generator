import { QRCode } from "@/components/QrCode";
import { BackgroundGradient } from "../components/ui/background-gradient";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-8 text-center">Generador de códigos QR</h1>
      <BackgroundGradient className="rounded-[22px] p-2 sm:p-6 bg-white dark:bg-zinc-900">
        <div className="rounded m-10 w-auto">
          <QRCode />
        </div>
      </BackgroundGradient>
    </div>
  );
}

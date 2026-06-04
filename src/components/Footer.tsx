import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2f42] py-8 bg-[#0a0b0f]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#8892a4]">
        <Image
          src="/logo.png"
          alt="Jhean Lamprecht — The Solutionist"
          width={120}
          height={80}
          className="h-32 w-auto opacity-80"
        />
        <div>
          Johannesburg, South Africa · jhean@bluethoughtech.com
        </div>
        <div>
          Built with purpose. Problems solved daily.
        </div>
      </div>
    </footer>
  );
}

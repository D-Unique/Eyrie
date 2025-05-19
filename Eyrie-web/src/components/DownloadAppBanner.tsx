import Image from "next/image";

export default function DownloadAppBanner() {
  return (
    <div className="bg-[#FEFEFE] lg:max-w-6xl max-w-full mx-auto px-4 py-1 lg:py-4 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
      <span className="text-xs sm:text-sm text-[#555] text-center sm:text-left sm:whitespace-nowrap">
        You can download the Eyrie app from
      </span>
      <Image
        src="/images/googleplay.png"
        alt="Get it on Google Play"
        width={120}
        height={40}
        className="cursor-pointer hover:opacity-90 transition-opacity w-[100px] sm:w-[120px]"
      />
    </div>
  );
}

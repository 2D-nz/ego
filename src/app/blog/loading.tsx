import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center h-screen w-screen justify-center">
      <Image src="/dash.gif" height={800} width={800} alt="megaman dash" />
    </div>
  );
}

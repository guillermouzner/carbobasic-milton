import Image from "next/image";

export default async function IndexPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Image alt="Imagen de Milton" height={256} src="/milton.png" width={256} />
      <h1 className="text-3xl capitalize">
        Leaders in <span className="font-bold">Engineering Consultation</span>
      </h1>
    </div>
  );
}

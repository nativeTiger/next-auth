import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Image from "next/image";
import { SignOutButton } from "@/components/ui/button/sign-out";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  const user = session?.user;
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="shadow-large p-6 flex flex-col gap-y-4">
        <figure className="flex gap-x-4">
          <Image
            className="border-2 rounded-full"
            src={user?.image as string}
            width={50}
            height={50}
            alt="images"
          />
          <figcaption>
            <h4 className="text-lg font-bold text-gray-700">{user?.name}</h4>
            <h5 className="text-base font-medium text-gray-500">
              {user?.email}
            </h5>
          </figcaption>
        </figure>
        <SignOutButton />
      </div>
    </main>
  );
}

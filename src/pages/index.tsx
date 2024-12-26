import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

export default function Home() {
    return (
        <main className="flex h-screen w-full items-center justify-center">
            <article className="flex h-[570px] w-80 flex-col items-center gap-7 rounded-xl bg-[#1f1f1f] p-6">
                <figure>
                    <Image
                        className="rounded-full"
                        src="/avatar-jessica.jpeg"
                        alt="Foto de perfil"
                        width={88}
                        height={88}
                    />
                </figure>

                <section className="flex flex-col items-center gap-2">
                    <h1 className="text-2xl font-semibold">Jessica Randall</h1>
                    <p className="text-sm font-semibold text-[#c5f82a]">
                        London, United Kingdom
                    </p>
                </section>

                <section className="flex w-full flex-col items-center gap-6">
                    <q className="text-sm">
                        Front-end developer and avid reader.
                    </q>

                    <div className="flex w-full flex-col gap-3">
                        <div className="flex h-11 w-full items-center justify-center rounded-lg bg-[#333333] active:bg-[#c5f82a] active:text-black">
                            <p className="text-sm font-bold">Github</p>
                        </div>

                        <div className="flex h-11 w-full items-center justify-center rounded-lg bg-[#333333] active:bg-[#c5f82a] active:text-black">
                            <p className="text-sm font-bold">Frontend Mentor</p>
                        </div>

                        <div className="flex h-11 w-full items-center justify-center rounded-lg bg-[#333333] active:bg-[#c5f82a] active:text-black">
                            <p className="text-sm font-bold">LinkedIn</p>
                        </div>

                        <div className="flex h-11 w-full items-center justify-center rounded-lg bg-[#333333] active:bg-[#c5f82a] active:text-black">
                            <p className="text-sm font-bold">Twitter</p>
                        </div>

                        <div className="flex h-11 w-full items-center justify-center rounded-lg bg-[#333333] active:bg-[#c5f82a] active:text-black">
                            <p className="text-sm font-bold">Instagram</p>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}

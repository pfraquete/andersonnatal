import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Gift } from "lucide-react";

export function Hero() {
    return (
        <section className="relative bg-natal-red overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(#F1C40F 1px, transparent 1px), radial-gradient(#F1C40F 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 10px 10px",
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-natal-gold font-medium text-sm mb-6 border border-white/20">
                    <Mail className="w-4 h-4" />
                    <span>Natal Abençoado – Instituto Anderson Costa</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                    Neste Natal, você pode ser <br className="hidden md:block" />
                    <span className="text-natal-gold">resposta de oração</span> de uma
                    criança.
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Pelo projeto Natal Abençoado, crianças escrevem cartinhas para o Papai
                    Noel e você pode adotar uma delas, comprar um presente e transformar o
                    Natal de uma família.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/quero-doar">
                        <Button
                            size="lg"
                            className="bg-natal-green hover:bg-green-700 text-white font-semibold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            <Gift className="w-5 h-5 mr-2" />
                            Quero ser um Abençoador
                        </Button>
                    </Link>
                    <Link href="/quero-receber">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-white text-natal-red hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Quero ser Abençoado
                        </Button>
                    </Link>
                </div>

                <p className="mt-8 text-sm text-white/60 max-w-lg mx-auto">
                    Uma campanha solidária sem fins políticos, organizada pelo Instituto
                    Anderson Costa, em parceria com voluntários e apoiadores.
                </p>
            </div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-[50px] md:h-[100px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-background"
                    ></path>
                </svg>
            </div>
        </section>
    );
}

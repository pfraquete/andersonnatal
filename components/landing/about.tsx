import { CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-natal-gray mb-4">
                            Quem está por trás da campanha?
                        </h2>
                        <div className="w-24 h-1 bg-natal-gold mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            O <strong className="text-natal-red">Instituto Anderson Costa</strong> é um projeto social que atua com foco em duas frentes principais: cursos gratuitos para formação e capacitação, e uma farmácia popular voltada a atender famílias em situação de vulnerabilidade.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            O <strong className="text-natal-green">Natal Abençoado</strong> é uma campanha solidária do Instituto, sem vínculo partidário ou pedido de voto, criada para aproximar quem precisa de ajuda de quem pode ajudar.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Transparência total",
                                "Foco em famílias vulneráveis",
                                "Ação local e real",
                                "Parcerias com igrejas e comércios",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-natal-green flex-shrink-0" />
                                    <span className="font-medium text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

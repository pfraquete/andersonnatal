import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t-4 border-natal-gold">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        {/* Logo do Instituto */}
                        <div className="mb-4">
                            <Image
                                src="/logo-instituto.png"
                                alt="Instituto Anderson Costa"
                                width={250}
                                height={70}
                                className="h-12 w-auto"
                            />
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-4 text-natal-gold">
                            Instituto Anderson Costa
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Promovendo transformação social através da educação, saúde e solidariedade.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4">Links Rápidos</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a href="#" className="hover:text-natal-gold transition-colors">
                                    Sobre o Instituto
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-natal-gold transition-colors">
                                    Farmácia Popular
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-natal-gold transition-colors">
                                    Cursos Gratuitos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-natal-gold transition-colors">
                                    Política de Privacidade
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4">Contato</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-natal-gold flex-shrink-0" />
                                <span>
                                    Rua Alcides Lins, 320 - Venda Nova
                                    <br />
                                    Belo Horizonte - MG - CEP 31510-030
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-natal-gold flex-shrink-0" />
                                <span>(84) 99999-9999</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-natal-gold flex-shrink-0" />
                                <span>contato@institutoandersoncosta.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} Instituto Anderson Costa. Todos os direitos reservados.
                    </p>
                    <p className="mt-2">
                        Desenvolvido com ❤️ para o Natal Abençoado.
                    </p>
                </div>
            </div>
        </footer>
    );
}

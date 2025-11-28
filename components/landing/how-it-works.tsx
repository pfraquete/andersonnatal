import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Camera, CheckCircle, Gift, MapPin, Smile } from "lucide-react";

export function HowItWorks() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-natal-red mb-4">
                        Como funciona?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Entenda como participar da campanha, seja para receber ou para doar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Para quem quer ser Abençoado */}
                    <div className="space-y-8">
                        <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900">
                            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                                <Smile className="w-6 h-6" />
                                Para quem quer ser Abençoado
                            </h3>
                            <p className="text-muted-foreground">
                                Famílias e crianças que desejam enviar sua cartinha.
                            </p>
                        </div>

                        <div className="relative border-l-2 border-blue-200 ml-6 space-y-10 pb-4">
                            <Step
                                number="1"
                                title="Cadastro simples"
                                description="Você preenche um cadastro com os dados da criança e do responsável."
                                icon={<UserPlus className="w-5 h-5 text-blue-600" />}
                                colorClass="bg-blue-100 text-blue-600 border-blue-200"
                            />
                            <Step
                                number="2"
                                title="Cartinha para o Papai Noel"
                                description="A criança escreve a cartinha à mão. Você tira uma foto e envia pelo site."
                                icon={<Camera className="w-5 h-5 text-blue-600" />}
                                colorClass="bg-blue-100 text-blue-600 border-blue-200"
                            />
                            <Step
                                number="3"
                                title="Análise da equipe"
                                description="Nossa equipe avalia a cartinha para garantir segurança e pedidos compatíveis."
                                icon={<CheckCircle className="w-5 h-5 text-blue-600" />}
                                colorClass="bg-blue-100 text-blue-600 border-blue-200"
                            />
                            <Step
                                number="4"
                                title="Um abençoador adota"
                                description="Alguém escolhe ajudar sua criança, compra um presente e realiza a entrega."
                                icon={<Gift className="w-5 h-5 text-blue-600" />}
                                colorClass="bg-blue-100 text-blue-600 border-blue-200"
                            />
                        </div>

                        <p className="text-sm text-muted-foreground italic bg-gray-50 p-4 rounded-lg border">
                            * Tudo é feito com responsabilidade e transparência. Não garantimos que todas as cartinhas serão adotadas, mas faremos o possível.
                        </p>
                    </div>

                    {/* Para quem quer ser Abençoador */}
                    <div className="space-y-8">
                        <div className="bg-natal-green/10 p-6 rounded-2xl border border-natal-green/20">
                            <h3 className="text-2xl font-bold text-natal-green mb-2 flex items-center gap-2">
                                <Gift className="w-6 h-6" />
                                Para quem quer ser Abençoador
                            </h3>
                            <p className="text-muted-foreground">
                                Doadores que querem adotar uma cartinha.
                            </p>
                        </div>

                        <div className="relative border-l-2 border-green-200 ml-6 space-y-10 pb-4">
                            <Step
                                number="1"
                                title="Cadastre-se como Abençoador"
                                description="Informe seus dados básicos (nome, telefone, e-mail)."
                                icon={<UserPlus className="w-5 h-5 text-natal-green" />}
                                colorClass="bg-green-100 text-natal-green border-green-200"
                            />
                            <Step
                                number="2"
                                title="Escolha uma cartinha"
                                description="Veja os sonhos das crianças, com nome, idade e bairro."
                                icon={<Smile className="w-5 h-5 text-natal-green" />}
                                colorClass="bg-green-100 text-natal-green border-green-200"
                            />
                            <Step
                                number="3"
                                title="Compre o presente"
                                description="Com base no pedido da cartinha, você compra um presente dentro da sua realidade."
                                icon={<Gift className="w-5 h-5 text-natal-green" />}
                                colorClass="bg-green-100 text-natal-green border-green-200"
                            />
                            <Step
                                number="4"
                                title="Entregue no ponto de coleta"
                                description="Entrega em um dos pontos oficiais do Instituto ou conforme orientação enviada."
                                icon={<MapPin className="w-5 h-5 text-natal-green" />}
                                colorClass="bg-green-100 text-natal-green border-green-200"
                            />
                        </div>

                        <p className="text-sm text-muted-foreground italic bg-gray-50 p-4 rounded-lg border">
                            * Você recebe todas as instruções por WhatsApp/e-mail e pode acompanhar a campanha pelas redes sociais.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Step({
    number,
    title,
    description,
    icon,
    colorClass,
}: {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    colorClass: string;
}) {
    return (
        <div className="relative pl-8">
            <div
                className={`absolute -left-[21px] top-0 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center ${colorClass}`}
            >
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-1">{title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    const faqs = [
        {
            question: "Todas as cartinhas recebem presente?",
            answer:
                "Não podemos garantir, mas fazemos o máximo para que todas as crianças sejam atendidas. Assim que as cartinhas vão sendo adotadas, vamos atualizando os status.",
        },
        {
            question: "Posso escolher o valor do presente?",
            answer:
                "Sim. Sugerimos que os presentes sejam simples, mas especiais. O importante é o gesto e o carinho envolvido na doação.",
        },
        {
            question: "Como sei que o presente chegou à criança?",
            answer:
                "Nossa equipe organiza as entregas e, sempre que possível, registra com fotos e relatórios na página de transparência da campanha.",
        },
        {
            question: "É uma ação política?",
            answer:
                "Não. É uma campanha social do Instituto Anderson Costa, sem pedido de voto ou vinculação partidária. O foco é exclusivamente ajudar as famílias.",
        },
        {
            question: "Até quando posso adotar uma cartinha?",
            answer:
                "A campanha tem prazos definidos para garantir a entrega antes do Natal. Fique atento ao cronômetro na página inicial e às nossas redes sociais.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-natal-gray mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-muted-foreground">
                        Tire suas dúvidas sobre a campanha Natal Abençoado.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium text-lg text-gray-800">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

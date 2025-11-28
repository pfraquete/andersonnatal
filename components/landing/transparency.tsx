export function Transparency() {
    return (
        <section className="py-20 bg-natal-red text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Transparência do início ao fim
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        Acompanhe em tempo real o impacto da nossa campanha.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <StatCard number="0" label="Cartinhas Recebidas" />
                    <StatCard number="0" label="Cartinhas Adotadas" />
                    <StatCard number="0" label="Crianças Beneficiadas" />
                    <StatCard number="0" label="Bairros Atingidos" />
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-white/90 text-sm md:text-base bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                        Nossa página é atualizada periodicamente com os números da campanha e, com autorização das famílias, divulgamos algumas fotos das entregas, sempre com respeito e cuidado com a imagem das crianças.
                    </p>
                </div>
            </div>
        </section>
    );
}

function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-4xl md:text-5xl font-bold text-natal-gold mb-2 font-heading">
                {number}
            </div>
            <div className="text-sm md:text-base font-medium text-white/90">
                {label}
            </div>
        </div>
    );
}

import srcProdemge from '../../assets/prodemge.png'

function Career() {
    return (
        <section className="w-full flex flex-col items-center p-4 space-y-8">
            <h2 className="text-4xl font-semibold">Minha Carreira</h2>

            <div className=" max-w-4xl">
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-4 h-4 rounded-full bg-secondary shadow-lg z-10" />
                        <div className="w-px bg-secondary/30 h-full mt-1" />
                    </div>

                    <div className="flex-1 grid gap-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 rounded-lg border-2 border-secondary p-6 bg-primary/5 hover:bg-secondary/5 min-h-[120px]">
                            <img src={srcProdemge} alt="PRODEMGE" className="w-20 h-20 object-contain rounded-md bg-white/5 p-2" />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold">Companhia de Tecnologia da Informação do Estado de Minas Gerais (PRODEMGE)</h3>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2 gap-2">
                                    <p className="text-lg font-medium">Desenvolvedor Fullstack</p>
                                    <time className="text-secondary/70">Dezembro 2022 - Presente</time>
                                </div>
                                <p className="mt-4 text-sm text-justify">Responsável pela evolução e manutenção do Portal do Servidor de Minas Gerais, uma plataforma crítica que atende mais de 500 mil servidores públicos. Lidero todas as etapas do desenvolvimento, desde análise de requisitos até implementação </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">PHP</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Drupal</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Bootstrap</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Java</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Oracle</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">IBM DB2</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">MySQL</span>
                                </div>
                            </div>
                        </div>

                        
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 rounded-lg border-2 border-secondary p-6 bg-primary/5 hover:bg-secondary/5 min-h-[120px]">
                            <img src={srcProdemge} alt="PRODEMGE" className="w-20 h-20 object-contain rounded-md bg-white/5 p-2" />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold">Companhia de Tecnologia da Informação do Estado de Minas Gerais (PRODEMGE)</h3>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2 gap-2">
                                    <p className="text-lg font-medium">Estagiário de Desenvolvimento</p>
                                    <time className="text-secondary/70">Jan 2021 - Out 2022</time>
                                </div>
                                <p className="mt-4 text-sm text-justify">Desenvolvedor em projetos estratégicos para órgãos estaduais, participando de equipes multidisciplinares no desenvolvimento de soluções web robustas. Contribui ativamente na arquitetura de sistemas, implementação de features e otimização de performance. Experiência sólida em desenvolvimento full-stack, trabalhando em interfaces responsivas e integração de dados.</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">PHP</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Wordpress</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Joomla</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">JavaScript</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Bootstrap</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">jQuery</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">MySQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Career;
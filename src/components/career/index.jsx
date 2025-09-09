import srcProdemge from '../../assets/prodemge.png'

function Career() {
    return (
        <div className="w-[50%] h-full flex flex-col items-center justify-center p-4 space-y-8">
            <h2 className="text-4xl font-semibold">Minha Carreira</h2>
            <div className=" group flex flex-col items-center rounded border-2 border-secondary p-6 space-y-4 transition w-[60%] hover:scale-105 hover:bg-secondary/5">
                <img className="h-11 " src={srcProdemge} alt="prodemge" srcset="" />
                {/* <h3 className="text-xl text-center font-semibold">Companhia de Tecnologia da Informação do Estado de Minas Gerais</h3> */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-2 md:space-y-0">
                    <p className="text-lg font-medium">Desenvolvedor Fullstack</p>
                    <p className="text-secondary/70">Dezembro 2022 - Presente</p>
                </div>
                <div className="space-y-3 text-center">
                    <p>Atuação no Portal do Servidor do Estado de Minas Gerais, plataforma que atende milhares de servidores
                        públicos com serviços como contracheque, informe de rendimentos e informações funcionais.
                        Atualmente responsável único pela manutenção e evolução do sistema, atuando também como analista para
                        levantamento de requisitos, alinhamento de demandas e apresentação de soluções diretamente ao cliente.
                        Aplicação da metodologia ágil Kanban, com participação ativa em todas as etapas do ciclo de desenvolvimento.</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">React</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">JavaScript</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">PHP</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">MySQL</span>
                    </div>
                </div>
            </div>

            <div className=" group flex flex-col items-center rounded border-2 border-secondary p-6 space-y-4 transition w-[60%] hover:scale-105 hover:bg-secondary/5">
                <img className="h-11 " src={srcProdemge} alt="prodemge" srcset="" />
                {/* <h3 className="text-xl text-center font-semibold">Companhia de Tecnologia da Informação do Estado de Minas Gerais</h3> */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-2 md:space-y-0">
                    <p className="text-lg font-medium">Estágio Desenvolvimento</p>
                    <p className="text-secondary/70">Jan 2021 - Outubro 2022</p>
                </div>
                <div className="space-y-3 text-center">
                    <p>Atuação em projetos de diferentes órgãos e sistemas do Estado de Minas Gerais, com responsabilidades no
                        desenvolvimento front-end e back-end, manutenção e criação de conteúdo.</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">React</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">JavaScript</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">PHP</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Career;
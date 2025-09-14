import srcIfmg from '../../assets/ifmg.png'

function Education() {
    return (
        <section className="w-full flex flex-col items-center p-4 space-y-8">
            <h2 className="text-4xl font-semibold">Formação</h2>

            <div className="w-full max-w-4xl">
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-4 h-4 rounded-full bg-secondary shadow-lg z-10" />
                        <div className="w-px bg-secondary/30 h-full mt-1" />
                    </div>

                    <div className="flex-1 grid gap-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 rounded-lg border-2 border-secondary p-6 bg-primary/5 hover:bg-secondary/5 min-h-[120px]">
                            <img src={srcIfmg} alt="IFMG" className="w-20 h-20 object-contain rounded-md bg-white/5 p-2" />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold">Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais</h3>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2 gap-2">
                                    <p className="text-lg font-medium">Bacharel em Sistemas de Informação</p>
                                    <time className="text-secondary/70">Jan 2018 - Dez 2022</time>
                                </div>
                                <p className="mt-4 text-sm text-justify">Formação sólida em desenvolvimento de software, banco de dados, engenharia de software e gestão de projetos. Projetos práticos em equipe, com ênfase em sistemas web e integração com bancos relacionais.</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Algoritmos</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Banco de Dados</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Eng. Software</span>
                                    <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Redes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;
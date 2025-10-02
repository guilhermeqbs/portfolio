function About() {
    return (
        <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center p-8 space-y-16">
            <h2 className="text-4xl font-semibold">Sobre Mim</h2>
            <div className="space-y-8">
                <p className="text-2xl text-justify">
                    Desenvolvedor Full Stack iniciando em 2021, especializado em sistemas 
                    de alta performance que impactam milhares de usuários diariamente. Combino expertise técnica 
                    em tecnologias modernas com visão estratégica de negócio para entregar soluções robustas e escaláveis.
                </p>
                <p className="text-2xl text-justify">
                    Apaixonado por inovação e aprendizado contínuo, estou sempre explorando novas tecnologias e 
                    metodologias para elevar a qualidade dos projetos. Acredito no poder transformador da tecnologia 
                    e busco criar experiências digitais que façam a diferença na vida das pessoas.
                </p>
            </div>
        </div>
    );
}

export default About;
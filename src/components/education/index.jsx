import srcIfmg from '../../assets/ifmg.png'
function Education() {
    return ( 
        <div className="w-[50%] h-full flex flex-col items-center justify-center p-4 space-y-8">
            <h2 className="text-4xl font-semibold">Educação</h2>
            <div className="group flex flex-col items-center rounded border-2 border-secondary p-6 space-y-4 w-[60%] transition hover:scale-105 hover:bg-secondary/5">
                <img className="h-11 " src={srcIfmg} alt="ifmg" srcset="" />
               {/*  <h3 className="text-2xl font-semibold">IFMG - Campus Sabará</h3> */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-2 md:space-y-0">
                    <p className="text-lg font-medium">Bacharel em Sistemas de Informação</p>
                    <p className="text-secondary/70">Jan 2018 - Dez 2022</p>
                </div>
                <div className="space-y-3 text-center">
                    <p>Formação sólida em desenvolvimento de software, banco de dados, engenharia de software e gestão de projetos.</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Algoritmos</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Banco de Dados</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Eng. Software</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Redes</span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;
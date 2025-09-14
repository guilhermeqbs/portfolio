import srcScreenShot from '../../assets/screenshot-short-link.png'

function Projects() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 space-y-8">
            <h2 className="text-4xl font-semibold">Meus Projetos</h2>
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group flex flex-col items-center rounded border-2 border-secondary p-6 space-y-4 transition hover:scale-105 hover:bg-secondary/5">
                    <h3 className="text-2xl font-semibold">Encurtador de Link</h3>
                    <div className="w-full h-40 bg-secondary/10 rounded border border-secondary/20 flex items-center justify-center">
                        <img className="w-full h-full object-cover" src={srcScreenShot} alt="Screenshot do projeto Encurtador de Link" />
                    </div>
                    <p className="text-center">Um encurtador de link desenvolvido com MERN,  e Tailwind CSS. Aplicando conceitos de API RESTful e autenticação JWT.</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">MongoDB</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Express</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">React</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Node.js</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Tailwind</span>
                        <span className="px-3 py-1 bg-secondary/10 rounded border border-secondary/20 text-sm">Vite</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
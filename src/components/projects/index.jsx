function Projects() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center  p-4">
            <h2>Meus Projetos</h2>
            <div className="flex flex-col items-center">
               <h3>Projeto 1</h3>
                <img src="https://via.placeholder.com/150" alt="Screenshot do Projeto 1" />
                <p>Descrição: Um portfólio pessoal desenvolvido com React.</p>
                <ul className="flex flex-row gap-2">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;
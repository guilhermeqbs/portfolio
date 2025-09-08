function Career() {
    return (
        <div className="w-[50%] h-full flex flex-col items-center justify-center p-4 space-y-8">
            <h2 className="text-4xl font-semibold">Minha Carreira</h2>
            <div className="flex flex-col items-center rounded border-2 border-secondary p-4 space-y-4 w-full">
                <h3 className="text-2xl font-semibold">PRODEMGE</h3>
                <div className="flex flex-row justify-center space-x-22 w-full">
                    <p>Desenvolvedor Fullstack</p>
                    <p>Jan 2020 - Presente</p>
                </div>
                <p>Responsável por desenvolver e manter a interface do usuário do site da empresa.</p>
                <p>Habilidades: React, JavaScript, CSS, HTML</p>
            </div>
        </div>
    );
}

export default Career;
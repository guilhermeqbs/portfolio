function Education() {
    return ( 
        <div className="w-[50%] h-full flex flex-col items-center justify-center p-4 space-y-8">
            <h2 className="text-4xl font-semibold">Educação</h2>
            <div className="flex flex-col items-center rounded border-2 border-secondary p-4 space-y-4 w-full">
                <p>IFMG - Campus Sabará</p>
                <div className="flex flex-row gap-2">
                    <p>Bacharel em Sistemas de Informação</p>
                    <p>Jan 2018 - Dez 2022</p>
                </div>
            </div>
        </div>
     );
}

export default Education;
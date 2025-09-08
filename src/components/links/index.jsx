import { Mail } from 'lucide-react';

function Links() {
    return (
        <ul className="rounded border-2 border-secondary flex flex-row items-center justify-center w-52 h-auto mt-10">
            <li className='group flex items-center justify-center hover:bg-secondary/10 w-full h-12 px-4 py-2'>
            <a className="transition group-hover:translate-t-1 group-hover:scale-101" href="https://github.com/guilhermeqbs" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a></li>

            <li className='group flex items-center justify-center border-x-2 w-full h-12 px-4 py-2  hover:bg-secondary/10'>
                <a  className="transition group-hover:translate-t-1 group-hover:scale-101" href="https://www.linkedin.com/in/guilherme-basílio" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a></li>

            <li className='group flex items-center justify-center px-4 py-2 w-full h-12 transition hover:translate-t-1 hover:scale-101 hover:bg-secondary/10'>
                <a  className="transition group-hover:translate-t-1 group-hover:scale-101" href="mailto:guilhermeqbs@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail />
            </a></li>
        </ul>
    );
}

export default Links;
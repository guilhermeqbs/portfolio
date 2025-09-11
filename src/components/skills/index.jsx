import { SiPhp, SiNodedotjs, SiReact, SiJavascript, SiWordpress, SiTailwindcss, SiMysql, SiJquery, SiJoomla, SiBootstrap, SiDrupal, SiOracle, SiCplusplus, SiMongodb } from 'react-icons/si';

function Skills() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-8">Minhas Habilidades</h2>
            <div className="flex flex-col items-start gap-6 w-4xl">

                {/* PHP */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#777BB4] transition-colors duration-200">
                    <SiPhp className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">PHP</span>
                </div>

                {/* Java */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#006699] transition-colors duration-200">
                    <svg className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="text-secondary" viewBox="0 0 24 24" id="Java--Streamline-Svg-Logos" height="24" width="24">
                        <desc>
                            Java Streamline Icon: https://streamlinehq.com
                        </desc>
                        <path fill="text-secondary" d="M8.916025 18.42385s-0.898025 0.52225 0.6391 0.698975c1.8622 0.212425 2.81395 0.181975 4.8661 -0.206425 0 0 0.539525 0.3383 1.293025 0.6313 -4.600375 1.97165 -10.411575 -0.1142 -6.798225 -1.12385Z" stroke-width="0.25"></path>
                        <path fill="text-secondary" d="M8.3539 15.851025s-1.007225 0.745575 0.53105 0.904675c1.98925 0.205225 3.560225 0.222 6.278575 -0.301425 0 0 0.376 0.381175 0.9672 0.589625 -5.562125 1.62645 -11.75735 0.12825 -7.776825 -1.192875Z" stroke-width="0.25"></path>
                        <path fill="text-secondary" d="M13.092925 11.48655c1.133525 1.30505 -0.297825 2.47945 -0.297825 2.47945s2.878225 -1.48585 1.556375 -3.34645c-1.23455 -1.73515 -2.1813 -2.59725 2.944 -5.56975 0 0 -8.045025 2.009275 -4.20255 6.43675Z" stroke-width="0.25"></path>
                        <path fill="text-secondary" d="M19.177275 20.326925s0.66455 0.547575 -0.7319 0.9712c-2.6554 0.804425 -11.052075 1.047325 -13.384625 0.03205 -0.8385 -0.364775 0.7339 -0.871 1.228525 -0.9772 0.51585 -0.111875 0.810625 -0.091025 0.810625 -0.091025 -0.932475 -0.6569 -6.0272375 1.28985 -2.587875 1.847375 9.37965 1.5211 17.0982 -0.68495 14.66525 -1.7824Z" stroke-width="0.25"></path>
                        <path fill="text-secondary" d="M9.347925 13.18515s-4.271075 1.014475 -1.5125 1.38285c1.16475 0.15595 3.486675 0.120675 5.6495 -0.06055 1.76755 -0.1491 3.5424 -0.466125 3.5424 -0.466125s-0.62325 0.266925 -1.074175 0.574825c-4.3372 1.140675 -12.7159 0.610025 -10.303775 -0.556775 2.039925 -0.986075 3.69855 -0.874225 3.69855 -0.874225Z" stroke-width="0.25"></path>
                        <path fill="text-secondary" d="M17.009625 17.46785c4.408975 -2.291075 2.37045 -4.492775 0.947575 -4.19615 -0.34875 0.072575 -0.50425 0.135475 -0.50425 0.135475s0.129475 -0.202825 0.37675 -0.2906c2.8149 -0.989625 4.979725 2.918775 -0.908675 4.466725 0 0 0.0682 -0.060925 0.0886 -0.11545Z" stroke-width="0.25"></path>
                        <path fill="text-secondary" d="M14.351425 0.25s2.441775 2.442575 -2.3159 6.198575c-3.81515 3.012975 -0.869975 4.730875 -0.001575 6.69365 -2.226975 -2.009275 -3.861275 -3.778025 -2.76485 -5.42425C10.878375 5.3015 15.336625 4.1299 14.351425 0.25Z" stroke-width="0.25"></path>
                        <path fill="text-secondary" d="M9.781125 23.676125c4.23205 0.2709 10.730875 -0.150325 10.884775 -2.1528 0 0 -0.29585 0.759125 -3.497575 1.362 -3.61215 0.67975 -8.067225 0.6004 -10.709575 0.16475 0 0 0.540925 0.447675 3.322375 0.62605Z" stroke-width="0.25"></path>
                    </svg>
                    <span className="text-xs mt-2">IBM DB2</span>
                </div>

                {/* Node.js */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#68A063] transition-colors duration-200">
                    <SiNodedotjs className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">Node.js</span>
                </div>

                {/* React */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#61DAFB] transition-colors duration-200">
                    <SiReact className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">React</span>
                </div>

                {/* JavaScript */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#F7DF1E] transition-colors duration-200">
                    <SiJavascript className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">JavaScript</span>
                </div>

                {/* jQuery */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#0769AD] transition-colors duration-200">
                    <SiJquery className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">jQuery</span>
                </div>

                {/* Joomla */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#EF3B2D] transition-colors duration-200">
                    <SiJoomla className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">Joomla</span>
                </div>

                {/* Bootstrap */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#7952B3] transition-colors duration-200">
                    <SiBootstrap className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">Bootstrap</span>
                </div>

                {/* Drupal */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#0674BE] transition-colors duration-200">
                    <SiDrupal className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">Drupal</span>
                </div>

                {/* WordPress */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#21759B] transition-colors duration-200">
                    <SiWordpress className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">WordPress</span>
                </div>

                {/* Tailwind */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#06B6D4] transition-colors duration-200">
                    <SiTailwindcss className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">Tailwind</span>
                </div>

                {/* MySQL */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#4479A1] transition-colors duration-200">
                    <SiMysql className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">MySQL</span>
                </div>

                {/* Oracle */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#F80000] transition-colors duration-200">
                    <SiOracle className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">Oracle</span>
                </div>

                {/* IBM DB2 */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#006699] transition-colors duration-200">
                    <svg className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Ibm--Streamline-Svg-Logos" height="24" width="24">
                        <desc>
                            Ibm Streamline Icon: https://streamlinehq.com
                        </desc>
                        <path fill="#000000" d="M4.81945 16.03535v0.652775H0.25v-0.652775h4.56945Zm7.141 -0.000025c-0.458375 0.4214 -1.058775 0.6545 -1.681425 0.652775l-4.8068 -0.00645v-0.646325h6.488225Zm6.79425 0 -0.22795 0.652775 -0.225875 -0.652775h0.453825Zm-2.18525 0.000025v0.652775H13.305575v-0.652775h3.263875Zm7.18055 0v0.652775H20.4861v-0.652775H23.75Zm-11.0502 -1.2462c-0.056 0.228975 -0.14445 0.448775 -0.2626 0.652775H5.472225v-0.652775h7.227575Zm6.492375 0 -0.229125 0.6528h-0.870525l-0.229125 -0.6528h1.328775Zm-2.622725 0v0.652775H13.305575v-0.652775h3.263875Zm7.18055 0v0.652775H20.4861v-0.652775H23.75Zm-18.93055 0v0.652775H0.25v-0.652775h4.56945Zm-1.305575 -1.246225v0.652775H1.55555v-0.652775h1.958325Zm5.22225 0v0.652775h-1.95835v-0.652775h1.95835Zm3.948025 0c0.05785 0.212775 0.0872 0.432275 0.087325 0.652775H10.57575v-0.652775h2.1084Zm6.945575 0 -0.2292 0.652775h-1.745475l-0.2292 -0.652775h2.203875Zm-3.060275 0v0.652775h-1.958325v-0.652775h1.958325Zm5.875 0v0.652775h-1.95835v-0.652775h1.95835Zm-18.930575 -1.2462v0.652775H1.55555v-0.652775h1.958325Zm13.055575 0v0.652775h-1.958325v-0.652775h1.958325Zm5.875 0v0.652775h-1.95835v-0.652775h1.95835Zm-10.5525 -0.000025c0.2174 0.184925 0.40155 0.4057 0.5445 0.65275H6.77775v-0.65275h5.1142Zm8.175225 0 -0.229125 0.652775H17.217525l-0.229125 -0.652775h3.078775Zm-1.7229 -1.246175 0.1835 0.52765 0.18345 -0.52765h3.7332v0.6528h-1.958275v-0.59985l-0.210625 0.59985H16.78005l-0.210625 -0.599925v0.599925h-1.958275v-0.6528h3.733125Zm-11.5665 -0.000025 5.658725 0.00005c-0.14295 0.24705 -0.327125 0.467825 -0.544525 0.652775H6.777775V11.0505Zm-3.2639 0v0.652775H1.55555V11.0505h1.958325Zm0 -1.2462v0.652775H1.55555v-0.652775h1.958325Zm5.22225 0v0.652775h-1.95835v-0.652775h1.95835Zm4.03535 0c-0.000125 0.2205 -0.029475 0.44 -0.087325 0.652775H10.57575v-0.652775h2.195725Zm5.139425 0 0.227 0.652775h-3.52675v-0.652775h3.29975Zm4.533525 0v0.652775h-3.52675l0.226975 -0.652775h3.299775Zm-17.624975 -1.246225v0.652775H0.25v-0.652775h4.56945Zm7.61775 0c0.11815 0.203975 0.206575 0.4238 0.2626 0.652775H5.472225v-0.652775h6.964975ZM23.75 8.55805v0.6528H19.351025l0.227 -0.6528H23.75Zm-6.27245 0 0.227 0.6528H13.305575v-0.6528h4.171975Zm-12.6581 -1.246175v0.652775H0.25v-0.652775h4.56945Zm5.459575 0c0.622475 -0.000825 1.222575 0.232125 1.6814 0.652775H5.472225v-0.652775h4.8068ZM23.75 7.3119v0.652775H19.784375l0.227 -0.652775H23.75Zm-6.7058 0 0.227 0.652775H13.305575v-0.652775h3.738625Z" stroke-width="0.25"></path>
                    </svg>
                    <span className="text-xs mt-2">IBM DB2</span>
                </div>

                {/* C++ */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#00599C] transition-colors duration-200">
                    <SiCplusplus className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">C++</span>
                </div>

                {/* MongoDB */}
                <div className="flex flex-col items-center group text-secondary group-hover:text-[#47A248] transition-colors duration-200">
                    <SiMongodb className="text-secondary w-12 h-12 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-xs mt-2">MongoDB</span>
                </div>

            </div>
        </div>
    );
}

export default Skills;
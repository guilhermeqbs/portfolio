import React from 'react'
import { SiPhp, SiNodedotjs, SiReact, SiJavascript, SiWordpress, SiTailwindcss, SiMysql, SiJquery, SiJoomla, SiBootstrap, SiDrupal, SiOracle, SiCplusplus, SiMongodb } from 'react-icons/si'

const skillsList = [
  { id: 'php', Icon: SiPhp, label: 'PHP', percent: 78, color: '#777BB4' },
  { id: 'node', Icon: SiNodedotjs, label: 'Node.js', percent: 75, color: '#68A063' },
  { id: 'react', Icon: SiReact, label: 'React', percent: 90, color: '#61DAFB' },
  { id: 'js', Icon: SiJavascript, label: 'JavaScript', percent: 88, color: '#F7DF1E' },
  { id: 'jquery', Icon: SiJquery, label: 'jQuery', percent: 65, color: '#0769ad' },
  { id: 'joomla', Icon: SiJoomla, label: 'Joomla', percent: 50, color: '#7B7B7B' },
  { id: 'bootstrap', Icon: SiBootstrap, label: 'Bootstrap', percent: 70, color: '#7952B3' },
  { id: 'drupal', Icon: SiDrupal, label: 'Drupal', percent: 55, color: '#0C76AB' },
  { id: 'wordpress', Icon: SiWordpress, label: 'WordPress', percent: 72, color: '#21759B' },
  { id: 'tailwind', Icon: SiTailwindcss, label: 'Tailwind', percent: 85, color: '#06B6D4' },
  { id: 'mysql', Icon: SiMysql, label: 'MySQL', percent: 68, color: '#4479A1' },
  { id: 'oracle', Icon: SiOracle, label: 'Oracle', percent: 60, color: '#F80000' },
  { id: 'cpp', Icon: SiCplusplus, label: 'C++', percent: 58, color: '#00599C' },
  { id: 'mongodb', Icon: SiMongodb, label: 'MongoDB', percent: 66, color: '#47A248' },
]



function Skills() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-8">Minhas Habilidades</h2>

      <div className="min-w-4xl">
        {skillsList.map(({ id, Icon, label, percent, color }) => (
          <div key={id} className="flex items-center gap-4 group p-3 rounded-lg bg-primary/3 transition">
            
            <div className="flex flex-col items-center justify-center w-20">
              <Icon className="w-10 h-10" 
                style={{ color: color }}  
              />
              <span className="text-xs mt-2 text-center">{label}</span>
            </div>

            <div className="flex-1">
              <div className="w-full rounded-full h-6 bg-secondary/10 overflow-hidden">
                <div
                  className="h-full rounded-full duration-500 flex items-center justify-center text-sm font-medium text-sencondary/70"
                  style={{
                    width: `${percent}%`,
                    backgroundSize: '12px 12px',
                    backgroundColor: `${color}33`
                  }}
                >
                  {percent}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Skills;
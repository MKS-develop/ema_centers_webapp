import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import useGlobal from '../lib/hooks/useGlobal';
import { 
    FiLayout, 
    FiCalendar, 
    FiUsers,
    FiClipboard,
    FiSettings,
    FiLogOut
} from 'react-icons/fi';

function Sidebar() {

    const {activeLink, changeActiveLink} = useGlobal()
    let iconSize = 21

    const LinkSidebar = ({label, icon, link, children}) => {
        return(
            <Link onClick={()=>{ changeActiveLink(link) }} className={`transition w-full flex justify-start items-center gap-4
            ${activeLink === link ? "bg-primary text-white " : "bg-white text-primary hover:bg-primary/80 hover:text-white"}
            rounded p-[10px_10px]`} href={link} >
                {children}
                <span className="text-sm">{label}</span>
            </Link>
        )
    }

  return (
    <div className="w-2/12 px-0 border-r h-screen flex flex-col justify-between items-center fixed bg-white top-0 left-0">
        <Link className="h-[10vh] w-full flex justify-center items-center mr-0 p-[6%] border-b" href="/">
            <img className="block h-full relative" src="/images/logo.png" alt="EMA"/>
        </Link>
        <div className="h-[72vh] w-full px-5 flex flex-col gap-2 justify-start items-start">
            <LinkSidebar label="Dashboard" icon="auto_awesome_mosaic" link="/">
                <FiLayout size={iconSize}/>
            </LinkSidebar>
            <LinkSidebar label="Citas" icon="today" link="/dates">
                <FiClipboard size={iconSize}/>
            </LinkSidebar>
            <LinkSidebar label="Pacientes" icon="people" link="/patients">
                <FiUsers size={iconSize}/>
            </LinkSidebar>
            <LinkSidebar label="Agenda" icon="today" link="/agenda">
                <FiCalendar size={iconSize}/>
            </LinkSidebar>
            <LinkSidebar label="Reportes" icon="bookmark" link="/treatments">
                <FiClipboard size={iconSize}/>
            </LinkSidebar>
        </div>
        <div className="h-[15vh] w-full p-[10px_20px] flex flex-col justify-center items-center">
            <Link className="transition w-full flex justify-start items-center gap-4 bg-white text-slate-900 hover:bg-primary/80 hover:text-white rounded p-[10px_10px]" href="/configuration" >
                <FiSettings size={iconSize}/>
                <span className="text-sm">Configuración</span>
            </Link>
            <Link className="transition w-full flex justify-start items-center gap-4 bg-white text-slate-900 hover:bg-primary/80 hover:text-white rounded p-[10px_10px]" href="/login" >
                <FiLogOut size={iconSize}/>
                <span className="text-sm">Salir</span>
            </Link>
        </div>
    </div>        
  )
}

export default Sidebar
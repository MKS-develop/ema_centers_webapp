import React, { useState } from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {FiHome} from 'react-icons/fi'
import Link from 'next/link';

function DoctorsCase() {

    const [activeTab, setActiveTab] = useState(0)

    const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Pacientes atendidos",
                backgroundColor: "#22345F",
                borderColor: "#121e3c",
                data: [0, 10, 5, 2, 20, 30, 45, 20, 10, 0, 30, 12],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
              display: false
            }
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: true,
            }
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
    }

    let dates = [
        {
            id_date: 1,
            user: "Martin Mendez",
            service: "Consulta general",
            date: "10/01/2023",
            hour: "12:00",
            pic_profile: "https://accountmanagement.gettyimages.com/Account/ProfileImage/8b931d4f-f756-4ae1-9380-e4ed329a4ce1.jpg"
        },
        {
            id_date: 2,
            user: "Martin Mendez",
            service: "Consulta general",
            date: "10/01/2023",
            hour: "12:00",
            pic_profile: "https://accountmanagement.gettyimages.com/Account/ProfileImage/8b931d4f-f756-4ae1-9380-e4ed329a4ce1.jpg"
        },
        {
            id_date: 3,
            user: "Martin Mendez",
            service: "Consulta general",
            date: "10/01/2023",
            hour: "12:00",
            pic_profile: "https://accountmanagement.gettyimages.com/Account/ProfileImage/8b931d4f-f756-4ae1-9380-e4ed329a4ce1.jpg"
        },
    ]

    const DateComponent = ({data}) => {
        return(
            <div className="w-full h-[33%] cursor-pointer bg-white border border-slate-200 flex justify-between items-center gap-4 rounded-md p-[2%_3%] overflow-hidden">
                <div className="rounded-md w-[42px] h-[42px] block overflow-hidden">
                    <img className="h-full w-full object-cover" src={data["pic_profile"]} alt="profile-picture" />
                </div>
                <div className="relative w-[83%] h-full flex flex-col justify-center items-start">
                    <div className="flex justify-between items-center w-full">
                        <p className='font-medium text-md text-slate-900'>{data["user"]}</p>
                        <p className='font-light text-sm text-slate-900'>{data["date"] + " - " + data["hour"]}</p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className='font-light text-sm text-slate-400'>{data["service"]}</p>
                        <div className='flex justify-start items-center gap-2'>
                            <span className='rounded-full w-[12px] h-[12px] bg-warning'></span>
                            <p className='text-sm font-medium text-slate-900'>Por atender</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='relative flex w-full h-[82vh] justify-between gap-4 p-[2.5%]'>
            <div className="w-2/3 flex flex-col gap-4 h-full">
                <div className="w-full h-[22vh] flex justify-between items-center bg-white p-[0.5%]">
                    <div className="w-3/5 h-full flex flex-col justify-center items-start gap-2">
                        <p className='font-light text-2xl text-primary'>Bienvenido a EMA, <b className='font-bold'>Dylan González</b></p>
                        <p className='font-light text-base text-slate-400'>Lorem ipsum dolor sit amet, orem ipsum dolor sit amet revisito as esgttyt</p>
                    </div>
                    <div className="w-1/5 h-full">
                        <img className='w-full h-full object-cover' src="./images/capsule.png" alt="" />
                    </div>
                </div>
                <div className="w-full h-[60vh] flex flex-col justify-between">
                    <div className="w-full h-fit bg-white flex justify-between items-center">
                        <div className="w-full h-[15%] flex justify-start items-center">
                            <div onClick={()=>{ setActiveTab(0) }} className={`cursor-pointer transition w-auto h-auto text-[12px] p-[1.2%_5%] ${activeTab === 0 ? "border-b-2  border-b-primary text-primary font-bold" : "border-b-2 border-b-slate-300 text-slate-500 font-light"}`}>Citas</div>
                            <div onClick={()=>{ setActiveTab(1) }} className={`cursor-pointer transition w-auto h-auto text-[12px] p-[1.2%_5%] ${activeTab === 1 ? "border-b-2  border-b-primary text-primary font-bold" : "border-b-2 border-b-slate-300 text-slate-500 font-light"}`}>Pacientes</div>
                            <div onClick={()=>{ setActiveTab(2) }} className={`cursor-pointer transition w-auto h-auto text-[12px] p-[1.2%_5%] ${activeTab === 2 ? "border-b-2  border-b-primary text-primary font-bold" : "border-b-2 border-b-slate-300 text-slate-500 font-light"}`}>Reportes</div>
                        </div>
                        
                        <select className="form-control w-[20%]" onChange={()=>{}}>
                            <option value="">Mes</option>
                        </select>

                    </div>
                    <div className="w-full h-[85%] bg-white pt-[2%]">
                        <Line options={options} width={"100%"} data={data} />
                    </div>
                </div>
            </div>
            <div className="w-1/3 flex flex-col gap-4 h-full">
                
                <div className="w-full h-[22vh] flex flex-col justify-between items-center gap-2">
                    <div className="w-full h-[18%] bg-white border-b flex justify-between items-center pb-2">
                        <p className='font-semibold text-lg text-slate-900'>Tu centro</p>
                    </div>
                    <div className="w-full h-[85%] flex justify-between items-center gap-4 bg-primary rounded-md p-[5%_5%] overflow-hidden">
                        <div className="relative w-[17%] h-[60px] rounded-md flex flex-col justify-center items-center bg-white text-primary text-[1.8rem]">
                            <FiHome/>
                        </div>
                        <div className="relative w-[83%] h-full flex flex-col justify-center items-start">
                            <p className='font-medium text-lg text-white'>Centro de cancerologia</p>
                            <p className='font-semibold text-sm text-slate-400'>#1234</p>
                            <p className='font-light text-sm text-slate-400'>Av. La gracia, Centro de Durango</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[50vh] flex flex-col justify-between items-center">
                    <div className="w-full h-[15%] bg-white border-b flex justify-between items-center pb-1">
                        <p className='font-semibold text-lg text-slate-900'>Citas pendientes</p>
                    </div>
                    <div className="w-full h-[65%] bg-white flex flex-col justify-between items-center gap-4 rounded-md">
                        {dates.length > 0 ? dates.map((date, i)=> <DateComponent data={date} key={i}/>) : 
                            <div className='w-full h-full flex flex-col justify-center items-center text-center'>
                                <p className='font-medium text-lg text-primary'>No hay citas</p>
                                <p className='font-light text-sm text-slate-400'>Este es tu momento para agendar citas proximas a tus pacientes recurrentes</p>
                            </div>
                        }
                    </div>
                    <Link href={"/dates"} className="w-full transition p-[10px_50px] rounded cursor-pointer text-[13px] text-center bg-white font-semibold text-primary hover:bg-primary hover:text-white">
                        Ver todo
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DoctorsCase
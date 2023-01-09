import React from 'react'

function Dates() {

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
        }
    ]
    
    const DateComponent = ({data}) => {
        return(
            <div className='w-[31%] h-[18vh] bg-red-800 flex justify-between items-center'>
            </div>
        )
    }
    
    return (
        <div className='w-full h-full flex flex-wrap justify-start items-start bg-slate-100 gap-3'>
            {dates.map((d, i)=> <DateComponent data={d} key={i}/> )}
        </div>
    )
}

export default Dates
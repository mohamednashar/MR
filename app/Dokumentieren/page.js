import React from 'react'
import InformationenClient from '../componentsClient/InformationenClient'

function page() {
  return (
    <div className='bg-[#F8F9FA] w-full md:w-[80%] p-5 mx-auto'>

      <div className='flex items-center justify-between gap-5 p-5 bg-white mb-5'>
        <div className=' text-[#265E73]'>Name</div>
        <div className='flex items-center justify-around gap-5 mx-10  text-[#265E73]'>
          <div>Seiten</div>
          <div>Größe</div>
          <div>Datum</div>
          <div>Bereitgestellt von</div>
        </div>
      </div>
<div className='bg-white p-5'>
  
        <InformationenClient text1={"Abschluss ( JAB / EU )"} text2={"04.05.2021"}/>
        <InformationenClient text1={"Eingang Mandant"} text2={"28.09.2020"}/>
        <InformationenClient text1={"Rechnungen"} text2={"28.09.2020"}/>
        <InformationenClient text1={"Schriftverkehr Finanzamt"} text2={"28.09.2020"}/>
        <InformationenClient text1={"Schriftverkehr MR FINCONSULTING GmbH  "} text2={"28.09.2020"}/>
        <InformationenClient text1={"Umsatzsteuer"} text2={"28.09.2020"}/>
        <InformationenClient text1={"Stammdaten"} text2={"28.09.2020"}/>
  
</div>

    </div>
  )
}

export default page
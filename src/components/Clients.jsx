import React from 'react';
import { clients } from '../Constant';

const Clients = () => {
  return (
    <div className='flex justify-center items-center my-4'>
      <div className='flex justify-between items-center flex-wrap w-full'>
        {clients.map(client => (
          <div key={client.id} className='flex-1 flex justify-center items-center sm:min-w-[192px] w-[120px] m-5'>
            <img src={client.logo} alt={client.id} className='sm:w-[192px] object-contain' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients; 
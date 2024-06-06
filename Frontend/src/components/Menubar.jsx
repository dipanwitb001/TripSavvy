import React from 'react';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Face2Icon from '@mui/icons-material/Face2';
import Menurow from './Menubarrow';
import PublicIcon from '@mui/icons-material/Public';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

function Menubar ()  {
  return (
    <div  className=' absolute left-2 top-28 pt-4 h-48 w-52 '>
      {/* <div>
        <h1 className='w-48 h-36 text-4xl p-10 text-white'>Trip<span className='text-5xl text-orange-800 italic'>S</span>av<span className='text-5xl text-orange-800 font-bold'>v</span>y</h1>
      </div> */}
      <Menurow Icon={OtherHousesIcon} title="HOME" text="home"/>
      <Menurow Icon={Face2Icon} title="ABOUT US" text="about"/>
      <Menurow Icon={PublicIcon} title="SERVICES" text="service"/>
      <Menurow Icon={PermPhoneMsgIcon} title="CONTACT US" text="contact"/>
    </div>
    
  )
};

export default Menubar

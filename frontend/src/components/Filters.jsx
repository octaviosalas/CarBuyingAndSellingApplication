import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Filters = () => {

    function valuetext(value) {
        return `${value}°C`;
      }

   const [showMinPrice, setShowMinPrice] = useState(true)
   const [showYear, setShowYear] = useState(true)
   const [showMaxKilometres, setShowMaxKilometres] = useState(true)
   const [showBtnSearch, setShowBtnSearch] = useState(true)
   const [selectedValue, setSelectedValue] = useState(30);

   const handleSelection = (event)  => {
    const selectedOption = event.target.value;
    console.log("Selected brand:", selectedOption);
    setShowMinPrice(false)
  }

  const handleSliderChange = (event, newValue) => {
    const selectedOption = event.target.value
    setSelectedValue(newValue);
    setShowYear(false)
    console.log(selectedOption)
  };

  const handleSelectionMaxPrice = (event) =>  { 
     setShowMaxKilometres(false)
     const selectedOption = event.target.value
     console.log(selectedOption)
  }

  const handleSelectionKilometres = (event) =>  { 
    setShowBtnSearch(false)
    const selectedOption = event.target.value
    console.log(selectedOption)
 }
   

  return (
   <div>
          <button className="btn" onClick={()=>window.my_modal_2.showModal()}>Filter Search <SearchIcon/> </button>
              <dialog id="my_modal_2" className="modal">
                 <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Chose filters for a better search</h3>
                      <p className="py-4">
                        <select class="select w-full max-w-xs" onChange={handleSelection}>
                         <option disabled selected>Pick up a Brand</option>
                         <option >Volkswagen</option>
                         <option >Ford</option>
                         <option >Suzuki</option>
                         <option >Fiat</option>
                         <option >Mercedes Benz</option>
                         <option >Bmw</option>
                         <option >Audi</option>
                         <option >Hyundai</option>
                       </select>
       </p>
       {showMinPrice ? null : 
         <p className="py-4">
            <p>Select Max Price  </p>
                <Box sx={{ width: 300 }}  class="flex justify-center">
                <Slider onChange={handleSliderChange}  defaultValue={3000} getAriaValueText={valuetext}  valueLabelDisplay="auto" step={3000}  marks min={3000}   max={80000}  valueLabelFormat={(value) => `${value} USD`}/>
                </Box>
            </p> 
        }

        {showYear ? null : 
           <p className="py-4">
             <p>Maximum year of seniority</p>
               <Box sx={{ width: 300 }}  class="flex justify-center">
                  <Slider onChange={handleSelectionMaxPrice}  defaultValue={30} getAriaValueText={valuetext} valueLabelDisplay="auto" step={1} marks min={2000} max={2023}/>
                </Box>
           </p> 
        }

       {showMaxKilometres ? null : 
           <p className="py-4">
             <p>Maximum number of kilometers</p>
               <Box sx={{ width: 300 }}  class="flex justify-center">
                  <Slider onChange={handleSelectionKilometres}  defaultValue={30} getAriaValueText={valuetext} valueLabelDisplay="auto" step={20000} marks min={5000} max={300000}/>
                </Box>
           </p> 
        }

      {showBtnSearch ? null : 
          <Stack direction="row" spacing={2}  class="flex justify-center">
              <Button variant="contained" endIcon={<SendIcon />}> Apply </Button>
           </Stack>
        }

       
   </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
   </div>
  )
}

export default Filters


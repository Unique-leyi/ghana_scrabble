
import { useState } from 'react';
import ResourceList from './ResourceList';
import SubTitle from './SubTitle';
import { Resources } from '../../../pages/api/resource_collection';



function ResourceContainer() {
const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

// bg-[#0c240c]
    return (
        <section className={`bg-ash p-0`}>

            <section className={`bg-cover bg-center bg-no-repeat bg-fixed relative z-10`}>
                <div className={`lg:mt-0  lg:mx-auto w-full lg:max-w-[85%]`}>

                    {
                        Resources.map((item, i) => (
                            <div key={i} className="py-6">
                                <div className="w-full my-16 lg:my-8" key={i}>
                                    <SubTitle subtitle={item.title}/>
                                </div>

                                <div className="w-full lg:max-w-[98%] lg:mx-auto flex justify-around items-center flex-col md:flex-row px-4 lg:p-0">
                                
                                    <ResourceList key={i} {...item} accordionOpen={open} handleOpen={() => handleOpen(item.id)}/>
                        
                                </div>
                            </div>
                            
    
                        ))
                    }
                    


            </div>

            </section>
           

        </section>
    )
}

export default ResourceContainer
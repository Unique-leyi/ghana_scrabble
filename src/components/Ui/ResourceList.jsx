import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import ResourceItem from "../Resources/ResourceItem";
 
function ResourceList(props) {
  
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };


 
  return (
    <Fragment>
      <Accordion open={props.accordionOpen === props.id} animate={customAnimation} className="overflow-hidden rounded-md">
        <AccordionHeader onClick={props.handleOpen} className="bg-siteyellow font-bold text-lg text-black p-4 uppercase">
          {props.title}
        </AccordionHeader>
        <AccordionBody className="bg-[rgba(0,0,0,0.97)] lg:p-0 p-14">
          <div className="mb-4 grid grid-cols-1 lg:grid-cols-4">
                {
                    props.resources.map((resource, i) => (
                       <ResourceItem key={i} {...resource}/> 
                    ))
                }
            </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default ResourceList
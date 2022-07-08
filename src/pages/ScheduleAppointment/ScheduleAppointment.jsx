import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";



export default function ScheduleAppointment(){
    return(
        <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f]">
        <h1>Schedule Appointment</h1>

         <div className="App px-4">
          <InlineWidget url="https://calendly.com/earl-halasan?background_color=f7f7f2&primary_color=fb923c" />
        </div>
        </div>
    )
}
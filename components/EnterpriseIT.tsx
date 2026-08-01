"use client";

import { motion } from "framer-motion";

import {
  Server,
  Cloud,
  Network,
  ShieldCheck,
  MonitorCog,
  Boxes
} from "lucide-react";


const solutions = [

{
title:"Managed IT Services",
icon:MonitorCog,
description:
"Complete IT support, monitoring and maintenance for businesses."
},

{
title:"Servers & Infrastructure",
icon:Server,
description:
"Server deployment, hardware support and enterprise infrastructure."
},

{
title:"Cloud Solutions",
icon:Cloud,
description:
"Microsoft 365, cloud connectivity and modern workplace solutions."
},

{
title:"Networking",
icon:Network,
description:
"LAN, WAN, WiFi, switching, routing and network optimization."
},

{
title:"Cybersecurity",
icon:ShieldCheck,
description:
"Security monitoring, protection and risk management."
},

{
title:"Virtualization",
icon:Boxes,
description:
"Virtual environments, optimization and infrastructure management."
}

];


export default function EnterpriseIT(){

return(

<section
className="
bg-black
text-white
px-6
py-24
"
>


<div
className="
max-w-7xl
mx-auto
"
>


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

className="text-center"

>


<p
className="
text-cyan-400
uppercase
tracking-[0.3em]
text-sm
"
>
Enterprise Technology
</p>


<h2
className="
mt-4
text-4xl
md:text-6xl
font-bold
"
>

Reliable IT Infrastructure

<br/>

<span
className="
bg-gradient-to-r
from-cyan-400
to-blue-500
bg-clip-text
text-transparent
"
>
Built For Business Growth
</span>

</h2>


<p
className="
mt-6
text-gray-400
max-w-3xl
mx-auto
text-lg
"
>
PixelFlow provides enterprise-grade IT services,
helping organizations operate securely,
efficiently and digitally.
</p>


</motion.div>



<div
className="
mt-16
grid
md:grid-cols-3
gap-8
"
>


{solutions.map((item,index)=>{

const Icon=item.icon;


return(

<motion.div

key={item.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.5,
delay:index*.1
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
hover:-translate-y-3
transition
"

>


<div
className="
w-14
h-14
rounded-xl
bg-gradient-to-r
from-cyan-400
to-blue-500
flex
items-center
justify-center
mb-6
"
>

<Icon
size={28}
className="text-black"
/>

</div>


<h3
className="
text-xl
font-bold
"
>
{item.title}
</h3>


<p
className="
mt-4
text-gray-400
"
>
{item.description}
</p>


</motion.div>

)

})}


</div>



{/* Subcontracting Banner */}

<div
className="
mt-16
rounded-3xl
border
border-cyan-400/20
bg-gradient-to-r
from-cyan-500/10
to-blue-500/10
p-10
text-center
"
>

<h3
className="
text-3xl
font-bold
"
>
IT Subcontracting & Enterprise Support
</h3>


<p
className="
mt-4
text-gray-300
max-w-3xl
mx-auto
"
>
Supporting companies with skilled IT resources,
onsite support, infrastructure projects and
technology operations.
</p>


</div>



</div>

</section>

)

}
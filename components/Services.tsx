"use client";

import { motion } from "framer-motion";

import {
  Globe,
  Palette,
  Megaphone,
  Cloud,
  Server,
  ShieldCheck,
  Bot,
  Smartphone,
  ShoppingCart
} from "lucide-react";


const services = [

{
title:"Website Development",
icon:Globe
},

{
title:"Branding & Design",
icon:Palette
},

{
title:"Digital Marketing",
icon:Megaphone
},

{
title:"Cloud Solutions",
icon:Cloud
},

{
title:"Managed IT Services",
icon:Server
},

{
title:"Cybersecurity",
icon:ShieldCheck
},

{
title:"AI Solutions",
icon:Bot
},

{
title:"Mobile Applications",
icon:Smartphone
},

{
title:"Marketplace Platforms",
icon:ShoppingCart
}

];


export default function Services(){

return(

<section
className="
bg-black
text-white
py-24
px-6
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
Our Capabilities
</p>


<h2
className="
mt-4
text-4xl
md:text-6xl
font-bold
"
>

Everything Your Business Needs

<br/>

<span
className="
bg-gradient-to-r
from-pink-500
to-cyan-400
bg-clip-text
text-transparent
"
>
Under One Roof
</span>

</h2>


</motion.div>



<div

className="
mt-16
grid
grid-cols-2
md:grid-cols-3
gap-6
"

>


{services.map((service,index)=>{

const Icon=service.icon;


return(

<motion.div

key={service.title}

initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:.4,
delay:index*.08
}}

className="
group
rounded-2xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
text-center
hover:border-cyan-400/50
hover:-translate-y-2
transition
"

>


<div
className="
mx-auto
w-16
h-16
rounded-2xl
bg-gradient-to-r
from-pink-500
to-cyan-400
flex
items-center
justify-center
mb-5
"
>

<Icon
size={30}
className="text-black"
/>

</div>


<h3
className="
font-semibold
text-lg
"
>
{service.title}
</h3>


</motion.div>


)

})}


</div>


</div>

</section>

)

}
"use client";

import { motion } from "framer-motion";

import {
  HeartPulse,
  Building2,
  ShoppingCart,
  Utensils,
  Fuel,
  GraduationCap,
  Landmark,
  BriefcaseBusiness,
  Globe2,
  Zap
} from "lucide-react";


const industries = [

{
title:"Healthcare",
icon:HeartPulse
},

{
title:"Construction",
icon:Building2
},

{
title:"Retail",
icon:ShoppingCart
},

{
title:"Restaurants",
icon:Utensils
},

{
title:"Oil & Gas",
icon:Fuel
},

{
title:"Education",
icon:GraduationCap
},

{
title:"Government",
icon:Landmark
},

{
title:"SMEs & Corporate",
icon:BriefcaseBusiness
}

];


const advantages=[

"Enterprise Experience",

"Creative Expertise",

"Affordable Solutions",

"Fast Deployment",

"International Capability",

"One Technology Partner"

];



export default function Industries(){

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


{/* INDUSTRIES */}

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

className="
text-center
"

>

<p
className="
text-cyan-400
uppercase
tracking-[0.3em]
text-sm
"
>
Industries We Serve
</p>


<h2
className="
mt-4
text-4xl
md:text-6xl
font-bold
"
>

Technology Solutions

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
For Every Industry
</span>

</h2>


</motion.div>



<div
className="
mt-14
grid
grid-cols-2
md:grid-cols-4
gap-6
"
>


{industries.map((item,index)=>{

const Icon=item.icon;


return(

<motion.div

key={item.title}

initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
delay:index*.08
}}

className="
rounded-2xl
border
border-white/10
bg-white/5
p-6
text-center
hover:border-cyan-400/40
transition
"

>

<Icon
size={34}
className="
mx-auto
text-cyan-400
mb-4
"
/>


<p
className="
font-semibold
"
>
{item.title}
</p>


</motion.div>

)

})}


</div>




{/* WHY PIXELFLOW */}

<div
className="
mt-32
"
>


<div
className="
text-center
"
>

<p
className="
text-pink-400
uppercase
tracking-[0.3em]
text-sm
"
>
Why PixelFlow
</p>


<h2
className="
mt-4
text-4xl
md:text-5xl
font-bold
"
>

One Partner.

<br/>

<span
className="
bg-gradient-to-r
from-purple-500
to-cyan-400
bg-clip-text
text-transparent
"
>
Unlimited Possibilities.
</span>

</h2>


</div>



<div
className="
mt-12
grid
md:grid-cols-3
gap-6
"
>


{advantages.map((item,index)=>(


<motion.div

key={item}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}

className="
rounded-2xl
bg-white/5
border
border-white/10
p-7
text-center
"

>

<Zap
className="
mx-auto
text-yellow-400
mb-4
"
/>


<h3
className="
font-bold
text-lg
"
>
{item}
</h3>


</motion.div>


))}



</div>


</div>


</div>


</section>

)

}
"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  PenTool,
  TrendingUp
} from "lucide-react";


const sections = [

{
title:"Website Development",
icon:MonitorSmartphone,

description:
"Modern websites built to attract customers and grow your business.",

items:[
"Corporate Websites",
"E-Commerce Platforms",
"Booking Systems",
"Landing Pages",
"Business Email",
"SEO Optimization",
"Website Maintenance"
]

},

{
title:"Branding & Identity",
icon:PenTool,

description:
"Creating powerful brand identities that make businesses memorable.",

items:[
"Logo Design",
"Brand Identity",
"Social Media Design",
"Business Cards",
"Packaging Design",
"Company Profiles",
"Presentation Design"
]

},

{
title:"Digital Marketing",
icon:TrendingUp,

description:
"Digital campaigns designed to generate visibility and customers.",

items:[
"Instagram Marketing",
"Facebook Marketing",
"TikTok Campaigns",
"Google Ads",
"Meta Ads",
"Reels & Content",
"Lead Generation"
]

}

];



export default function CreativeServices(){

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
duration:.6
}}

className="text-center"

>


<p
className="
text-pink-400
uppercase
tracking-[0.3em]
text-sm
"
>
Creative Solutions
</p>


<h2
className="
mt-4
text-4xl
md:text-6xl
font-bold
"
>

Building Digital Experiences

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
That Drive Growth
</span>

</h2>


</motion.div>




<div
className="
mt-16
grid
md:grid-cols-3
gap-8
"
>


{sections.map((section,index)=>{


const Icon=section.icon;


return(

<motion.div

key={section.title}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.5,
delay:index*.2
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
w-16
h-16
rounded-2xl
bg-gradient-to-r
from-pink-500
to-cyan-400
flex
items-center
justify-center
mb-6
"
>

<Icon
size={32}
className="text-black"
/>

</div>


<h3
className="
text-2xl
font-bold
"
>
{section.title}
</h3>


<p
className="
mt-4
text-gray-400
"
>
{section.description}
</p>



<ul
className="
mt-6
space-y-3
text-gray-300
"
>

{section.items.map(item=>(

<li key={item}>
✓ {item}
</li>

))}


</ul>



</motion.div>


)


})}



</div>


</div>


</section>

)

}
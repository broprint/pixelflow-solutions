"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Server,
  BrainCircuit
} from "lucide-react";


const divisions = [
  {
    title: "PixelFlow Digital",
    subtitle: "Creative • Branding • Growth",
    icon: Palette,
    color: "from-pink-500 to-purple-500",
    services: [
      "Website Development",
      "Brand Identity",
      "Digital Marketing",
      "SEO",
      "Social Media",
      "Advertising"
    ]
  },

  {
    title: "PixelFlow IT",
    subtitle: "Enterprise Technology",
    icon: Server,
    color: "from-cyan-400 to-blue-500",
    services: [
      "Managed IT Services",
      "Servers & Infrastructure",
      "Microsoft 365",
      "Cloud Solutions",
      "Networking",
      "Cybersecurity"
    ]
  },


  {
    title: "PixelFlow Labs",
    subtitle: "Innovation & Future Technology",
    icon: BrainCircuit,
    color: "from-purple-500 to-cyan-400",
    services: [
      "AI Solutions",
      "Automation",
      "Software Development",
      "Marketplace Platforms",
      "Mobile Apps",
      "Chatbots"
    ]
  }
];


export default function Divisions(){

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


{/* Heading */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:.7}}
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
Our Ecosystem
</p>


<h2
className="
mt-4
text-4xl
md:text-6xl
font-bold
"
>

Three Divisions.
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
One Powerful Partner.
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
Everything your business needs to design,
operate and grow digitally.
</p>


</motion.div>



{/* Cards */}

<div
className="
mt-16
grid
md:grid-cols-3
gap-8
"
>


{divisions.map((item,index)=>{

const Icon=item.icon;


return(

<motion.div
key={item.title}
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
group
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
hover:-translate-y-3
transition
duration-300
"
>


<div
className={`
w-16
h-16
rounded-2xl
bg-gradient-to-r
${item.color}
flex
items-center
justify-center
mb-6
`}
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
{item.title}
</h3>


<p
className="
text-cyan-300
mt-2
"
>
{item.subtitle}
</p>



<ul
className="
mt-6
space-y-3
text-gray-300
"
>

{item.services.map(service=>(

<li
key={service}
>
✓ {service}
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
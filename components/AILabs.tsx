"use client";

import { motion } from "framer-motion";

import {
  Bot,
  Workflow,
  MessageSquare,
  ShoppingBag,
  CreditCard,
  Megaphone
} from "lucide-react";


const aiServices = [

{
title:"AI Chatbots",
icon:MessageSquare,
text:"Intelligent assistants for customer support and business communication."
},

{
title:"Business Automation",
icon:Workflow,
text:"Automate repetitive processes and improve productivity."
},

{
title:"AI Assistants",
icon:Bot,
text:"Smart AI tools for employees and customers."
}

];


const marketplace = [

{
title:"Marketplace Platforms",
icon:ShoppingBag,
text:"Building digital platforms connecting buyers and sellers."
},

{
title:"Subscription Model",
icon:CreditCard,
text:"Premium memberships and recurring revenue systems."
},

{
title:"Advertising Revenue",
icon:Megaphone,
text:"Featured listings, banners and promoted products."
}

];



export default function AILabs(){

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


{/* TITLE */}

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
text-purple-400
uppercase
tracking-[0.3em]
text-sm
"
>
PixelFlow Labs
</p>


<h2
className="
mt-4
text-4xl
md:text-6xl
font-bold
"
>

AI, Automation

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
Future Digital Platforms
</span>

</h2>


<p
className="
mt-6
text-gray-400
max-w-3xl
mx-auto
"
>
Creating intelligent systems and digital platforms
that help businesses innovate and scale.
</p>


</motion.div>



{/* AI SECTION */}

<div
className="
mt-16
"
>

<h3
className="
text-3xl
font-bold
mb-8
"
>
🤖 AI Solutions
</h3>


<div
className="
grid
md:grid-cols-3
gap-8
"
>


{aiServices.map((item,index)=>{

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
delay:index*.15
}}

className="
rounded-3xl
bg-white/5
border
border-white/10
p-8
"

>

<div
className="
w-14
h-14
rounded-xl
bg-gradient-to-r
from-purple-500
to-cyan-400
flex
items-center
justify-center
mb-5
"
>

<Icon
className="text-black"
/>

</div>


<h4
className="
text-xl
font-bold
"
>
{item.title}
</h4>


<p
className="
mt-4
text-gray-400
"
>
{item.text}
</p>


</motion.div>

)

})}


</div>

</div>




{/* MARKETPLACE */}

<div
className="
mt-24
"
>


<h3
className="
text-3xl
font-bold
mb-8
"
>
🛒 Marketplace Platforms
</h3>



<div
className="
grid
md:grid-cols-3
gap-8
"
>


{marketplace.map((item,index)=>{


const Icon=item.icon;


return(

<motion.div

key={item.title}

whileInView={{
opacity:1,
y:0
}}

initial={{
opacity:0,
y:40
}}

transition={{
delay:index*.15
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
"

>


<Icon
size={40}
className="
text-cyan-400
mb-5
"
/>


<h4
className="
text-xl
font-bold
"
>
{item.title}
</h4>


<p
className="
mt-4
text-gray-400
"
>
{item.text}
</p>


</motion.div>

)

})}


</div>


</div>



</div>


</section>

)

}
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="
      bg-black
      text-white
      py-24
      px-6
      "
    >

      <div className="max-w-7xl mx-auto">


        {/* WHO WE ARE */}
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          className="text-center"
        >

          <p
            className="
            text-cyan-400
            uppercase
            tracking-widest
            text-sm
            "
          >
            Who We Are
          </p>


          <h2
            className="
            mt-4
            text-4xl
            md:text-6xl
            font-bold
            "
          >
            Not Just A Service Provider.
            <br />

            <span
              className="
              bg-gradient-to-r
              from-pink-500
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >
              Your Technology Partner.
            </span>

          </h2>


          <p
            className="
            mt-8
            max-w-4xl
            mx-auto
            text-gray-300
            text-lg
            "
          >
            PixelFlow Solutions is a Digital Business Solutions
            company combining creative design, enterprise IT,
            AI innovation, and digital transformation.
          </p>


          <div
            className="
            mt-10
            grid
            md:grid-cols-3
            gap-6
            "
          >

            <Card
              title="Not A Design Agency"
              text="We create complete business solutions beyond graphics."
            />

            <Card
              title="Not Just IT Support"
              text="We build, manage and secure enterprise technology."
            />

            <Card
              title="Complete Technology Partner"
              text="One team covering creative, technology and growth."
            />

          </div>

        </motion.div>



        {/* PROBLEM SECTION */}

        <div
          className="
          mt-32
          grid
          md:grid-cols-2
          gap-12
          "
        >

          <div>

            <h3
              className="
              text-4xl
              font-bold
              "
            >
              The Business Problem
            </h3>


            <p
              className="
              mt-5
              text-gray-400
              "
            >
              Businesses often work with multiple vendors
              for digital services and technology.
            </p>


            <ul
              className="
              mt-8
              space-y-4
              text-gray-300
              "
            >

              <li>❌ Website Company</li>
              <li>❌ Marketing Agency</li>
              <li>❌ IT Provider</li>
              <li>❌ Cloud Vendor</li>
              <li>❌ Software Developer</li>

            </ul>


          </div>



          {/* SOLUTION */}

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            "
          >

            <h3
              className="
              text-4xl
              font-bold
              "
            >
              The PixelFlow Solution
            </h3>


            <p
              className="
              mt-5
              text-gray-300
              "
            >
              One company.
              One team.
              One technology ecosystem.
            </p>


            <div
              className="
              mt-8
              space-y-4
              "
            >

              <Box text="Creative Services" />
              <Box text="Enterprise IT" />
              <Box text="AI & Automation" />
              <Box text="Digital Growth" />

            </div>


          </div>


        </div>


      </div>

    </section>
  );
}



function Card({
  title,
  text
}:{
  title:string;
  text:string;
}){

return (

<div
className="
rounded-2xl
border
border-white/10
bg-white/5
p-8
hover:border-cyan-400/40
transition
"
>

<h4
className="
text-xl
font-bold
"
>
{title}
</h4>

<p
className="
mt-4
text-gray-400
"
>
{text}
</p>


</div>

)

}



function Box({
text
}:{
text:string
}){

return(

<div
className="
rounded-xl
bg-black/40
border
border-white/10
p-4
text-cyan-300
"
>
✓ {text}
</div>

)

}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import Services from "@/components/Services";
import CreativeServices from "@/components/CreativeServices";
import EnterpriseIT from "@/components/EnterpriseIT";
import AILabs from "@/components/AILabs";
import Industries from "@/components/Industries";

export default function Home(){

return(

<main className="bg-black min-h-screen">

<Navbar />

<Hero />

<About />

<Divisions />

<Services />

<CreativeServices />

<EnterpriseIT />

<AILabs />

<Industries />

</main>

);

}
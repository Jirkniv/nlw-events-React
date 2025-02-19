import{ Button }from "@/components/Button";
import Image from "next/image";
import {ArrowRight, Copy} from 'lucide-react';
import { IconButton } from "@/components/icon-button";


export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight/>
      </Button>
      
   <IconButton>
   <Copy/>

   </IconButton>
    </main>
  );
}

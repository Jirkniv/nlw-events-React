import{ Button }from "@/components/Button";
import Image from "next/image";
import {ArrowRight, Copy, Mail} from 'lucide-react';
import { IconButton } from "@/components/icon-button";
import { InputField, InputRoot, InputIcon } from "@/components/input";



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
  
    <InputRoot>
      <InputIcon>
      <Mail className="size-5"/>
      </InputIcon>
      <InputField/>
    </InputRoot>
    </main>
  );
}

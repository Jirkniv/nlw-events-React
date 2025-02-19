import { Button } from "@/components/Button";
import Image from "next/image";
import { ArrowRight, Copy, Mail, Radio, User } from "lucide-react";
import { IconButton } from "@/components/icon-button";
import { InputField, InputRoot, InputIcon } from "@/components/input";
import logo from "../assets/Logo.svg";

export default function Home() {
  return (
   
      <div className="min-h-dvh flex flex-col justify-center gap-16  ">
        <div className="flex flex-col gap-8 md:items-start items-center ">
          <Image src={logo} alt="Logo da Pagina" width={108.5} height={30} />

          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span className="text-blue">CodeCraft</span>
            Summit 2025
          </h1>
        </div>

        <div className="flex items-stretch gap-5  flex-col md:flex-row">
          <div className="flex-1 bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-xl text-gray-200">
                Sobre o Evento
              </h2>

              <span className="text-purple-500 font-semibold text-xs flex items-center gap-2">
                <Radio className="size-5" />
                Ao vivo
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
            </p>
          </div>
          <form
            className="bg-gray-700 border-gray-600 rounded-2xl p-8 rounded-2xl space-y-6 w-full md:max-w-[440px]"
            action=""
          >
            <h2 className="font-heading font-semibold text-xl text-gray-200">
              Inscrição
            </h2>
            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>
                <InputField type="text" placeholder="Nome Completo" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="Email" />
              </InputRoot>

            </div>

            <Button type="submit">
              Confimar
              <ArrowRight />
            </Button>
          </form>
        </div>
      </div>

  );
}

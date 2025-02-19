import React from "react";
import logo from "../../assets/Logo.svg";
import Medal_1 from "../../assets/Medal_1.png";
import Medal_2 from "../../assets/Medal_2.png";
import Medal_3 from "../../assets/Medal_3.png";
import Image from "next/image";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Link, Copy, MousePointerClick, Medal, BadgeCheck } from "lucide-react";
import { IconButton } from "@/components/icon-button";

const page = () => {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16   flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="Logo da Pagina" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-xl4 font-semibold font-heading text-gray-100 leading-none ">
            Inscrição confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para o seu email.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 font-semibold leading-none text-xl">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link className="size-5" />
            </InputIcon>
            <InputField
              readOnly
              defaultValue="http://locahost:3000/invite/mdoaasda4d8"
            />

            <IconButton className="-mr-2">
              <Copy />
            </IconButton>
          </InputRoot>
          <div className="grid gap-3 md:grid-cols-3 ">
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl ">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1400
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Acesso ao link
              </span>
              <MousePointerClick className="size-5 text-purple-500 absolute top-3 left-3" />
            </div>
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl ">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1400
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Inscrições Feitas
              </span>
              <BadgeCheck className="size-5 text-purple-500 absolute top-3 left-3" />
            </div>
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl ">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1º
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Posição no Ranking
              </span>
              <Medal className="size-5 text-purple-500 absolute top-3 left-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 leading-none text-heading text-xl font-semibold">
          Ranking de indicaçoes
        </h2>
        <div className="space-y-4">
          <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">1º</span> | Miguel</span>
            <span className="font-heading leading-none text-2xl font-semibold text-gray-200">
              1300
            </span>

            <Image
              src={Medal_1}
              alt="Imagem da Medalha de Ouro"
              className="absolute top-0 right-8"
            ></Image>
            </div>
            <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center">
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">2º</span> | Rafael</span>
              <span className="font-heading leading-none text-2xl font-semibold text-gray-200">
                1300
              </span>

              <Image
                src={Medal_2}
                alt="Imagem da Medalha de Prata"
                className="absolute top-0 right-8"
              ></Image>
            </div>

            <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center">
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">3º</span> | Gustavo</span>
              <span className="font-heading leading-none text-2xl font-semibold text-gray-200">
                1300
              </span>

              <Image
                src={Medal_3}
                alt="Imagem da Medalha de Bronze"
                className="absolute top-0 right-8"
              ></Image>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;

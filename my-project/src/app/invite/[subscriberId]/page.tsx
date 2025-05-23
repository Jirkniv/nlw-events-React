import logo from "../../../assets/Logo.svg";
import Image from "next/image";
import { Ranking } from "./ranking";
import { Stats } from "./stats";
import { InviteLinkInput } from "./invite-link-input";

interface InvitePageProps{
  params: Promise<{
    subscriberId: number
  }>
}

const page = async (props: InvitePageProps) => {

  const {subscriberId} = await props.params
  const inviteLink = `http://localhost:3000/invites/${subscriberId}`

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

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats subscriberId={subscriberId} prettyName="codecraft-summit-2025" />
        </div>
      </div>

      <Ranking prettyName="codecraft-summit-2025" />
    </div>
  );
};

export default page;

import React from "react";
import Image from "next/image";
import Medal_1 from "../../../assets/Medal_1.png";
import Medal_2 from "../../../assets/Medal_2.png";
import Medal_3 from "../../../assets/Medal_3.png";
import { generateRankingByEvent } from "@/http/api";

interface RankingProps {
  prettyName: string;
}

export async function Ranking({ prettyName }: RankingProps) {
  const ranking = await generateRankingByEvent(prettyName);

  // Pegando os três primeiros colocados
  const top3 = ranking.slice(0, 3);

  // Medalhas associadas às posições
  const medals = [Medal_1, Medal_2, Medal_3];

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 leading-none text-heading text-xl font-semibold">
        Ranking de Indicações
      </h2>
      <div className="space-y-4">
        {top3.map((user, index) => (
          <div
            key={user.userId}
            className="flex items-center gap-4 p-3 bg-gray-700 rounded-lg"
          >
            <Image src={medals[index]} alt={`Medalha ${index + 1}`} width={40} height={40} />
            <div className="text-gray-100">
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-sm text-gray-400">{user.Subscribers} indicações</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

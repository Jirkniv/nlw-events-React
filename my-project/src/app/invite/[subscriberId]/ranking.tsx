
import React from "react";
import Medal_1 from "../../../assets/Medal_1.png";
import Medal_2 from "../../../assets/Medal_2.png";
import Medal_3 from "../../../assets/Medal_3.png";
import Image from "next/image";
import { generateRankingByEventandUser } from "@/http/api";

interface RankingProps {
  prettyName: string;
  userId: number;
}
export async function Ranking({ prettyName, userId }: RankingProps) {
  const ranking = await generateRankingByEventandUser(prettyName, userId);

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 leading-none text-heading text-xl font-semibold">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div
          key={ranking.userId}
          className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center"
        >
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">{ranking.position}º</span> |{" "}
            {ranking.name}
          </span>
          <span className="font-heading leading-none text-2xl font-semibold text-gray-200">
            {ranking.subscribers}
          </span>

          {ranking.position === 1 && (
            <Image
              src={Medal_1}
              alt="Imagem da Medalha"
              className="absolute top-0 right-8"
            />
          )}
          {ranking.position === 2 && (
            <Image
              src={Medal_2}
              alt="Imagem da Medalha"
              className="absolute top-0 right-8"
            />
          )}
          {ranking.position === 3 && (
            <Image
              src={Medal_3}
              alt="Imagem da Medalha"
              className="absolute top-0 right-8"
            />
          )}
        </div>
      </div>
    </div>
  );
}

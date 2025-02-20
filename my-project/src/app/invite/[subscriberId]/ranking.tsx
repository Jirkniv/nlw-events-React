import React from "react";
import Medal_1 from "../../../assets/Medal_1.png";
import Medal_2 from "../../../assets/Medal_2.png";
import Medal_3 from "../../../assets/Medal_3.png";
import Image from "next/image";
import { getRanking } from "@/http/api";

export async function Ranking() {

  const {ranking} = await getRanking();


  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 leading-none text-heading text-xl font-semibold">
        Ranking de indicaçoes
      </h2>
      <div className="space-y-4">
          {ranking.map((item , index) => {
            const rankingPosition = index + 1
              return (
                <div
                  key={item.id}
                  className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center"
                >
                  <span className="text-sm text-gray-300 leading-none">
                    <span className="font-semibold">{rankingPosition}º</span> |{" "}
                    {item.name}
                  </span>
                  <span className="font-heading leading-none text-2xl font-semibold text-gray-200">
                    {item.score}
                  </span>

                  {rankingPosition === 1 && (
                    <Image
                      src={Medal_1}
                      alt="Imagem da Medalha"
                      className="absolute top-0 right-8"
                    />
                  )}
                  {rankingPosition === 2 && (
                    <Image
                      src={Medal_2}
                      alt="Imagem da Medalha"
                      className="absolute top-0 right-8"
                    />
                  )}
                  {rankingPosition === 3 && (
                    <Image
                      src={Medal_3}
                      alt="Imagem da Medalha"
                      className="absolute top-0 right-8"
                    />
                  )}
                </div>
              );

          })}
      </div>
    </div>
  );
}

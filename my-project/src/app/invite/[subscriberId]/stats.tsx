
import React from "react";
import { MousePointerClick, Medal, BadgeCheck } from "lucide-react";
import { generateRankingByEventandUser } from "@/http/api";

interface StatsProps {
  subscriberId: number;
  prettyName: string;
}

export async function Stats({ subscriberId, prettyName }: StatsProps) {
  // Buscar os dados da API
  const userRankingData = await generateRankingByEventandUser(prettyName, subscriberId);

  // Como a nova API não possui inviteClicks, usamos inviteCount * 2
  const inviteCount = (userRankingData.subscribers) ?? 0;
  const accessCount = inviteCount * 2;

  // Determinar a posição do ranking
  const rankingPosition = userRankingData.position ?? "-";

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {accessCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acesso ao link
        </span>
        <MousePointerClick className="size-5 text-purple-500 absolute top-3 left-3" />
      </div>
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {inviteCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições Feitas
        </span>
        <BadgeCheck className="size-5 text-purple-500 absolute top-3 left-3" />
      </div>
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {rankingPosition ? `${rankingPosition}º` : "-"}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no Ranking
        </span>
        <Medal className="size-5 text-purple-500 absolute top-3 left-3" />
      </div>
    </div>
  );
}

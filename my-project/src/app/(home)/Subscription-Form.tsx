'use client'

import { User, Mail, ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { InputRoot, InputIcon, InputField } from "../../components/input";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { createSubscription, createSubscription1 } from "@/http/api";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
 
const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite o seu nome completo'),
  email: z.string().email('Digite um email válido')
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()

  const { register, handleSubmit, formState:{errors} } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

async function onSubscribe({ name, email }: SubscriptionSchema) {

  const pathParts = pathName.split('/');
  const referrer = pathParts[pathParts.length - 1];

  console.log("Referrer:", referrer);
  console.log("Current URL:", window.location.href);

  let subscriberId;

  let response;
  if (referrer) {
    response = await createSubscription("codecraft-summit-2025", Number(referrer), {
      name,
      email,
    });
  } else {
    response = await createSubscription1("codecraft-summit-2025", {
      name,
      email,
    });
  }

  console.log("API Response:", response);

  // Extraindo o ID da URL dentro de `designation`
  if (response?.designation) {
    const matches = response.designation.match(/\/(\d+)$/);
    if (matches) {
      subscriberId = matches[1]; 
    }
  }

  if (!subscriberId) {
    console.error(
      "Erro: subscriberId não encontrado na resposta da API!",
      response
    );
    return;
  }

  router.push(`/invite/${subscriberId}`);
}


  return (
    <form
      className="bg-gray-700 border-gray-600 p-8 rounded-2xl space-y-6 w-full md:max-w-[440px]"
      onSubmit={handleSubmit(onSubscribe)}
    >
      <h2 className="font-heading font-semibold text-xl text-gray-200">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              {...register("name")}
              type="text"
              placeholder="Nome Completo"
            />
          </InputRoot>
          {errors.name && (
            <p className="text-red-600 text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              {...register("email")}
              placeholder="Email"
              type="email"
            />
          </InputRoot>
          {errors.email && (
            <p className="text-red-600 text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confimar
        <ArrowRight />
      </Button>
    </form>
  );
}

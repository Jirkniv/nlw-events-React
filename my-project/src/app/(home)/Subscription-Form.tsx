'use client'

import { User, Mail, ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { InputRoot, InputIcon, InputField } from "../../components/input";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { subscribeToEvent } from "@/http/api";
import { useRouter, useSearchParams } from "next/navigation";
 
const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite o seu nome completo'),
  email: z.string().email('Digite um email válido')
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { register, handleSubmit, formState:{errors} } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  async function onSubscribe({name, email}: SubscriptionSchema){
    const referrer = searchParams.get('referrer')

    const { subscriberId } = await subscribeToEvent({ name, email, referrer });

    router.push(`/invite/${subscriberId}`)
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

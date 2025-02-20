import { User, Mail, ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { InputRoot, InputIcon, InputField } from "../../components/input";

export function SubscriptionForm() {
  return (
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
  );
}

import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      const id = generateId();
      await actor.submitContactForm(id, name, email, message);
    },
  });
}

export function useSubscribeNewsletter() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error("Not connected");
      await actor.subscribeToNewsletter(email);
    },
  });
}

import { useActionState } from "react";
import { redirect } from "react-router-dom";

async function sendMessageToServer(name: string, msg: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (!name || !msg) {
    return "Name and message are required";
  }
  console.log(`The name is ${name}, the message is ${msg}`); // No error
}

export default function ContactForm() {
  const [error, submitAction, isPending] = useActionState(
    async (formData: FormData) => {
      const name = formData.get("name") as string;
      const msg = formData.get("message") as string;

      const error = await sendMessageToServer(name, msg);

      if (error) {
        return error;
      }

      redirect("/");
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <div>
        <label htmlFor="name"> Name</label>
        <input type="text" name="name"></input>
      </div>
      <div>
        <label htmlFor="message"> Message</label>
        <input type="text" name="message"></input>
      </div>
      <button type="submit" disabled={isPending}>
        submit
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

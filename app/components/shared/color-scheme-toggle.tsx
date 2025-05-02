import { Form } from "react-router";
import { Button } from "~/components/ui/button";

export function ColorSchemeToggle({ action }: { action: string }) {
  return (
    <Form navigate={false} method="POST" action={action} className="p-10">
      <div className="flex items-center justify-center gap-4">
        <Button type="submit" name="color-scheme" value="dark">
          🌙 Dark
        </Button>
        <Button type="submit" name="color-scheme" value="light">
          ☀️ Light
        </Button>
        <Button type="submit" name="color-scheme" value="system">
          🖥️ System
        </Button>
      </div>
    </Form>
  );
}

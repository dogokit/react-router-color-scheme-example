import { Form } from "react-router";

export function ColorSchemeToggle({ action }: { action: string }) {
  return (
    <Form navigate={false} method="POST" action={action} className="p-10">
      <div className="flex items-center justify-center gap-4">
        <button
          type="submit"
          name="color-scheme"
          value="dark"
          className="rounded-full bg-gray-900 px-4 py-2 text-white dark:bg-gray-100 dark:text-gray-900"
        >
          Dark
        </button>
        <button
          type="submit"
          name="color-scheme"
          value="light"
          className="rounded-full bg-gray-900 px-4 py-2 text-white dark:bg-gray-100 dark:text-gray-900"
        >
          Light
        </button>
        <button
          type="submit"
          name="color-scheme"
          value="system"
          className="rounded-full bg-gray-900 px-4 py-2 text-white dark:bg-gray-100 dark:text-gray-900"
        >
          System
        </button>
      </div>
    </Form>
  );
}

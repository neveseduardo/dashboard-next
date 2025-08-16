"use client";

export function Footer() {
  return (
    <footer className="border-t bg-background px-6 py-3 text-sm text-muted-foreground flex items-center justify-between">
      <p>© {new Date().getFullYear()} Meu App. Todos os direitos reservados.</p>
      <p className="text-xs">
        Desenvolvido com <span className="text-red-500">♥</span> usando{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          Next.js
        </a>{" "}
        &{" "}
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          shadcn/ui
        </a>
      </p>
    </footer>
  );
}

export default function Footer() {
    return (
      <footer className="py-10 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Charite Uwatwembi</p>
          <a href="#home" className="text-sm text-neutral-600 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700">
            Back to top
          </a>
        </div>
      </footer>
    );
  }
  
export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="border-t border-dark-light pt-6">
          <p className="text-sm text-light-darker text-center">
            &copy; {new Date().getFullYear()} Basharat.net
          </p>
        </div>
      </div>
    </footer>
  );
}

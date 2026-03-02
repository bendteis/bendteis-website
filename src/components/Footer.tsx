import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-warm-gray/50 py-12 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <span className="font-heading text-lg text-ink">bendteis</span>
            <p className="text-mid-gray text-xs mt-2 max-w-xs leading-relaxed">
              Fotografie, marketing & AI automation.
              <br />
              Shot on Fujifilm X100VI.
            </p>
          </div>

          <div className="flex gap-12 text-xs">
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-mid-gray hover:text-ink transition-colors">
                home
              </Link>
              <Link href="/portfolio" className="text-mid-gray hover:text-ink transition-colors">
                portfolio
              </Link>
              <Link href="/services" className="text-mid-gray hover:text-ink transition-colors">
                services
              </Link>
              <Link href="/contact" className="text-mid-gray hover:text-ink transition-colors">
                contact
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@bendteis.nl"
                className="text-mid-gray hover:text-ink transition-colors"
              >
                email
              </a>
              <a
                href="https://instagram.com/bendteis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mid-gray hover:text-ink transition-colors"
              >
                instagram
              </a>
              <a
                href="https://linkedin.com/in/bendteis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mid-gray hover:text-ink transition-colors"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-gray/30 mt-8 pt-6 text-xs text-mid-gray">
          &copy; {new Date().getFullYear()} bendteis
        </div>
      </div>
    </footer>
  );
}

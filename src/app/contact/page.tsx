import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { siteMap } from "@/lib/config/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pradip Thapa.",
};


export default function Contact() {
  return (
    <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
      <div className="flex flex-col pb-6">
        <h1 className="text-3xl font-heading font-semibold mb-2 text-primary-light dark:text-primary-dark">
          Contact 📞
        </h1>
      </div>

      <section className="flex flex-col gap-4 py-6">
        <p className="text-secondary-light dark:text-secondary-dark">
          Feel free to reach out to me via email. I'm always happy to discuss backend development opportunities or answer any questions.
        </p>
        
        <Link
          href={siteMap.mailTo}
          className="inline-flex items-center gap-2 text-primary-light dark:text-primary-dark hover:underline focus:outline-none transition-colors"
        >
          <CiMail />
          hello@pradipthapa.net
        </Link>
      </section>
    </div>
  );
}
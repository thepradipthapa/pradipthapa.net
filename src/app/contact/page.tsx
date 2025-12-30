import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { siteMap } from "@/lib/config/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Pradip Thapa – Backend Developer.",
};

export default function Contact() {
  return (
    <section className="flex flex-col divide-y divide-border-light dark:divide-border-dark">

      {/* Heading */}
      <div className="pb-6">
        <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-primary-light dark:text-primary-dark">
          Contact 📞
        </h1>
      </div>

      {/* Content */}
      <section className="py-6 flex flex-col gap-4 max-w-2xl">
        <p className="leading-relaxed text-secondary-light dark:text-secondary-dark">
          If you’d like to talk about backend development, projects, or potential
          opportunities, feel free to reach out. I’m always open to meaningful
          conversations and learning opportunities.
        </p>

        <Link
          href={siteMap.mailTo}
          className="inline-flex items-center gap-2 w-fit text-primary-light dark:text-primary-dark hover:underline focus:outline-none"
        >
          <CiMail className="text-lg" />
          hello@pradipthapa.net
        </Link>
      </section>

    </section>
  );
}

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Resume",
  description:
    "Explore the resume of Pradip Thapa – Backend Developer",
};
export default function Resume() {
  return (
    <>
    <div className="font-heading text-3xl text-primary-light dark:text-primary-dark ">Resume</div>
    </>
  );
}

import { IoMdMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 outline-none" tabIndex={-1}>
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center">
          Get in Touch
        </h2>
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <motion.div className="flex items-center space-x-4 rounded-lg border-2 bg-background/50 backdrop-blur-sm p-6 shadow-lg">
            <IoMdMailUnread className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground">deepak@phleebs.tech</p>
            </div>
          </motion.div>
          <motion.div className="flex items-center space-x-4 rounded-lg border-2 bg-background/50 backdrop-blur-sm p-6 shadow-lg">
            <FaPhoneAlt className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Phone</h3>
              <p className="text-muted-foreground">+91 8652295380</p>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center space-x-8">
          <Link
            href="https://www.linkedin.com/in/deepak-shinde-782557255/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Linkedin
              className="h-8 w-8 text-primary"
              aria-label="LinkedIn Profile"
            />
          </Link>
          <Link
            href="https://github.com/DeepakShinde123"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Github
              className="h-8 w-8 text-primary"
              aria-label="GitHub Profile"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

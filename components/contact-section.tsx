// /components/contact-section.js

import { IoMdMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-secondary py-20 text-secondary-foreground"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold underline">Contact</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div className="flex items-center space-x-4 rounded-lg border-2 bg-background p-6 shadow-lg">
            <IoMdMailUnread className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground">deepak@phleebs.tech</p>
            </div>
          </motion.div>
          <motion.div className="flex items-center space-x-4 rounded-lg border-2 bg-background p-6 shadow-lg">
            <FaPhoneAlt className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Phone</h3>
              <p className="text-muted-foreground">+91 8652295380</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

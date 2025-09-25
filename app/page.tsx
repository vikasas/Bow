"use client";

import ExampleDemo from "./components/ExampleDemo";
import { Button } from "./components/Button";
import Card from "./components/Card";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="w-full scroll-smooth flex flex-col items-center">
      <div className="w-full min-h-screen bg-radial-[at_50%_50%] from-zinc-900 via-zinc-1000 to-background to-80% flex justify-center items-center px-4 pt-16">
  <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div className="text-center lg:text-left">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-green-400 via-teal-600 to-green-500 bg-clip-text text-transparent leading-snug"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        AI – charged Conversation Management Platform
      </motion.h2>

      <motion.p
        className="mt-3 text-gray-400 text-sm sm:text-base md:text-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Transform your customer interactions with our intelligent conversation management platform.
      </motion.p>

      <motion.div
        className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Link href={"https://bow.chat/register"}>
          <Button text="Request Demo" size="lg" varient="primary" />
        </Link>
        <Link href={"https://bow.chat/register"}>
          <Button text="Talk To Sales" size="lg" varient="secondary" />
        </Link>
      </motion.div>
    </div>

    <motion.div
      className="flex justify-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <ExampleDemo />
    </motion.div>
  </div>
</div>

      <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-br from-green-400 via-teal-600 to-green-500 bg-clip-text text-transparent"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="w-full max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                varient="secondary"
                heading="Manage WhatsApp groups"
                content="Streamline your communication and save time with BOW CMP's group scheduling feature. Whether you're planning events, sending reminders, or coordinating announcements, our intuitive platform makes scheduling for multiple groups a breeze."
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                varient="secondary"
                heading="Intelligent routing of conversations"
                content="Simplify your daily routine with BOW CMP's Automation Rules. Save time, enhance customer attention, and enjoy a streamlined workflow by letting automation handle repetitive tasks."
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                varient="secondary"
                heading="Quick Connect"
                content="Connect your agent WhatsApp inboxes to BOW CMP within 2 minutes by just scanning the QR code."
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                varient="secondary"
                heading="Secure data handling"
                content="BOW CMP handles your data in a shielded environment so that your data remains confidential and protected."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

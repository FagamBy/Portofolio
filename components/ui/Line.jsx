"use client"

import React from "react";
import { motion } from "framer-motion";

const Line = () => {
  return (
    <motion.div
      className="w-[115px] bg-[#808691] h-[2px]"
      initial={{ width: "0px" }}
      whileInView={{ width: "115px" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    ></motion.div>
  );
};

export default Line;

import React from "react";

const SectionSubheading = ({ children }: { children: React.ReactNode }) => {
  return <span className="block text-secondary uppercase font-popins font-medium mb-4">{children}</span>;
};

export default SectionSubheading;

import React from "react";

interface StoreTemplateProps {
  children: React.ReactNode;
}

const StoreTemplate: React.FC<StoreTemplateProps> = ({ children }) => {
  return <>{children}</>;
};

export default StoreTemplate;

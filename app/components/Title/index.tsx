import React from "react";

export const Title = ({
  title,
  styleClass,
}: {
  title?: string;
  styleClass?: string;
}) => <p className={`text-5xl font-bold ${styleClass}`}>{title}</p>;

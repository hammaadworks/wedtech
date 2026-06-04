import React from "react";
import { CoolMode } from "@/components/themes/cool/magicui/cool-mode";
import { SparklesText } from "@/components/themes/cool/magicui/sparkles-text";

type HeadingSparkleProps = {
  heading: string;
  description: string;
  sparklesCount?: number;
  centered?: boolean;
};

const HeadingSparkle: React.FC<HeadingSparkleProps> = ({
  heading,
  description,
  sparklesCount = 8,
  centered = true,
}) => {
  return (
    <div className={centered ? "text-center" : ""}>
      <CoolMode>
        <SparklesText sparklesCount={sparklesCount}>
          {heading}
        </SparklesText>
      </CoolMode>
      <p className="mt-2 mb-10 text-sm text-muted-text">{description}</p>
    </div>
  );
};

export default HeadingSparkle;

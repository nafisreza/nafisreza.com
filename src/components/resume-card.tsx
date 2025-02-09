"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  location?: string; // Add location property
  description?: any;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  location, // Add location property
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className="block cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out"
      onClick={handleClick}
    >
      <Card className="items-start justify-start">
      <div className="grid grid-cols-6 md:grid-cols-10 px-2 py-4 md:p-6">
      <div className="col-span-1 md:col-span-1">
          <Avatar className="border size-12 bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-3 md:col-span-7 items-start justify-start flex-col group ml-4 md:ml-0">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-base">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0",
                  )}
                />
              </h3>
            </div>
            {subtitle && <div className="font-sans text-[10px] sm:text-sm mt-2 md:mt-0">{subtitle}</div>}
          </CardHeader>

        </div>
        <div className="col-span-2 md:col-span-2 text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                <p className="text-xs md:text-sm">
                  {period}
                </p>
         
                <p className="text-[10px] md:text-sm">
                  {location}
                </p>
              </div>
      </div>

      {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`text-xs px-10 sm:text-sm ${isExpanded ? "mb-6" : ""}`}
            >
              <ul className="list-disc pl-5">
                {description.map((item:string, index:number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
      </Card>
    </div>
  );
};

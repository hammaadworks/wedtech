"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  MapPin,
  ChevronDown,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/themes/cool/ui/card";
import { Badge } from "@/components/themes/cool/ui/badge";
import { Button } from "@/components/themes/cool/ui/button";
// Avatar, AvatarFallback, AvatarImage are no longer needed
// ProgressBar is no longer needed
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/themes/cool/ui/tooltip";
import { useExpandable } from "@/hooks/use-expandable";

interface ProjectStatusCardProps {
  title: string;
  type: "nikah" | "valima";
  eventTime: string;
  venueImageUrl: string;
  venueGoogleMapsLink: string;
  venueDirectionsLink: string;
  dueDate: string;
}

export function ProjectStatusCard({
  title,
  type,
  eventTime,
  venueImageUrl,
  venueGoogleMapsLink,
  venueDirectionsLink,
  dueDate,
}: ProjectStatusCardProps) {
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, animatedHeight]);

  return (
    <Card
      className="w-full max-w-md cursor-pointer transition-all duration-300 hover:shadow-lg relative overflow-hidden"
      onClick={toggleExpand}
    >
      <Badge
        variant="secondary"
        className={
          type === "nikah"
            ? "bg-green-100 text-green-600 text-md absolute top-4 right-4 z-10"
            : "bg-blue-100 text-blue-600 text-md absolute top-4 right-4 z-10"
        }
      >
        {type === "nikah" ? "Nikah" : "Valima"}
      </Badge>

      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start w-full">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <ChevronDown
                    className="h-4 w-4 transition-transform duration-300"
                    style={{
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isExpanded ? "Collapse" : "Click to expand"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 font-medium">
              <span>Event Time</span>
              <span className="text-gray-800 font-semibold">{eventTime}</span>
            </div>
          </div>

          <motion.div
            style={{ height: animatedHeight }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div ref={contentRef}>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 pt-2"
                  >
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Date: {dueDate}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm flex items-center text-green-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        Parking
                      </h4>
                      <p className="text-sm text-gray-700">
                        Free parking available at the venue.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Venue Glimpse</h4>
                      <img
                        src={venueImageUrl || "https://placehold.co/400x200/cccccc/333333?text=Venue+Image"}
                        alt="Venue image"
                        className="w-full h-auto rounded-md object-cover shadow-sm"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/400x200/cccccc/333333?text=Venue+Image";
                          e.currentTarget.onerror = null;
                        }}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        A sneak peek of the beautiful venue.
                      </p>
                    </div>

                    {/* FIX: Removed asChild and use onClick for navigation */}
                    <div className="flex flex-col gap-2">
                      <Button
                        className="w-full"
                        onClick={() => window.open(venueGoogleMapsLink, "_blank")}
                      >
                        <img src="https://www.gstatic.com/images/branding/product/2x/maps_512dp.png" alt="Google Maps icon" className="h-4 w-4 mr-2" />
                        Check on Google Maps
                      </Button>
                      <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => window.open(venueDirectionsLink, "_blank")}
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex items-center justify-center w-full text-sm text-gray-600">
          <span>Looking forward to seeing you!</span>
        </div>
      </CardFooter>
    </Card>
  );
}
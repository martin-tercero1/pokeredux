import { useState } from "react";
import { LucideStar, LucideStarOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonIcon({ isFavorite, onClick }) {
  const [isHover, setIsHover] = useState(false)

  return isFavorite ? (
    <Button variant="outline" size="icon" onClick={onClick}>
      <LucideStarOff className="h-4 w-4" fill="yellow" />
    </Button>
  ) : (
    <Button
      variant="outline"
      size="icon"
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <LucideStar className="h-4 w-4" fill={isHover ? "yellow" : 'none'} />
    </Button>
  );
}
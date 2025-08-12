import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ProfileAvatarProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function ProfileAvatar({
  src = "https://via.placeholder.com/40x40/866DF4/FFFFFF?text=RG",
  alt = "Rajat Goel",
  className = "h-10 w-10",
}: ProfileAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="bg-portfolio-accent text-white font-medium">
        RG
      </AvatarFallback>
    </Avatar>
  );
}

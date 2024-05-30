import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export const UserAvatar = ({ name, src }) => (
  <Avatar>
    <AvatarImage alt={name} src={src} />
    <AvatarFallback>{name.split(' ').map(word => word[0]).join('')}</AvatarFallback>
  </Avatar>
);

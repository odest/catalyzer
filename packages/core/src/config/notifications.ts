import {
  Download,
  FileText,
  type LucideIcon,
  MessageCircle,
  Tag,
} from "lucide-react";

export interface NotificationItem {
  avatar?: string;
  description: string;
  icon?: LucideIcon;
  id: string;
  time: string;
  title: string;
  unread: boolean;
}

export const notifications: NotificationItem[] = [
  {
    id: "n-1",
    title: "loginTitle",
    description: "loginDescription",
    time: "loginTime",
    unread: true,
    avatar: "/avatar.svg",
  },
  {
    id: "n-2",
    title: "mentionTitle",
    description: "mentionDescription",
    time: "mentionTime",
    unread: true,
    icon: MessageCircle,
  },
  {
    id: "n-3",
    title: "reportTitle",
    description: "reportDescription",
    time: "reportTime",
    unread: true,
    icon: FileText,
  },
  {
    id: "n-4",
    title: "exportTitle",
    description: "exportDescription",
    time: "exportTime",
    unread: false,
    icon: Download,
  },
  {
    id: "n-5",
    title: "versionTitle",
    description: "versionDescription",
    time: "versionTime",
    unread: false,
    icon: Tag,
  },
];

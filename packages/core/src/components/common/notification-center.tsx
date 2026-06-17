"use client";

import {
  type NotificationItem,
  notifications,
} from "@workspace/core/config/notifications";
import { useTranslations } from "@workspace/i18n";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Bell } from "lucide-react";

export function NotificationCenter() {
  const t = useTranslations("NotificationCenter");
  const unreadNotifications = notifications.filter((item) => item.unread);
  const hasUnread = unreadNotifications.length > 0;

  return (
    <Popover>
      <PopoverTrigger asChild={true}>
        <Button
          aria-label="Notifications"
          className="relative"
          size="icon"
          type="button"
          variant="ghost"
        >
          <Bell className="size-4" />
          {hasUnread && (
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary" />
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="hidden w-96 gap-0 p-0 md:flex">
        <div className="flex items-center justify-between border-b p-4">
          <span className="font-semibold text-sm">{t("title")}</span>
          <Button className="h-auto p-0 text-xs" variant="link">
            {t("markAllRead")}
          </Button>
        </div>

        <Tabs className="gap-0" defaultValue="all">
          <div className="p-3">
            <TabsList className="w-full">
              <TabsTrigger value="all">{t("all")}</TabsTrigger>
              <TabsTrigger value="unread">{t("unread")}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <ScrollArea className="h-80 p-3 pt-0">
              <NotificationList items={notifications} />
            </ScrollArea>
          </TabsContent>

          <TabsContent value="unread">
            <ScrollArea className="h-80 p-3 pt-0">
              <NotificationList items={unreadNotifications} />
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="border-t px-3 py-2">
          <Button
            className="w-full justify-center text-xs"
            size="sm"
            variant="ghost"
          >
            {t("seeAll")}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function NotificationList({ items }: { items: NotificationItem[] }) {
  const t = useTranslations("NotificationCenter");

  if (!items.length) {
    return (
      <Empty className="rounded-md border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Bell />
          </EmptyMedia>
          <EmptyTitle>{t("emptyTitle")}</EmptyTitle>
          <EmptyDescription>{t("emptyDescription")}</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <button
          className="flex w-full items-start gap-2 rounded-md border p-2 text-left transition-colors hover:bg-muted/50"
          key={item.id}
          type="button"
        >
          <Avatar className="size-9 shrink-0">
            {item.avatar && <AvatarImage alt={item.title} src={item.avatar} />}
            <AvatarFallback className="bg-transparent">
              {item.icon ? (
                <item.icon className="size-4 text-muted-foreground" />
              ) : (
                <Bell className="size-4 text-muted-foreground" />
              )}
            </AvatarFallback>
          </Avatar>

          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <span
              className={`truncate text-sm ${
                item.unread
                  ? "font-medium text-foreground"
                  : "font-normal text-muted-foreground"
              }`}
            >
              {t(item.title)}
            </span>
            <p className="line-clamp-2 text-muted-foreground text-xs leading-snug">
              {t(item.description)}
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-3">
            <span className="text-muted-foreground text-xs">
              {t(item.time)}
            </span>
            {item.unread ? (
              <span className="size-2 rounded-full bg-primary" />
            ) : (
              <span className="size-2 rounded-full bg-transparent" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

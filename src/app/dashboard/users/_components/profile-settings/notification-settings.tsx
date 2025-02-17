"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export function NotificationSettings() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: "email",
      title: "Email Notifications",
      description:
        "Receive updates and information about Vegan Marketplace directly in your email",
      enabled: true,
    },
    {
      id: "sms",
      title: "SMS Notifications",
      description: "Receive important updates via SMS",
      enabled: false,
    },
  ]);

  const toggleNotification = (id: string) => {
    setSettings(
      settings.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting,
      ),
    );
  };

  return (
    <Card className="bg-white">
      <CardContent className="space-y-6 p-6">
        {settings.map((setting) => (
          <div
            key={setting.id}
            className="flex items-center justify-between space-x-4"
          >
            <div className="space-y-1">
              <Label htmlFor={setting.id} className="text-base">
                {setting.title}
              </Label>
              <p className="text-sm text-muted-foreground">
                {setting.description}
              </p>
            </div>
            <Switch
              id={setting.id}
              checked={setting.enabled}
              onCheckedChange={() => toggleNotification(setting.id)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

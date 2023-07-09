import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SettingsIcon from "@mui/icons-material/Settings";

export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon></HomeIcon>,
    link: "/home",
  },
  {
    title: "メール",
    icon: <MailIcon></MailIcon>,
    link: "/mail",
  },
  {
    title: "アナリティクス",
    icon: <AnalyticsIcon></AnalyticsIcon>,
    link: "/analytics",
  },
  {
    title: "友達追加",
    icon: <PersonAddIcon></PersonAddIcon>,
    link: "/friends",
  },
  {
    title: "お支払い設定",
    icon: <AddCardIcon></AddCardIcon>,
    link: "/payment",
  },
  {
    title: "アップロード",
    icon: <CloudUploadIcon></CloudUploadIcon>,
    link: "/upload",
  },
  {
    title: "詳細設定",
    icon: <SettingsIcon></SettingsIcon>,
    link: "/settings",
  },
];

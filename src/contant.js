import { sidebarImg } from "./assets/svg/sidebar/index";
import cricket from "./assets/svg/sidebar/cricket.svg";
import blackJack from "./assets/svg/sidebar/black-jack.svg";
import tennis from "./assets/svg/sidebar/tennis.svg";
import { casinoImages } from "./assets/svg/casino-games";
import { sportsImages } from "./assets/svg/sports-games";
import navImages from "./assets/svg/navbar";

export const menuData = {
  mainButtons: {
    title: "Main",
    buttons: [
      { label: "Casino", type: "secondary", icon: sidebarImg?.casino },
      { label: "Sports", type: "primary", icon: sidebarImg.sports },
    ],
  },
  accountButtons: {
    title: "",
    buttons: [
      { label: "Profile", icon: sidebarImg.profile, path: "/#" },
      { label: "Wallet", icon: sidebarImg.wallet, path: "/#" },
      { label: "Transaction history", icon: sidebarImg.history, path: "/#" },
      { label: "My Bets", icon: sidebarImg.bets, path: "/#" },
      { label: "Affiliate", icon: sidebarImg.affiliate, path: "/#" },
      {
        label: "Responsible Gaming",
        icon: sidebarImg.responsiveGaming,
        path: "/#",
      },
      { label: "Support", icon: sidebarImg.support, path: "/#" },
      { label: "Logout", icon: sidebarImg.logout, path: "/#" },
    ],
  },
  sportsButtons: {
    title: "All Sports",
    buttons: [
      { label: "Cricket", icon: sidebarImg.cricket, path: "/#" },
      { label: "Football", icon: sidebarImg.football, path: "/#" },
      { label: "Horse Racing", icon: sidebarImg.horseRacing, path: "/#" },
      { label: "Politics", icon: sidebarImg.politics, path: "/#" },
      { label: "Tennis", icon: sidebarImg.tennis, path: "/#" },
      { label: "F1 Race", icon: sidebarImg.f1Race, path: "/#" },
      { label: "Golf", icon: sidebarImg.golf, path: "/#" },
      { label: "Basketball", icon: sidebarImg.basketball, path: "/#" },
      { label: "Baseball", icon: sidebarImg.baseball, path: "/#" },
    ],
  },
  allCasinos: {
    title: "All Casinos",
    buttons: [
      { label: "Black jack", icon: sidebarImg.blackJack, path: "/#" },
      { label: "Roulette", icon: sidebarImg.roulette, path: "/#" },
      { label: "Poker", icon: sidebarImg.poker, path: "/#" },
      { label: "Bacarat", icon: sidebarImg.bacarat, path: "/#" },
      { label: "Deal or no deal", icon: sidebarImg.dealNoDeal, path: "/#" },
      { label: "Teen patti", icon: sidebarImg.teenPatti, path: "/#" },
      {
        label: "Texas hold em poker",
        icon: sidebarImg.texasHold,
        path: "/#",
      },
      { label: "Speed bacarrat", icon: sidebarImg.speedBacarate, path: "/#" },
    ],
  },
};

export const recentPlayed = [
  {
    label: "Cricket",
    icon: cricket,
  },
  {
    label: "Tennis",
    icon: tennis,
  },
  {
    label: "Black jack",
    icon: blackJack,
  },
  {
    label: "Cricket",
    icon: cricket,
  },
  {
    label: "Tennis",
    icon: tennis,
  },
  {
    label: "Black jack",
    icon: blackJack,
  },
  {
    label: "Cricket",
    icon: cricket,
  },
  {
    label: "Tennis",
    icon: tennis,
  },
  {
    label: "Black jack",
    icon: blackJack,
  },
];

export const casinoGames = [
  {
    icon: casinoImages?.taxesHoldEm,
  },
  {
    icon: casinoImages?.roullete,
  },
  {
    icon: casinoImages?.blackJack,
  },
  {
    icon: casinoImages?.superSpeedBaracat,
  },
  {
    icon: casinoImages?.dragonTiger,
  },
  {
    icon: casinoImages?.speedBlackJack,
  },
];
export const sportsGames = [
  {
    icon: sportsImages?.cricket,
  },
  {
    icon: sportsImages?.football,
  },
  {
    icon: sportsImages?.horseRacing,
  },
  {
    icon: sportsImages?.politcs,
  },
  {
    icon: sportsImages?.tennis,
  },
  {
    icon: sportsImages?.f1Racing,
  },
];

export const MbNavTabs = [
  {
    label: "Home",
    icon: navImages.home,
  },
  {
    label: "My Bets",
    icon: navImages.bets,
  },
  {
    label: "Casino",
    icon: navImages.casino,
  },
  {
    label: "Sports",
    icon: navImages.sports,
  },
  {
    label: "Settings",
    icon: navImages.setting,
  },
];

export const footerData = [
  {
    section: "Casino",
    links: [
      "Black Jack",
      "Roulette",
      "Poker",
      "Baccarat",
      "Deal or No Deal",
      "Speed Baccarat",
      "Teen Patti",
      "Texas Hold Em Poker",
    ],
  },
  {
    section: "Sports",
    links: [
      "Cricket",
      "Football",
      "Horse Racing",
      "Politics",
      "Tennis",
      "F1 Race",
      "Golf",
    ],
  },
  {
    section: "Company",
    links: [
      "Profile",
      "Wallet",
      "Transaction History",
      "Bets",
      "Affiliate",
      "Responsible Gaming",
      "Support",
      "Logout",
    ],
  },
  {
    section: "Legal",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Responsible Gambling",
      "Gamble Aware",
    ],
  },
  {
    section: "Support",
    links: ["Email Us", "Call us at +91-98100 98100"],
  },
];

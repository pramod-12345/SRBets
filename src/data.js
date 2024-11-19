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
      { label: "Casino", type: "secondary", icon: sidebarImg?.casino, path:'/#' },
      { label: "Sports", type: "primary", icon: sidebarImg.sports, path:'/sports-home' },
    ],
  },
  accountButtons: {
    title: "",
    buttons: [
      { label: "Profile", icon: sidebarImg.profile, path: "/#" },
      { label: "Wallet", icon: sidebarImg.wallet, path: "/#" },
      { label: "Transaction history", icon: sidebarImg.history, path: "/#" },
      { label: "My Bets", icon: sidebarImg.bets, path: "/my-bets" },
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
    title: "Cricket",
    number: "1254"
  },
  {
    icon: sportsImages?.football,
    title:"Football",
    number: "1253"
  },
  {
    icon: sportsImages?.horseRacing,
    title: "Horse Racing",
    number: "1253"
  },
  {
    icon: sportsImages?.politcs,
    title: "Politcs",
    number: "1253"
  },
  {
    icon: sportsImages?.tennis,
    title: "Tennis",
    number: "1253"
  },
  {
    icon: sportsImages?.f1Racing,
    title: "F1 race",
    number: "1253"
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

export const columns = [
  { header: "Game", key: "game" },
  { header: "User", key: "user" },
  { header: "Time", key: "time" },
  {
    header: "Bet Amount",
    key: "betAmount",
    render: (value, row) => (
      <div className="flex items-center space-x-2">
        {/* Conditionally render an icon based on bet amount type */}
        {row?.currency === "USD" ? (
          <span className="text-white">dollar</span>
        ) : (
          <span className="text-white">bitcoin</span>
        )}
        <span>{value}</span>
      </div>
    ),
  },
  { header: "Multiplier", key: "multiplier" },
  { header: "Payout", key: "payout" },
];

export const rows = [
  {
    game: "Teen Patti",
    user: "Rakesh007",
    time: "10:30 AM",
    betAmount: "2812.499859",
    multiplier: "2.00x",
    payout: "5624.99",
    currency: "USD",
  },
  {
    game: "Poker",
    user: "Ajay007",
    time: "10:30 AM",
    betAmount: "2812.499859",
    multiplier: "2.00x",
    payout: "5624.99",
    currency: "BTC",
  },
  {
    game: "Black Jack",
    user: "Deepak",
    time: "10:30 AM",
    betAmount: "2812.499859",
    multiplier: "2.00x",
    payout: "5624.99",
    currency: "USD",
  },
  {
    game: "Roulette",
    user: "Alexander",
    time: "10:30 AM",
    betAmount: "2812.499859",
    multiplier: "2.00x",
    payout: "5624.99",
    currency: "USD",
  },
  {
    game: "Deal or No Deal",
    user: "Sam Uncle",
    time: "10:30 AM",
    betAmount: "2812.499859",
    multiplier: "2.00x",
    payout: "5624.99",
    currency: "BTC",
  },
  {
    game: "Baccarat",
    user: "Samikska",
    time: "10:30 AM",
    betAmount: "2812.499859",
    multiplier: "2.00x",
    payout: "5624.99",
    currency: "USD",
  },
  {
    game: "Teen Patti",
    user: "Rajdeep",
    time: "10:30 AM",
    betAmount: "2812.499859",
    multiplier: "2.00x",
    payout: "5624.99",
    currency: "BTC",
  },
];

export const cardData = [
  {
    date: "12 Sep 2024 at 10:30PM",
    status: "WIN",
    match: "India vs Bangladesh",
    result: "India",
    odds: "1.24",
    betAmount: "10.00",
    payout: "240.00",
  },
  {
    date: "12 Sep 2024 at 10:30PM",
    status: "LOSS",
    match: "India vs Bangladesh",
    result: "India",
    odds: "1.24",
    betAmount: "10.00",
    payout: "0.00",
  },
  {
    date: "12 Sep 2024 at 10:30PM",
    status: "WIN",
    match: "Pakistan vs Australia",
    result: "Pakistan",
    odds: "2.00",
    betAmount: "20.00",
    payout: "400.00",
  },
  {
    date: "12 Sep 2024 at 10:30PM",
    status: "WIN",
    match: "India vs Bangladesh",
    result: "India",
    odds: "1.24",
    betAmount: "10.00",
    payout: "240.00",
  },
  {
    date: "12 Sep 2024 at 10:30PM",
    status: "LOSS",
    match: "India vs Bangladesh",
    result: "India",
    odds: "1.24",
    betAmount: "10.00",
    payout: "0.00",
  },
  {
    date: "12 Sep 2024 at 10:30PM",
    status: "WIN",
    match: "Pakistan vs Australia",
    result: "Pakistan",
    odds: "2.00",
    betAmount: "20.00",
    payout: "400.00",
  },
];

export const cricketItems = [
  { id: 1, label: "Cricket" },
  { id: 2, label: "Football" },
  { id: 3, label: "Basketball" },
];

export const numberItems = [
  { id: 1, label: "5" },
  { id: 2, label: "10" },
  { id: 3, label: "20" },
];

export const selectedBetItems = [
  { id: 1, label: "Settled Bet" },
  { id: 2, label: "Ongoing Bet" },
  { id: 3, label: "Cancelled Bet" },
];

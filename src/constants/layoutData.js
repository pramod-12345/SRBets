import { casinoImages } from "../assets/svg/casino-games";
import { sportsImages } from "../assets/svg/sports-games";
import {
    bannerImg1,
    bannerImg2,
    bannerImg3
} from "assets";

export const layoutJson = {
    "success": true,
    "timestamp": 1519296206,
    "layoutInfo": {
        "web": {
            "hideCasinoSection": false,
            "hideSportsSection": false,
            "hideBannerSection": false,
            "hideTopBetsTable": false,
            "hideNavigationBar": false
        },
        "mobile": {
            "hideCasinoSection": false,
            "hideSportsSection": false,
            "hideBannerSection": false,
            "hideTopBetsTable": true,
            "hideNavigationBar": true
        }
    },
    "layout": {
        "promoBanners": {
            "sectionTitle": "",
            "banners": [
                {
                    "id": "1",
                    "title": "",
                    "imageUrl": bannerImg1,
                    "link": "/about",
                    "hoverText": "Game"
                },
                {
                    "id": "2",
                    "title": "Casino",
                    "imageUrl": bannerImg2,
                    "link": "/casino",
                    "hoverText": "Casino"
                },
                {
                    "id": "3",
                    "title": "Sportsbook",
                    "imageUrl": bannerImg3,
                    "link": "/sportsbook",
                    "hoverText": "Sportsbook"
                }
            ]
        },
        "casinoSection": {
            "title": "Top 10 casino games",
            "scroll": "right",
            "featuredCasinoGames": [
                {
                    "id": "bj-1234",
                    "name": "BlackJack",
                    "imageUrl": casinoImages?.blackJack,
                    "link": "/bj/bj-123",
                    "position": 1,
                    "livePlaying": 126,
                    "category": "blackjack"
                },
                {
                    "id": "tp-1234",
                    "name": "Teen Patti",
                    "imageUrl": casinoImages?.roullete,
                    "link": "/tp/tp-123",
                    "position": 2,
                    "livePlaying": 2000,
                    "category": "roulette"
                }
            ]
        },
        "sportsSection": {
            "title": "Top 10 sports games",
            "scroll": "right",
            "featuredSportsGames": [
                {
                    "id": "bj-1234",
                    "name": "Cricket",
                    "imageUrl": sportsImages?.cricket,
                    "link": "/bj/bj-123",
                    "position": 1,
                    "category": "sports"
                },
                {
                    "id": "tp-1234",
                    "name": "Tennis",
                    "imageUrl": sportsImages?.tennis,
                    "link": "/tp/tp-123",
                    "position": 2,
                    "category": "sports"
                }
            ]
        }
    }
}

// Master Categories and 39 Photocard Templates
const PRESET_CATEGORIES = [
  {
    id: "fore",
    name: "포레스텔라",
    subtitle: "Forestella Photocard Collection",
    badge: "39종",
    icon: "✨",
    color: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    coverImage: "images/fore/fore1_미스티크 리스트 최최최최종 100.png",
    itemCount: 39,
    isAvailable: true
  },
  {
    id: "cat2",
    name: "카테고리 2",
    subtitle: "추후 추가 예정",
    badge: "준비중",
    icon: "🌟",
    color: "linear-gradient(135deg, #ec4899, #f43f5e)",
    coverImage: "",
    itemCount: 0,
    isAvailable: false
  },
  {
    id: "cat3",
    name: "카테고리 3",
    subtitle: "추후 추가 예정",
    badge: "준비중",
    icon: "💫",
    color: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    coverImage: "",
    itemCount: 0,
    isAvailable: false
  },
  {
    id: "cat4",
    name: "카테고리 4",
    subtitle: "추후 추가 예정",
    badge: "준비중",
    icon: "🍀",
    color: "linear-gradient(135deg, #10b981, #059669)",
    coverImage: "",
    itemCount: 0,
    isAvailable: false
  },
  {
    id: "cat5",
    name: "카테고리 5",
    subtitle: "추후 추가 예정",
    badge: "준비중",
    icon: "🪐",
    color: "linear-gradient(135deg, #f59e0b, #d97706)",
    coverImage: "",
    itemCount: 0,
    isAvailable: false
  }
];

const PRESET_TEMPLATES = [
  {
    "id": "fore1",
    "order": 1,
    "categoryId": "fore",
    "title": "fore1. 미스티크 리스트 최최최최종 100",
    "rawName": "미스티크 리스트 최최최최종 100",
    "tag": "기타",
    "image": "images/fore/fore1_미스티크 리스트 최최최최종 100.png",
    "cards": [
      {
        "id": "fore1_dvd_1",
        "name": "배두훈 (DVD)",
        "section": "디비디",
        "x": 7.8,
        "y": 49.3,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_dvd_2",
        "name": "강형호 (DVD)",
        "section": "디비디",
        "x": 29.7,
        "y": 49.3,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_dvd_3",
        "name": "조민규 (DVD)",
        "section": "디비디",
        "x": 51.65,
        "y": 49.3,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_dvd_4",
        "name": "고우림 (DVD)",
        "section": "디비디",
        "x": 73.65,
        "y": 49.3,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_kit_1",
        "name": "배두훈 (키트)",
        "section": "키트",
        "x": 7.8,
        "y": 75.6,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_kit_2",
        "name": "강형호 (키트)",
        "section": "키트",
        "x": 29.7,
        "y": 75.6,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_kit_3",
        "name": "조민규 (키트)",
        "section": "키트",
        "x": 51.65,
        "y": 75.6,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_kit_4",
        "name": "고우림 (키트)",
        "section": "키트",
        "x": 73.65,
        "y": 75.6,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore2",
    "order": 2,
    "categoryId": "fore",
    "title": "fore2. 더포레스텔라 리스트 최촤종 150",
    "rawName": "더포레스텔라 리스트 최촤종 150",
    "tag": "기타",
    "image": "images/fore/fore2_더포레스텔라 리스트 최촤종 150.png",
    "cards": [
      {
        "id": "fore2_1",
        "name": "배두훈",
        "section": "포토카드",
        "x": 7.91,
        "y": 48.86,
        "w": 18.41,
        "h": 42.51,
        "radius": 12
      },
      {
        "id": "fore2_2",
        "name": "강형호",
        "section": "포토카드",
        "x": 29.81,
        "y": 48.86,
        "w": 18.41,
        "h": 42.51,
        "radius": 12
      },
      {
        "id": "fore2_3",
        "name": "조민규",
        "section": "포토카드",
        "x": 51.78,
        "y": 48.86,
        "w": 18.41,
        "h": 42.51,
        "radius": 12
      },
      {
        "id": "fore2_4",
        "name": "고우림",
        "section": "포토카드",
        "x": 73.69,
        "y": 48.86,
        "w": 18.41,
        "h": 42.51,
        "radius": 12
      }
    ]
  },
  {
    "id": "fore3",
    "order": 3,
    "categoryId": "fore",
    "title": "fore3. 월드트리 앨포",
    "rawName": "월드트리 앨포",
    "tag": "앨범",
    "image": "images/fore/fore3_월드트리_앨포_리스트_최최종_100.webp",
    "cards": [
      {
        "id": "fore3_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore3_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore3_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore3_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore3_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore3_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore3_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore3_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore4",
    "order": 4,
    "categoryId": "fore",
    "title": "fore4. 월드트리 앨범 특전",
    "rawName": "월드트리 앨범 특전",
    "tag": "앨범",
    "image": "images/fore/fore4_월드트리_앨범_특전_리스트_최최최최종_80.webp",
    "cards": [
      {
        "id": "fore4_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore4_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore4_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore4_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore4_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore4_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore4_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore4_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore5",
    "order": 5,
    "categoryId": "fore",
    "title": "fore5. 월드트리 엠디",
    "rawName": "월드트리 엠디",
    "tag": "콘서트/MD",
    "image": "images/fore/fore5_월드트리_엠디_리스트_초최최종_90.webp",
    "cards": [
      {
        "id": "fore5_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore5_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore5_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore5_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore5_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore5_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore5_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore5_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore6",
    "order": 6,
    "categoryId": "fore",
    "title": "fore6. 월드트리 엘피",
    "rawName": "월드트리 엘피",
    "tag": "앨범",
    "image": "images/fore/fore6_월드트리_엘피_리스트__최종_150.webp",
    "cards": [
      {
        "id": "fore6_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore6_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore6_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore6_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore6_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore6_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore6_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore6_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore7",
    "order": 7,
    "categoryId": "fore",
    "title": "fore7. 유토피아 앨범",
    "rawName": "유토피아 앨범",
    "tag": "앨범",
    "image": "images/fore/fore7_유토피아_앨범_리스트_최종_100.webp",
    "cards": [
      {
        "id": "fore7_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore7_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore7_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore7_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore7_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore7_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore7_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore7_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore8",
    "order": 8,
    "categoryId": "fore",
    "title": "fore8. 유토피아 특전",
    "rawName": "유토피아 특전",
    "tag": "특전",
    "image": "images/fore/fore8_유토피아_특전_리스트_최종_100.webp",
    "cards": [
      {
        "id": "fore8_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore8_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore8_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore8_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore8_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore8_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore8_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore8_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore9",
    "order": 9,
    "categoryId": "fore",
    "title": "fore9. 더라이트최종",
    "rawName": "더라이트최종",
    "tag": "콘서트/MD",
    "image": "images/fore/fore9_더라이트_chl최종_50.webp",
    "cards": [
      {
        "id": "fore9_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore9_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore9_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore9_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore9_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore9_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore9_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore9_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore10",
    "order": 10,
    "categoryId": "fore",
    "title": "fore10. 쿨 엠디",
    "rawName": "쿨 엠디",
    "tag": "콘서트/MD",
    "image": "images/fore/fore10_쿨_엠디_리스트_최종_50.webp",
    "cards": [
      {
        "id": "fore10_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore10_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore10_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore10_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore10_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore10_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore10_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore10_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore11",
    "order": 11,
    "categoryId": "fore",
    "title": "fore11. 포레페 브이알",
    "rawName": "포레페 브이알",
    "tag": "콘서트/MD",
    "image": "images/fore/fore11_포레페_브이알_리스트_최종_150.webp",
    "cards": [
      {
        "id": "fore11_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore11_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore11_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore11_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore11_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore11_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore11_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore11_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore12",
    "order": 12,
    "categoryId": "fore",
    "title": "fore12. 언피니쉬드 앨범 특전최종",
    "rawName": "언피니쉬드 앨범 특전최종",
    "tag": "앨범",
    "image": "images/fore/fore12_언피니쉬드_앨범_특전_chl최종_리스트_100.webp",
    "cards": [
      {
        "id": "fore12_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore12_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore12_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore12_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore12_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore12_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore12_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore12_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore13",
    "order": 13,
    "categoryId": "fore",
    "title": "fore13. 언피니쉬드 앨범 특전",
    "rawName": "언피니쉬드 앨범 특전",
    "tag": "앨범",
    "image": "images/fore/fore13_언피니쉬드_앨범_특전_최최최종_리스트_72.webp",
    "cards": [
      {
        "id": "fore13_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore13_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore13_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore13_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore13_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore13_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore13_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore13_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore14",
    "order": 14,
    "categoryId": "fore",
    "title": "fore14. 엪엔엘",
    "rawName": "엪엔엘",
    "tag": "기타",
    "image": "images/fore/fore14_엪엔엘_리스트_최최최종_100.webp",
    "cards": [
      {
        "id": "fore14_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore14_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore14_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore14_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore14_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore14_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore14_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore14_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore15",
    "order": 15,
    "categoryId": "fore",
    "title": "fore15. 일루셔니스트",
    "rawName": "일루셔니스트",
    "tag": "기타",
    "image": "images/fore/fore15_일루셔니스트_리스트_최최종_100.webp",
    "cards": [
      {
        "id": "fore15_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore15_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore15_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore15_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore15_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore15_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore15_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore15_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore16",
    "order": 16,
    "categoryId": "fore",
    "title": "fore16. 에브리띵",
    "rawName": "에브리띵",
    "tag": "기타",
    "image": "images/fore/fore16_에브리띵_리스트_최최종_100.webp",
    "cards": [
      {
        "id": "fore16_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore16_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore16_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore16_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore16_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore16_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore16_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore16_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore17",
    "order": 17,
    "categoryId": "fore",
    "title": "fore17. 더웨이브",
    "rawName": "더웨이브",
    "tag": "콘서트/MD",
    "image": "images/fore/fore17_더웨이브_리스트_최최종_75.webp",
    "cards": [
      {
        "id": "fore17_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore17_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore17_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore17_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore17_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore17_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore17_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore17_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore18",
    "order": 18,
    "categoryId": "fore",
    "title": "fore18. 더웨이브 앙콘",
    "rawName": "더웨이브 앙콘",
    "tag": "콘서트/MD",
    "image": "images/fore/fore18_더웨이브_앙콘_리스트_최최종_75.webp",
    "cards": [
      {
        "id": "fore18_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore18_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore18_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore18_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore18_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore18_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore18_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore18_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore19",
    "order": 19,
    "categoryId": "fore",
    "title": "fore19. 시네마",
    "rawName": "시네마",
    "tag": "기타",
    "image": "images/fore/fore19_시네마_리스트_최최종_150.webp",
    "cards": [
      {
        "id": "fore19_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore19_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore19_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore19_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore19_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore19_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore19_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore19_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore20",
    "order": 20,
    "categoryId": "fore",
    "title": "fore20. 더레거시 포카",
    "rawName": "더레거시 포카",
    "tag": "콘서트/MD",
    "image": "images/fore/fore20_더레거시_포카_리스트_최최종_100.webp",
    "cards": [
      {
        "id": "fore20_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore20_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore20_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore20_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore20_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore20_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore20_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore20_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore21",
    "order": 21,
    "categoryId": "fore",
    "title": "fore21. 더레거시 앨범",
    "rawName": "더레거시 앨범",
    "tag": "앨범",
    "image": "images/fore/fore21_더레거시_앨범_리스트_최최최종_80.webp",
    "cards": [
      {
        "id": "fore21_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore21_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore21_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore21_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore21_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore21_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore21_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore21_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore22",
    "order": 22,
    "categoryId": "fore",
    "title": "fore22. 더레거시 특전",
    "rawName": "더레거시 특전",
    "tag": "특전",
    "image": "images/fore/fore22_더레거시_특전_리스트_최최최최종_72.webp",
    "cards": [
      {
        "id": "fore22_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore22_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore22_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore22_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore22_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore22_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore22_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore22_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore23",
    "order": 23,
    "categoryId": "fore",
    "title": "fore23. 더레거시 심포니 엠디",
    "rawName": "더레거시 심포니 엠디",
    "tag": "콘서트/MD",
    "image": "images/fore/fore23_더레거시_심포니_엠디_리스트_최종_100.webp",
    "cards": [
      {
        "id": "fore23_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore23_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore23_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore23_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore23_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore23_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore23_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore23_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore24",
    "order": 24,
    "categoryId": "fore",
    "title": "fore24. 더레거시 앙콘 엠디",
    "rawName": "더레거시 앙콘 엠디",
    "tag": "콘서트/MD",
    "image": "images/fore/fore24_더레거시_앙콘_엠디_리스트_150.webp",
    "cards": [
      {
        "id": "fore24_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore24_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore24_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore24_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore24_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore24_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore24_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore24_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore25",
    "order": 25,
    "categoryId": "fore",
    "title": "fore25. 응원봉",
    "rawName": "응원봉",
    "tag": "콘서트/MD",
    "image": "images/fore/fore25_응원봉_리스트_최최종_150.webp",
    "cards": [
      {
        "id": "fore25_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore25_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore25_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore25_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore25_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore25_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore25_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore25_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore26",
    "order": 26,
    "categoryId": "fore",
    "title": "fore26. 포레시피",
    "rawName": "포레시피",
    "tag": "기타",
    "image": "images/fore/fore26_포레시피_리스트_최최최최종_100.webp",
    "cards": [
      {
        "id": "fore26_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore26_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore26_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore26_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore26_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore26_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore26_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore26_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore27",
    "order": 27,
    "categoryId": "fore",
    "title": "fore27. 운명방정식",
    "rawName": "운명방정식",
    "tag": "기타",
    "image": "images/fore/fore27_운명방정식_최최종_150.webp",
    "cards": [
      {
        "id": "fore27_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore27_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore27_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore27_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore27_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore27_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore27_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore27_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore28",
    "order": 28,
    "categoryId": "fore",
    "title": "fore28. 21-22 더로얄",
    "rawName": "21-22 더로얄",
    "tag": "콘서트/MD",
    "image": "images/fore/fore28_21-22_더로얄_리스트_최최최종_100.webp",
    "cards": [
      {
        "id": "fore28_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore28_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore28_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore28_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore28_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore28_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore28_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore28_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore29",
    "order": 29,
    "categoryId": "fore",
    "title": "fore29. 더로얄21-22 디비디",
    "rawName": "더로얄21-22 디비디",
    "tag": "콘서트/MD",
    "image": "images/fore/fore29_더로얄21-22_디비디_리스트_최종_150.webp",
    "cards": [
      {
        "id": "fore29_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore29_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore29_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore29_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore29_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore29_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore29_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore29_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore30",
    "order": 30,
    "categoryId": "fore",
    "title": "fore30. 22-23 더로얄",
    "rawName": "22-23 더로얄",
    "tag": "콘서트/MD",
    "image": "images/fore/fore30_22-23_더로얄_리스트_최최종_72.webp",
    "cards": [
      {
        "id": "fore30_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore30_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore30_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore30_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore30_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore30_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore30_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore30_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore31",
    "order": 31,
    "categoryId": "fore",
    "title": "fore31. 1기 키트",
    "rawName": "1기 키트",
    "tag": "키트",
    "image": "images/fore/fore31_1기_키트_리스트_최최최종_200.webp",
    "cards": [
      {
        "id": "fore31_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore31_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore31_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore31_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore31_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore31_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore31_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore31_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore32",
    "order": 32,
    "categoryId": "fore",
    "title": "fore32. 2기 키트",
    "rawName": "2기 키트",
    "tag": "키트",
    "image": "images/fore/fore32_2기_키트_리스트_최최종_100.webp",
    "cards": [
      {
        "id": "fore32_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore32_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore32_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore32_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore32_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore32_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore32_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore32_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore33",
    "order": 33,
    "categoryId": "fore",
    "title": "fore33. 2.5기 키트",
    "rawName": "2.5기 키트",
    "tag": "키트",
    "image": "images/fore/fore33_2.5기_키트_리스트_최최종_150.webp",
    "cards": [
      {
        "id": "fore33_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore33_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore33_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore33_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore33_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore33_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore33_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore33_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore34",
    "order": 34,
    "categoryId": "fore",
    "title": "fore34. 3기 키트",
    "rawName": "3기 키트",
    "tag": "키트",
    "image": "images/fore/fore34_3기_키트_리스트_최최종_150.webp",
    "cards": [
      {
        "id": "fore34_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore34_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore34_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore34_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore34_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore34_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore34_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore34_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore35",
    "order": 35,
    "categoryId": "fore",
    "title": "fore35. 2022 시그 포레스트",
    "rawName": "2022 시그 포레스트",
    "tag": "시그",
    "image": "images/fore/fore35_2022_시그_포레스트_리스트_최최종_100.webp",
    "cards": [
      {
        "id": "fore35_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore35_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore35_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore35_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore35_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore35_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore35_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore35_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore36",
    "order": 36,
    "categoryId": "fore",
    "title": "fore36. 2022 시그 스텔라",
    "rawName": "2022 시그 스텔라",
    "tag": "시그",
    "image": "images/fore/fore36_2022_시그_스텔라_리스트_최최종_100.webp",
    "cards": [
      {
        "id": "fore36_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore36_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore36_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore36_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore36_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore36_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore36_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore36_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore37",
    "order": 37,
    "categoryId": "fore",
    "title": "fore37. 2022 시그 특전",
    "rawName": "2022 시그 특전",
    "tag": "시그",
    "image": "images/fore/fore37_2022_시그_특전_리스트_최최최종_100.webp",
    "cards": [
      {
        "id": "fore37_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore37_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore37_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore37_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore37_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore37_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore37_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore37_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore38",
    "order": 38,
    "categoryId": "fore",
    "title": "fore38. 2023 시그",
    "rawName": "2023 시그",
    "tag": "시그",
    "image": "images/fore/fore38_2023_시그_리스트_최종_100.webp",
    "cards": [
      {
        "id": "fore38_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore38_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore38_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore38_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore38_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore38_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore38_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore38_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore39",
    "order": 39,
    "categoryId": "fore",
    "title": "fore39. 24-25 시그",
    "rawName": "24-25 시그",
    "tag": "시그",
    "image": "images/fore/fore39_24-25_시그_리스트_최종_72.webp",
    "cards": [
      {
        "id": "fore39_1",
        "name": "포카 1",
        "section": "줄 1",
        "x": 7.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore39_2",
        "name": "포카 2",
        "section": "줄 1",
        "x": 29.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore39_3",
        "name": "포카 3",
        "section": "줄 1",
        "x": 51.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore39_4",
        "name": "포카 4",
        "section": "줄 1",
        "x": 73.8,
        "y": 48,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore39_5",
        "name": "포카 5",
        "section": "줄 2",
        "x": 7.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore39_6",
        "name": "포카 6",
        "section": "줄 2",
        "x": 29.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore39_7",
        "name": "포카 7",
        "section": "줄 2",
        "x": 51.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      },
      {
        "id": "fore39_8",
        "name": "포카 8",
        "section": "줄 2",
        "x": 73.8,
        "y": 73.5,
        "w": 18.5,
        "h": 22,
        "radius": 10
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.PRESET_CATEGORIES = PRESET_CATEGORIES;
  window.PRESET_TEMPLATES = PRESET_TEMPLATES;
}
if (typeof module !== "undefined") {
  module.exports = { PRESET_CATEGORIES, PRESET_TEMPLATES };
}

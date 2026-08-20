// Master Categories and 39 Photocard Templates with Exact Card Regions
const PRESET_CATEGORIES = [
  {
    "id": "fore",
    "name": "포레스텔라",
    "subtitle": "Forestella Photocard Collection",
    "badge": "39종",
    "icon": "✨",
    "color": "linear-gradient(135deg, #6366f1, #8b5cf6)",
    "coverImage": "images/fore/fore1_미스티크 리스트 최최최최종 100.png",
    "itemCount": 39,
    "isAvailable": true
  },
  {
    "id": "cat2",
    "name": "카테고리 2",
    "subtitle": "추후 추가 예정",
    "badge": "준비중",
    "icon": "🌟",
    "color": "linear-gradient(135deg, #ec4899, #f43f5e)",
    "coverImage": "",
    "itemCount": 0,
    "isAvailable": false
  },
  {
    "id": "cat3",
    "name": "카테고리 3",
    "subtitle": "추후 추가 예정",
    "badge": "준비중",
    "icon": "💫",
    "color": "linear-gradient(135deg, #3b82f6, #06b6d4)",
    "coverImage": "",
    "itemCount": 0,
    "isAvailable": false
  },
  {
    "id": "cat4",
    "name": "카테고리 4",
    "subtitle": "추후 추가 예정",
    "badge": "준비중",
    "icon": "🍀",
    "color": "linear-gradient(135deg, #10b981, #059669)",
    "coverImage": "",
    "itemCount": 0,
    "isAvailable": false
  },
  {
    "id": "cat5",
    "name": "카테고리 5",
    "subtitle": "추후 추가 예정",
    "badge": "준비중",
    "icon": "🪐",
    "color": "linear-gradient(135deg, #f59e0b, #d97706)",
    "coverImage": "",
    "itemCount": 0,
    "isAvailable": false
  }
];

const PRESET_TEMPLATES = [
  {
    "id": "fore1",
    "order": 1,
    "categoryId": "fore",
    "title": "fore1. 미스티크",
    "rawName": "미스티크",
    "tag": "콘서트/MD",
    "image": "images/fore/fore1_미스티크 리스트 최최최최종 100.png",
    "cards": [
      {
        "id": "fore1_dvd_1",
        "name": "배두훈 (디비디)",
        "section": "디비디",
        "x": 7.8,
        "y": 49.3,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_dvd_2",
        "name": "강형호 (디비디)",
        "section": "디비디",
        "x": 29.7,
        "y": 49.3,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_dvd_3",
        "name": "조민규 (디비디)",
        "section": "디비디",
        "x": 51.6,
        "y": 49.3,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_dvd_4",
        "name": "고우림 (디비디)",
        "section": "디비디",
        "x": 73.5,
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
        "x": 51.6,
        "y": 75.6,
        "w": 18.55,
        "h": 21.6,
        "radius": 10
      },
      {
        "id": "fore1_kit_4",
        "name": "고우림 (키트)",
        "section": "키트",
        "x": 73.5,
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
    "title": "fore2. 더포레스텔라",
    "rawName": "더포레스텔라",
    "tag": "기타",
    "image": "images/fore/fore2_더포레스텔라 리스트 최촤종 150.png",
    "cards": [
      {
        "id": "fore2_1",
        "name": "배두훈 (포토카드)",
        "section": "포토카드",
        "x": 7.91,
        "y": 48.86,
        "w": 18.41,
        "h": 42.51,
        "radius": 12
      },
      {
        "id": "fore2_2",
        "name": "강형호 (포토카드)",
        "section": "포토카드",
        "x": 29.87,
        "y": 48.86,
        "w": 18.41,
        "h": 42.51,
        "radius": 12
      },
      {
        "id": "fore2_3",
        "name": "조민규 (포토카드)",
        "section": "포토카드",
        "x": 51.83,
        "y": 48.86,
        "w": 18.41,
        "h": 42.51,
        "radius": 12
      },
      {
        "id": "fore2_4",
        "name": "고우림 (포토카드)",
        "section": "포토카드",
        "x": 73.79,
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
        "name": "배두훈 (Moonlight ver. A)",
        "section": "Moonlight ver. A",
        "x": 4.21,
        "y": 35.07,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_2",
        "name": "강형호 (Moonlight ver. A)",
        "section": "Moonlight ver. A",
        "x": 21.59,
        "y": 35.07,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_3",
        "name": "조민규 (Moonlight ver. A)",
        "section": "Moonlight ver. A",
        "x": 38.97,
        "y": 35.07,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_4",
        "name": "고우림 (Moonlight ver. A)",
        "section": "Moonlight ver. A",
        "x": 56.35,
        "y": 35.07,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_5",
        "name": "단체 (Moonlight ver. A)",
        "section": "Moonlight ver. A",
        "x": 73.4,
        "y": 40.06,
        "w": 22.53,
        "h": 9.74,
        "radius": 10
      },
      {
        "id": "fore3_6",
        "name": "배두훈 (Moonlight ver. B)",
        "section": "Moonlight ver. B",
        "x": 4.21,
        "y": 49.86,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_7",
        "name": "강형호 (Moonlight ver. B)",
        "section": "Moonlight ver. B",
        "x": 20.59,
        "y": 49.86,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_8",
        "name": "조민규 (Moonlight ver. B)",
        "section": "Moonlight ver. B",
        "x": 38.97,
        "y": 49.86,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_9",
        "name": "고우림 (Moonlight ver. B)",
        "section": "Moonlight ver. B",
        "x": 56.35,
        "y": 49.86,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_10",
        "name": "단체 (Moonlight ver. B)",
        "section": "Moonlight ver. B",
        "x": 73.4,
        "y": 54.85,
        "w": 22.53,
        "h": 9.74,
        "radius": 10
      },
      {
        "id": "fore3_11",
        "name": "배두훈 (Sunlight ver. A)",
        "section": "Sunlight ver. A",
        "x": 4.21,
        "y": 69.01,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_12",
        "name": "강형호 (Sunlight ver. A)",
        "section": "Sunlight ver. A",
        "x": 21.59,
        "y": 69.01,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_13",
        "name": "조민규 (Sunlight ver. A)",
        "section": "Sunlight ver. A",
        "x": 38.97,
        "y": 69.01,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_14",
        "name": "고우림 (Sunlight ver. A)",
        "section": "Sunlight ver. A",
        "x": 56.35,
        "y": 69.01,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_15",
        "name": "단체 (Sunlight ver. A)",
        "section": "Sunlight ver. A",
        "x": 73.4,
        "y": 74,
        "w": 22.53,
        "h": 9.74,
        "radius": 10
      },
      {
        "id": "fore3_16",
        "name": "배두훈 (Sunlight ver. B)",
        "section": "Sunlight ver. B",
        "x": 4.21,
        "y": 83.8,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_17",
        "name": "강형호 (Sunlight ver. B)",
        "section": "Sunlight ver. B",
        "x": 21.59,
        "y": 83.8,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_18",
        "name": "조민규 (Sunlight ver. B)",
        "section": "Sunlight ver. B",
        "x": 38.97,
        "y": 83.8,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_19",
        "name": "고우림 (Sunlight ver. B)",
        "section": "Sunlight ver. B",
        "x": 56.35,
        "y": 83.8,
        "w": 14.37,
        "h": 14.73,
        "radius": 10
      },
      {
        "id": "fore3_20",
        "name": "단체 (Sunlight ver. B)",
        "section": "Sunlight ver. B",
        "x": 73.4,
        "y": 88.79,
        "w": 22.53,
        "h": 9.74,
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
    "tag": "특전",
    "image": "images/fore/fore4_월드트리_앨범_특전_리스트_최최최최종_80.webp",
    "cards": [
      {
        "id": "fore4_1",
        "name": "배두훈 (폴라로이드 Moonlight A)",
        "section": "폴라로이드 Moonlight A",
        "x": 2,
        "y": 32.8,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_2",
        "name": "강형호 (폴라로이드 Moonlight A)",
        "section": "폴라로이드 Moonlight A",
        "x": 10.8,
        "y": 32.8,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_3",
        "name": "조민규 (폴라로이드 Moonlight A)",
        "section": "폴라로이드 Moonlight A",
        "x": 19.6,
        "y": 32.8,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_4",
        "name": "고우림 (폴라로이드 Moonlight A)",
        "section": "폴라로이드 Moonlight A",
        "x": 28.4,
        "y": 32.8,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_5",
        "name": "단체 (폴라로이드 Moonlight A)",
        "section": "폴라로이드 Moonlight A",
        "x": 37.5,
        "y": 38,
        "w": 11.2,
        "h": 10,
        "radius": 6
      },
      {
        "id": "fore4_6",
        "name": "배두훈 (폴라로이드 Moonlight B)",
        "section": "폴라로이드 Moonlight B",
        "x": 2,
        "y": 49,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_7",
        "name": "강형호 (폴라로이드 Moonlight B)",
        "section": "폴라로이드 Moonlight B",
        "x": 10.8,
        "y": 49,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_8",
        "name": "조민규 (폴라로이드 Moonlight B)",
        "section": "폴라로이드 Moonlight B",
        "x": 19.6,
        "y": 49,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_9",
        "name": "고우림 (폴라로이드 Moonlight B)",
        "section": "폴라로이드 Moonlight B",
        "x": 28.4,
        "y": 49,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_10",
        "name": "단체 (폴라로이드 Moonlight B)",
        "section": "폴라로이드 Moonlight B",
        "x": 37.5,
        "y": 54.8,
        "w": 11.2,
        "h": 10,
        "radius": 6
      },
      {
        "id": "fore4_11",
        "name": "배두훈 (폴라로이드 Sunlight A)",
        "section": "폴라로이드 Sunlight A",
        "x": 2,
        "y": 68.5,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_12",
        "name": "강형호 (폴라로이드 Sunlight A)",
        "section": "폴라로이드 Sunlight A",
        "x": 10.8,
        "y": 68.5,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_13",
        "name": "조민규 (폴라로이드 Sunlight A)",
        "section": "폴라로이드 Sunlight A",
        "x": 19.6,
        "y": 68.5,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_14",
        "name": "고우림 (폴라로이드 Sunlight A)",
        "section": "폴라로이드 Sunlight A",
        "x": 28.4,
        "y": 68.5,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_15",
        "name": "단체 (폴라로이드 Sunlight A)",
        "section": "폴라로이드 Sunlight A",
        "x": 37.5,
        "y": 68.8,
        "w": 11.2,
        "h": 10,
        "radius": 6
      },
      {
        "id": "fore4_16",
        "name": "배두훈 (폴라로이드 Sunlight B)",
        "section": "폴라로이드 Sunlight B",
        "x": 2,
        "y": 83.2,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_17",
        "name": "강형호 (폴라로이드 Sunlight B)",
        "section": "폴라로이드 Sunlight B",
        "x": 10.8,
        "y": 83.2,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_18",
        "name": "조민규 (폴라로이드 Sunlight B)",
        "section": "폴라로이드 Sunlight B",
        "x": 19.6,
        "y": 83.2,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_19",
        "name": "고우림 (폴라로이드 Sunlight B)",
        "section": "폴라로이드 Sunlight B",
        "x": 28.4,
        "y": 83.2,
        "w": 7,
        "h": 15.2,
        "radius": 6
      },
      {
        "id": "fore4_20",
        "name": "단체 (폴라로이드 Sunlight B)",
        "section": "폴라로이드 Sunlight B",
        "x": 37.5,
        "y": 88,
        "w": 11.2,
        "h": 10,
        "radius": 6
      },
      {
        "id": "fore4_21",
        "name": "배두훈 (메이크스타 예판)",
        "section": "메이크스타 예판",
        "x": 51,
        "y": 8.5,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_22",
        "name": "강형호 (메이크스타 예판)",
        "section": "메이크스타 예판",
        "x": 59.9,
        "y": 8.5,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_23",
        "name": "조민규 (메이크스타 예판)",
        "section": "메이크스타 예판",
        "x": 68.8,
        "y": 8.5,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_24",
        "name": "고우림 (메이크스타 예판)",
        "section": "메이크스타 예판",
        "x": 77.7,
        "y": 8.5,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_25",
        "name": "배두훈 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 51,
        "y": 27.2,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_26",
        "name": "강형호 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 59.9,
        "y": 27.2,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_27",
        "name": "조민규 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 68.8,
        "y": 27.2,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_28",
        "name": "고우림 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 77.7,
        "y": 27.2,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_29",
        "name": "단체 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 86.6,
        "y": 29.7,
        "w": 11.5,
        "h": 9.5,
        "radius": 8
      },
      {
        "id": "fore4_30",
        "name": "배두훈 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 51,
        "y": 45.6,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_31",
        "name": "강형호 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 59.9,
        "y": 45.6,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_32",
        "name": "조민규 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 68.8,
        "y": 45.6,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_33",
        "name": "고우림 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 77.7,
        "y": 45.6,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_34",
        "name": "단체 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 86.6,
        "y": 48.1,
        "w": 11.5,
        "h": 9.5,
        "radius": 8
      },
      {
        "id": "fore4_35",
        "name": "배두훈 (위드뮤 팬싸)",
        "section": "위드뮤 팬싸",
        "x": 51,
        "y": 64,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_36",
        "name": "강형호 (위드뮤 팬싸)",
        "section": "위드뮤 팬싸",
        "x": 59.9,
        "y": 64,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_37",
        "name": "조민규 (위드뮤 팬싸)",
        "section": "위드뮤 팬싸",
        "x": 68.8,
        "y": 64,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_38",
        "name": "고우림 (위드뮤 팬싸)",
        "section": "위드뮤 팬싸",
        "x": 77.7,
        "y": 64,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_39",
        "name": "배두훈 (애플뮤직 팬싸)",
        "section": "애플뮤직 팬싸",
        "x": 51,
        "y": 82.8,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_40",
        "name": "강형호 (애플뮤직 팬싸)",
        "section": "애플뮤직 팬싸",
        "x": 59.9,
        "y": 82.8,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_41",
        "name": "조민규 (애플뮤직 팬싸)",
        "section": "애플뮤직 팬싸",
        "x": 68.8,
        "y": 82.8,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_42",
        "name": "고우림 (애플뮤직 팬싸)",
        "section": "애플뮤직 팬싸",
        "x": 77.7,
        "y": 82.8,
        "w": 7.5,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore4_43",
        "name": "단체 (애플뮤직 팬싸)",
        "section": "애플뮤직 팬싸",
        "x": 86.6,
        "y": 85.3,
        "w": 11.5,
        "h": 9.5,
        "radius": 8
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
        "name": "배두훈 (응원봉 파우치)",
        "section": "응원봉 파우치",
        "x": 4.2,
        "y": 26.2,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_2",
        "name": "강형호 (응원봉 파우치)",
        "section": "응원봉 파우치",
        "x": 21.5,
        "y": 26.2,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_3",
        "name": "조민규 (응원봉 파우치)",
        "section": "응원봉 파우치",
        "x": 38.8,
        "y": 26.2,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_4",
        "name": "고우림 (응원봉 파우치)",
        "section": "응원봉 파우치",
        "x": 56.1,
        "y": 26.2,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_5",
        "name": "방석 (단체)",
        "section": "방석",
        "x": 73.4,
        "y": 29.8,
        "w": 22.5,
        "h": 6.8,
        "radius": 8
      },
      {
        "id": "fore5_6",
        "name": "배두훈 (에코백)",
        "section": "에코백",
        "x": 4.2,
        "y": 39.5,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_7",
        "name": "강형호 (에코백)",
        "section": "에코백",
        "x": 21.5,
        "y": 39.5,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_8",
        "name": "조민규 (에코백)",
        "section": "에코백",
        "x": 38.8,
        "y": 39.5,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_9",
        "name": "고우림 (에코백)",
        "section": "에코백",
        "x": 56.1,
        "y": 39.5,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_10",
        "name": "티셔츠 (단체)",
        "section": "티셔츠",
        "x": 73.4,
        "y": 43.5,
        "w": 22.5,
        "h": 6.8,
        "radius": 8
      },
      {
        "id": "fore5_11",
        "name": "배두훈 (포토카드&스티커 A)",
        "section": "포토카드&스티커 A",
        "x": 4.2,
        "y": 52.8,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_12",
        "name": "강형호 (포토카드&스티커 A)",
        "section": "포토카드&스티커 A",
        "x": 21.5,
        "y": 52.8,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_13",
        "name": "조민규 (포토카드&스티커 A)",
        "section": "포토카드&스티커 A",
        "x": 38.8,
        "y": 52.8,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_14",
        "name": "고우림 (포토카드&스티커 A)",
        "section": "포토카드&스티커 A",
        "x": 56.1,
        "y": 52.8,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_15",
        "name": "포카세트 A (단체)",
        "section": "포토카드&스티커",
        "x": 73.4,
        "y": 56.5,
        "w": 22.5,
        "h": 6.8,
        "radius": 8
      },
      {
        "id": "fore5_16",
        "name": "배두훈 (포토카드&스티커 B)",
        "section": "포토카드&스티커 B",
        "x": 4.2,
        "y": 64.5,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_17",
        "name": "강형호 (포토카드&스티커 B)",
        "section": "포토카드&스티커 B",
        "x": 21.5,
        "y": 64.5,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_18",
        "name": "조민규 (포토카드&스티커 B)",
        "section": "포토카드&스티커 B",
        "x": 38.8,
        "y": 64.5,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_19",
        "name": "고우림 (포토카드&스티커 B)",
        "section": "포토카드&스티커 B",
        "x": 56.1,
        "y": 64.5,
        "w": 14.5,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore5_20",
        "name": "포카세트 B (단체)",
        "section": "포토카드&스티커",
        "x": 73.4,
        "y": 68.2,
        "w": 22.5,
        "h": 6.8,
        "radius": 8
      },
      {
        "id": "fore5_21",
        "name": "배두훈 (포토카드&스티커 C)",
        "section": "포토카드&스티커 C",
        "x": 29,
        "y": 75.8,
        "w": 11.2,
        "h": 7.8,
        "radius": 6
      },
      {
        "id": "fore5_22",
        "name": "강형호 (포토카드&스티커 C)",
        "section": "포토카드&스티커 C",
        "x": 42.2,
        "y": 75.8,
        "w": 11.2,
        "h": 7.8,
        "radius": 6
      },
      {
        "id": "fore5_23",
        "name": "조민규 (포토카드&스티커 C)",
        "section": "포토카드&스티커 C",
        "x": 55.4,
        "y": 75.8,
        "w": 11.2,
        "h": 7.8,
        "radius": 6
      },
      {
        "id": "fore5_24",
        "name": "고우림 (포토카드&스티커 C)",
        "section": "포토카드&스티커 C",
        "x": 68.6,
        "y": 75.8,
        "w": 11.2,
        "h": 7.8,
        "radius": 6
      },
      {
        "id": "fore5_25",
        "name": "배두훈 (뱃지 세트)",
        "section": "뱃지 세트",
        "x": 4.2,
        "y": 87.5,
        "w": 14.5,
        "h": 10.2,
        "radius": 8
      },
      {
        "id": "fore5_26",
        "name": "강형호 (뱃지 세트)",
        "section": "뱃지 세트",
        "x": 21.5,
        "y": 87.5,
        "w": 14.5,
        "h": 10.2,
        "radius": 8
      },
      {
        "id": "fore5_27",
        "name": "조민규 (뱃지 세트)",
        "section": "뱃지 세트",
        "x": 38.8,
        "y": 87.5,
        "w": 14.5,
        "h": 10.2,
        "radius": 8
      },
      {
        "id": "fore5_28",
        "name": "고우림 (뱃지 세트)",
        "section": "뱃지 세트",
        "x": 56.1,
        "y": 87.5,
        "w": 14.5,
        "h": 10.2,
        "radius": 8
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
        "id": "fore6_classic_1",
        "name": "배두훈 (클래식 ver.)",
        "section": "클래식 ver.",
        "x": 7.8,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore6_classic_2",
        "name": "강형호 (클래식 ver.)",
        "section": "클래식 ver.",
        "x": 29.7,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore6_classic_3",
        "name": "조민규 (클래식 ver.)",
        "section": "클래식 ver.",
        "x": 51.6,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore6_classic_4",
        "name": "고우림 (클래식 ver.)",
        "section": "클래식 ver.",
        "x": 73.5,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore6_special_5",
        "name": "배두훈 (스페셜 ver.)",
        "section": "스페셜 ver.",
        "x": 7.8,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore6_special_6",
        "name": "강형호 (스페셜 ver.)",
        "section": "스페셜 ver.",
        "x": 29.7,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore6_special_7",
        "name": "조민규 (스페셜 ver.)",
        "section": "스페셜 ver.",
        "x": 51.6,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore6_special_8",
        "name": "고우림 (스페셜 ver.)",
        "section": "스페셜 ver.",
        "x": 73.5,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
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
        "id": "fore7_r1_1",
        "name": "배두훈 (포토카드 A ver.)",
        "section": "포토카드 A ver.",
        "x": 7.8,
        "y": 38.8,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r1_2",
        "name": "강형호 (포토카드 A ver.)",
        "section": "포토카드 A ver.",
        "x": 29.7,
        "y": 38.8,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r1_3",
        "name": "조민규 (포토카드 A ver.)",
        "section": "포토카드 A ver.",
        "x": 51.6,
        "y": 38.8,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r1_4",
        "name": "고우림 (포토카드 A ver.)",
        "section": "포토카드 A ver.",
        "x": 73.5,
        "y": 38.8,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r2_5",
        "name": "배두훈 (포토카드 B ver.)",
        "section": "포토카드 B ver.",
        "x": 7.8,
        "y": 58.2,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r2_6",
        "name": "강형호 (포토카드 B ver.)",
        "section": "포토카드 B ver.",
        "x": 29.7,
        "y": 58.2,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r2_7",
        "name": "조민규 (포토카드 B ver.)",
        "section": "포토카드 B ver.",
        "x": 51.6,
        "y": 58.2,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r2_8",
        "name": "고우림 (포토카드 B ver.)",
        "section": "포토카드 B ver.",
        "x": 73.5,
        "y": 58.2,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r3_9",
        "name": "배두훈 (포토카드 C ver.)",
        "section": "포토카드 C ver.",
        "x": 7.8,
        "y": 77.6,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r3_10",
        "name": "강형호 (포토카드 C ver.)",
        "section": "포토카드 C ver.",
        "x": 29.7,
        "y": 77.6,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r3_11",
        "name": "조민규 (포토카드 C ver.)",
        "section": "포토카드 C ver.",
        "x": 51.6,
        "y": 77.6,
        "w": 18.5,
        "h": 18.5,
        "radius": 10
      },
      {
        "id": "fore7_r3_12",
        "name": "고우림 (포토카드 C ver.)",
        "section": "포토카드 C ver.",
        "x": 73.5,
        "y": 77.6,
        "w": 18.5,
        "h": 18.5,
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
        "name": "유닛 1 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 2,
        "y": 32.5,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_2",
        "name": "유닛 2 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 17.6,
        "y": 32.5,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_3",
        "name": "유닛 3 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 34.8,
        "y": 32.5,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_4",
        "name": "유닛 4 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 50.4,
        "y": 32.5,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_5",
        "name": "유닛 5 (위드뮤 콘서트 현장)",
        "section": "위드뮤 콘서트 현장",
        "x": 67.8,
        "y": 32.5,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_6",
        "name": "유닛 6 (위드뮤 콘서트 현장)",
        "section": "위드뮤 콘서트 현장",
        "x": 83.4,
        "y": 32.5,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_7",
        "name": "씨팩토리 A (단체)",
        "section": "씨팩토리 팬싸",
        "x": 2,
        "y": 51.5,
        "w": 21,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore8_8",
        "name": "씨팩토리 B (단체)",
        "section": "씨팩토리 팬싸",
        "x": 26.5,
        "y": 51.5,
        "w": 21,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore8_9",
        "name": "에버라인 온라인 (단체)",
        "section": "에버라인 온라인",
        "x": 51.8,
        "y": 51.5,
        "w": 21,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore8_10",
        "name": "에버라인 오프라인 (단체)",
        "section": "에버라인 오프라인",
        "x": 76.8,
        "y": 51.5,
        "w": 21,
        "h": 9.8,
        "radius": 8
      },
      {
        "id": "fore8_talisman1_11",
        "name": "배두훈 (에버라인 부적 A)",
        "section": "에버라인 부적 A",
        "x": 18.2,
        "y": 65,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_talisman1_12",
        "name": "강형호 (에버라인 부적 A)",
        "section": "에버라인 부적 A",
        "x": 34.2,
        "y": 65,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_talisman1_13",
        "name": "조민규 (에버라인 부적 A)",
        "section": "에버라인 부적 A",
        "x": 50.2,
        "y": 65,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_talisman1_14",
        "name": "고우림 (에버라인 부적 A)",
        "section": "에버라인 부적 A",
        "x": 66.2,
        "y": 65,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_talisman2_15",
        "name": "배두훈 (에버라인 부적 B)",
        "section": "에버라인 부적 B",
        "x": 18.2,
        "y": 80.8,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_talisman2_16",
        "name": "강형호 (에버라인 부적 B)",
        "section": "에버라인 부적 B",
        "x": 34.2,
        "y": 80.8,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_talisman2_17",
        "name": "조민규 (에버라인 부적 B)",
        "section": "에버라인 부적 B",
        "x": 50.2,
        "y": 80.8,
        "w": 13.8,
        "h": 15,
        "radius": 8
      },
      {
        "id": "fore8_talisman2_18",
        "name": "고우림 (에버라인 부적 B)",
        "section": "에버라인 부적 B",
        "x": 66.2,
        "y": 80.8,
        "w": 13.8,
        "h": 15,
        "radius": 8
      }
    ]
  },
  {
    "id": "fore9",
    "order": 9,
    "categoryId": "fore",
    "title": "fore9. 더라이트",
    "rawName": "더라이트",
    "tag": "콘서트/MD",
    "image": "images/fore/fore9_더라이트_chl최종_50.webp",
    "cards": [
      {
        "id": "fore9_tina_1",
        "name": "배두훈 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 1.8,
        "y": 32,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_2",
        "name": "강형호 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 8.6,
        "y": 32,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_3",
        "name": "조민규 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 15.4,
        "y": 32,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_4",
        "name": "고우림 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 22.2,
        "y": 32,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_5",
        "name": "배두훈 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 1.8,
        "y": 48,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_6",
        "name": "강형호 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 8.6,
        "y": 48,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_7",
        "name": "조민규 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 15.4,
        "y": 48,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_8",
        "name": "고우림 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 22.2,
        "y": 48,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_9",
        "name": "배두훈 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 1.8,
        "y": 64.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_10",
        "name": "강형호 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 8.6,
        "y": 64.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_11",
        "name": "조민규 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 15.4,
        "y": 64.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_12",
        "name": "고우림 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 22.2,
        "y": 64.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_13",
        "name": "유닛/단체 13 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 1.8,
        "y": 81,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_14",
        "name": "유닛/단체 14 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 8.6,
        "y": 81,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tina_15",
        "name": "유닛/단체 15 (틴케이스 A ver.)",
        "section": "틴케이스 A ver.",
        "x": 15.4,
        "y": 81,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_16",
        "name": "단체 A (가로)",
        "section": "틴케이스 A ver.",
        "x": 22.2,
        "y": 83.5,
        "w": 8.8,
        "h": 10,
        "radius": 6
      },
      {
        "id": "fore9_tinb_17",
        "name": "배두훈 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 32.2,
        "y": 32,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_18",
        "name": "강형호 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 39,
        "y": 32,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_19",
        "name": "조민규 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 45.8,
        "y": 32,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_20",
        "name": "고우림 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 52.6,
        "y": 32,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_21",
        "name": "배두훈 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 32.2,
        "y": 48,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_22",
        "name": "강형호 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 39,
        "y": 48,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_23",
        "name": "조민규 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 45.8,
        "y": 48,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_24",
        "name": "고우림 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 52.6,
        "y": 48,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_25",
        "name": "배두훈 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 32.2,
        "y": 64.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_26",
        "name": "강형호 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 39,
        "y": 64.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_27",
        "name": "조민규 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 45.8,
        "y": 64.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_28",
        "name": "고우림 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 52.6,
        "y": 64.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_29",
        "name": "유닛/단체 29 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 32.2,
        "y": 81,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_30",
        "name": "유닛/단체 30 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 39,
        "y": 81,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tinb_31",
        "name": "유닛/단체 31 (틴케이스 B ver.)",
        "section": "틴케이스 B ver.",
        "x": 45.8,
        "y": 81,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_32",
        "name": "단체 B (가로)",
        "section": "틴케이스 B ver.",
        "x": 52.6,
        "y": 83.5,
        "w": 8.8,
        "h": 10,
        "radius": 6
      },
      {
        "id": "fore9_keya_33",
        "name": "미니 33 (미니 키링 A)",
        "section": "미니 키링 A",
        "x": 42.6,
        "y": 6.2,
        "w": 3.4,
        "h": 7.8,
        "radius": 4
      },
      {
        "id": "fore9_keya_34",
        "name": "미니 34 (미니 키링 A)",
        "section": "미니 키링 A",
        "x": 46.4,
        "y": 6.2,
        "w": 3.4,
        "h": 7.8,
        "radius": 4
      },
      {
        "id": "fore9_keya_35",
        "name": "미니 35 (미니 키링 A)",
        "section": "미니 키링 A",
        "x": 50.2,
        "y": 6.2,
        "w": 3.4,
        "h": 7.8,
        "radius": 4
      },
      {
        "id": "fore9_keya_36",
        "name": "미니 36 (미니 키링 A)",
        "section": "미니 키링 A",
        "x": 54,
        "y": 6.2,
        "w": 3.4,
        "h": 7.8,
        "radius": 4
      },
      {
        "id": "fore9_keyb_37",
        "name": "미니 37 (미니 키링 B)",
        "section": "미니 키링 B",
        "x": 42.6,
        "y": 19,
        "w": 3.4,
        "h": 7.8,
        "radius": 4
      },
      {
        "id": "fore9_keyb_38",
        "name": "미니 38 (미니 키링 B)",
        "section": "미니 키링 B",
        "x": 46.4,
        "y": 19,
        "w": 3.4,
        "h": 7.8,
        "radius": 4
      },
      {
        "id": "fore9_keyb_39",
        "name": "미니 39 (미니 키링 B)",
        "section": "미니 키링 B",
        "x": 50.2,
        "y": 19,
        "w": 3.4,
        "h": 7.8,
        "radius": 4
      },
      {
        "id": "fore9_keyb_40",
        "name": "미니 40 (미니 키링 B)",
        "section": "미니 키링 B",
        "x": 54,
        "y": 19,
        "w": 3.4,
        "h": 7.8,
        "radius": 4
      },
      {
        "id": "fore9_tshirt_w_41",
        "name": "유닛 41 (티셔츠 화이트)",
        "section": "티셔츠 화이트",
        "x": 62.6,
        "y": 6.2,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tshirt_w_42",
        "name": "유닛 42 (티셔츠 화이트)",
        "section": "티셔츠 화이트",
        "x": 69.2,
        "y": 6.2,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tshirt_b_43",
        "name": "유닛 43 (티셔츠 블랙)",
        "section": "티셔츠 블랙",
        "x": 75.8,
        "y": 6.2,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_tshirt_b_44",
        "name": "유닛 44 (티셔츠 블랙)",
        "section": "티셔츠 블랙",
        "x": 82.4,
        "y": 6.2,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_45",
        "name": "배두훈 (미니 파우치)",
        "section": "미니 파우치",
        "x": 62.6,
        "y": 25.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_46",
        "name": "강형호 (미니 파우치)",
        "section": "미니 파우치",
        "x": 69.2,
        "y": 25.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_47",
        "name": "조민규 (미니 파우치)",
        "section": "미니 파우치",
        "x": 75.8,
        "y": 25.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_48",
        "name": "고우림 (미니 파우치)",
        "section": "미니 파우치",
        "x": 82.4,
        "y": 25.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_49",
        "name": "미니 파우치 단체",
        "section": "미니 파우치",
        "x": 89.2,
        "y": 28,
        "w": 8.8,
        "h": 10,
        "radius": 6
      },
      {
        "id": "fore9_md_50",
        "name": "배두훈 (우산)",
        "section": "우산",
        "x": 62.6,
        "y": 44,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_51",
        "name": "강형호 (우산)",
        "section": "우산",
        "x": 69.2,
        "y": 44,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_52",
        "name": "조민규 (우산)",
        "section": "우산",
        "x": 75.8,
        "y": 44,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_53",
        "name": "고우림 (우산)",
        "section": "우산",
        "x": 82.4,
        "y": 44,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_54",
        "name": "우산 단체",
        "section": "우산",
        "x": 89.2,
        "y": 46.5,
        "w": 8.8,
        "h": 10,
        "radius": 6
      },
      {
        "id": "fore9_md_55",
        "name": "배두훈 (우비)",
        "section": "우비",
        "x": 62.6,
        "y": 62.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_56",
        "name": "강형호 (우비)",
        "section": "우비",
        "x": 69.2,
        "y": 62.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_57",
        "name": "조민규 (우비)",
        "section": "우비",
        "x": 75.8,
        "y": 62.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_58",
        "name": "고우림 (우비)",
        "section": "우비",
        "x": 82.4,
        "y": 62.5,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_59",
        "name": "우비 단체",
        "section": "우비",
        "x": 89.2,
        "y": 65,
        "w": 8.8,
        "h": 10,
        "radius": 6
      },
      {
        "id": "fore9_md_60",
        "name": "배두훈 (피크닉 매트)",
        "section": "피크닉 매트",
        "x": 62.6,
        "y": 81,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_61",
        "name": "강형호 (피크닉 매트)",
        "section": "피크닉 매트",
        "x": 69.2,
        "y": 81,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_62",
        "name": "조민규 (피크닉 매트)",
        "section": "피크닉 매트",
        "x": 75.8,
        "y": 81,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_md_63",
        "name": "고우림 (피크닉 매트)",
        "section": "피크닉 매트",
        "x": 82.4,
        "y": 81,
        "w": 5.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore9_64",
        "name": "피크닉 매트 단체",
        "section": "피크닉 매트",
        "x": 89.2,
        "y": 83.5,
        "w": 8.8,
        "h": 10,
        "radius": 6
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
        "name": "배두훈 (구매특전)",
        "section": "구매특전",
        "x": 2.8,
        "y": 23.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_2",
        "name": "강형호 (구매특전)",
        "section": "구매특전",
        "x": 11.8,
        "y": 23.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_3",
        "name": "조민규 (구매특전)",
        "section": "구매특전",
        "x": 20.8,
        "y": 23.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_4",
        "name": "고우림 (구매특전)",
        "section": "구매특전",
        "x": 29.8,
        "y": 23.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_5",
        "name": "구매특전 단체",
        "section": "구매특전",
        "x": 37.8,
        "y": 26,
        "w": 11.5,
        "h": 9.8,
        "radius": 6
      },
      {
        "id": "fore10_6",
        "name": "배두훈 (금속목걸이)",
        "section": "금속목걸이",
        "x": 2.8,
        "y": 42.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_7",
        "name": "강형호 (금속목걸이)",
        "section": "금속목걸이",
        "x": 11.8,
        "y": 42.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_8",
        "name": "조민규 (금속목걸이)",
        "section": "금속목걸이",
        "x": 20.8,
        "y": 42.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_9",
        "name": "고우림 (금속목걸이)",
        "section": "금속목걸이",
        "x": 29.8,
        "y": 42.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_10",
        "name": "금속목걸이 단체",
        "section": "금속목걸이",
        "x": 37.8,
        "y": 45,
        "w": 11.5,
        "h": 9.8,
        "radius": 6
      },
      {
        "id": "fore10_11",
        "name": "배두훈 (스웨트셔츠)",
        "section": "스웨트셔츠",
        "x": 2.8,
        "y": 61.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_12",
        "name": "강형호 (스웨트셔츠)",
        "section": "스웨트셔츠",
        "x": 11.8,
        "y": 61.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_13",
        "name": "조민규 (스웨트셔츠)",
        "section": "스웨트셔츠",
        "x": 20.8,
        "y": 61.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_14",
        "name": "고우림 (스웨트셔츠)",
        "section": "스웨트셔츠",
        "x": 29.8,
        "y": 61.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_15",
        "name": "스웨트셔츠 단체",
        "section": "스웨트셔츠",
        "x": 37.8,
        "y": 64,
        "w": 11.5,
        "h": 9.8,
        "radius": 6
      },
      {
        "id": "fore10_16",
        "name": "배두훈 (리유저블컵)",
        "section": "리유저블컵",
        "x": 2.8,
        "y": 80.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_17",
        "name": "강형호 (리유저블컵)",
        "section": "리유저블컵",
        "x": 11.8,
        "y": 80.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_18",
        "name": "조민규 (리유저블컵)",
        "section": "리유저블컵",
        "x": 20.8,
        "y": 80.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_19",
        "name": "고우림 (리유저블컵)",
        "section": "리유저블컵",
        "x": 29.8,
        "y": 80.5,
        "w": 7.8,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_20",
        "name": "리유저블컵 단체",
        "section": "리유저블컵",
        "x": 37.8,
        "y": 83,
        "w": 11.5,
        "h": 9.8,
        "radius": 6
      },
      {
        "id": "fore10_keyring_21",
        "name": "배두훈 (포토홀더 키링)",
        "section": "포토홀더 키링",
        "x": 50.8,
        "y": 14.5,
        "w": 7.5,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore10_keyring_22",
        "name": "강형호 (포토홀더 키링)",
        "section": "포토홀더 키링",
        "x": 59.5,
        "y": 14.5,
        "w": 7.5,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore10_keyring_23",
        "name": "조민규 (포토홀더 키링)",
        "section": "포토홀더 키링",
        "x": 68.2,
        "y": 14.5,
        "w": 7.5,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore10_keyring_24",
        "name": "고우림 (포토홀더 키링)",
        "section": "포토홀더 키링",
        "x": 76.9,
        "y": 14.5,
        "w": 7.5,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_25",
        "name": "배두훈 (포토카드 세트 1)",
        "section": "포토카드 세트 1",
        "x": 50.8,
        "y": 32.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_26",
        "name": "강형호 (포토카드 세트 1)",
        "section": "포토카드 세트 1",
        "x": 59.5,
        "y": 32.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_27",
        "name": "조민규 (포토카드 세트 1)",
        "section": "포토카드 세트 1",
        "x": 68.2,
        "y": 32.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_28",
        "name": "고우림 (포토카드 세트 1)",
        "section": "포토카드 세트 1",
        "x": 76.9,
        "y": 32.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_29",
        "name": "포카세트 단체 1",
        "section": "포토카드 세트",
        "x": 85.8,
        "y": 35.3,
        "w": 12,
        "h": 9.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_30",
        "name": "배두훈 (포토카드 세트 2)",
        "section": "포토카드 세트 2",
        "x": 50.8,
        "y": 48.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_31",
        "name": "강형호 (포토카드 세트 2)",
        "section": "포토카드 세트 2",
        "x": 59.5,
        "y": 48.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_32",
        "name": "조민규 (포토카드 세트 2)",
        "section": "포토카드 세트 2",
        "x": 68.2,
        "y": 48.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_33",
        "name": "고우림 (포토카드 세트 2)",
        "section": "포토카드 세트 2",
        "x": 76.9,
        "y": 48.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_34",
        "name": "포카세트 단체 2",
        "section": "포토카드 세트",
        "x": 85.8,
        "y": 51.3,
        "w": 12,
        "h": 9.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_35",
        "name": "배두훈 (포토카드 세트 3)",
        "section": "포토카드 세트 3",
        "x": 50.8,
        "y": 64.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_36",
        "name": "강형호 (포토카드 세트 3)",
        "section": "포토카드 세트 3",
        "x": 59.5,
        "y": 64.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_37",
        "name": "조민규 (포토카드 세트 3)",
        "section": "포토카드 세트 3",
        "x": 68.2,
        "y": 64.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_38",
        "name": "고우림 (포토카드 세트 3)",
        "section": "포토카드 세트 3",
        "x": 76.9,
        "y": 64.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_39",
        "name": "포카세트 단체 3",
        "section": "포토카드 세트",
        "x": 85.8,
        "y": 67.3,
        "w": 12,
        "h": 9.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_40",
        "name": "배두훈 (포토카드 세트 4)",
        "section": "포토카드 세트 4",
        "x": 50.8,
        "y": 80.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_41",
        "name": "강형호 (포토카드 세트 4)",
        "section": "포토카드 세트 4",
        "x": 59.5,
        "y": 80.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_42",
        "name": "조민규 (포토카드 세트 4)",
        "section": "포토카드 세트 4",
        "x": 68.2,
        "y": 80.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_photocardset_43",
        "name": "고우림 (포토카드 세트 4)",
        "section": "포토카드 세트 4",
        "x": 76.9,
        "y": 80.8,
        "w": 7.5,
        "h": 14.8,
        "radius": 6
      },
      {
        "id": "fore10_44",
        "name": "포카세트 단체 4",
        "section": "포토카드 세트",
        "x": 85.8,
        "y": 83.3,
        "w": 12,
        "h": 9.8,
        "radius": 6
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
        "name": "배두훈 (포토카드)",
        "section": "포토카드",
        "x": 7.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore11_2",
        "name": "강형호 (포토카드)",
        "section": "포토카드",
        "x": 29.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore11_3",
        "name": "조민규 (포토카드)",
        "section": "포토카드",
        "x": 51.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore11_4",
        "name": "고우림 (포토카드)",
        "section": "포토카드",
        "x": 73.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
      }
    ]
  },
  {
    "id": "fore12",
    "order": 12,
    "categoryId": "fore",
    "title": "fore12. 언피니쉬드 앨범",
    "rawName": "언피니쉬드 앨범",
    "tag": "앨범",
    "image": "images/fore/fore12_언피니쉬드_앨범_특전_chl최종_리스트_100.webp",
    "cards": [
      {
        "id": "fore12_black_1",
        "name": "배두훈 (블랙 수트 ver.)",
        "section": "블랙 수트 ver.",
        "x": 7.8,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore12_black_2",
        "name": "강형호 (블랙 수트 ver.)",
        "section": "블랙 수트 ver.",
        "x": 29.8,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore12_black_3",
        "name": "조민규 (블랙 수트 ver.)",
        "section": "블랙 수트 ver.",
        "x": 51.8,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore12_black_4",
        "name": "고우림 (블랙 수트 ver.)",
        "section": "블랙 수트 ver.",
        "x": 73.8,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore12_white_5",
        "name": "배두훈 (화이트 트위드 ver.)",
        "section": "화이트 트위드 ver.",
        "x": 7.8,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore12_white_6",
        "name": "강형호 (화이트 트위드 ver.)",
        "section": "화이트 트위드 ver.",
        "x": 29.8,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore12_white_7",
        "name": "조민규 (화이트 트위드 ver.)",
        "section": "화이트 트위드 ver.",
        "x": 51.8,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore12_white_8",
        "name": "고우림 (화이트 트위드 ver.)",
        "section": "화이트 트위드 ver.",
        "x": 73.8,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      }
    ]
  },
  {
    "id": "fore13",
    "order": 13,
    "categoryId": "fore",
    "title": "fore13. 언피니쉬드 특전",
    "rawName": "언피니쉬드 특전",
    "tag": "특전",
    "image": "images/fore/fore13_언피니쉬드_앨범_특전_최최최종_리스트_72.webp",
    "cards": [
      {
        "id": "fore13_1",
        "name": "케이앤팝스 예판 (단체)",
        "section": "케이앤팝스",
        "x": 78.5,
        "y": 8.5,
        "w": 19.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore13_2",
        "name": "배두훈 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 2.5,
        "y": 26.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_3",
        "name": "강형호 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 14.7,
        "y": 26.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_4",
        "name": "조민규 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 26.9,
        "y": 26.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_5",
        "name": "고우림 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 39.1,
        "y": 26.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_6",
        "name": "배두훈 (핫트랙스 예판)",
        "section": "핫트랙스 예판",
        "x": 51.5,
        "y": 26.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_7",
        "name": "강형호 (핫트랙스 예판)",
        "section": "핫트랙스 예판",
        "x": 63.7,
        "y": 26.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_8",
        "name": "조민규 (핫트랙스 예판)",
        "section": "핫트랙스 예판",
        "x": 75.9,
        "y": 26.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_9",
        "name": "고우림 (핫트랙스 예판)",
        "section": "핫트랙스 예판",
        "x": 88.1,
        "y": 26.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_10",
        "name": "배두훈 (알라딘 예판)",
        "section": "알라딘 예판",
        "x": 2.5,
        "y": 44.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_11",
        "name": "강형호 (알라딘 예판)",
        "section": "알라딘 예판",
        "x": 14.7,
        "y": 44.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_12",
        "name": "조민규 (알라딘 예판)",
        "section": "알라딘 예판",
        "x": 26.9,
        "y": 44.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_13",
        "name": "고우림 (알라딘 예판)",
        "section": "알라딘 예판",
        "x": 39.1,
        "y": 44.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_14",
        "name": "배두훈 (Ktown4U 예판)",
        "section": "Ktown4U 예판",
        "x": 51.5,
        "y": 44.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_15",
        "name": "강형호 (Ktown4U 예판)",
        "section": "Ktown4U 예판",
        "x": 63.7,
        "y": 44.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_16",
        "name": "조민규 (Ktown4U 예판)",
        "section": "Ktown4U 예판",
        "x": 75.9,
        "y": 44.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_17",
        "name": "고우림 (Ktown4U 예판)",
        "section": "Ktown4U 예판",
        "x": 88.1,
        "y": 44.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_18",
        "name": "배두훈 (메이크스타 예판)",
        "section": "메이크스타 예판",
        "x": 2.5,
        "y": 62.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_19",
        "name": "강형호 (메이크스타 예판)",
        "section": "메이크스타 예판",
        "x": 14.7,
        "y": 62.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_20",
        "name": "조민규 (메이크스타 예판)",
        "section": "메이크스타 예판",
        "x": 26.9,
        "y": 62.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_21",
        "name": "고우림 (메이크스타 예판)",
        "section": "메이크스타 예판",
        "x": 39.1,
        "y": 62.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_22",
        "name": "배두훈 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 51.5,
        "y": 62.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_23",
        "name": "강형호 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 63.7,
        "y": 62.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_24",
        "name": "조민규 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 75.9,
        "y": 62.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_25",
        "name": "고우림 (애플뮤직 예판)",
        "section": "애플뮤직 예판",
        "x": 88.1,
        "y": 62.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_26",
        "name": "배두훈 (YES24 예판)",
        "section": "YES24 예판",
        "x": 2.5,
        "y": 80.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_27",
        "name": "강형호 (YES24 예판)",
        "section": "YES24 예판",
        "x": 14.7,
        "y": 80.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_28",
        "name": "조민규 (YES24 예판)",
        "section": "YES24 예판",
        "x": 26.9,
        "y": 80.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_29",
        "name": "고우림 (YES24 예판)",
        "section": "YES24 예판",
        "x": 39.1,
        "y": 80.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_30",
        "name": "배두훈 (씨팩토리 팬싸)",
        "section": "씨팩토리 팬싸",
        "x": 51.5,
        "y": 80.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_31",
        "name": "강형호 (씨팩토리 팬싸)",
        "section": "씨팩토리 팬싸",
        "x": 63.7,
        "y": 80.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_32",
        "name": "조민규 (씨팩토리 팬싸)",
        "section": "씨팩토리 팬싸",
        "x": 75.9,
        "y": 80.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      },
      {
        "id": "fore13_33",
        "name": "고우림 (씨팩토리 팬싸)",
        "section": "씨팩토리 팬싸",
        "x": 88.1,
        "y": 80.5,
        "w": 10.8,
        "h": 15.5,
        "radius": 6
      }
    ]
  },
  {
    "id": "fore14",
    "order": 14,
    "categoryId": "fore",
    "title": "fore14. 엪엔엘",
    "rawName": "엪엔엘",
    "tag": "콘서트/MD",
    "image": "images/fore/fore14_엪엔엘_리스트_최최최종_100.webp",
    "cards": [
      {
        "id": "fore14_1",
        "name": "배두훈 (구매특전 A ver.)",
        "section": "구매특전 A ver.",
        "x": 4,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_2",
        "name": "강형호 (구매특전 A ver.)",
        "section": "구매특전 A ver.",
        "x": 19.5,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_3",
        "name": "조민규 (구매특전 A ver.)",
        "section": "구매특전 A ver.",
        "x": 35,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_4",
        "name": "배두훈 (구매특전 B ver.)",
        "section": "구매특전 B ver.",
        "x": 52,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_5",
        "name": "강형호 (구매특전 B ver.)",
        "section": "구매특전 B ver.",
        "x": 67.5,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_6",
        "name": "조민규 (구매특전 B ver.)",
        "section": "구매특전 B ver.",
        "x": 83,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_7",
        "name": "배두훈 (유리컵)",
        "section": "유리컵",
        "x": 4,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_8",
        "name": "강형호 (유리컵)",
        "section": "유리컵",
        "x": 19.5,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_9",
        "name": "조민규 (유리컵)",
        "section": "유리컵",
        "x": 35,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_10",
        "name": "배두훈 (나일론 셔츠)",
        "section": "나일론 셔츠",
        "x": 52,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_11",
        "name": "강형호 (나일론 셔츠)",
        "section": "나일론 셔츠",
        "x": 67.5,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_12",
        "name": "조민규 (나일론 셔츠)",
        "section": "나일론 셔츠",
        "x": 83,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_13",
        "name": "배두훈 (타포린 백)",
        "section": "타포린 백",
        "x": 4,
        "y": 75.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_14",
        "name": "강형호 (타포린 백)",
        "section": "타포린 백",
        "x": 19.5,
        "y": 75.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_15",
        "name": "조민규 (타포린 백)",
        "section": "타포린 백",
        "x": 35,
        "y": 75.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore14_16",
        "name": "콜렉트북 (단체)",
        "section": "콜렉트북",
        "x": 68,
        "y": 75.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      }
    ]
  },
  {
    "id": "fore15",
    "order": 15,
    "categoryId": "fore",
    "title": "fore15. 일루셔니스트",
    "rawName": "일루셔니스트",
    "tag": "콘서트/MD",
    "image": "images/fore/fore15_일루셔니스트_리스트_최최종_100.webp",
    "cards": [
      {
        "id": "fore15_1",
        "name": "배두훈 (구매특전 A ver.)",
        "section": "구매특전 A ver.",
        "x": 4,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_2",
        "name": "강형호 (구매특전 A ver.)",
        "section": "구매특전 A ver.",
        "x": 19.5,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_3",
        "name": "조민규 (구매특전 A ver.)",
        "section": "구매특전 A ver.",
        "x": 35,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_4",
        "name": "배두훈 (구매특전 B ver.)",
        "section": "구매특전 B ver.",
        "x": 52,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_5",
        "name": "강형호 (구매특전 B ver.)",
        "section": "구매특전 B ver.",
        "x": 67.5,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_6",
        "name": "조민규 (구매특전 B ver.)",
        "section": "구매특전 B ver.",
        "x": 83,
        "y": 29.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_7",
        "name": "배두훈 (목걸이)",
        "section": "목걸이",
        "x": 4,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_8",
        "name": "강형호 (목걸이)",
        "section": "목걸이",
        "x": 19.5,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_9",
        "name": "조민규 (목걸이)",
        "section": "목걸이",
        "x": 35,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_10",
        "name": "배두훈 (후드 집업)",
        "section": "후드 집업",
        "x": 52,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_11",
        "name": "강형호 (후드 집업)",
        "section": "후드 집업",
        "x": 67.5,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_12",
        "name": "조민규 (후드 집업)",
        "section": "후드 집업",
        "x": 83,
        "y": 52.5,
        "w": 13.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_pouch_13",
        "name": "배두훈 (포토카드 파우치)",
        "section": "포토카드 파우치",
        "x": 18,
        "y": 75.5,
        "w": 18.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_pouch_14",
        "name": "강형호 (포토카드 파우치)",
        "section": "포토카드 파우치",
        "x": 40.5,
        "y": 75.5,
        "w": 18.5,
        "h": 18.5,
        "radius": 8
      },
      {
        "id": "fore15_pouch_15",
        "name": "조민규 (포토카드 파우치)",
        "section": "포토카드 파우치",
        "x": 63,
        "y": 75.5,
        "w": 18.5,
        "h": 18.5,
        "radius": 8
      }
    ]
  },
  {
    "id": "fore16",
    "order": 16,
    "categoryId": "fore",
    "title": "fore16. 에브리띵",
    "rawName": "에브리띵",
    "tag": "앨범",
    "image": "images/fore/fore16_에브리띵_리스트_최최종_100.webp",
    "cards": [
      {
        "id": "fore16_solo_concept_1",
        "name": "배두훈 (솔로 컨셉)",
        "section": "솔로 컨셉",
        "x": 4.2,
        "y": 34,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_solo_concept_2",
        "name": "강형호 (솔로 컨셉)",
        "section": "솔로 컨셉",
        "x": 21.57,
        "y": 34,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_solo_concept_3",
        "name": "조민규 (솔로 컨셉)",
        "section": "솔로 컨셉",
        "x": 38.94,
        "y": 34,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_solo_concept_4",
        "name": "고우림 (솔로 컨셉)",
        "section": "솔로 컨셉",
        "x": 56.31,
        "y": 34,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_5",
        "name": "솔로 QR (단체)",
        "section": "솔로 QR",
        "x": 73.4,
        "y": 34,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_solo_selfie_6",
        "name": "배두훈 (솔로 셀피)",
        "section": "솔로 셀피",
        "x": 4.2,
        "y": 49,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_solo_selfie_7",
        "name": "강형호 (솔로 셀피)",
        "section": "솔로 셀피",
        "x": 21.57,
        "y": 49,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_solo_selfie_8",
        "name": "조민규 (솔로 셀피)",
        "section": "솔로 셀피",
        "x": 38.94,
        "y": 49,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_solo_selfie_9",
        "name": "고우림 (솔로 셀피)",
        "section": "솔로 셀피",
        "x": 56.31,
        "y": 49,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_10",
        "name": "솔로 단체 (가로)",
        "section": "솔로 단체",
        "x": 73.4,
        "y": 49.8,
        "w": 22.5,
        "h": 11.5,
        "radius": 8
      },
      {
        "id": "fore16_unit_concept_11",
        "name": "배두훈 (유닛 컨셉)",
        "section": "유닛 컨셉",
        "x": 4.2,
        "y": 68,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_unit_concept_12",
        "name": "강형호 (유닛 컨셉)",
        "section": "유닛 컨셉",
        "x": 21.57,
        "y": 68,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_unit_concept_13",
        "name": "조민규 (유닛 컨셉)",
        "section": "유닛 컨셉",
        "x": 38.94,
        "y": 68,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_unit_concept_14",
        "name": "고우림 (유닛 컨셉)",
        "section": "유닛 컨셉",
        "x": 56.31,
        "y": 68,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_15",
        "name": "유닛 QR (단체)",
        "section": "유닛 QR",
        "x": 73.4,
        "y": 68,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_unit_selfie_16",
        "name": "배두훈 (유닛 셀피)",
        "section": "유닛 셀피",
        "x": 4.2,
        "y": 83,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_unit_selfie_17",
        "name": "강형호 (유닛 셀피)",
        "section": "유닛 셀피",
        "x": 21.57,
        "y": 83,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_unit_selfie_18",
        "name": "조민규 (유닛 셀피)",
        "section": "유닛 셀피",
        "x": 38.94,
        "y": 83,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_unit_selfie_19",
        "name": "고우림 (유닛 셀피)",
        "section": "유닛 셀피",
        "x": 56.31,
        "y": 83,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore16_20",
        "name": "유닛 단체 (가로)",
        "section": "유닛 단체",
        "x": 73.4,
        "y": 83.8,
        "w": 22.5,
        "h": 11.5,
        "radius": 8
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
        "id": "fore17_pob_1",
        "name": "배두훈 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 27.5,
        "y": 18.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_pob_2",
        "name": "강형호 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 39.5,
        "y": 18.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_pob_3",
        "name": "조민규 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 51.5,
        "y": 18.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_pob_4",
        "name": "고우림 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 63.5,
        "y": 18.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_5",
        "name": "세트 5 (티셔츠)",
        "section": "티셔츠",
        "x": 2.5,
        "y": 34.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_6",
        "name": "세트 6 (티셔츠)",
        "section": "티셔츠",
        "x": 14.5,
        "y": 34.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_7",
        "name": "세트 7 (티셔츠)",
        "section": "티셔츠",
        "x": 26.5,
        "y": 34.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_8",
        "name": "세트 8 (티셔츠)",
        "section": "티셔츠",
        "x": 38.5,
        "y": 34.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_9",
        "name": "세트 9 (밀크 글라스)",
        "section": "밀크 글라스",
        "x": 51.5,
        "y": 34.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_10",
        "name": "세트 10 (밀크 글라스)",
        "section": "밀크 글라스",
        "x": 63.5,
        "y": 34.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_11",
        "name": "세트 11 (밀크 글라스)",
        "section": "밀크 글라스",
        "x": 75.5,
        "y": 34.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_12",
        "name": "세트 12 (밀크 글라스)",
        "section": "밀크 글라스",
        "x": 87.5,
        "y": 34.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_13",
        "name": "세트 13 (메탈 키링)",
        "section": "메탈 키링",
        "x": 2.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_14",
        "name": "세트 14 (메탈 키링)",
        "section": "메탈 키링",
        "x": 14.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_15",
        "name": "세트 15 (메탈 키링)",
        "section": "메탈 키링",
        "x": 26.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_16",
        "name": "세트 16 (메탈 키링)",
        "section": "메탈 키링",
        "x": 38.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_17",
        "name": "세트 17 (미니 썬캐쳐)",
        "section": "미니 썬캐쳐",
        "x": 51.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_18",
        "name": "세트 18 (미니 썬캐쳐)",
        "section": "미니 썬캐쳐",
        "x": 63.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_19",
        "name": "세트 19 (미니 썬캐쳐)",
        "section": "미니 썬캐쳐",
        "x": 75.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_20",
        "name": "세트 20 (미니 썬캐쳐)",
        "section": "미니 썬캐쳐",
        "x": 87.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_21",
        "name": "세트 21 (포토세트 배두훈)",
        "section": "포토세트 배두훈",
        "x": 2.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_22",
        "name": "세트 22 (포토세트 배두훈)",
        "section": "포토세트 배두훈",
        "x": 14.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_23",
        "name": "세트 23 (포토세트 배두훈)",
        "section": "포토세트 배두훈",
        "x": 26.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_24",
        "name": "세트 24 (포토세트 배두훈)",
        "section": "포토세트 배두훈",
        "x": 38.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_25",
        "name": "세트 25 (포토세트 조민규)",
        "section": "포토세트 조민규",
        "x": 51.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_26",
        "name": "세트 26 (포토세트 조민규)",
        "section": "포토세트 조민규",
        "x": 63.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_27",
        "name": "세트 27 (포토세트 조민규)",
        "section": "포토세트 조민규",
        "x": 75.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_28",
        "name": "세트 28 (포토세트 조민규)",
        "section": "포토세트 조민규",
        "x": 87.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_29",
        "name": "세트 29 (포토세트 강형호)",
        "section": "포토세트 강형호",
        "x": 2.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_30",
        "name": "세트 30 (포토세트 강형호)",
        "section": "포토세트 강형호",
        "x": 14.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_31",
        "name": "세트 31 (포토세트 강형호)",
        "section": "포토세트 강형호",
        "x": 26.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_32",
        "name": "세트 32 (포토세트 강형호)",
        "section": "포토세트 강형호",
        "x": 38.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_33",
        "name": "세트 33 (포토세트 고우림)",
        "section": "포토세트 고우림",
        "x": 51.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_34",
        "name": "세트 34 (포토세트 고우림)",
        "section": "포토세트 고우림",
        "x": 63.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_35",
        "name": "세트 35 (포토세트 고우림)",
        "section": "포토세트 고우림",
        "x": 75.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore17_36",
        "name": "세트 36 (포토세트 고우림)",
        "section": "포토세트 고우림",
        "x": 87.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
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
        "id": "fore18_pob_1",
        "name": "배두훈 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 27.5,
        "y": 18.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_pob_2",
        "name": "강형호 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 39.5,
        "y": 18.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_pob_3",
        "name": "조민규 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 51.5,
        "y": 18.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_pob_4",
        "name": "고우림 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 63.5,
        "y": 18.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_key_5",
        "name": "키링 5 (인형키링 배두훈)",
        "section": "인형키링 배두훈",
        "x": 3.5,
        "y": 34.5,
        "w": 9.8,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_key_6",
        "name": "키링 6 (인형키링 배두훈)",
        "section": "인형키링 배두훈",
        "x": 14.5,
        "y": 34.5,
        "w": 9.8,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_key_7",
        "name": "키링 7 (인형키링 강형호)",
        "section": "인형키링 강형호",
        "x": 28,
        "y": 34.5,
        "w": 9.8,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_key_8",
        "name": "키링 8 (인형키링 강형호)",
        "section": "인형키링 강형호",
        "x": 39,
        "y": 34.5,
        "w": 9.8,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_key_9",
        "name": "키링 9 (인형키링 조민규)",
        "section": "인형키링 조민규",
        "x": 52.5,
        "y": 34.5,
        "w": 9.8,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_key_10",
        "name": "키링 10 (인형키링 조민규)",
        "section": "인형키링 조민규",
        "x": 63.5,
        "y": 34.5,
        "w": 9.8,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_key_11",
        "name": "키링 11 (인형키링 고우림)",
        "section": "인형키링 고우림",
        "x": 77,
        "y": 34.5,
        "w": 9.8,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_key_12",
        "name": "키링 12 (인형키링 고우림)",
        "section": "인형키링 고우림",
        "x": 88,
        "y": 34.5,
        "w": 9.8,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_13",
        "name": "세트 13 (금속 뱃지)",
        "section": "금속 뱃지",
        "x": 2.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_14",
        "name": "세트 14 (금속 뱃지)",
        "section": "금속 뱃지",
        "x": 14.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_15",
        "name": "세트 15 (금속 뱃지)",
        "section": "금속 뱃지",
        "x": 26.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_16",
        "name": "세트 16 (금속 뱃지)",
        "section": "금속 뱃지",
        "x": 38.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_17",
        "name": "세트 17 (보조배터리)",
        "section": "보조배터리",
        "x": 51.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_18",
        "name": "세트 18 (보조배터리)",
        "section": "보조배터리",
        "x": 63.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_19",
        "name": "세트 19 (보조배터리)",
        "section": "보조배터리",
        "x": 75.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_20",
        "name": "세트 20 (보조배터리)",
        "section": "보조배터리",
        "x": 87.5,
        "y": 50.8,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_21",
        "name": "세트 21 (포토세트 배두훈)",
        "section": "포토세트 배두훈",
        "x": 2.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_22",
        "name": "세트 22 (포토세트 배두훈)",
        "section": "포토세트 배두훈",
        "x": 14.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_23",
        "name": "세트 23 (포토세트 배두훈)",
        "section": "포토세트 배두훈",
        "x": 26.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_24",
        "name": "세트 24 (포토세트 배두훈)",
        "section": "포토세트 배두훈",
        "x": 38.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_25",
        "name": "세트 25 (포토세트 조민규)",
        "section": "포토세트 조민규",
        "x": 51.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_26",
        "name": "세트 26 (포토세트 조민규)",
        "section": "포토세트 조민규",
        "x": 63.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_27",
        "name": "세트 27 (포토세트 조민규)",
        "section": "포토세트 조민규",
        "x": 75.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_28",
        "name": "세트 28 (포토세트 조민규)",
        "section": "포토세트 조민규",
        "x": 87.5,
        "y": 67.2,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_29",
        "name": "세트 29 (포토세트 강형호)",
        "section": "포토세트 강형호",
        "x": 2.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_30",
        "name": "세트 30 (포토세트 강형호)",
        "section": "포토세트 강형호",
        "x": 14.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_31",
        "name": "세트 31 (포토세트 강형호)",
        "section": "포토세트 강형호",
        "x": 26.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_32",
        "name": "세트 32 (포토세트 강형호)",
        "section": "포토세트 강형호",
        "x": 38.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_33",
        "name": "세트 33 (포토세트 고우림)",
        "section": "포토세트 고우림",
        "x": 51.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_34",
        "name": "세트 34 (포토세트 고우림)",
        "section": "포토세트 고우림",
        "x": 63.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_35",
        "name": "세트 35 (포토세트 고우림)",
        "section": "포토세트 고우림",
        "x": 75.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore18_36",
        "name": "세트 36 (포토세트 고우림)",
        "section": "포토세트 고우림",
        "x": 87.5,
        "y": 83.5,
        "w": 10.2,
        "h": 13.5,
        "radius": 6
      }
    ]
  },
  {
    "id": "fore19",
    "order": 19,
    "categoryId": "fore",
    "title": "fore19. 시네마",
    "rawName": "시네마",
    "tag": "콘서트/MD",
    "image": "images/fore/fore19_시네마_리스트_최최종_150.webp",
    "cards": [
      {
        "id": "fore19_1",
        "name": "배두훈 (2주차 현장 특전)",
        "section": "2주차 현장 특전",
        "x": 7.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore19_2",
        "name": "강형호 (2주차 현장 특전)",
        "section": "2주차 현장 특전",
        "x": 29.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore19_3",
        "name": "조민규 (2주차 현장 특전)",
        "section": "2주차 현장 특전",
        "x": 51.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore19_4",
        "name": "고우림 (2주차 현장 특전)",
        "section": "2주차 현장 특전",
        "x": 73.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
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
        "id": "fore20_pob_1",
        "name": "배두훈 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 7.8,
        "y": 29.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_pob_2",
        "name": "강형호 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 29.7,
        "y": 29.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_pob_3",
        "name": "조민규 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 51.6,
        "y": 29.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_pob_4",
        "name": "고우림 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 73.5,
        "y": 29.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_wax_5",
        "name": "배두훈 (실링왁스)",
        "section": "실링왁스",
        "x": 7.8,
        "y": 47.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_wax_6",
        "name": "강형호 (실링왁스)",
        "section": "실링왁스",
        "x": 29.7,
        "y": 47.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_wax_7",
        "name": "조민규 (실링왁스)",
        "section": "실링왁스",
        "x": 51.6,
        "y": 47.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_wax_8",
        "name": "고우림 (실링왁스)",
        "section": "실링왁스",
        "x": 73.5,
        "y": 47.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_bpajama_9",
        "name": "배두훈 (블랙 파자마)",
        "section": "블랙 파자마",
        "x": 7.8,
        "y": 65.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_bpajama_10",
        "name": "강형호 (블랙 파자마)",
        "section": "블랙 파자마",
        "x": 29.7,
        "y": 65.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_bpajama_11",
        "name": "조민규 (블랙 파자마)",
        "section": "블랙 파자마",
        "x": 51.6,
        "y": 65.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_bpajama_12",
        "name": "고우림 (블랙 파자마)",
        "section": "블랙 파자마",
        "x": 73.5,
        "y": 65.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_wpajama_13",
        "name": "배두훈 (화이트 파자마)",
        "section": "화이트 파자마",
        "x": 7.8,
        "y": 83.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_wpajama_14",
        "name": "강형호 (화이트 파자마)",
        "section": "화이트 파자마",
        "x": 29.7,
        "y": 83.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_wpajama_15",
        "name": "조민규 (화이트 파자마)",
        "section": "화이트 파자마",
        "x": 51.6,
        "y": 83.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore20_wpajama_16",
        "name": "고우림 (화이트 파자마)",
        "section": "화이트 파자마",
        "x": 73.5,
        "y": 83.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
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
        "id": "fore21_docent_1",
        "name": "배두훈 (Docent Book ver.)",
        "section": "Docent Book ver.",
        "x": 7.8,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_docent_2",
        "name": "강형호 (Docent Book ver.)",
        "section": "Docent Book ver.",
        "x": 29.7,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_docent_3",
        "name": "조민규 (Docent Book ver.)",
        "section": "Docent Book ver.",
        "x": 51.6,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_docent_4",
        "name": "고우림 (Docent Book ver.)",
        "section": "Docent Book ver.",
        "x": 73.5,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_jewel_5",
        "name": "배두훈 (Jewel ver.)",
        "section": "Jewel ver.",
        "x": 7.8,
        "y": 39,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_jewel_6",
        "name": "강형호 (Jewel ver.)",
        "section": "Jewel ver.",
        "x": 29.7,
        "y": 39,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_jewel_7",
        "name": "조민규 (Jewel ver.)",
        "section": "Jewel ver.",
        "x": 51.6,
        "y": 39,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_jewel_8",
        "name": "고우림 (Jewel ver.)",
        "section": "Jewel ver.",
        "x": 73.5,
        "y": 39,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pca_9",
        "name": "배두훈 (PhotoCard A ver.)",
        "section": "PhotoCard A ver.",
        "x": 7.8,
        "y": 54.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pca_10",
        "name": "강형호 (PhotoCard A ver.)",
        "section": "PhotoCard A ver.",
        "x": 29.7,
        "y": 54.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pca_11",
        "name": "조민규 (PhotoCard A ver.)",
        "section": "PhotoCard A ver.",
        "x": 51.6,
        "y": 54.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pca_12",
        "name": "고우림 (PhotoCard A ver.)",
        "section": "PhotoCard A ver.",
        "x": 73.5,
        "y": 54.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pcb_13",
        "name": "배두훈 (PhotoCard B ver.)",
        "section": "PhotoCard B ver.",
        "x": 7.8,
        "y": 70,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pcb_14",
        "name": "강형호 (PhotoCard B ver.)",
        "section": "PhotoCard B ver.",
        "x": 29.7,
        "y": 70,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pcb_15",
        "name": "조민규 (PhotoCard B ver.)",
        "section": "PhotoCard B ver.",
        "x": 51.6,
        "y": 70,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pcb_16",
        "name": "고우림 (PhotoCard B ver.)",
        "section": "PhotoCard B ver.",
        "x": 73.5,
        "y": 70,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pcc_17",
        "name": "배두훈 (PhotoCard C ver.)",
        "section": "PhotoCard C ver.",
        "x": 7.8,
        "y": 85.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pcc_18",
        "name": "강형호 (PhotoCard C ver.)",
        "section": "PhotoCard C ver.",
        "x": 29.7,
        "y": 85.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pcc_19",
        "name": "조민규 (PhotoCard C ver.)",
        "section": "PhotoCard C ver.",
        "x": 51.6,
        "y": 85.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore21_pcc_20",
        "name": "고우림 (PhotoCard C ver.)",
        "section": "PhotoCard C ver.",
        "x": 73.5,
        "y": 85.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
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
        "name": "배두훈 (마이스타굿즈 팬싸)",
        "section": "마이스타굿즈 팬싸",
        "x": 2.5,
        "y": 48.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_2",
        "name": "강형호 (마이스타굿즈 팬싸)",
        "section": "마이스타굿즈 팬싸",
        "x": 14.4,
        "y": 48.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_3",
        "name": "조민규 (마이스타굿즈 팬싸)",
        "section": "마이스타굿즈 팬싸",
        "x": 26.3,
        "y": 48.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_4",
        "name": "고우림 (마이스타굿즈 팬싸)",
        "section": "마이스타굿즈 팬싸",
        "x": 38.2,
        "y": 48.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_5",
        "name": "배두훈 (제이제이뮤즈 예판)",
        "section": "제이제이뮤즈 예판",
        "x": 51.5,
        "y": 15.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_6",
        "name": "강형호 (제이제이뮤즈 예판)",
        "section": "제이제이뮤즈 예판",
        "x": 63.4,
        "y": 15.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_7",
        "name": "조민규 (제이제이뮤즈 예판)",
        "section": "제이제이뮤즈 예판",
        "x": 75.3,
        "y": 15.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_8",
        "name": "고우림 (제이제이뮤즈 예판)",
        "section": "제이제이뮤즈 예판",
        "x": 87.2,
        "y": 15.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_9",
        "name": "배두훈 (제이제이뮤즈 팬싸)",
        "section": "제이제이뮤즈 팬싸",
        "x": 2.5,
        "y": 65.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_10",
        "name": "강형호 (제이제이뮤즈 팬싸)",
        "section": "제이제이뮤즈 팬싸",
        "x": 14.4,
        "y": 65.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_11",
        "name": "조민규 (제이제이뮤즈 팬싸)",
        "section": "제이제이뮤즈 팬싸",
        "x": 26.3,
        "y": 65.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_12",
        "name": "고우림 (제이제이뮤즈 팬싸)",
        "section": "제이제이뮤즈 팬싸",
        "x": 38.2,
        "y": 65.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_13",
        "name": "배두훈 (마이스타굿즈 예판)",
        "section": "마이스타굿즈 예판",
        "x": 51.5,
        "y": 32,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_14",
        "name": "강형호 (마이스타굿즈 예판)",
        "section": "마이스타굿즈 예판",
        "x": 63.4,
        "y": 32,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_15",
        "name": "조민규 (마이스타굿즈 예판)",
        "section": "마이스타굿즈 예판",
        "x": 75.3,
        "y": 32,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_16",
        "name": "고우림 (마이스타굿즈 예판)",
        "section": "마이스타굿즈 예판",
        "x": 87.2,
        "y": 32,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_17",
        "name": "배두훈 (뮤직아트 팬싸)",
        "section": "뮤직아트 팬싸",
        "x": 2.5,
        "y": 82.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_18",
        "name": "강형호 (뮤직아트 팬싸)",
        "section": "뮤직아트 팬싸",
        "x": 14.4,
        "y": 82.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_19",
        "name": "조민규 (뮤직아트 팬싸)",
        "section": "뮤직아트 팬싸",
        "x": 26.3,
        "y": 82.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_20",
        "name": "고우림 (뮤직아트 팬싸)",
        "section": "뮤직아트 팬싸",
        "x": 38.2,
        "y": 82.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_21",
        "name": "배두훈 (Ktown4U 예판)",
        "section": "Ktown4U 예판",
        "x": 51.5,
        "y": 48.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_22",
        "name": "강형호 (Ktown4U 예판)",
        "section": "Ktown4U 예판",
        "x": 63.4,
        "y": 48.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_23",
        "name": "조민규 (Ktown4U 예판)",
        "section": "Ktown4U 예판",
        "x": 75.3,
        "y": 48.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_24",
        "name": "고우림 (Ktown4U 예판)",
        "section": "Ktown4U 예판",
        "x": 87.2,
        "y": 48.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_25",
        "name": "배두훈 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 51.5,
        "y": 65.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_26",
        "name": "강형호 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 63.4,
        "y": 65.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_27",
        "name": "조민규 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 75.3,
        "y": 65.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_28",
        "name": "고우림 (위드뮤 예판)",
        "section": "위드뮤 예판",
        "x": 87.2,
        "y": 65.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_29",
        "name": "배두훈 (뮤직아트 예판)",
        "section": "뮤직아트 예판",
        "x": 51.5,
        "y": 82.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_30",
        "name": "강형호 (뮤직아트 예판)",
        "section": "뮤직아트 예판",
        "x": 63.4,
        "y": 82.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_31",
        "name": "조민규 (뮤직아트 예판)",
        "section": "뮤직아트 예판",
        "x": 75.3,
        "y": 82.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
      },
      {
        "id": "fore22_32",
        "name": "고우림 (뮤직아트 예판)",
        "section": "뮤직아트 예판",
        "x": 87.2,
        "y": 82.5,
        "w": 10.5,
        "h": 14.5,
        "radius": 6
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
        "id": "fore23_poba_1",
        "name": "배두훈 (5만원 구매특전 A)",
        "section": "5만원 구매특전 A",
        "x": 7.8,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_poba_2",
        "name": "강형호 (5만원 구매특전 A)",
        "section": "5만원 구매특전 A",
        "x": 29.7,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_poba_3",
        "name": "조민규 (5만원 구매특전 A)",
        "section": "5만원 구매특전 A",
        "x": 51.6,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_poba_4",
        "name": "고우림 (5만원 구매특전 A)",
        "section": "5만원 구매특전 A",
        "x": 73.5,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_pobb_5",
        "name": "배두훈 (5만원 구매특전 B)",
        "section": "5만원 구매특전 B",
        "x": 7.8,
        "y": 39,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_pobb_6",
        "name": "강형호 (5만원 구매특전 B)",
        "section": "5만원 구매특전 B",
        "x": 29.7,
        "y": 39,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_pobb_7",
        "name": "조민규 (5만원 구매특전 B)",
        "section": "5만원 구매특전 B",
        "x": 51.6,
        "y": 39,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_pobb_8",
        "name": "고우림 (5만원 구매특전 B)",
        "section": "5만원 구매특전 B",
        "x": 73.5,
        "y": 39,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_pouch_9",
        "name": "배두훈 (벨벳 파우치)",
        "section": "벨벳 파우치",
        "x": 7.8,
        "y": 54.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_pouch_10",
        "name": "강형호 (벨벳 파우치)",
        "section": "벨벳 파우치",
        "x": 29.7,
        "y": 54.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_pouch_11",
        "name": "조민규 (벨벳 파우치)",
        "section": "벨벳 파우치",
        "x": 51.6,
        "y": 54.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_pouch_12",
        "name": "고우림 (벨벳 파우치)",
        "section": "벨벳 파우치",
        "x": 73.5,
        "y": 54.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_scarf_13",
        "name": "배두훈 (스카프)",
        "section": "스카프",
        "x": 7.8,
        "y": 70,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_scarf_14",
        "name": "강형호 (스카프)",
        "section": "스카프",
        "x": 29.7,
        "y": 70,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_scarf_15",
        "name": "조민규 (스카프)",
        "section": "스카프",
        "x": 51.6,
        "y": 70,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_scarf_16",
        "name": "고우림 (스카프)",
        "section": "스카프",
        "x": 73.5,
        "y": 70,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_camera_17",
        "name": "배두훈 (일회용 카메라 세트)",
        "section": "일회용 카메라 세트",
        "x": 7.8,
        "y": 85.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_camera_18",
        "name": "강형호 (일회용 카메라 세트)",
        "section": "일회용 카메라 세트",
        "x": 29.7,
        "y": 85.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_camera_19",
        "name": "조민규 (일회용 카메라 세트)",
        "section": "일회용 카메라 세트",
        "x": 51.6,
        "y": 85.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
      },
      {
        "id": "fore23_camera_20",
        "name": "고우림 (일회용 카메라 세트)",
        "section": "일회용 카메라 세트",
        "x": 73.5,
        "y": 85.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 6
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
        "id": "fore24_pob_1",
        "name": "배두훈 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 7.8,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore24_pob_2",
        "name": "강형호 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 29.7,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore24_pob_3",
        "name": "조민규 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 51.6,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore24_pob_4",
        "name": "고우림 (5만원 구매특전)",
        "section": "5만원 구매특전",
        "x": 73.5,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore24_incense_5",
        "name": "배두훈 (페이퍼 인센스 세트)",
        "section": "페이퍼 인센스 세트",
        "x": 7.8,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore24_incense_6",
        "name": "강형호 (페이퍼 인센스 세트)",
        "section": "페이퍼 인센스 세트",
        "x": 29.7,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore24_incense_7",
        "name": "조민규 (페이퍼 인센스 세트)",
        "section": "페이퍼 인센스 세트",
        "x": 51.6,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore24_incense_8",
        "name": "고우림 (페이퍼 인센스 세트)",
        "section": "페이퍼 인센스 세트",
        "x": 73.5,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
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
        "id": "fore25_group",
        "name": "초도한정 단체",
        "section": "초도 한정 특전",
        "x": 4.5,
        "y": 48.8,
        "w": 16.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore25_1",
        "name": "배두훈 (초도 한정 특전)",
        "section": "초도 한정 특전",
        "x": 23.5,
        "y": 48.8,
        "w": 16.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore25_2",
        "name": "강형호 (초도 한정 특전)",
        "section": "초도 한정 특전",
        "x": 42.8,
        "y": 48.8,
        "w": 16.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore25_3",
        "name": "조민규 (초도 한정 특전)",
        "section": "초도 한정 특전",
        "x": 62.1,
        "y": 48.8,
        "w": 16.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore25_4",
        "name": "고우림 (초도 한정 특전)",
        "section": "초도 한정 특전",
        "x": 81.4,
        "y": 48.8,
        "w": 16.5,
        "h": 42.5,
        "radius": 12
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
        "id": "fore26_pob_1",
        "name": "배두훈 (5만원 구매증정)",
        "section": "5만원 구매증정",
        "x": 7.8,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_pob_2",
        "name": "강형호 (5만원 구매증정)",
        "section": "5만원 구매증정",
        "x": 29.7,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_pob_3",
        "name": "조민규 (5만원 구매증정)",
        "section": "5만원 구매증정",
        "x": 51.6,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_pob_4",
        "name": "고우림 (5만원 구매증정)",
        "section": "5만원 구매증정",
        "x": 73.5,
        "y": 23.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_photobook_5",
        "name": "배두훈 (포토북 세트)",
        "section": "포토북 세트",
        "x": 7.8,
        "y": 39.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_photobook_6",
        "name": "강형호 (포토북 세트)",
        "section": "포토북 세트",
        "x": 29.7,
        "y": 39.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_photobook_7",
        "name": "조민규 (포토북 세트)",
        "section": "포토북 세트",
        "x": 51.6,
        "y": 39.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_photobook_8",
        "name": "고우림 (포토북 세트)",
        "section": "포토북 세트",
        "x": 73.5,
        "y": 39.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_candle_9",
        "name": "배두훈 (향초)",
        "section": "향초",
        "x": 7.8,
        "y": 55.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_candle_10",
        "name": "강형호 (향초)",
        "section": "향초",
        "x": 29.7,
        "y": 55.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_candle_11",
        "name": "조민규 (향초)",
        "section": "향초",
        "x": 51.6,
        "y": 55.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_candle_12",
        "name": "고우림 (향초)",
        "section": "향초",
        "x": 73.5,
        "y": 55.5,
        "w": 18.5,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore26_13",
        "name": "텀블러백 (단체)",
        "section": "텀블러백",
        "x": 5,
        "y": 71.5,
        "w": 27.5,
        "h": 11.5,
        "radius": 8
      },
      {
        "id": "fore26_14",
        "name": "긴팔 티셔츠 (단체)",
        "section": "긴팔 티셔츠",
        "x": 36.2,
        "y": 71.5,
        "w": 27.5,
        "h": 11.5,
        "radius": 8
      },
      {
        "id": "fore26_15",
        "name": "버킷햇 (단체)",
        "section": "버킷햇",
        "x": 67.5,
        "y": 71.5,
        "w": 27.5,
        "h": 11.5,
        "radius": 8
      },
      {
        "id": "fore26_16",
        "name": "지비츠 세트 (단체)",
        "section": "지비츠 세트",
        "x": 18,
        "y": 85.5,
        "w": 29.5,
        "h": 11.5,
        "radius": 8
      },
      {
        "id": "fore26_17",
        "name": "마스킹 테이프 (단체)",
        "section": "마스킹 테이프",
        "x": 52.5,
        "y": 85.5,
        "w": 29.5,
        "h": 11.5,
        "radius": 8
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
        "id": "fore27_front_1",
        "name": "배두훈 (쿠키세트 앞면)",
        "section": "쿠키세트 앞면",
        "x": 7.8,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore27_front_2",
        "name": "강형호 (쿠키세트 앞면)",
        "section": "쿠키세트 앞면",
        "x": 29.7,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore27_front_3",
        "name": "조민규 (쿠키세트 앞면)",
        "section": "쿠키세트 앞면",
        "x": 51.6,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore27_front_4",
        "name": "고우림 (쿠키세트 앞면)",
        "section": "쿠키세트 앞면",
        "x": 73.5,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore27_back_5",
        "name": "배두훈 (쿠키세트 뒷면(메시지))",
        "section": "쿠키세트 뒷면(메시지)",
        "x": 7.8,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore27_back_6",
        "name": "강형호 (쿠키세트 뒷면(메시지))",
        "section": "쿠키세트 뒷면(메시지)",
        "x": 29.7,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore27_back_7",
        "name": "조민규 (쿠키세트 뒷면(메시지))",
        "section": "쿠키세트 뒷면(메시지)",
        "x": 51.6,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore27_back_8",
        "name": "고우림 (쿠키세트 뒷면(메시지))",
        "section": "쿠키세트 뒷면(메시지)",
        "x": 73.5,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
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
        "id": "fore28_cardigan_1",
        "name": "배두훈 (가디건)",
        "section": "가디건",
        "x": 4.2,
        "y": 28.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_cardigan_2",
        "name": "강형호 (가디건)",
        "section": "가디건",
        "x": 21.57,
        "y": 28.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_cardigan_3",
        "name": "조민규 (가디건)",
        "section": "가디건",
        "x": 38.94,
        "y": 28.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_cardigan_4",
        "name": "고우림 (가디건)",
        "section": "가디건",
        "x": 56.31,
        "y": 28.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_5",
        "name": "에코백 (단체)",
        "section": "에코백",
        "x": 73.4,
        "y": 28.5,
        "w": 22.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_6",
        "name": "배두훈 (포토카드 세트 1)",
        "section": "포토카드 세트 1",
        "x": 4.2,
        "y": 47.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_7",
        "name": "강형호 (포토카드 세트 1)",
        "section": "포토카드 세트 1",
        "x": 21.57,
        "y": 47.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_8",
        "name": "조민규 (포토카드 세트 1)",
        "section": "포토카드 세트 1",
        "x": 38.94,
        "y": 47.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_9",
        "name": "고우림 (포토카드 세트 1)",
        "section": "포토카드 세트 1",
        "x": 56.31,
        "y": 47.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_10",
        "name": "포카세트 단체 1",
        "section": "포토카드 세트",
        "x": 73.4,
        "y": 50,
        "w": 22.5,
        "h": 10.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_11",
        "name": "배두훈 (포토카드 세트 2)",
        "section": "포토카드 세트 2",
        "x": 4.2,
        "y": 65.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_12",
        "name": "강형호 (포토카드 세트 2)",
        "section": "포토카드 세트 2",
        "x": 21.57,
        "y": 65.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_13",
        "name": "조민규 (포토카드 세트 2)",
        "section": "포토카드 세트 2",
        "x": 38.94,
        "y": 65.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_14",
        "name": "고우림 (포토카드 세트 2)",
        "section": "포토카드 세트 2",
        "x": 56.31,
        "y": 65.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_15",
        "name": "포카세트 단체 2",
        "section": "포토카드 세트",
        "x": 73.4,
        "y": 68,
        "w": 22.5,
        "h": 10.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_16",
        "name": "배두훈 (포토카드 세트 3)",
        "section": "포토카드 세트 3",
        "x": 4.2,
        "y": 83.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_17",
        "name": "강형호 (포토카드 세트 3)",
        "section": "포토카드 세트 3",
        "x": 21.57,
        "y": 83.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_18",
        "name": "조민규 (포토카드 세트 3)",
        "section": "포토카드 세트 3",
        "x": 38.94,
        "y": 83.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_pcset_19",
        "name": "고우림 (포토카드 세트 3)",
        "section": "포토카드 세트 3",
        "x": 56.31,
        "y": 83.5,
        "w": 14.37,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore28_20",
        "name": "포카세트 단체 3",
        "section": "포토카드 세트",
        "x": 73.4,
        "y": 86,
        "w": 22.5,
        "h": 10.5,
        "radius": 8
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
        "name": "배두훈 (포토카드)",
        "section": "포토카드",
        "x": 4.5,
        "y": 48.8,
        "w": 16.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore29_2",
        "name": "강형호 (포토카드)",
        "section": "포토카드",
        "x": 23.4,
        "y": 48.8,
        "w": 16.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore29_3",
        "name": "조민규 (포토카드)",
        "section": "포토카드",
        "x": 42.3,
        "y": 48.8,
        "w": 16.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore29_4",
        "name": "고우림 (포토카드)",
        "section": "포토카드",
        "x": 61.2,
        "y": 48.8,
        "w": 16.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore29_group",
        "name": "포토카드 (단체)",
        "section": "포토카드",
        "x": 75.5,
        "y": 55.5,
        "w": 21,
        "h": 28.5,
        "radius": 12
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
        "id": "fore30_left_1",
        "name": "배두훈 (양털 파우치)",
        "section": "양털 파우치",
        "x": 2.5,
        "y": 32.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_2",
        "name": "강형호 (양털 파우치)",
        "section": "양털 파우치",
        "x": 13.7,
        "y": 32.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_3",
        "name": "조민규 (양털 파우치)",
        "section": "양털 파우치",
        "x": 24.9,
        "y": 32.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_4",
        "name": "고우림 (양털 파우치)",
        "section": "양털 파우치",
        "x": 36.1,
        "y": 32.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_5",
        "name": "배두훈 (담요)",
        "section": "담요",
        "x": 2.5,
        "y": 53.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_6",
        "name": "강형호 (담요)",
        "section": "담요",
        "x": 13.7,
        "y": 53.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_7",
        "name": "조민규 (담요)",
        "section": "담요",
        "x": 24.9,
        "y": 53.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_8",
        "name": "고우림 (담요)",
        "section": "담요",
        "x": 36.1,
        "y": 53.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_9",
        "name": "배두훈 (콜렉트북)",
        "section": "콜렉트북",
        "x": 2.5,
        "y": 74.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_10",
        "name": "강형호 (콜렉트북)",
        "section": "콜렉트북",
        "x": 13.7,
        "y": 74.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_11",
        "name": "조민규 (콜렉트북)",
        "section": "콜렉트북",
        "x": 24.9,
        "y": 74.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_left_12",
        "name": "고우림 (콜렉트북)",
        "section": "콜렉트북",
        "x": 36.1,
        "y": 74.5,
        "w": 9.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_right_13",
        "name": "배두훈 (틴케이스 세트 1)",
        "section": "틴케이스 세트 1",
        "x": 51.5,
        "y": 32.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_right_14",
        "name": "강형호 (틴케이스 세트 1)",
        "section": "틴케이스 세트 1",
        "x": 61.5,
        "y": 32.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_right_15",
        "name": "조민규 (틴케이스 세트 1)",
        "section": "틴케이스 세트 1",
        "x": 71.5,
        "y": 32.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_right_16",
        "name": "고우림 (틴케이스 세트 1)",
        "section": "틴케이스 세트 1",
        "x": 81.5,
        "y": 32.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_17",
        "name": "틴케이스 단체 1",
        "section": "틴케이스 세트",
        "x": 91.5,
        "y": 35.5,
        "w": 7.2,
        "h": 11.5,
        "radius": 6
      },
      {
        "id": "fore30_right_18",
        "name": "배두훈 (틴케이스 세트 2)",
        "section": "틴케이스 세트 2",
        "x": 51.5,
        "y": 53.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_right_19",
        "name": "강형호 (틴케이스 세트 2)",
        "section": "틴케이스 세트 2",
        "x": 61.5,
        "y": 53.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_right_20",
        "name": "조민규 (틴케이스 세트 2)",
        "section": "틴케이스 세트 2",
        "x": 71.5,
        "y": 53.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_right_21",
        "name": "고우림 (틴케이스 세트 2)",
        "section": "틴케이스 세트 2",
        "x": 81.5,
        "y": 53.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_22",
        "name": "틴케이스 단체 2",
        "section": "틴케이스 세트",
        "x": 91.5,
        "y": 56.5,
        "w": 7.2,
        "h": 11.5,
        "radius": 6
      },
      {
        "id": "fore30_right_23",
        "name": "배두훈 (틴케이스 세트 3)",
        "section": "틴케이스 세트 3",
        "x": 51.5,
        "y": 74.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_right_24",
        "name": "강형호 (틴케이스 세트 3)",
        "section": "틴케이스 세트 3",
        "x": 61.5,
        "y": 74.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_right_25",
        "name": "조민규 (틴케이스 세트 3)",
        "section": "틴케이스 세트 3",
        "x": 71.5,
        "y": 74.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_right_26",
        "name": "고우림 (틴케이스 세트 3)",
        "section": "틴케이스 세트 3",
        "x": 81.5,
        "y": 74.5,
        "w": 8.8,
        "h": 17.5,
        "radius": 6
      },
      {
        "id": "fore30_27",
        "name": "틴케이스 단체 3",
        "section": "틴케이스 세트",
        "x": 91.5,
        "y": 77.5,
        "w": 7.2,
        "h": 11.5,
        "radius": 6
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
        "id": "fore31_r1_1",
        "name": "배두훈 (포토카드 세트 A)",
        "section": "포토카드 세트 A",
        "x": 7.8,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore31_r1_2",
        "name": "강형호 (포토카드 세트 A)",
        "section": "포토카드 세트 A",
        "x": 29.7,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore31_r1_3",
        "name": "조민규 (포토카드 세트 A)",
        "section": "포토카드 세트 A",
        "x": 51.6,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore31_r1_4",
        "name": "고우림 (포토카드 세트 A)",
        "section": "포토카드 세트 A",
        "x": 73.5,
        "y": 41.5,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore31_r2_5",
        "name": "배두훈 (포토카드 세트 B)",
        "section": "포토카드 세트 B",
        "x": 7.8,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore31_r2_6",
        "name": "강형호 (포토카드 세트 B)",
        "section": "포토카드 세트 B",
        "x": 29.7,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore31_r2_7",
        "name": "조민규 (포토카드 세트 B)",
        "section": "포토카드 세트 B",
        "x": 51.6,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
        "radius": 10
      },
      {
        "id": "fore31_r2_8",
        "name": "고우림 (포토카드 세트 B)",
        "section": "포토카드 세트 B",
        "x": 73.5,
        "y": 70.8,
        "w": 18.5,
        "h": 23,
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
        "name": "배두훈 (포토카드 세트 A)",
        "section": "포토카드 세트 A",
        "x": 4.2,
        "y": 28.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_2",
        "name": "강형호 (포토카드 세트 A)",
        "section": "포토카드 세트 A",
        "x": 21.57,
        "y": 28.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_3",
        "name": "조민규 (포토카드 세트 A)",
        "section": "포토카드 세트 A",
        "x": 38.94,
        "y": 28.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_4",
        "name": "고우림 (포토카드 세트 A)",
        "section": "포토카드 세트 A",
        "x": 56.31,
        "y": 28.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_5",
        "name": "포토카드 세트 A 단체",
        "section": "포토카드 세트 A",
        "x": 73.4,
        "y": 30.5,
        "w": 22.5,
        "h": 9.5,
        "radius": 8
      },
      {
        "id": "fore32_6",
        "name": "배두훈 (포토카드 세트 B)",
        "section": "포토카드 세트 B",
        "x": 4.2,
        "y": 44.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_7",
        "name": "강형호 (포토카드 세트 B)",
        "section": "포토카드 세트 B",
        "x": 21.57,
        "y": 44.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_8",
        "name": "조민규 (포토카드 세트 B)",
        "section": "포토카드 세트 B",
        "x": 38.94,
        "y": 44.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_9",
        "name": "고우림 (포토카드 세트 B)",
        "section": "포토카드 세트 B",
        "x": 56.31,
        "y": 44.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_10",
        "name": "포토카드 세트 B 단체",
        "section": "포토카드 세트 B",
        "x": 73.4,
        "y": 46.5,
        "w": 22.5,
        "h": 9.5,
        "radius": 8
      },
      {
        "id": "fore32_11",
        "name": "배두훈 (폴라로이드 세트 A)",
        "section": "폴라로이드 세트 A",
        "x": 4.2,
        "y": 64.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_12",
        "name": "강형호 (폴라로이드 세트 A)",
        "section": "폴라로이드 세트 A",
        "x": 21.57,
        "y": 64.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_13",
        "name": "조민규 (폴라로이드 세트 A)",
        "section": "폴라로이드 세트 A",
        "x": 38.94,
        "y": 64.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_14",
        "name": "고우림 (폴라로이드 세트 A)",
        "section": "폴라로이드 세트 A",
        "x": 56.31,
        "y": 64.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_15",
        "name": "폴라로이드 세트 A 단체",
        "section": "폴라로이드 세트 A",
        "x": 73.4,
        "y": 66.5,
        "w": 22.5,
        "h": 9.5,
        "radius": 8
      },
      {
        "id": "fore32_16",
        "name": "배두훈 (폴라로이드 세트 B)",
        "section": "폴라로이드 세트 B",
        "x": 4.2,
        "y": 80.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_17",
        "name": "강형호 (폴라로이드 세트 B)",
        "section": "폴라로이드 세트 B",
        "x": 21.57,
        "y": 80.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_18",
        "name": "조민규 (폴라로이드 세트 B)",
        "section": "폴라로이드 세트 B",
        "x": 38.94,
        "y": 80.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_19",
        "name": "고우림 (폴라로이드 세트 B)",
        "section": "폴라로이드 세트 B",
        "x": 56.31,
        "y": 80.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore32_20",
        "name": "폴라로이드 세트 B 단체",
        "section": "폴라로이드 세트 B",
        "x": 73.4,
        "y": 82.5,
        "w": 22.5,
        "h": 9.5,
        "radius": 8
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
        "name": "배두훈 (포토카드)",
        "section": "포토카드",
        "x": 7.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore33_2",
        "name": "강형호 (포토카드)",
        "section": "포토카드",
        "x": 29.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore33_3",
        "name": "조민규 (포토카드)",
        "section": "포토카드",
        "x": 51.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
      },
      {
        "id": "fore33_4",
        "name": "고우림 (포토카드)",
        "section": "포토카드",
        "x": 73.8,
        "y": 48.8,
        "w": 18.5,
        "h": 42.5,
        "radius": 12
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
        "id": "fore34_pc_1",
        "name": "배두훈 (포토카드)",
        "section": "포토카드",
        "x": 3.5,
        "y": 36.5,
        "w": 14.5,
        "h": 24.5,
        "radius": 10
      },
      {
        "id": "fore34_pc_2",
        "name": "강형호 (포토카드)",
        "section": "포토카드",
        "x": 19.8,
        "y": 36.5,
        "w": 14.5,
        "h": 24.5,
        "radius": 10
      },
      {
        "id": "fore34_pc_3",
        "name": "조민규 (포토카드)",
        "section": "포토카드",
        "x": 36.1,
        "y": 36.5,
        "w": 14.5,
        "h": 24.5,
        "radius": 10
      },
      {
        "id": "fore34_pc_4",
        "name": "고우림 (포토카드)",
        "section": "포토카드",
        "x": 52.4,
        "y": 36.5,
        "w": 14.5,
        "h": 24.5,
        "radius": 10
      },
      {
        "id": "fore34_idp1",
        "name": "증명사진 배두훈",
        "section": "증명사진",
        "x": 68.5,
        "y": 36.5,
        "w": 13.5,
        "h": 11.5,
        "radius": 6
      },
      {
        "id": "fore34_idp2",
        "name": "증명사진 강형호",
        "section": "증명사진",
        "x": 83.5,
        "y": 36.5,
        "w": 13.5,
        "h": 11.5,
        "radius": 6
      },
      {
        "id": "fore34_idp3",
        "name": "증명사진 조민규",
        "section": "증명사진",
        "x": 68.5,
        "y": 49.5,
        "w": 13.5,
        "h": 11.5,
        "radius": 6
      },
      {
        "id": "fore34_idp4",
        "name": "증명사진 고우림",
        "section": "증명사진",
        "x": 83.5,
        "y": 49.5,
        "w": 13.5,
        "h": 11.5,
        "radius": 6
      },
      {
        "id": "fore34_idcard_9",
        "name": "배두훈 (아이디 카드)",
        "section": "아이디 카드",
        "x": 3.5,
        "y": 72.5,
        "w": 22.5,
        "h": 20.5,
        "radius": 10
      },
      {
        "id": "fore34_idcard_10",
        "name": "강형호 (아이디 카드)",
        "section": "아이디 카드",
        "x": 28,
        "y": 72.5,
        "w": 22.5,
        "h": 20.5,
        "radius": 10
      },
      {
        "id": "fore34_idcard_11",
        "name": "조민규 (아이디 카드)",
        "section": "아이디 카드",
        "x": 52.5,
        "y": 72.5,
        "w": 22.5,
        "h": 20.5,
        "radius": 10
      },
      {
        "id": "fore34_idcard_12",
        "name": "고우림 (아이디 카드)",
        "section": "아이디 카드",
        "x": 77,
        "y": 72.5,
        "w": 22.5,
        "h": 20.5,
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
        "id": "fore35_pc1_1",
        "name": "배두훈 (포토카드 A)",
        "section": "포토카드 A",
        "x": 4.2,
        "y": 28.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore35_pc1_2",
        "name": "강형호 (포토카드 A)",
        "section": "포토카드 A",
        "x": 21.57,
        "y": 28.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore35_pc1_3",
        "name": "조민규 (포토카드 A)",
        "section": "포토카드 A",
        "x": 38.94,
        "y": 28.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore35_pc1_4",
        "name": "고우림 (포토카드 A)",
        "section": "포토카드 A",
        "x": 56.31,
        "y": 28.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore35_pc1_g",
        "name": "포토카드 A 단체",
        "section": "포토카드 A",
        "x": 73.4,
        "y": 28.5,
        "w": 22.5,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore35_pc2_6",
        "name": "배두훈 (포토카드 B)",
        "section": "포토카드 B",
        "x": 4.2,
        "y": 48.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore35_pc2_7",
        "name": "강형호 (포토카드 B)",
        "section": "포토카드 B",
        "x": 21.57,
        "y": 48.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore35_pc2_8",
        "name": "조민규 (포토카드 B)",
        "section": "포토카드 B",
        "x": 38.94,
        "y": 48.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore35_pc2_9",
        "name": "고우림 (포토카드 B)",
        "section": "포토카드 B",
        "x": 56.31,
        "y": 48.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore35_pc2_g",
        "name": "포토카드 B 단체",
        "section": "포토카드 B",
        "x": 73.4,
        "y": 48.5,
        "w": 22.5,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore35_lenti1_11",
        "name": "배두훈 (렌티큘러 1)",
        "section": "렌티큘러 1",
        "x": 7.8,
        "y": 69.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore35_lenti1_12",
        "name": "강형호 (렌티큘러 1)",
        "section": "렌티큘러 1",
        "x": 29.7,
        "y": 69.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore35_lenti1_13",
        "name": "조민규 (렌티큘러 1)",
        "section": "렌티큘러 1",
        "x": 51.6,
        "y": 69.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore35_lenti1_14",
        "name": "고우림 (렌티큘러 1)",
        "section": "렌티큘러 1",
        "x": 73.5,
        "y": 69.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore35_lenti2_15",
        "name": "배두훈 (렌티큘러 2)",
        "section": "렌티큘러 2",
        "x": 7.8,
        "y": 83.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore35_lenti2_16",
        "name": "강형호 (렌티큘러 2)",
        "section": "렌티큘러 2",
        "x": 29.7,
        "y": 83.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore35_lenti2_17",
        "name": "조민규 (렌티큘러 2)",
        "section": "렌티큘러 2",
        "x": 51.6,
        "y": 83.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore35_lenti2_18",
        "name": "고우림 (렌티큘러 2)",
        "section": "렌티큘러 2",
        "x": 73.5,
        "y": 83.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
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
        "id": "fore36_pc1_1",
        "name": "배두훈 (포토카드 A)",
        "section": "포토카드 A",
        "x": 4.2,
        "y": 28.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore36_pc1_2",
        "name": "강형호 (포토카드 A)",
        "section": "포토카드 A",
        "x": 21.57,
        "y": 28.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore36_pc1_3",
        "name": "조민규 (포토카드 A)",
        "section": "포토카드 A",
        "x": 38.94,
        "y": 28.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore36_pc1_4",
        "name": "고우림 (포토카드 A)",
        "section": "포토카드 A",
        "x": 56.31,
        "y": 28.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore36_pc1_g",
        "name": "포토카드 A 단체",
        "section": "포토카드 A",
        "x": 73.4,
        "y": 28.5,
        "w": 22.5,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore36_pc2_6",
        "name": "배두훈 (포토카드 B)",
        "section": "포토카드 B",
        "x": 4.2,
        "y": 48.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore36_pc2_7",
        "name": "강형호 (포토카드 B)",
        "section": "포토카드 B",
        "x": 21.57,
        "y": 48.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore36_pc2_8",
        "name": "조민규 (포토카드 B)",
        "section": "포토카드 B",
        "x": 38.94,
        "y": 48.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore36_pc2_9",
        "name": "고우림 (포토카드 B)",
        "section": "포토카드 B",
        "x": 56.31,
        "y": 48.5,
        "w": 14.37,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore36_pc2_g",
        "name": "포토카드 B 단체",
        "section": "포토카드 B",
        "x": 73.4,
        "y": 48.5,
        "w": 22.5,
        "h": 16.5,
        "radius": 8
      },
      {
        "id": "fore36_lenti1_11",
        "name": "배두훈 (렌티큘러 1)",
        "section": "렌티큘러 1",
        "x": 7.8,
        "y": 69.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore36_lenti1_12",
        "name": "강형호 (렌티큘러 1)",
        "section": "렌티큘러 1",
        "x": 29.7,
        "y": 69.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore36_lenti1_13",
        "name": "조민규 (렌티큘러 1)",
        "section": "렌티큘러 1",
        "x": 51.6,
        "y": 69.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore36_lenti1_14",
        "name": "고우림 (렌티큘러 1)",
        "section": "렌티큘러 1",
        "x": 73.5,
        "y": 69.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore36_lenti2_15",
        "name": "배두훈 (렌티큘러 2)",
        "section": "렌티큘러 2",
        "x": 7.8,
        "y": 83.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore36_lenti2_16",
        "name": "강형호 (렌티큘러 2)",
        "section": "렌티큘러 2",
        "x": 29.7,
        "y": 83.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore36_lenti2_17",
        "name": "조민규 (렌티큘러 2)",
        "section": "렌티큘러 2",
        "x": 51.6,
        "y": 83.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
      },
      {
        "id": "fore36_lenti2_18",
        "name": "고우림 (렌티큘러 2)",
        "section": "렌티큘러 2",
        "x": 73.5,
        "y": 83.5,
        "w": 18.5,
        "h": 12.5,
        "radius": 8
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
        "id": "fore37_for1_1",
        "name": "배두훈 (FOREST 폴라로이드 멤버)",
        "section": "FOREST 폴라로이드 멤버",
        "x": 7.8,
        "y": 28.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_for1_2",
        "name": "강형호 (FOREST 폴라로이드 멤버)",
        "section": "FOREST 폴라로이드 멤버",
        "x": 29.7,
        "y": 28.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_for1_3",
        "name": "조민규 (FOREST 폴라로이드 멤버)",
        "section": "FOREST 폴라로이드 멤버",
        "x": 51.6,
        "y": 28.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_for1_4",
        "name": "고우림 (FOREST 폴라로이드 멤버)",
        "section": "FOREST 폴라로이드 멤버",
        "x": 73.5,
        "y": 28.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_for2_5",
        "name": "유닛/단체 5 (FOREST 폴라로이드 유닛/단체)",
        "section": "FOREST 폴라로이드 유닛/단체",
        "x": 18.5,
        "y": 45.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_for2_6",
        "name": "유닛/단체 6 (FOREST 폴라로이드 유닛/단체)",
        "section": "FOREST 폴라로이드 유닛/단체",
        "x": 40.4,
        "y": 45.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_for2_7",
        "name": "유닛/단체 7 (FOREST 폴라로이드 유닛/단체)",
        "section": "FOREST 폴라로이드 유닛/단체",
        "x": 62.3,
        "y": 45.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_stel1_8",
        "name": "배두훈 (STELLA 폴라로이드 멤버)",
        "section": "STELLA 폴라로이드 멤버",
        "x": 7.8,
        "y": 64.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_stel1_9",
        "name": "강형호 (STELLA 폴라로이드 멤버)",
        "section": "STELLA 폴라로이드 멤버",
        "x": 29.7,
        "y": 64.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_stel1_10",
        "name": "조민규 (STELLA 폴라로이드 멤버)",
        "section": "STELLA 폴라로이드 멤버",
        "x": 51.6,
        "y": 64.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_stel1_11",
        "name": "고우림 (STELLA 폴라로이드 멤버)",
        "section": "STELLA 폴라로이드 멤버",
        "x": 73.5,
        "y": 64.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_stel2_12",
        "name": "유닛/단체 12 (STELLA 폴라로이드 유닛/단체)",
        "section": "STELLA 폴라로이드 유닛/단체",
        "x": 18.5,
        "y": 81.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_stel2_13",
        "name": "유닛/단체 13 (STELLA 폴라로이드 유닛/단체)",
        "section": "STELLA 폴라로이드 유닛/단체",
        "x": 40.4,
        "y": 81.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
      },
      {
        "id": "fore37_stel2_14",
        "name": "유닛/단체 14 (STELLA 폴라로이드 유닛/단체)",
        "section": "STELLA 폴라로이드 유닛/단체",
        "x": 62.3,
        "y": 81.5,
        "w": 18.5,
        "h": 15.5,
        "radius": 8
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
        "id": "fore38_pc1_1",
        "name": "배두훈 (포토카드 네이비)",
        "section": "포토카드 네이비",
        "x": 4.2,
        "y": 23.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pc1_2",
        "name": "강형호 (포토카드 네이비)",
        "section": "포토카드 네이비",
        "x": 21.57,
        "y": 23.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pc1_3",
        "name": "조민규 (포토카드 네이비)",
        "section": "포토카드 네이비",
        "x": 38.94,
        "y": 23.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pc1_4",
        "name": "고우림 (포토카드 네이비)",
        "section": "포토카드 네이비",
        "x": 56.31,
        "y": 23.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_5",
        "name": "포토카드 네이비 단체",
        "section": "포토카드",
        "x": 73.4,
        "y": 25.5,
        "w": 22.5,
        "h": 9.5,
        "radius": 8
      },
      {
        "id": "fore38_pc2_6",
        "name": "배두훈 (포토카드 화이트)",
        "section": "포토카드 화이트",
        "x": 4.2,
        "y": 38.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pc2_7",
        "name": "강형호 (포토카드 화이트)",
        "section": "포토카드 화이트",
        "x": 21.57,
        "y": 38.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pc2_8",
        "name": "조민규 (포토카드 화이트)",
        "section": "포토카드 화이트",
        "x": 38.94,
        "y": 38.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pc2_9",
        "name": "고우림 (포토카드 화이트)",
        "section": "포토카드 화이트",
        "x": 56.31,
        "y": 38.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_10",
        "name": "포토카드 화이트 단체",
        "section": "포토카드",
        "x": 73.4,
        "y": 40.5,
        "w": 22.5,
        "h": 9.5,
        "radius": 8
      },
      {
        "id": "fore38_id_11",
        "name": "배두훈 (ID 카드)",
        "section": "ID 카드",
        "x": 7.8,
        "y": 54,
        "w": 18.5,
        "h": 12,
        "radius": 6
      },
      {
        "id": "fore38_id_12",
        "name": "강형호 (ID 카드)",
        "section": "ID 카드",
        "x": 29.7,
        "y": 54,
        "w": 18.5,
        "h": 12,
        "radius": 6
      },
      {
        "id": "fore38_id_13",
        "name": "조민규 (ID 카드)",
        "section": "ID 카드",
        "x": 51.6,
        "y": 54,
        "w": 18.5,
        "h": 12,
        "radius": 6
      },
      {
        "id": "fore38_id_14",
        "name": "고우림 (ID 카드)",
        "section": "ID 카드",
        "x": 73.5,
        "y": 54,
        "w": 18.5,
        "h": 12,
        "radius": 6
      },
      {
        "id": "fore38_idp_15",
        "name": "증사 15 (증명사진)",
        "section": "증명사진",
        "x": 4,
        "y": 68,
        "w": 10,
        "h": 9.5,
        "radius": 4
      },
      {
        "id": "fore38_idp_16",
        "name": "증사 16 (증명사진)",
        "section": "증명사진",
        "x": 15.8,
        "y": 68,
        "w": 10,
        "h": 9.5,
        "radius": 4
      },
      {
        "id": "fore38_idp_17",
        "name": "증사 17 (증명사진)",
        "section": "증명사진",
        "x": 27.6,
        "y": 68,
        "w": 10,
        "h": 9.5,
        "radius": 4
      },
      {
        "id": "fore38_idp_18",
        "name": "증사 18 (증명사진)",
        "section": "증명사진",
        "x": 39.4,
        "y": 68,
        "w": 10,
        "h": 9.5,
        "radius": 4
      },
      {
        "id": "fore38_idp_19",
        "name": "증사 19 (증명사진)",
        "section": "증명사진",
        "x": 51.2,
        "y": 68,
        "w": 10,
        "h": 9.5,
        "radius": 4
      },
      {
        "id": "fore38_idp_20",
        "name": "증사 20 (증명사진)",
        "section": "증명사진",
        "x": 63,
        "y": 68,
        "w": 10,
        "h": 9.5,
        "radius": 4
      },
      {
        "id": "fore38_idp_21",
        "name": "증사 21 (증명사진)",
        "section": "증명사진",
        "x": 74.8,
        "y": 68,
        "w": 10,
        "h": 9.5,
        "radius": 4
      },
      {
        "id": "fore38_idp_22",
        "name": "증사 22 (증명사진)",
        "section": "증명사진",
        "x": 86.6,
        "y": 68,
        "w": 10,
        "h": 9.5,
        "radius": 4
      },
      {
        "id": "fore38_pola1_23",
        "name": "배두훈 (예판 폴라로이드 네이비)",
        "section": "예판 폴라로이드 네이비",
        "x": 4.2,
        "y": 79.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pola1_24",
        "name": "강형호 (예판 폴라로이드 네이비)",
        "section": "예판 폴라로이드 네이비",
        "x": 21.57,
        "y": 79.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pola1_25",
        "name": "조민규 (예판 폴라로이드 네이비)",
        "section": "예판 폴라로이드 네이비",
        "x": 38.94,
        "y": 79.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pola1_26",
        "name": "고우림 (예판 폴라로이드 네이비)",
        "section": "예판 폴라로이드 네이비",
        "x": 56.31,
        "y": 79.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_27",
        "name": "예판 폴라로이드 네이비 단체",
        "section": "예판 폴라로이드",
        "x": 73.4,
        "y": 81.5,
        "w": 22.5,
        "h": 9.5,
        "radius": 8
      },
      {
        "id": "fore38_pola2_28",
        "name": "배두훈 (예판 폴라로이드 화이트)",
        "section": "예판 폴라로이드 화이트",
        "x": 4.2,
        "y": 93.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pola2_29",
        "name": "강형호 (예판 폴라로이드 화이트)",
        "section": "예판 폴라로이드 화이트",
        "x": 21.57,
        "y": 93.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pola2_30",
        "name": "조민규 (예판 폴라로이드 화이트)",
        "section": "예판 폴라로이드 화이트",
        "x": 38.94,
        "y": 93.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_pola2_31",
        "name": "고우림 (예판 폴라로이드 화이트)",
        "section": "예판 폴라로이드 화이트",
        "x": 56.31,
        "y": 93.5,
        "w": 14.37,
        "h": 13.5,
        "radius": 8
      },
      {
        "id": "fore38_32",
        "name": "예판 폴라로이드 화이트 단체",
        "section": "예판 폴라로이드",
        "x": 73.4,
        "y": 95.5,
        "w": 22.5,
        "h": 9.5,
        "radius": 8
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
        "id": "fore39_cfac_1",
        "name": "배두훈 (씨팩토리 특전)",
        "section": "씨팩토리 특전",
        "x": 2,
        "y": 20,
        "w": 10.2,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_cfac_2",
        "name": "강형호 (씨팩토리 특전)",
        "section": "씨팩토리 특전",
        "x": 13.6,
        "y": 20,
        "w": 10.2,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_cfac_3",
        "name": "조민규 (씨팩토리 특전)",
        "section": "씨팩토리 특전",
        "x": 25.2,
        "y": 20,
        "w": 10.2,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_cfac_4",
        "name": "고우림 (씨팩토리 특전)",
        "section": "씨팩토리 특전",
        "x": 36.8,
        "y": 20,
        "w": 10.2,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_24s_5",
        "name": "배두훈 (2024 싱글)",
        "section": "2024 싱글",
        "x": 2,
        "y": 35.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_24s_6",
        "name": "강형호 (2024 싱글)",
        "section": "2024 싱글",
        "x": 12.2,
        "y": 35.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_24s_7",
        "name": "조민규 (2024 싱글)",
        "section": "2024 싱글",
        "x": 22.4,
        "y": 35.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_24s_8",
        "name": "고우림 (2024 싱글)",
        "section": "2024 싱글",
        "x": 32.6,
        "y": 35.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_9",
        "name": "2024 싱글 단체",
        "section": "2024 싱글",
        "x": 43.5,
        "y": 37,
        "w": 11.5,
        "h": 8.5,
        "radius": 6
      },
      {
        "id": "fore39_24pob_10",
        "name": "배두훈 (2024 싱글 특전)",
        "section": "2024 싱글 특전",
        "x": 2,
        "y": 50.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_24pob_11",
        "name": "강형호 (2024 싱글 특전)",
        "section": "2024 싱글 특전",
        "x": 12.2,
        "y": 50.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_24pob_12",
        "name": "조민규 (2024 싱글 특전)",
        "section": "2024 싱글 특전",
        "x": 22.4,
        "y": 50.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_24pob_13",
        "name": "고우림 (2024 싱글 특전)",
        "section": "2024 싱글 특전",
        "x": 32.6,
        "y": 50.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_14",
        "name": "2024 싱글 특전 단체",
        "section": "2024 싱글 특전",
        "x": 43.5,
        "y": 52,
        "w": 11.5,
        "h": 8.5,
        "radius": 6
      },
      {
        "id": "fore39_25s_15",
        "name": "배두훈 (2025 싱글)",
        "section": "2025 싱글",
        "x": 2,
        "y": 65.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_25s_16",
        "name": "강형호 (2025 싱글)",
        "section": "2025 싱글",
        "x": 12.2,
        "y": 65.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_25s_17",
        "name": "조민규 (2025 싱글)",
        "section": "2025 싱글",
        "x": 22.4,
        "y": 65.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_25s_18",
        "name": "고우림 (2025 싱글)",
        "section": "2025 싱글",
        "x": 32.6,
        "y": 65.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_19",
        "name": "2025 싱글 단체",
        "section": "2025 싱글",
        "x": 43.5,
        "y": 67,
        "w": 11.5,
        "h": 8.5,
        "radius": 6
      },
      {
        "id": "fore39_25pob_20",
        "name": "배두훈 (2025 싱글 특전)",
        "section": "2025 싱글 특전",
        "x": 2,
        "y": 80.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_25pob_21",
        "name": "강형호 (2025 싱글 특전)",
        "section": "2025 싱글 특전",
        "x": 12.2,
        "y": 80.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_25pob_22",
        "name": "조민규 (2025 싱글 특전)",
        "section": "2025 싱글 특전",
        "x": 22.4,
        "y": 80.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_25pob_23",
        "name": "고우림 (2025 싱글 특전)",
        "section": "2025 싱글 특전",
        "x": 32.6,
        "y": 80.5,
        "w": 9,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_24",
        "name": "2025 싱글 특전 단체",
        "section": "2025 싱글 특전",
        "x": 43.5,
        "y": 82,
        "w": 11.5,
        "h": 8.5,
        "radius": 6
      },
      {
        "id": "fore39_set_unit_25",
        "name": "유닛 25 (2024-25 세트 유닛)",
        "section": "2024-25 세트 유닛",
        "x": 57.5,
        "y": 18.5,
        "w": 8.5,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_set_unit_26",
        "name": "유닛 26 (2024-25 세트 유닛)",
        "section": "2024-25 세트 유닛",
        "x": 67.2,
        "y": 18.5,
        "w": 8.5,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_set_unit_27",
        "name": "유닛 27 (2024-25 세트 유닛)",
        "section": "2024-25 세트 유닛",
        "x": 76.9,
        "y": 18.5,
        "w": 8.5,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_set_unit_28",
        "name": "유닛 28 (2024-25 세트 유닛)",
        "section": "2024-25 세트 유닛",
        "x": 86.6,
        "y": 18.5,
        "w": 8.5,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_set_solo_29",
        "name": "배두훈 (2024-25 세트 솔로)",
        "section": "2024-25 세트 솔로",
        "x": 57.5,
        "y": 33.5,
        "w": 8.5,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_set_solo_30",
        "name": "강형호 (2024-25 세트 솔로)",
        "section": "2024-25 세트 솔로",
        "x": 67.2,
        "y": 33.5,
        "w": 8.5,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_set_solo_31",
        "name": "조민규 (2024-25 세트 솔로)",
        "section": "2024-25 세트 솔로",
        "x": 76.9,
        "y": 33.5,
        "w": 8.5,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_set_solo_32",
        "name": "고우림 (2024-25 세트 솔로)",
        "section": "2024-25 세트 솔로",
        "x": 86.6,
        "y": 33.5,
        "w": 8.5,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_33",
        "name": "세트 단체 1",
        "section": "2024-25 세트",
        "x": 92.5,
        "y": 20,
        "w": 6.8,
        "h": 9,
        "radius": 6
      },
      {
        "id": "fore39_34",
        "name": "세트 단체 2",
        "section": "2024-25 세트",
        "x": 92.5,
        "y": 35,
        "w": 6.8,
        "h": 9,
        "radius": 6
      },
      {
        "id": "fore39_setpob_35",
        "name": "배두훈 (세트 특전 1)",
        "section": "세트 특전 1",
        "x": 57.5,
        "y": 50.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_36",
        "name": "강형호 (세트 특전 1)",
        "section": "세트 특전 1",
        "x": 66.5,
        "y": 50.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_37",
        "name": "조민규 (세트 특전 1)",
        "section": "세트 특전 1",
        "x": 75.5,
        "y": 50.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_38",
        "name": "고우림 (세트 특전 1)",
        "section": "세트 특전 1",
        "x": 84.5,
        "y": 50.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_39",
        "name": "세트 특전 단체 1",
        "section": "세트 특전",
        "x": 93.5,
        "y": 52.5,
        "w": 5.8,
        "h": 8.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_40",
        "name": "배두훈 (세트 특전 2)",
        "section": "세트 특전 2",
        "x": 57.5,
        "y": 65.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_41",
        "name": "강형호 (세트 특전 2)",
        "section": "세트 특전 2",
        "x": 66.5,
        "y": 65.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_42",
        "name": "조민규 (세트 특전 2)",
        "section": "세트 특전 2",
        "x": 75.5,
        "y": 65.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_43",
        "name": "고우림 (세트 특전 2)",
        "section": "세트 특전 2",
        "x": 84.5,
        "y": 65.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_44",
        "name": "세트 특전 단체 2",
        "section": "세트 특전",
        "x": 93.5,
        "y": 67.5,
        "w": 5.8,
        "h": 8.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_45",
        "name": "배두훈 (세트 특전 3)",
        "section": "세트 특전 3",
        "x": 57.5,
        "y": 80.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_46",
        "name": "강형호 (세트 특전 3)",
        "section": "세트 특전 3",
        "x": 66.5,
        "y": 80.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_47",
        "name": "조민규 (세트 특전 3)",
        "section": "세트 특전 3",
        "x": 75.5,
        "y": 80.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_setpob_48",
        "name": "고우림 (세트 특전 3)",
        "section": "세트 특전 3",
        "x": 84.5,
        "y": 80.5,
        "w": 7.8,
        "h": 12.5,
        "radius": 6
      },
      {
        "id": "fore39_49",
        "name": "세트 특전 단체 3",
        "section": "세트 특전",
        "x": 93.5,
        "y": 82.5,
        "w": 5.8,
        "h": 8.5,
        "radius": 6
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.PRESET_CATEGORIES = PRESET_CATEGORIES;
  window.PRESET_TEMPLATES = PRESET_TEMPLATES;
}
if (typeof module !== 'undefined') {
  module.exports = { PRESET_CATEGORIES, PRESET_TEMPLATES };
}

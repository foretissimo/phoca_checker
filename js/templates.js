/**
 * Preset templates metadata and card bounding box definitions
 * Coordinates are defined in percentages (%) so they scale responsively
 * across any viewport resolution and high-res canvas exports.
 */
const PRESET_TEMPLATES = [
  {
    id: 'forestella_150',
    title: '더 포레스텔라 (The Forestella)',
    category: 'The Forestella',
    image: 'images/forestella_150.png',
    originalWidth: 1771,
    originalHeight: 1181,
    borderRadius: 14, // in px relative to card display or scaled
    cards: [
      {
        id: 'fore_1',
        name: '배두훈',
        section: '포토카드',
        x: 7.91,
        y: 48.86,
        w: 18.41,
        h: 42.51,
        radius: 12
      },
      {
        id: 'fore_2',
        name: '강형호',
        section: '포토카드',
        x: 29.81,
        y: 48.86,
        w: 18.41,
        h: 42.51,
        radius: 12
      },
      {
        id: 'fore_3',
        name: '조민규',
        section: '포토카드',
        x: 51.78,
        y: 48.86,
        w: 18.41,
        h: 42.51,
        radius: 12
      },
      {
        id: 'fore_4',
        name: '고우림',
        section: '포토카드',
        x: 73.69,
        y: 48.86,
        w: 18.41,
        h: 42.51,
        radius: 12
      }
    ]
  },
  {
    id: 'mystique_100',
    title: '미스티크 라이브 (Mystique Live)',
    category: 'Mystique',
    image: 'images/mystique_100.png',
    originalWidth: 1181,
    originalHeight: 1575,
    borderRadius: 12,
    cards: [
      // Row 1 - DVD
      {
        id: 'mystique_dvd_1',
        name: '배두훈 (DVD)',
        section: '디비디',
        x: 7.80,
        y: 49.30,
        w: 18.55,
        h: 21.60,
        radius: 10
      },
      {
        id: 'mystique_dvd_2',
        name: '강형호 (DVD)',
        section: '디비디',
        x: 29.70,
        y: 49.30,
        w: 18.55,
        h: 21.60,
        radius: 10
      },
      {
        id: 'mystique_dvd_3',
        name: '조민규 (DVD)',
        section: '디비디',
        x: 51.65,
        y: 49.30,
        w: 18.55,
        h: 21.60,
        radius: 10
      },
      {
        id: 'mystique_dvd_4',
        name: '고우림 (DVD)',
        section: '디비디',
        x: 73.65,
        y: 49.30,
        w: 18.55,
        h: 21.60,
        radius: 10
      },
      // Row 2 - Kit
      {
        id: 'mystique_kit_1',
        name: '배두훈 (키트)',
        section: '키트',
        x: 7.80,
        y: 75.60,
        w: 18.55,
        h: 21.60,
        radius: 10
      },
      {
        id: 'mystique_kit_2',
        name: '강형호 (키트)',
        section: '키트',
        x: 29.70,
        y: 75.60,
        w: 18.55,
        h: 21.60,
        radius: 10
      },
      {
        id: 'mystique_kit_3',
        name: '조민규 (키트)',
        section: '키트',
        x: 51.65,
        y: 75.60,
        w: 18.55,
        h: 21.60,
        radius: 10
      },
      {
        id: 'mystique_kit_4',
        name: '고우림 (키트)',
        section: '키트',
        x: 73.65,
        y: 75.60,
        w: 18.55,
        h: 21.60,
        radius: 10
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.PRESET_TEMPLATES = PRESET_TEMPLATES;
}
if (typeof module !== 'undefined') {
  module.exports = { PRESET_TEMPLATES };
}

/* ─────────────────────────────────────────────────────────────────────────────
   data.js — Single source of truth.
   Modify this file to change what's displayed in the prototype.
   ───────────────────────────────────────────────────────────────────────────── */

export const myWorkspaces = [
  {
    id: 'lbc-groupe',
    name: 'leboncoin groupe',
    members: 49,
    teams: 8,
    isStarred: false,
    avatar: '/assets/img_21.png',
  },
]

export const otherWorkspaces = [
  { id: 'adevinta-brand', name: 'Adevinta Brand', members: 0,  teams: 1,  avatar: '/assets/img_08.png' },
  { id: 'archive',        name: 'Archive',         members: 0,  teams: 18, avatar: '/assets/img_07.png' },
  { id: 'core-tools',     name: 'Core tools',      members: 0,  teams: 4,  avatar: '/assets/img_06.png' },
  { id: 'kijiji',         name: 'Kijiji',           members: 0,  teams: 2,  avatar: '/assets/img_05.png' },
  { id: 'marktplaats',    name: 'Marktplaats',      members: 7,  teams: 0,  avatar: '/assets/img_04.png' },
  { id: 'mobile',         name: 'Mobile',           members: 1,  teams: 1,  avatar: '/assets/img_03.png' },
  { id: 'subito',         name: 'Subito',           members: 5,  teams: 0,  avatar: '/assets/img_02.png' },
]

/* ─────────────────────────────────────────────────────────────────────────────
   COUNTS — edit this to control folders and files.

   Each key = team ID.
   Each entry in the array = one folder. Formats acceptés :
     - nombre seul       → nom auto, N fichiers avec noms auto
     - { files: 5 }      → nom auto, 5 fichiers avec noms auto
     - { name: 'Foo' }   → nom explicite, 0 fichiers
     - { name: 'Foo', files: 5 }                          → nom explicite, 5 fichiers noms auto
     - { name: 'Foo', files: ['A', 'B', 'C'] }            → nom + noms de fichiers explicites
   ───────────────────────────────────────────────────────────────────────────── */
const sub = (name, files = []) => ({ name, files })

export const COUNTS = {
  'designops-lbc': [
    { name: '00. [WIP] Rebranding',      files: ['Spark', 'Horizontal', 'Real Estate'] },
    { name: '01. UI Kits',               files: ['leboncoin Global Component Library', 'Spark Design System', 'leboncoin Common Library'] },
    { name: '02. Visual asset',          files: ['leboncoin Illustrations Components', 'leboncoin Iconography'] },
    { name: '03. Guidelines & processes',files: ['Spark Components Specs', 'Plugin Unify', 'Design Guidelines'] },
    { name: '04. CRM & Emails',          files: ['Awareness 2025', 'Illustrations System', 'Dartagnan PART', 'Landing Page'] },
    { name: '05. Playground',            files: ['LabUI', 'LabLabUI', 'AdView'] },
    { name: '🗃️ Archives',               files: ['Organisation des fichiers Figma', 'Sketches', 'Spark Rebranding'] },
  ],
  'leboncoin':     [
    { name: '🔄 Transverse', files: [
      sub('Discovery et Research - 🔄 Transverse', [
        'Prototype DFD Février 2026 - 🔄 Transverse', 'Prototype DFD Juillet 2026 - 🔄 Transverse',
        'Onboarding - nouvelles fonctionnalités', 'Planning - 🔄 Transverse', sub('🗃️ Archives'),
      ]), 'Listing (BDC)', 'Adview (BDC)', 'Contact', 'Homepage (BDC)',
      'Dépôt (BDC)', 'Favoris', 'Mon compte', 'Création de compte', '404 & 500 pages', 'Cookie', 'FAQ',
      'Legal Page', sub('🗃️ Archives'),
    ] },
    { name: '💸 Transaction', files: [
      sub('Discovery et Research', [
        'Prototype DFD Mai 2026 - 💸 Transaction', 'Prototype DFD Janvier 2026 - 💸 Transaction',
        'Planning - 💸 Transaction', sub('🗃️ Archives'),
      ]),
      'Livraison XL', 'Internal PSP', 'Purchase flow', 'Monetization',
      'New Business Model', 'Addon', 'Explore', 'Face à face "Happy Path"',
      'Annulation et expiration "Unhappy Path"', "Vérification d'identité", 'Litige "Unhappy Path"',
      'Négociation', 'Choix de livraison', 'Expérience post-achat', 'Publicité', sub('🗃️ Archives'),
    ] },
    { name: '🏠 Immobilier', files: [
      sub('Discovery et Research - 🏠 Immobilier', [
        'Prototype DFD Avril 2026 - 🏠 Immobilier', 'Prototype DFD Novembre 2026 - 🏠 Immobilier',
        'Prototype Maps - 🏠 Immobilier',
        'Persona 2026 - 🏠 Immobilier', 'Vision Produit Part 2026 - 🏠 Immobilier', 'Augmentation leads - 🏠 Immobilier',
        'Planning - 🏠 Immobilier',
      ]),
      'Homepage - 🏠 Immobilier', 'Search Funnel - 🏠 Immobilier',
      'Adview - 🏠 Immobilier', 'Listing - 🏠 Immobilier', 'Vue carte - 🏠 Immobilier', 'Dépôt - 🏠 Immobilier',
      'SEO - 🏠 Immobilier', 'Filter - 🏠 Immobilier', 'Contact - 🏠 Immobilier', 'Estimation bien - 🏠 Immobilier',
      'Pass Locataire+ - 🏠 Immobilier', 'Dosssier Locataire - 🏠 Immobilier',
      'Taskforce Lead Saved Search - 🏠 Immobilier', 'Multi-Apply - 🏠 Immobilier',
      'Location Filter - 🏠 Immobilier', 'Financement - 🏠 Immobilier', 'Visual Tour - 🏠 Immobilier',
      'Site Immo Neuf - 🏠 Immobilier', sub('🗃️ Archives'),
    ] },
    { name: '🚘 Automobile', files: [
      sub('Discovery et Research - 🚘 Automobile', [
        'Prototype DFD Juin 2026 - 🚘 Automobile', 'Prototype DFD Janvier 2026 - 🚘 Automobile',
        'Vision C2C - 🚘 Automobile', 'Planning - 🚘 Automobile',
      ]),
      'Homepage - 🚘 Automobile', 'Search Funnel - 🚘 Automobile',
      'Adview - 🚘 Automobile', 'Listing - 🚘 Automobile', 'Dépôt - 🚘 Automobile', 'SEO - 🚘 Automobile',
      'Filter - 🚘 Automobile', 'Contact - 🚘 Automobile', 'Transaction - 🚘 Automobile',
      'Sonar Pricing - 🚘 Automobile', 'Référencement - 🚘 Automobile', sub('🗃️ Archives'),
    ] },
    { name: '🏗️ Matériel Professionnel', files: [sub('Discovery et Research - 🏗️ Matériel Professionnel'), 'Mat Pro', sub('🗃️ Archives')] },
    { name: '🌴 Vacances', files: ['Calendrier réservation - 🌴 Vacances', 'Réservation location - 🌴 Vacances'] },
    { name: '💼 Emploi', files: ['Candidature - 💼 Emploi'] },
    { name: '💼 Professionnel', files: [
      sub('Discovery et Research - 💼 Professionnel', ['Disco Homepage Pro - 💼 Professionnel']),
      'Création de compte - 💼 Professionnel', 'Compte - 💼 Professionnel',
      "Vérification d'identité - 💼 Professionnel", "Page d'entreprise - 💼 Professionnel", 'Score de complétion',
      'Homepage - 💼 Professionnel', 'Listing & Adview - 💼 Professionnel', 'Contact - 💼 Professionnel',
      'Valeur Argus - 💼 Professionnel', 'Sonar Pricing - 💼 Professionnel', 'Call Tracking',
      'Optimiser mon annonce', sub('🗃️ Archives'),
    ] },
    { name: '🧐 Discovery et Research', files: ['Bonnes pratiques', 'Personas', 'Journey map', 'Vision UX', sub('🗃️ Archives')] },
  ],
}

function normalizeFolder(entry) {
  if (typeof entry === 'number') return { name: null, fileCount: entry, fileNames: null }
  const files = entry.files ?? 0
  if (typeof files === 'number') return { name: entry.name ?? null, fileCount: files, fileNames: null }
  return { name: entry.name ?? null, fileCount: files.length, fileNames: files }
}

// folder_img_00–39 are thumbnails, _40–48 are profile pics
const THUMB_COUNT = 40
function seededRand(seed) {
  let s = seed
  return () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }
}
function pickThumbs(seed, n) {
  const rng = seededRand(seed)
  const used = new Set()
  const out = []
  while (out.length < n) {
    const i = Math.floor(rng() * THUMB_COUNT)
    if (!used.has(i)) { used.add(i); out.push(i) }
  }
  return out
}
function ext(i) { return i === 0 || i === 11 || i === 12 ? 'png' : 'webp' }

const FOLDER_NAMES = [
  ['Design System', 'Atoms & Tokens', 'Icons library', 'Components', 'Prototypes', 'Archives', 'Explorations'],
  ['UX Research', 'Wireframes', 'User testing', 'Flows', 'Concepts'],
  ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Backlog', 'Spec sheets'],
  ['Brand identity', 'Marketing assets', 'Social media', 'Print', 'Motion'],
  ['Web', 'Mobile iOS', 'Mobile Android', 'Tablet', 'Design specs'],
  ['Onboarding', 'Navigation', 'Search', 'Checkout', 'Profile', 'Settings'],
  ['2024 Q1', '2024 Q2', '2024 Q3', 'Retrospectives'],
]

function makeFolders(teamId, entries) {
  const seed = teamId.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  const rng = seededRand(seed)
  const nameSet = FOLDER_NAMES[Math.floor(rng() * FOLDER_NAMES.length)]
  const ages = ['2 minutes ago', '1 hour ago', 'yesterday', '3 days ago', 'last week', '2 weeks ago', 'last month']
  return entries.map((entry, i) => {
    const { name } = normalizeFolder(entry)
    const thumbs = pickThumbs(seed + i * 17, 3)
    return {
      name: name ?? nameSet[i % nameSet.length],
      updatedAgo: ages[Math.floor(seededRand(seed + i)() * ages.length)],
      thumbs: thumbs.map(n => `/assets/folder_img_${String(n).padStart(2,'0')}.${ext(n)}`),
    }
  })
}

export const teamFolders = Object.fromEntries(
  Object.entries(COUNTS).map(([id, entries]) => [id, makeFolders(id, entries)])
)

// Files inside folders
const FILES_IMG_COUNT = 22 // files_img_00–21 are thumbnails
const FILE_NAMES = [
  ['Listing', 'Search Funnel', 'Ad details', 'Checkout', 'Profile', 'Notifications'],
  ['Design System', 'Components', 'Icons', 'Tokens', 'Prototypes', 'Specs'],
  ['Sprint kickoff', 'User flows', 'Wireframes', 'Final designs', 'Handoff'],
  ['Mobile v1', 'Mobile v2', 'Web', 'Responsive', 'Accessibility'],
  ['Research findings', 'User interviews', 'Usability tests', 'Personas', 'Journey maps'],
  ['Brand guidelines', 'Logo usage', 'Typography', 'Colors', 'Templates'],
]
const FILE_TYPES = ['Design file', 'Prototype', 'Published file']
const FILE_TYPE_ICONS = {
  'Design file': `<svg width="16" height="16" fill="none" viewBox="0 0 16 16" aria-label="Design file" data-fpl-icon-size="16"><path fill="var(--fpl-icon-color, var(--color-icon))" fill-rule="evenodd" d="M3 3.75A.75.75 0 0 1 3.75 3h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75h-8.5A.75.75 0 0 1 3 12.25zm1 .25v8h8V4z" clip-rule="evenodd"></path></svg>`,
  'Prototype': `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Prototype" data-fpl-icon-size="16"><g clip-path="url(#proto_clip)"><path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2Z" fill="#3729FF"/><path d="M4.13997 3.20698C4.25737 3.11671 4.39336 3.05365 4.53811 3.02235C4.68286 2.99105 4.83276 2.99229 4.97697 3.02598L8.73897 3.90398C9.74365 4.13854 10.6394 4.70615 11.2805 5.51447C11.9216 6.3228 12.2703 7.32428 12.27 8.35598L12.707 8.79198C12.7999 8.88485 12.8737 8.99514 12.924 9.11654C12.9744 9.23793 13.0003 9.36806 13.0003 9.49948C13.0003 9.63089 12.9744 9.76102 12.924 9.88242C12.8737 10.0038 12.7999 10.1141 12.707 10.207L10.207 12.707C10.0194 12.8944 9.76513 12.9998 9.49997 12.9998C9.2348 12.9998 8.98049 12.8944 8.79297 12.707L8.35597 12.27C7.36171 12.27 6.39457 11.9457 5.60125 11.3464C4.80793 10.7471 4.2317 9.90538 3.95997 8.94898L3.90597 8.73898L3.02697 4.97698C2.98825 4.81128 2.99245 4.63845 3.03917 4.47484C3.08589 4.31122 3.17359 4.16224 3.29397 4.04198L4.04397 3.29198L4.13997 3.20698ZM4.72997 4.01998L7.35297 6.64398L7.34697 6.64998C7.66608 6.49559 8.02955 6.45921 8.37293 6.54729C8.71631 6.63536 9.0174 6.84221 9.22279 7.13113C9.42819 7.42006 9.52462 7.77239 9.49499 8.12565C9.46535 8.4789 9.31156 8.81024 9.0609 9.06091C8.81023 9.31157 8.47889 9.46536 8.12564 9.495C7.77238 9.52463 7.42005 9.4282 7.13112 9.2228C6.8422 9.01741 6.63535 8.71632 6.54728 8.37294C6.4592 8.02956 6.49558 7.66609 6.64997 7.34698L6.64597 7.35098L4.02197 4.72698L3.99997 4.74898L4.87897 8.51198C5.07806 9.36233 5.58172 10.1103 6.29476 10.6146C7.00781 11.1189 7.88086 11.3446 8.74897 11.249L9.49897 11.999L12 9.49998L11.25 8.74998C11.3467 7.88144 11.1216 7.00757 10.6171 6.29395C10.1127 5.58032 9.36403 5.07651 8.51297 4.87798L4.74997 3.99998L4.72997 4.01998ZM7.99997 7.49998C7.86736 7.49998 7.74018 7.55265 7.64641 7.64642C7.55265 7.74019 7.49997 7.86737 7.49997 7.99998C7.49997 8.13258 7.55265 8.25976 7.64641 8.35353C7.74018 8.4473 7.86736 8.49998 7.99997 8.49998C8.13258 8.49998 8.25975 8.4473 8.35352 8.35353C8.44729 8.25976 8.49997 8.13258 8.49997 7.99998C8.49997 7.86737 8.44729 7.74019 8.35352 7.64642C8.25975 7.55265 8.13258 7.49998 7.99997 7.49998Z" fill-rule="evenodd" clip-rule="evenodd" fill="white"/></g><defs><clipPath id="proto_clip"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>`,
  'Published file': `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Published file" data-fpl-icon-size="16"><g clip-path="url(#lib_clip)"><path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2Z" fill="#2F5CFF"/><path d="M13.03 3.55997C12.3281 3.18745 11.5446 2.99503 10.75 2.99997C9.95536 2.99503 9.17193 3.18745 8.47 3.55997C8.281 3.66197 8.125 3.76697 8 3.85697C7.875 3.76597 7.719 3.66197 7.53 3.55997C6.82807 3.18745 6.04464 2.99503 5.25 2.99997C4.45536 2.99503 3.67193 3.18745 2.97 3.55997C2.71 3.70097 2.509 3.84197 2.37 3.95097C2.30067 4.00697 2.24667 4.05264 2.208 4.08797L2.163 4.12997L2.142 4.15197C2.051 4.24497 2 4.36997 2 4.49997V12.5C2 12.5995 2.02972 12.6968 2.08536 12.7794C2.14099 12.8619 2.21999 12.926 2.31226 12.9634C2.40453 13.0007 2.50585 13.0097 2.60325 12.9892C2.70066 12.9686 2.78971 12.9194 2.859 12.848L2.882 12.826C3.05406 12.6764 3.24261 12.5469 3.444 12.44C3.85 12.222 4.457 12 5.25 12C5.87914 11.9949 6.49971 12.1461 7.056 12.44C7.25739 12.5469 7.44594 12.6764 7.618 12.826L7.641 12.848L7.644 12.851L7.718 12.913C7.81536 12.9794 7.93308 13.0094 8.05037 12.9975C8.16765 12.9856 8.27696 12.9326 8.359 12.848L8.382 12.826C8.55406 12.6764 8.74261 12.5469 8.944 12.44C9.35 12.222 9.957 12 10.75 12C11.3791 11.9949 11.9997 12.1461 12.556 12.44C12.7574 12.5469 12.9459 12.6764 13.118 12.826L13.141 12.848L13.144 12.851L13.197 12.899C13.2712 12.9555 13.3597 12.9901 13.4526 12.999C13.5455 13.0078 13.639 12.9905 13.7225 12.949C13.806 12.9075 13.8763 12.8434 13.9253 12.7641C13.9744 12.6847 14.0002 12.5933 14 12.5V4.49997C13.9997 4.36992 13.9488 4.24509 13.858 4.15197L13.837 4.12997L13.792 4.08797C13.5593 3.88303 13.3036 3.70584 13.03 3.55997Z" fill="white"/></g><defs><clipPath id="lib_clip"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>`,
}
const BG_COLORS = ['rgb(236,90,19)','rgb(26,26,26)','rgb(0,0,0)','rgb(24,31,51)','rgb(18,18,18)','rgb(240,240,240)','rgb(30,30,30)']

function makeFiles(teamId, folderIdx, count, explicitNames) {
  const seed = teamId.split('').reduce((a,c) => a+c.charCodeAt(0), 0) + folderIdx * 31
  const rng = seededRand(seed)
  const nameSet = FILE_NAMES[Math.floor(rng() * FILE_NAMES.length)]
  const ages = ['just now', '5 minutes ago', '1 hour ago', 'yesterday', '2 days ago', 'last week']
  return Array.from({ length: count }, (_, i) => {
    const item = explicitNames?.[i]
    if (item && typeof item === 'object') {
      const thumbs = pickThumbs(seed + i * 29, 3)
      return {
        isFolder: true,
        name: item.name,
        updatedAgo: ages[Math.floor(seededRand(seed + i * 3)() * ages.length)],
        thumbs: thumbs.map(n => `/assets/folder_img_${String(n).padStart(2,'0')}.${ext(n)}`),
        children: makeFiles(teamId, folderIdx * 100 + i + 1, item.files.length, item.files),
      }
    }
    const imgIdx = Math.floor(seededRand(seed + i * 13)() * FILES_IMG_COUNT)
    const typeIdx = Math.floor(seededRand(seed + i * 7)() * FILE_TYPES.length)
    const bgIdx = Math.floor(seededRand(seed + i * 5)() * BG_COLORS.length)
        return {
      name: item ?? nameSet[i % nameSet.length],
      type: FILE_TYPES[typeIdx],
      typeIcon: FILE_TYPE_ICONS[FILE_TYPES[typeIdx]],
      thumb: `/assets/Cover File blank.png`,
      coverTitle: true,
      bg: BG_COLORS[bgIdx],
      updatedAgo: ages[Math.floor(seededRand(seed + i * 3)() * ages.length)],
    }
  })
}

// Pre-generate files for every folder of every team
export const folderFiles = Object.fromEntries(
  Object.entries(COUNTS).map(([teamId, entries]) => {
    const byFolder = entries.map((entry, fi) => {
      const { fileCount, fileNames } = normalizeFolder(entry)
      return makeFiles(teamId, fi, fileCount, fileNames)
    })
    return [teamId, byFolder]
  })
)

export const workspaceTeams = {
  'lbc-groupe': [
    { id: 'designops-lbc',   name: '🎨 Visual Design', members: 8,  isJoined: false,  isStarred: false,  letter: 'D', letterBg: '#f24822' },
    { id: 'largus-refonte',  name: "L'argus - Refonte site web", members: 3,  isJoined: false, isStarred: false, letter: null, letterBg: null, avatar: '/assets/team_largus.png' },
    { id: 'lbc-ops',         name: 'LBC OPS',                 members: 5,  isJoined: false, isStarred: false, letter: 'L', letterBg: '#3b82f6' },
    { id: 'leboncoin',       name: 'leboncoin',               members: 35, isJoined: false,  isStarred: false,  letter: null, letterBg: null, avatar: '/assets/team_leboncoin.png' },
    { id: 'mb-diffusion',    name: 'MB diffusion',            members: 3,  isJoined: false, isStarred: false, letter: 'M', letterBg: '#22c55e' },
    { id: 'mim',             name: 'MIM',                     members: 4,  isJoined: false, isStarred: false, letter: null, letterBg: null, avatar: '/assets/team_mim.png' },
    { id: 'pvo2',            name: 'PVO2',                    members: 2,  isJoined: false, isStarred: false, letter: 'P', letterBg: '#a855f7' },
    { id: 'studio-crea',     name: 'Studio Crea',             members: 4,  isJoined: false, isStarred: false, letter: 'S', letterBg: '#ec4899' },
  ],
}

import { myWorkspaces, otherWorkspaces, workspaceTeams, teamFolders, folderFiles } from './data.js'
import homeTemplate from './adevinta-home.html?raw'
import lbcTemplate from './lbc-workspace.html?raw'
import lbcFolderTemplate from './lbc-folder.html?raw'
import lbcFilesTemplate from './lbc-files.html?raw'

/* ─── SVG icons ────────────────────────────────────────────────────────────── */

function starIcon(filled) {
  return filled
    ? `<svg width="16" height="16" fill="none" viewBox="0 0 16 16" data-testid="favorite-star-button-favorited-icon" data-fpl-icon-size="16" style="--color-icon: var(--color-iconfavorite);"><path fill="var(--fpl-icon-color, var(--color-icon))" d="M8 2a1 1 0 0 1 .952.694l.9 2.806h2.903a1 1 0 0 1 .58 1.814L11.006 8.97l.939 2.702a1 1 0 0 1-1.517 1.148L8 11.128 5.572 12.82a1 1 0 0 1-1.517-1.148l.938-2.702-2.327-1.656A1 1 0 0 1 3.245 5.5h2.903l.9-2.806.06-.148A1 1 0 0 1 8 2"></path></svg>`
    : `<svg width="16" height="16" fill="none" viewBox="0 0 16 16" data-testid="favorite-star-button-unfavorited-icon" data-fpl-icon-size="16" style="--color-icon: var(--color-icon-secondary);"><path fill="var(--fpl-icon-color, var(--color-icon))" fill-rule="evenodd" d="M8.952 2.695a1 1 0 0 0-1.904 0l-.9 2.805H3.244a1 1 0 0 0-.58 1.815l2.33 1.655-.938 2.701a1 1 0 0 0 1.516 1.148L8 11.13l2.428 1.691a1 1 0 0 0 1.516-1.148l-.937-2.701 2.328-1.656a1 1 0 0 0-.58-1.815H9.852zM4.97 6.5h1.907l.598-1.863L8 3l.525 1.637.597 1.863h3.633l-1.406 1-1.533 1.09.626 1.802L11 12l-1.396-.973L8 9.91l-1.604 1.117L5 12l.558-1.608.625-1.802L4.651 7.5l-1.407-1z" clip-rule="evenodd"></path></svg>`
}

/* ─── Workspace list view ───────────────────────────────────────────────────── */

function metaString(ws) {
  const parts = []
  if (ws.members > 0) parts.push(`${ws.members} member${ws.members !== 1 ? 's' : ''}`)
  if (ws.teams   > 0) parts.push(`${ws.teams} team${ws.teams !== 1 ? 's' : ''}`)
  if (!parts.length)  parts.push('0 members')
  return parts.join('&nbsp;·&nbsp;')
}

function workspaceCard(ws, index) {
  return `
<div role="listitem" data-index="${index}" class="" data-ws-id="${ws.id}">
  <div class="x14cymxr xb5a4bo x19jrzsf xy5v4tt" style="--x-n09fb7: 0;">
    <div data-fpl-component="primitive" class="a33on00" role="group" aria-label="${ws.name}" draggable="true">
      <button data-fpl-component="primitive" data-card-main-action="true" aria-current="false" type="button" tabindex="0" data-show-focus="true" class="_19xx72g0 a33on03" aria-labelledby="ws-label-${ws.id}"></button>
      <div class="x78zum5 xdt5ytf x1y0btm7 xmkeg23 x844mss x127aom x1a2a7pz x1g40iwv xb3r6kr">
        <div class="x1n2onr6">
          <div data-fpl-component="primitive" class="a33on02">
            <span class="x78zum5 x1q0g3np xuk3077 xsi5eds x1qughib x10l6tqk x13vifvy x3m8u43 x1g6hpea xb3r6kr x1iyjqo2 xs83m0k x1t1x2f9 x9f619 x13qp9f6">
              <div class="${ws.isStarred ? '' : 'x1xjl02s'}">
                <div data-fpl-component="primitive" role="presentation" style="display: block;">
                  <div data-fpl-component="primitive" role="presentation" style="display: contents;">
                    <button data-fpl-component="primitive" aria-label="${ws.isStarred ? 'Remove from Starred' : 'Add to Starred'}" data-testid="favorite-star-button" type="button" tabindex="0" class="_19xx72g0 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x7r0jtz x1mdcibd xqz8uj xb9akqj xz96akt x1g40iwv">
                      <span aria-hidden="true">${starIcon(ws.isStarred)}</span>
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div class="x78zum5 xdt5ytf x6s0dn4 xg2x7oy xts8fk xl8spv7" style="--x-backgroundColor: var(--color-bg);">
            <div class="x78zum5 xh8yej3 x1qughib xb3r6kr x5yr21d">
              <div class="x78zum5 xklk4pu x1jvydc1 xb3r6kr xmaolms xtvhhri x6s0dn4 xl56j7k x2lah0s x87ps6o xeihhvt x5lhr3w x16ye13r" style="--x-width: 40px; --x-height: 40px;">
                <img alt="" data-testid="image-avatar" class="x5lhr3w x16ye13r" src="${ws.avatar}" style="--x-width: 40px; --x-height: 40px;">
              </div>
            </div>
            <div class="x1iyjqo2 xs83m0k x1t1x2f9 x78zum5 xh8yej3 xdt5ytf x1dbijih x1ned7t2 xb3r6kr">
              <span data-fpl-component="primitive" aria-hidden="true" id="ws-label-${ws.id}" class="xh8yej3 xeuugli">
                <span class="xeuugli">
                  <div data-fpl-component="primitive" class="a33on02">
                    <h2 data-fpl-component="" class="_3up7pg8 _3up7pgf _3up7pg1n _3up7pg0">
                      <span class="x78zum5 x1q0g3np x6s0dn4 xb3r6kr">
                        <span data-fpl-component="" class="_3up7pg6 _3up7pge _3up7pg1n _3up7pg0">${ws.name}</span>
                      </span>
                    </h2>
                  </div>
                </span>
              </span>
              <div data-fpl-component="primitive" class="a33on02">
                <div data-fpl-component="" class="_3up7pg7 _3up7pgg _3up7pg1n _3up7pg0">
                  <div class="x78zum5 x1q0g3np x6s0dn4">${metaString(ws)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}

function sectionLabel(label) {
  return `<div class="x1tudf5h"><span data-fpl-component="" class="_3up7pg7 _3up7pgg _3up7pg0">${label}</span></div>`
}

function workspaceList(workspaces) {
  const cards = workspaces.map((ws, i) => workspaceCard(ws, i)).join('\n')
  return `
<div class="">
  <div class="">
    <div role="list" class="xrvj5dj x1rzw5jd xy3p2pi x9f619 xsqj5wx x1y1aw1k x1gan7if x1tudf5h x1m2p0i2 x192fo39 fb-tile-grid" style="--x-transform: translateY(8px); margin-bottom: 8px;">
      ${cards}
    </div>
  </div>
</div>`
}

/* ─── Workspace detail (teams) view ─────────────────────────────────────────── */

function teamAvatar(team) {
  if (team.avatar) {
    return `
<div class="x78zum5 xklk4pu x1jvydc1 xb3r6kr xmaolms xtvhhri x6s0dn4 xl56j7k x2lah0s x87ps6o xeihhvt x5lhr3w x16ye13r" style="--x-width: 40px; --x-height: 40px;">
  <img alt="" data-testid="image-avatar" class="x5lhr3w x16ye13r" src="${team.avatar}" style="--x-width: 40px; --x-height: 40px;">
</div>`
  }
  return `<span data-testid="initial-avatar" class="x78zum5 xb3r6kr xtvhhri x6s0dn4 xl56j7k x2lah0s x87ps6o xeihhvt x14rh7hd xl8spv7 x5lhr3w x16ye13r x15dsfln xdmh292" aria-hidden="true" style="--x-color: var(--color-textonmultiplayerblue); --x-backgroundColor: ${team.letterBg}; --x-width: 40px; --x-height: 40px; --x-lineHeight: 40px; --x-fontSize: 20px;">${team.letter}</span>`
}

function teamCard(team, index) {
  const meta = team.isJoined
    ? `<i18n-text>Joined</i18n-text><span>&nbsp;·&nbsp;</span><span><i18n-text>${team.members} member${team.members !== 1 ? 's' : ''}</i18n-text></span>`
    : `<span><i18n-text>${team.members} member${team.members !== 1 ? 's' : ''}</i18n-text></span>`

  const leaveBtn = team.isJoined
    ? `<div class="redirecting_org_team_action--container--UvKX6 redirecting_org_team_action--_container--76ABb">
         <div class="redirecting_org_team_action--spinner--YNxn9 team_tile--joinSpinner--d8nXP"></div>
         <div class="redirecting_org_team_action--button--UmJQ-">
           <button type="button" class="basic_form--secondaryNegativeBtn--UeCRz basic_form--btn--GL7of ellipsis--ellipsis--IdJAr text--ui2FontSize11--EPm9l text--_fontBase--Qq3Bi">Leave</button>
         </div>
       </div>`
    : `<div class="redirecting_org_team_action--container--UvKX6 redirecting_org_team_action--_container--76ABb">
         <div class="redirecting_org_team_action--spinner--YNxn9 team_tile--joinSpinner--d8nXP"></div>
         <div class="redirecting_org_team_action--button--UmJQ-"></div>
       </div>`

  return `
<div role="listitem" data-index="${index}" data-ws-id="${team.id}" data-fpl-audit="true">
  <div class="x14cymxr xb5a4bo x19jrzsf xy5v4tt" style="--x-n09fb7: 0;">
    <div data-fpl-component="primitive" class="a33on00" role="group" aria-label="${team.name}" draggable="true">
      <button data-fpl-component="primitive" data-card-main-action="true" aria-current="false" type="button" tabindex="0" data-show-focus="true" class="_19xx72g0 a33on03"></button>
      <div class="x78zum5 xdt5ytf x1y0btm7 xmkeg23 x844mss x127aom x1a2a7pz x1g40iwv xb3r6kr">
        <div class="x1n2onr6">
          <div data-fpl-component="primitive" class="a33on02">
            <span class="x78zum5 x1q0g3np xuk3077 xsi5eds x1qughib x10l6tqk x13vifvy x3m8u43 x1g6hpea xb3r6kr x1iyjqo2 xs83m0k x1t1x2f9 x9f619 x13qp9f6">
              <div class="x78zum5 x1sk9g4k">
                <div class="x1xjl02s">${leaveBtn}</div>
                <div class="${team.isStarred ? '' : 'x1xjl02s'}">
                  <div data-fpl-component="primitive" role="presentation" style="display: block;">
                    <div data-fpl-component="primitive" role="presentation" style="display: contents;">
                      <button data-fpl-component="primitive" aria-label="${team.isStarred ? 'Remove from Starred' : 'Add to Starred'}" data-testid="favorite-star-button" type="button" tabindex="0" class="_19xx72g0 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x7r0jtz x1mdcibd xqz8uj xb9akqj xz96akt x1g40iwv">
                        <span aria-hidden="true">${starIcon(team.isStarred)}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div class="x78zum5 xdt5ytf x6s0dn4 xg2x7oy xts8fk xl8spv7" style="--x-backgroundColor: var(--color-bg);">
            <div class="x78zum5 xh8yej3 x1qughib xb3r6kr x5yr21d">
              ${teamAvatar(team)}
            </div>
            <div class="x1iyjqo2 xs83m0k x1t1x2f9 x78zum5 xh8yej3 xdt5ytf x1dbijih x1ned7t2 xb3r6kr">
              <span data-fpl-component="primitive" aria-hidden="true" class="xh8yej3 xeuugli">
                <span class="xeuugli">
                  <div data-fpl-component="primitive" class="a33on02">
                    <h2 data-fpl-component="" class="_3up7pg8 _3up7pgf _3up7pg1n _3up7pg0">
                      <span class="x78zum5 x1q0g3np x6s0dn4 x1sk9g4k xb3r6kr xlyipyv">
                        <span data-fpl-component="" class="_3up7pg6 _3up7pge _3up7pg1n _3up7pg0">${team.name}</span>
                      </span>
                    </h2>
                  </div>
                </span>
              </span>
              <div data-fpl-component="primitive" class="a33on02">
                <div data-fpl-component="" class="_3up7pg7 _3up7pgg _3up7pg1n _3up7pg0">
                  <div class="x78zum5 x1q0g3np x6s0dn4">${meta}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}

function renderTeamsList(ws) {
  const teams = workspaceTeams[ws.id] ?? []
  return `<div role="list" class="xrvj5dj x1rr9rqv x1rzw5jd xy3p2pi x9f619 xsqj5wx x1rrsxx9 x3qqhl x3m7eg8 fb-tile-grid" style="--x-transform: translateY(0px);">
    ${teams.map((t, i) => teamCard(t, i)).join('\n')}
  </div>`
}

/* ─── Folder (team detail) view ─────────────────────────────────────────────── */

const FOLDER_GLYPH = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" style="width:36%;height:auto;--fpl-icon-color: var(--folder-icon-enhanced-pale-blue);"><path fill="var(--fpl-icon-color)" d="M9.672 4a2.5 2.5 0 0 1 1.768.732L13.707 7H18.5A2.5 2.5 0 0 1 21 9.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-10A2.5 2.5 0 0 1 5.5 4zM6.5 15a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"></path></svg>`

// Preview of up to 3 items actually contained in the folder (files first, then sub-folders)
function folderPreviewCell(child) {
  const wrap = (inner) => `
<div data-testid="folder-card-preview-cell" class="xgwsg93 xrvj5dj xeuugli x2lwn1j xb3r6kr">
  <div class="xrvj5dj">
    <div class="x1byulpo x1ls7aod">
      <div data-fpl-component="primitive" class="a33on02 x78zum5 xh8yej3 x5yr21d x2lwn1j">${inner}</div>
    </div>
  </div>
</div>`
  if (!child) {
    return wrap('<div class="cx_hFull--CpzNn cx_wFull--V-FvF cx_borderBox--RXv0H"><div class="thumbnail_container--aspectRatio--ks4jV"><div style="position:absolute;inset:0;border:1px dashed rgba(255,255,255,0.25);border-radius:8px;box-sizing:border-box;"></div></div></div>')
  }
  const isFolder = !!child.isFolder
  const media = isFolder
    ? `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;background:rgb(30,30,30);">${FOLDER_GLYPH}</div>`
    : `<img alt="" src="${child.thumb}" draggable="false" class="x1hc1fzr x1s2ojdz x9kvfbb cx_hFull--CpzNn cx_wFull--V-FvF thumbnail--thumbnailContain--8zN7T">${coverTitleOverlay(child.name)}`
  return wrap(`
        <button type="button" class="_19xx72g0 folder_list_card--fileTile--5VDil">
          <div data-testid="thumbnail-container" class="cx_hFull--CpzNn cx_wFull--V-FvF cx_borderBox--RXv0H cx_overflowHidden---fxjU" style="background-color: ${isFolder ? 'rgb(30,30,30)' : 'rgb(236,90,19)'};">
            <div class="thumbnail_container--aspectRatio--ks4jV">${media}</div>
          </div>
          <div class="folder_list_card--fileTileOverlay--MlSGe"><div class="folder_list_card--fileTileOverlayText--5fPof">${child.name}</div></div>
        </button>`)
}

function folderCard(folder, index, children = []) {
  const picks = [...children.filter(c => !c.isFolder), ...children.filter(c => c.isFolder)].slice(0, 3)
  const thumbCells = [0, 1, 2].map(k => folderPreviewCell(picks[k])).join('')

  return `
<div role="listitem" data-index="${index}" data-fpl-audit="true">
  <div><div class="x14cymxr xb5a4bo x19jrzsf xy5v4tt" style="--x-n09fb7: 0;">
    <div data-fpl-component="primitive" class="a33on00" role="group" aria-label="${folder.name}, Blue folder" draggable="true">
      <button data-fpl-component="primitive" data-card-main-action="true" type="button" tabindex="0" class="_19xx72g0 a33on03"></button>
      <div class="x78zum5 xdt5ytf x1y0btm7 xmkeg23 x844mss x127aom x1a2a7pz x1g40iwv xb3r6kr">
        <div class="x1n2onr6">
          <div class="x78zum5 xdt5ytf">
            <div class="xrvj5dj x185a7wo x1amjocr xh8yej3 xeuugli x1pzdqlv xjd7tmr x18d9i69 x1lqv20w x9f619">
              ${thumbCells}
            </div>
            <div class="x78zum5 xwa7hi x1ee9nrg xjd7tmr x1u2iebx x1lqv20w x1qughib x6s0dn4 xkh2ocl x9f619 x4qgb6o">
              <div class="x78zum5 x6s0dn4 xpacvxx xh8yej3 xeuugli">
                <div data-fpl-component="primitive" class="a33on02">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" role="img" aria-label="Blue folder" class="x1dnnimb" data-fpl-icon-size="24L" style="--x---fpl-icon-color: var(--folder-icon-enhanced-pale-blue);">
                    <path fill="var(--fpl-icon-color, var(--color-icon))" d="M9.672 4a2.5 2.5 0 0 1 1.768.732L13.707 7H18.5A2.5 2.5 0 0 1 21 9.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-10A2.5 2.5 0 0 1 5.5 4zM6.5 15a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"></path>
                  </svg>
                </div>
                <div class="x78zum5 x1iyjqo2 xs83m0k x1t1x2f9 xh8yej3 xeuugli xdt5ytf x1dbijih xb3r6kr">
                  <div class="x78zum5 x1q0g3np x6s0dn4 xh8yej3">
                    <div class="xeuugli">
                      <span aria-hidden="true" class="xeuugli">
                        <div data-fpl-component="primitive" class="a33on02">
                          <h2 data-fpl-component="" class="_3up7pg8 _3up7pgf _3up7pg1n _3up7pg0">
                            <span data-fpl-component="" class="_3up7pg8 _3up7pge _3up7pg1n _3up7pg0">${folder.name}</span>
                          </h2>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div data-fpl-component="primitive" class="a33on02">
                    <div data-fpl-component="" class="_3up7pg7 _3up7pgg _3up7pg1n _3up7pg0">
                      <span data-fpl-component="" class="_3up7pg7 _3up7pgg _3up7pg0"><i18n-text>Updated <span>${folder.updatedAgo}</span></i18n-text></span>
                    </div>
                  </div>
                </div>
              </div>
              <div data-fpl-component="primitive" class="a33on02 x2lah0s">
                <div class="x1xjl02s">
                  <button data-fpl-component="primitive" aria-label="Add to Starred" data-testid="favorite-star-button" type="button" tabindex="0" class="_19xx72g0 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x7r0jtz x1mdcibd xqz8uj xb9akqj xz96akt x1g40iwv">
                    <span aria-hidden="true">${starIcon(false)}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
</div>`
}

function renderFolderList(team) {
  const folders = teamFolders[team.id] ?? []
  return `<div role="list" class="xrvj5dj x1rr9rqv x1rzw5jd xy3p2pi x9f619 xsqj5wx x1rrsxx9 x3qqhl x3m7eg8 fb-tile-grid" style="--x-transform: translateY(0px); display: grid; grid-template-columns: repeat(auto-fill, minmax(272px, 1fr)); gap: 32px;">
    ${folders.map((f, i) => folderCard(f, i, (folderFiles[team.id] ?? [])[i] ?? [])).join('\n')}
  </div>`
}

function teamAvatarSrc(team) {
  if (team.avatar) return team.avatar
  return null
}

/* ─── Files (folder detail) view ────────────────────────────────────────────── */

function coverTitleOverlay(name) {
  const safe = String(name).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  // ~0.56em per char for DM Sans bold; title box is 1240/1920 of the cover width
  const size = Math.max(3, Math.min(5.7, 1240 / (name.length * 0.56) / 19.2))
  return `<div style="position:absolute;left:0;top:50%;transform:translateY(-50%);width:100%;aspect-ratio:2/1;container-type:inline-size;pointer-events:none;">
    <div style="position:absolute;left:17.7%;top:30.2%;width:64.6%;height:13.5%;display:flex;align-items:center;color:#fff;font-family:'DM Sans',Inter,sans-serif;font-weight:700;font-size:${size.toFixed(2)}cqw;line-height:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${safe}</div>
  </div>`
}

function fileCard(file, index) {
  return `
<div role="listitem" data-index="${index}" data-fpl-audit="true">
  <div class="x14cymxr xb5a4bo x19jrzsf xy5v4tt" style="--x-n09fb7: 0;">
    <div data-fpl-component="primitive" class="a33on00" role="group" aria-label="${file.name}" draggable="true">
      <button data-fpl-component="primitive" data-card-main-action="true" aria-label="${file.name}, ${file.type}" type="button" tabindex="0" class="_19xx72g0 a33on03"></button>
      <div class="x78zum5 xdt5ytf x1y0btm7 xmkeg23 x844mss x127aom x1a2a7pz x1g40iwv xb3r6kr">
        <div class="x1n2onr6">
          <div data-testid="thumbnail-container" class="cx_hFull--CpzNn cx_wFull--V-FvF cx_borderBox--RXv0H cx_overflowHidden---fxjU" style="background-color: ${file.bg};">
            <div class="thumbnail_container--aspectRatio--ks4jV">
              <img alt="" src="${file.thumb}" draggable="false" class="x1hc1fzr x1s2ojdz x9kvfbb cx_hFull--CpzNn cx_wFull--V-FvF thumbnail--thumbnailContain--8zN7T" crossorigin="anonymous">
              ${file.coverTitle ? coverTitleOverlay(file.name) : ''}
            </div>
          </div>
          <div class="x78zum5 x1q0g3np x1cy8zhl xgpatz3 x40hh3e x1qughib x10l6tqk xu96u03 x13vifvy x3m8u43 x1tamke2 xb3r6kr xeuugli x1iyjqo2 xs83m0k x1t1x2f9 x9f619">
            <div data-fpl-component="primitive" class="a33on02 xb3r6kr xeuugli"><div class="x78zum5 x6s0dn4 xrdokzc"></div></div>
            <div data-fpl-component="primitive" class="a33on02 x13qp9f6">
              <div class="x78zum5 x6s0dn4 xrdokzc">
                <div class="x1xjl02s">
                  <button data-fpl-component="primitive" aria-label="Add to Starred" data-testid="favorite-star-button" type="button" tabindex="0" class="_19xx72g0 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x7r0jtz x1mdcibd xqz8uj xb9akqj xz96akt x1g40iwv">
                    <span aria-hidden="true">${starIcon(false)}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="x78zum5 x1q0g3np x6s0dn4 x1lqv20w xjd7tmr x1ee9nrg x1u2iebx xpacvxx x4qgb6o x1y0btm7 x178xt8z x844mss">
          <div data-fpl-component="primitive" class="a33on02">
            <div data-editor-theme="design" data-preferred-theme="dark" style="display: contents;">
              ${file.typeIcon}
            </div>
          </div>
          <div class="x78zum5 x6s0dn4 x1dbijih xeuugli x1iyjqo2 xs83m0k x1t1x2f9 xb3r6kr" style="flex-direction: column; align-items: flex-start;">
            <span class="xeuugli"><span class="xeuugli">
              <div data-fpl-component="primitive" class="a33on02">
                <h2 data-fpl-component="" class="_3up7pg8 _3up7pgf _3up7pg1n _3up7pg0">
                  <span data-fpl-component="" class="_3up7pg6 _3up7pge _3up7pg1n _3up7pg0">${file.name}</span>
                </h2>
              </div>
            </span></span>
            <div data-fpl-component="primitive" class="a33on02">
              <div data-fpl-component="" class="_3up7pg7 _3up7pgg _3up7pg1n _3up7pg0">
                <span class="_3up7pg7 _3up7pgg _3up7pg0">Updated ${file.updatedAgo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}

function folderItems(teamId, folderIdx, subIdx) {
  const files = (folderFiles[teamId] ?? [])[folderIdx] ?? []
  return subIdx == null ? files : files[subIdx]?.children ?? []
}

function renderFilesList(teamId, folderIdx, subIdx) {
  const items = folderItems(teamId, folderIdx, subIdx)
  const gridStyle = '--x-transform: translateY(0px); display: grid; grid-template-columns: repeat(auto-fill, minmax(272px, 1fr)); gap: 32px;'
  const gridClass = 'xrvj5dj x1rr9rqv x1rzw5jd xy3p2pi x9f619 xsqj5wx x1rrsxx9 x3qqhl x3m7eg8 fb-tile-grid'
  const grid = (list) => `<div role="list" class="${gridClass}" style="${gridStyle}">
    ${list.map(({ f, i }) => f.isFolder ? folderCard(f, i, f.children ?? []) : fileCard(f, i)).join('\n')}
  </div>`
  const indexed = items.map((f, i) => ({ f, i }))
  const folders = indexed.filter(x => x.f.isFolder)
  const files = indexed.filter(x => !x.f.isFolder)
  if (!folders.length || !files.length) return grid(indexed)
  return `<div style="display: flex; flex-direction: column; gap: 32px;">${grid(folders)}${grid(files)}</div>`
}

/* ─── Routing ────────────────────────────────────────────────────────────────── */

const allWorkspaces = [...myWorkspaces, ...otherWorkspaces]
const allTeams = Object.values(workspaceTeams).flat()

function renderFilesPage(team, folderIdx, subIdx = null) {
  const container = getContainer()
  if (!container) return
  const folder = (teamFolders[team.id] ?? [])[folderIdx]
  if (!folder) return
  const sub = subIdx == null ? null : folderItems(team.id, folderIdx, null)[subIdx]
  container.innerHTML = lbcFilesTemplate.replace('{{FOLDER_NAME}}', sub ? `${folder.name} / ${sub.name}` : folder.name)
  wireHomeButton(container)
  // patch team name in breadcrumb back-button span
  const teamBackSpan = container.querySelector('#proto-team-back-name')
  if (teamBackSpan) { teamBackSpan.remove() }
  const teamBackBtn = container.querySelector('[data-proto-team-back]')
  if (teamBackBtn) teamBackBtn.textContent = team.name
  const root = document.getElementById('files-list-root')
  if (root) root.innerHTML = renderFilesList(team.id, folderIdx, subIdx)
  if (subIdx == null) {
    const items = folderItems(team.id, folderIdx, null)
    root?.querySelectorAll('[role="list"] > [role="listitem"]').forEach((el, idx) => {
      if (!items[idx]?.isFolder) return
      el.style.cursor = 'pointer'
      el.addEventListener('click', e => {
        if (e.target.closest('[data-testid="favorite-star-button"]')) return
        history.pushState({ teamId: team.id, folderIdx, subIdx: idx }, '', `#files/${team.id}/${folderIdx}/${idx}`)
        renderFilesPage(team, folderIdx, idx)
      })
    })
  }
  // Wire breadcrumb back buttons
  container.querySelector('[data-proto-ws-back]')?.addEventListener('click', () => {
    const ws = allWorkspaces.find(w => workspaceTeams[w.id]?.some(t => t.id === team.id))
    if (ws) {
      history.pushState({ wsId: ws.id }, '', `#ws/${ws.id}`)
      renderWorkspacePage(ws)
    } else {
      history.pushState({}, '', location.pathname)
      renderHome()
    }
  })
  teamBackBtn?.addEventListener('click', () => {
    history.pushState({ teamId: team.id }, '', `#team/${team.id}`)
    renderTeamPage(team)
  })
}

function getContainer() {
  return document.querySelector('.file_browser_layout--fileBrowserPageViewContainer--2P-WF')
}

function wireHomeButton(container) {
  container.querySelector('[data-proto-home]')?.addEventListener('click', () => {
    history.pushState({}, '', location.pathname)
    renderHome()
  })
}

function renderHome() {
  const container = getContainer()
  if (!container) return
  container.innerHTML = homeTemplate
  wireHomeButton(container)
  const root = document.getElementById('workspace-list-root')
  if (!root) return
  root.innerHTML =
    sectionLabel('Your workspace') +
    workspaceList(myWorkspaces) +
    sectionLabel('Other workspaces') +
    workspaceList(otherWorkspaces)
  attachWorkspaceHandlers()
}

function renderWorkspacePage(ws) {
  const container = getContainer()
  if (!container) return
  container.innerHTML = lbcTemplate
  wireHomeButton(container)
  const root = document.getElementById('workspace-list-root')
  if (root) root.innerHTML = renderTeamsList(ws)
  attachTeamHandlers(ws)
}

function renderTeamPage(team) {
  const container = getContainer()
  if (!container) return
  // Resolve avatar: letter teams get no img — use letter as initials block
  const avatarSrc = team.avatar ?? null
  let avatarHTML
  if (avatarSrc) {
    avatarHTML = avatarSrc
  } else {
    // Use a data-URI style placeholder (same initial-avatar pattern, just pass the bg color via CSS var)
    avatarHTML = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='40' height='40' fill='${encodeURIComponent(team.letterBg)}'/><text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' fill='white' font-size='20' font-family='sans-serif'>${team.letter}</text></svg>`
  }
  container.innerHTML = lbcFolderTemplate
    .replace('{{TEAM_NAME}}', team.name)
    .replace('{{TEAM_AVATAR}}', avatarHTML)
  wireHomeButton(container)
  const root = document.getElementById('folder-list-root')
  if (root) root.innerHTML = renderFolderList(team)
  // Wire folder card clicks
  root?.querySelectorAll('[role="listitem"]').forEach((el, idx) => {
    el.addEventListener('click', e => {
      if (e.target.closest('[data-testid="favorite-star-button"]')) return
      history.pushState({ teamId: team.id, folderIdx: idx }, '', `#files/${team.id}/${idx}`)
      renderFilesPage(team, idx)
    })
  })
  // Wire "leboncoin groupe" breadcrumb back to workspace page
  container.querySelector('[data-proto-ws-back]')?.addEventListener('click', () => {
    const ws = allWorkspaces.find(w => workspaceTeams[w.id]?.some(t => t.id === team.id))
    if (ws) {
      history.pushState({ wsId: ws.id }, '', `#ws/${ws.id}`)
      renderWorkspacePage(ws)
    } else {
      history.pushState({}, '', location.pathname)
      renderHome()
    }
  })
}

function attachWorkspaceHandlers() {
  const root = document.getElementById('workspace-list-root')
  if (!root) return
  root.querySelectorAll('[data-ws-id]').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('[data-testid="favorite-star-button"]')) return
      const ws = allWorkspaces.find(w => w.id === el.dataset.wsId)
      if (ws && workspaceTeams[ws.id]) {
        history.pushState({ wsId: ws.id }, '', `#ws/${ws.id}`)
        renderWorkspacePage(ws)
      }
    })
  })
}

function attachTeamHandlers(ws) {
  const root = document.getElementById('workspace-list-root')
  if (!root) return
  root.querySelectorAll('[data-ws-id]').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('[data-testid="favorite-star-button"]')) return
      if (e.target.closest('.redirecting_org_team_action--container--UvKX6')) return
      const team = allTeams.find(t => t.id === el.dataset.wsId)
      if (team) {
        history.pushState({ teamId: team.id, wsId: ws.id }, '', `#team/${team.id}`)
        renderTeamPage(team)
      }
    })
  })
}

function route() {
  const hash = location.hash
  const filesMatch = hash.match(/^#files\/([^/]+)\/(\d+)(?:\/(\d+))?$/)
  const teamMatch = hash.match(/^#team\/(.+)$/)
  const wsMatch = hash.match(/^#ws\/(.+)$/)
  if (filesMatch) {
    const team = allTeams.find(t => t.id === filesMatch[1])
    if (team) { renderFilesPage(team, Number(filesMatch[2]), filesMatch[3] == null ? null : Number(filesMatch[3])); return }
  }
  if (teamMatch) {
    const team = allTeams.find(t => t.id === teamMatch[1])
    if (team) { renderTeamPage(team); return }
  }
  if (wsMatch) {
    const ws = allWorkspaces.find(w => w.id === wsMatch[1])
    if (ws) { renderWorkspacePage(ws); return }
  }
  renderHome()
}

/* ─── Init ──────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  route()
})

window.addEventListener('popstate', route)

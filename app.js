const types = [
  {
    id: 1,
    name: "นักปรับปรุงผู้ละเอียดอ่อน",
    short: "คนมีมาตรฐานสูง รักความถูกต้อง และอยากทำให้สิ่งรอบตัวดีขึ้น",
    core: "คุณมองเห็นช่องว่างระหว่างสิ่งที่เป็นอยู่กับสิ่งที่ควรจะเป็นได้ไว จึงมักเป็นคนตั้งใจ รับผิดชอบ และให้ความสำคัญกับคุณภาพมากกว่าความง่าย",
    strengths: ["มีวินัยและไว้ใจได้", "จับรายละเอียดเล็ก ๆ ได้ดี", "ยืนหยัดกับความถูกต้อง"],
    watches: ["เคร่งกับตัวเองจนเหนื่อย", "หงุดหงิดเมื่อสิ่งต่าง ๆ ไม่เป็นระบบ", "เก็บคำวิจารณ์ไว้ในใจนาน"],
    growth: "ฝึกแยกระหว่าง “ทำให้ดี” กับ “ต้องสมบูรณ์แบบ” แล้วให้พื้นที่กับความผิดพลาดเล็ก ๆ ที่ไม่ทำร้ายใคร",
    palette: ["#f08a5d", "#f9ed69", "#b83b5e"],
    prop: "check"
  },
  {
    id: 2,
    name: "ผู้ดูแลหัวใจอบอุ่น",
    short: "คนใส่ใจคนอื่น อ่านความรู้สึกเก่ง และอยากเป็นที่รักอย่างจริงใจ",
    core: "คุณมีเรดาร์ด้านความสัมพันธ์ที่ไวมาก มักรู้ว่าใครต้องการอะไรและพร้อมยื่นมือช่วย แต่ลึก ๆ ก็อยากให้คนเห็นคุณค่าในความทุ่มเทนั้น",
    strengths: ["เอาใจใส่และช่วยเหลือเก่ง", "สร้างความสบายใจให้คนรอบข้าง", "จำรายละเอียดของคนที่รักได้ดี"],
    watches: ["ให้มากจนลืมความต้องการของตัวเอง", "น้อยใจง่ายเมื่อไม่ได้รับการตอบกลับ", "ผูกคุณค่าตัวเองกับการเป็นคนจำเป็น"],
    growth: "ลองถามตัวเองก่อนช่วยว่า “ฉันอยากทำจริงไหม” การมีขอบเขตไม่ได้ทำให้ความรักน้อยลง",
    palette: ["#ff9a9e", "#fad0c4", "#f76b8a"],
    prop: "heart"
  },
  {
    id: 3,
    name: "ผู้สำเร็จเปล่งประกาย",
    short: "คนมุ่งเป้า ปรับตัวเร็ว และชอบเห็นผลลัพธ์ที่จับต้องได้",
    core: "คุณมีพลังของการลงมือทำและการพาตัวเองไปถึงเป้าหมายอย่างน่าทึ่ง มักอ่านสถานการณ์ออกว่าอะไรทำให้เกิดผล และจัดพลังไปทางนั้นทันที",
    strengths: ["มีแรงขับสูง", "สื่อสารภาพความสำเร็จได้ดี", "ปรับตัวตามโจทย์และผู้คนได้เร็ว"],
    watches: ["รีบเดินหน้าจนไม่ทันฟังใจตัวเอง", "กลัวภาพลักษณ์ล้มเหลว", "วัดคุณค่าด้วยผลงานมากเกินไป"],
    growth: "ให้เวลากับความรู้สึกที่ยังไม่มีคำตอบบ้าง คุณมีค่าก่อนผลลัพธ์จะออกมาดีเสียอีก",
    palette: ["#ffd166", "#06d6a0", "#118ab2"],
    prop: "star"
  },
  {
    id: 4,
    name: "ศิลปินผู้ลึกซึ้ง",
    short: "คนละเอียดกับอารมณ์ รักความจริงแท้ และมองโลกผ่านความหมาย",
    core: "คุณสัมผัสความงามและความเศร้าได้ลึกกว่าคนทั่วไป จึงมักอยากใช้ชีวิตที่เป็นตัวเองจริง ๆ ไม่ใช่แค่ทำตามกรอบที่ใครวางไว้",
    strengths: ["เข้าใจอารมณ์ซับซ้อนได้ดี", "มีรสนิยมและความคิดสร้างสรรค์", "ซื่อสัตย์ต่อความรู้สึกของตัวเอง"],
    watches: ["เปรียบเทียบตัวเองกับคนอื่น", "จมกับอารมณ์จนพลังตก", "รู้สึกว่าไม่มีใครเข้าใจง่าย ๆ"],
    growth: "เก็บความลึกไว้เป็นของขวัญ แต่พาตัวเองกลับมาสู่กิจวัตรเล็ก ๆ ที่ทำได้จริงในวันนี้",
    palette: ["#9b5de5", "#f15bb5", "#fee440"],
    prop: "moon"
  },
  {
    id: 5,
    name: "นักสังเกตการณ์ผู้เฉียบคม",
    short: "คนรักความเข้าใจ ต้องการพื้นที่ส่วนตัว และคิดเป็นระบบ",
    core: "คุณมีธรรมชาติของนักสำรวจข้อมูล ชอบมองให้ชัดก่อนลงมือ และมักสบายใจกับการมีเวลาอยู่กับความคิดของตัวเอง",
    strengths: ["วิเคราะห์ลึกและแม่นยำ", "เป็นอิสระทางความคิด", "ตัดสินใจด้วยข้อมูลมากกว่าแรงกดดัน"],
    watches: ["ถอยห่างจนคนอื่นเข้าไม่ถึง", "เก็บพลังไว้มากจนดูเย็นชา", "คิดนานจนพลาดจังหวะลงมือ"],
    growth: "แบ่งปันความคิดแม้ยังไม่สมบูรณ์ครบถ้วน การเชื่อมต่อกับคนอื่นไม่จำเป็นต้องใช้พลังทั้งหมดของคุณ",
    palette: ["#4d96ff", "#6bcb77", "#f7fff7"],
    prop: "book"
  },
  {
    id: 6,
    name: "ผู้พิทักษ์ที่ไว้วางใจได้",
    short: "คนมองความเสี่ยงเก่ง ซื่อสัตย์ และอยากให้ทุกอย่างมั่นคงปลอดภัย",
    core: "คุณเป็นคนคิดเผื่อและเห็นสัญญาณเตือนได้ไว จึงเป็นคนที่ทีมมักพึ่งพาได้ในเวลาสำคัญ เพราะคุณไม่ปล่อยให้เรื่องใหญ่หลุดสายตา",
    strengths: ["ภักดีและจริงจังกับคนของตัวเอง", "เตรียมแผนสำรองได้ดี", "กล้าปกป้องสิ่งที่เชื่อเมื่อจำเป็น"],
    watches: ["กังวลล่วงหน้าจนพักยาก", "ลังเลเมื่อไม่มีคำยืนยัน", "ทดสอบความไว้ใจโดยไม่รู้ตัว"],
    growth: "ค่อย ๆ แยก “สัญชาตญาณเตือน” ออกจาก “ความกลัวที่เล่าเรื่องเก่ง” แล้วเลือกก้าวเล็กที่ตรวจสอบได้",
    palette: ["#577590", "#f9c74f", "#43aa8b"],
    prop: "shield"
  },
  {
    id: 7,
    name: "นักผจญไอเดียสดใส",
    short: "คนมองหาโอกาส ชอบความหลากหลาย และเติมสีสันให้บรรยากาศ",
    core: "คุณเห็นทางเลือกได้เร็วและไม่ชอบติดอยู่กับความอึดอัดนาน ๆ พลังของคุณคือการเปิดประตูใหม่ให้ตัวเองและคนรอบข้าง",
    strengths: ["คิดไวและสร้างบรรยากาศสนุก", "มองเห็นความเป็นไปได้หลายทาง", "ฟื้นตัวจากความผิดหวังได้เร็ว"],
    watches: ["หนีความรู้สึกยาก ๆ ด้วยงานหรือกิจกรรมใหม่", "เริ่มหลายอย่างแต่จบไม่ครบ", "เบื่อง่ายเมื่อมีข้อจำกัด"],
    growth: "เลือกความสุขที่มีราก ไม่ใช่แค่ความตื่นเต้นชั่วคราว แล้วอยู่กับความรู้สึกยาก ๆ ให้ยาวขึ้นทีละนิด",
    palette: ["#ffbe0b", "#fb5607", "#3a86ff"],
    prop: "spark"
  },
  {
    id: 8,
    name: "ผู้นำใจนักสู้",
    short: "คนตรงไปตรงมา ปกป้องคนที่รัก และไม่ชอบถูกควบคุม",
    core: "คุณมีพลังชัดเจน หนักแน่น และไม่กลัวการเผชิญหน้าเมื่อเห็นว่าอะไรไม่ยุติธรรม ลึก ๆ แล้วคุณอยากให้โลกตรงไปตรงมาและไม่เอาเปรียบกัน",
    strengths: ["ตัดสินใจเด็ดขาด", "ปกป้องทีมและคนอ่อนแอกว่า", "มีพลังผลักเรื่องยากให้เดินหน้า"],
    watches: ["เสียงแข็งจนคนอื่นไม่กล้าพูด", "ปิดบังความเปราะบางไว้หลังความเข้มแข็ง", "หงุดหงิดกับความอ้อมค้อม"],
    growth: "ความอ่อนโยนไม่ลดอำนาจของคุณ กลับทำให้คนไว้ใจพลังของคุณมากขึ้น",
    palette: ["#ef476f", "#073b4c", "#ffd166"],
    prop: "bolt"
  },
  {
    id: 9,
    name: "ผู้ประสานใจสงบ",
    short: "คนอ่อนโยน รักความกลมกลืน และช่วยให้คนรู้สึกปลอดภัย",
    core: "คุณมีความสามารถในการมองหลายมุมและลดแรงปะทะโดยธรรมชาติ ผู้คนจึงมักรู้สึกสบายใจเมื่ออยู่ใกล้คุณ",
    strengths: ["รับฟังดีและไม่ตัดสินเร็ว", "ประสานความขัดแย้งได้ละมุน", "มีพลังนิ่งที่ทำให้คนใจเย็นลง"],
    watches: ["เลี่ยงการตัดสินใจเพื่อรักษาความสงบ", "ตามใจคนอื่นจนความต้องการตัวเองหายไป", "ผัดผ่อนเรื่องสำคัญ"],
    growth: "เสียงของคุณสำคัญเท่ากับเสียงของคนอื่น ฝึกเลือกสิ่งเล็ก ๆ ให้ชัด แล้วค่อยขยายไปสู่เรื่องใหญ่",
    palette: ["#8ecae6", "#90be6d", "#ffb703"],
    prop: "leaf"
  }
];

const zodiacWeights = {
  aries: [8, 3, 7],
  taurus: [9, 6, 1],
  gemini: [7, 5, 3],
  cancer: [2, 6, 9],
  leo: [3, 8, 7],
  virgo: [1, 5, 6],
  libra: [9, 2, 4],
  scorpio: [8, 4, 5],
  sagittarius: [7, 8, 3],
  capricorn: [1, 3, 6],
  aquarius: [5, 7, 9],
  pisces: [4, 2, 9]
};

const zodiacNames = {
  aries: "เมษ",
  taurus: "พฤษภ",
  gemini: "เมถุน",
  cancer: "กรกฎ",
  leo: "สิงห์",
  virgo: "กันย์",
  libra: "ตุล",
  scorpio: "พิจิก",
  sagittarius: "ธนู",
  capricorn: "มังกร",
  aquarius: "กุมภ์",
  pisces: "มีน"
};

const form = document.querySelector("#profile-form");
const error = document.querySelector("#form-error");
const emptyState = document.querySelector("#empty-state");
const result = document.querySelector("#analysis-result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const analysis = analyze(data);

  if (!analysis.ok) {
    error.textContent = analysis.message;
    return;
  }

  error.textContent = "";
  renderResult(analysis);
  revealResult();
});

function analyze(data) {
  const fullName = data.fullName.trim();
  const day = Number(data.birthDay);
  const month = Number(data.birthMonth);
  const zodiac = data.zodiac;

  if (fullName.length < 2) {
    return { ok: false, message: "กรุณากรอกชื่อจริงอย่างน้อย 2 ตัวอักษร" };
  }

  if (!Number.isInteger(day) || day < 1 || day > 31) {
    return { ok: false, message: "วันเกิดต้องอยู่ระหว่าง 1 ถึง 31" };
  }

  if (!month || !zodiac) {
    return { ok: false, message: "กรุณาเลือกเดือนเกิดและราศีเกิด" };
  }

  const nameValue = Array.from(fullName).reduce((sum, char, index) => sum + char.codePointAt(0) * (index + 1), 0);
  const base = digitalRoot(nameValue + day * 11 + month * 17);
  const scores = types.map((type) => {
    const distance = Math.min(Math.abs(type.id - base), 9 - Math.abs(type.id - base));
    const datePulse = ((day + month + type.id * 3) % 7) * 3;
    const namePulse = (nameValue % (type.id + 11)) % 9;
    const zodiacBonus = zodiacWeights[zodiac].includes(type.id) ? 18 - zodiacWeights[zodiac].indexOf(type.id) * 5 : 0;
    return {
      id: type.id,
      score: Math.max(22, 94 - distance * 12 + datePulse + namePulse + zodiacBonus)
    };
  });

  scores.sort((a, b) => b.score - a.score);
  const top = scores[0];
  const wingCandidates = [wrapType(top.id - 1), wrapType(top.id + 1)];
  const wing = scores.find((score) => wingCandidates.includes(score.id)) || scores[1];
  const type = types.find((item) => item.id === top.id);

  return {
    ok: true,
    fullName,
    day,
    month,
    zodiac,
    type,
    wing: types.find((item) => item.id === wing.id),
    scores: scores.map((score) => ({
      ...score,
      score: Math.min(99, score.score),
      type: types.find((item) => item.id === score.id)
    }))
  };
}

function digitalRoot(value) {
  const result = value % 9;
  return result === 0 ? 9 : result;
}

function wrapType(value) {
  if (value < 1) return 9;
  if (value > 9) return 1;
  return value;
}

function renderResult(analysis) {
  emptyState.classList.add("hidden");
  result.classList.remove("hidden");

  document.querySelector("#avatar").innerHTML = createAvatar(analysis.type);
  document.querySelector("#result-kicker").textContent = `${analysis.fullName} · เกิดวันที่ ${analysis.day}/${analysis.month} · ราศี${zodiacNames[analysis.zodiac]}`;
  document.querySelector("#result-title").textContent = `ลักษณ์ ${analysis.type.id}: ${analysis.type.name}`;
  document.querySelector("#result-summary").textContent = analysis.type.short;
  document.querySelector("#core-text").textContent = analysis.type.core;
  document.querySelector("#growth-text").textContent = analysis.type.growth;
  document.querySelector("#wing-text").textContent = `ปีกที่เด่นคือ ลักษณ์ ${analysis.wing.id} (${analysis.wing.name}) ซึ่งเติมโทนพฤติกรรมรองให้บุคลิกหลัก`;

  renderList("#strength-list", analysis.type.strengths);
  renderList("#watch-list", analysis.type.watches);
  renderScores(analysis.scores);
}

function revealResult() {
  const target = window.matchMedia("(max-width: 860px)").matches
    ? result
    : document.querySelector(".app-shell");
  target.scrollIntoView({ block: "start", behavior: "smooth" });
}

function renderList(selector, items) {
  const list = document.querySelector(selector);
  list.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderScores(scores) {
  const max = Math.max(...scores.map((item) => item.score));
  document.querySelector("#score-bars").innerHTML = scores
    .map((item) => {
      const width = Math.round((item.score / max) * 100);
      return `
        <div class="score-row">
          <strong>ลักษณ์ ${item.id}</strong>
          <div class="bar-track" aria-hidden="true"><div class="bar-fill" style="--score: ${width}%"></div></div>
          <span>${item.score}</span>
        </div>
      `;
    })
    .join("");
}

function createAvatar(type) {
  const [primary, secondary, accent] = type.palette;
  const prop = {
    check: `<path d="M142 92l12 12 26-31" fill="none" stroke="${accent}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
    heart: `<path d="M160 90c-18-22-52 2-25 31l25 24 25-24c27-29-7-53-25-31z" fill="${accent}"/>`,
    star: `<path d="M160 70l11 28 30 2-23 19 7 30-25-16-26 16 8-30-24-19 31-2z" fill="${accent}"/>`,
    moon: `<path d="M177 75c-24 8-36 36-25 59 6 13 17 22 31 26-29 8-59-8-69-36-11-31 6-66 38-76 9-3 18-3 25-1z" fill="${accent}"/>`,
    book: `<path d="M119 82h38c8 0 14 6 14 14v64h-42c-8 0-14-6-14-14V86c0-2 2-4 4-4zm42 0h40c2 0 4 2 4 4v60c0 8-6 14-14 14h-42V96c0-8 6-14 12-14z" fill="${accent}"/>`,
    shield: `<path d="M160 68l48 17v38c0 31-20 55-48 67-28-12-48-36-48-67V85z" fill="${accent}"/>`,
    spark: `<path d="M160 63l9 37 31 9-31 10-9 37-10-37-31-10 31-9z" fill="${accent}"/>`,
    bolt: `<path d="M172 63l-48 67h35l-13 60 50-75h-34z" fill="${accent}"/>`,
    leaf: `<path d="M207 76c-60 5-96 38-96 81 0 16 13 29 29 29 43 0 72-50 67-110z" fill="${accent}"/><path d="M130 170c22-35 45-53 72-78" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/>`
  }[type.prop];

  return `
    <svg viewBox="0 0 320 320" role="img" aria-label="ภาพตัวอย่างบุคลิกภาพลักษณ์ ${type.id}">
      <rect x="28" y="32" width="264" height="248" rx="34" fill="#fff"/>
      <circle cx="102" cy="94" r="44" fill="${secondary}" opacity="0.5"/>
      <circle cx="226" cy="218" r="52" fill="${primary}" opacity="0.22"/>
      <path d="M89 231c7-50 36-79 71-79s64 29 71 79" fill="${primary}"/>
      <circle cx="160" cy="128" r="62" fill="#ffe0bd"/>
      <path d="M96 126c13-44 47-67 91-55 22 6 37 24 42 49-24 4-52-4-70-22-15 17-38 28-63 28z" fill="${primary}"/>
      <circle cx="137" cy="133" r="6" fill="#302f35"/>
      <circle cx="184" cy="133" r="6" fill="#302f35"/>
      <path d="M143 160c12 10 25 10 36 0" fill="none" stroke="#302f35" stroke-width="6" stroke-linecap="round"/>
      <circle cx="111" cy="153" r="10" fill="${accent}" opacity="0.35"/>
      <circle cx="210" cy="153" r="10" fill="${accent}" opacity="0.35"/>
      <g transform="translate(0 0) scale(.62) translate(100 12)">${prop}</g>
      <circle cx="248" cy="76" r="18" fill="${accent}"/>
      <text x="248" y="84" text-anchor="middle" fill="#fff" font-size="24" font-weight="800">${type.id}</text>
    </svg>
  `;
}

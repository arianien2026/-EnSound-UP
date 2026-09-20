const URL="https://raw.githubusercontent.com/cmusphinx/cmudict/master/cmudict.dict";
const WORDS=["cat","cup","hot","apple","appointment","tomorrow","siobhan"];

const IPA={
  AA:"ɑ",AE:"æ",AH:"ʌ",AO:"ɔ",AW:"aʊ",AY:"aɪ",
  EH:"ɛ",ER:"ɝ",EY:"eɪ",IH:"ɪ",IY:"i",OW:"oʊ",OY:"ɔɪ",UH:"ʊ",UW:"u",
  B:"b",CH:"tʃ",D:"d",DH:"ð",F:"f",G:"ɡ",HH:"h",JH:"dʒ",
  K:"k",L:"l",M:"m",N:"n",NG:"ŋ",P:"p",R:"ɹ",S:"s",SH:"ʃ",
  T:"t",TH:"θ",V:"v",W:"w",Y:"j",Z:"z",ZH:"ʒ"
};

const VOWELS=new Set([
  "AA","AE","AH","AO","AW","AY","EH","ER","EY",
  "IH","IY","OW","OY","UH","UW"
]);

function parsePhone(phone){
  const m=phone.match(/^([A-Z]+)([012])?$/);
  if(!m) return {raw:phone,base:phone,stress:null};
  return {raw:phone,base:m[1],stress:m[2]??null};
}

function phoneToIpa(phone){
  const x=parsePhone(phone);

  if(x.base==="AH" && x.stress==="0") return "ə";
  if(x.base==="ER" && x.stress==="0") return "ɚ";

  return IPA[x.base] ?? `?${x.base}?`;
}

function pronunciationToIpa(phones){
  return "/" + phones.map(phone=>{
    const x=parsePhone(phone);
    const stressMark =
      x.stress==="1" ? "ˈ" :
      x.stress==="2" ? "ˌ" : "";

    return stressMark + phoneToIpa(phone);
  }).join("") + "/";
}

function vowelInfo(phones){
  return phones
    .map(parsePhone)
    .filter(x=>VOWELS.has(x.base))
    .map(x=>({
      arpabet:x.raw,
      base:x.base,
      stress:x.stress,
      ipa:phoneToIpa(x.raw)
    }));
}

console.log("Downloading official CMUdict...");

const response=await fetch(URL);

if(!response.ok){
  throw new Error(`CMUdict download failed: HTTP ${response.status}`);
}

const text=await response.text();

const results=new Map(
  WORDS.map(word=>[word,[]])
);

for(const rawLine of text.split(/\r?\n/)){
  const line=rawLine.trim();

  if(!line || line.startsWith(";;;")) continue;

  const parts=line.split(/\s+/);
  const entry=parts.shift();

  if(!entry) continue;

  const normalized=entry
    .toLowerCase()
    .replace(/\(\d+\)$/,"");

  if(results.has(normalized)){
    results.get(normalized).push({
      entry,
      phones:parts,
      ipa:pronunciationToIpa(parts),
      vowels:vowelInfo(parts)
    });
  }
}

console.log("\nEnSound UP — CMUdict → IPA POC\n");

for(const word of WORDS){
  const variants=results.get(word) ?? [];

  console.log("=".repeat(68));
  console.log(`WORD: ${word}`);
  console.log(`CMUdict: ${variants.length ? "HIT" : "MISS"}`);

  if(!variants.length){
    console.log(
      "No pronunciation invented. Future Wiktionary fallback candidate."
    );
    continue;
  }

  variants.forEach((variant,index)=>{
    console.log(`Variant ${index+1}:`);
    console.log(`  Entry:    ${variant.entry}`);
    console.log(`  ARPABET:  ${variant.phones.join(" ")}`);
    console.log(`  IPA POC:  ${variant.ipa}`);

    console.log(
      `  Vowels:   ${variant.vowels
        .map(v=>`${v.arpabet} → /${v.ipa}/ (stress ${v.stress ?? "none"})`)
        .join(", ")}`
    );
  });
}

console.log("\nNOTES:");
console.log("- AH0 is rendered /ə/; stressed AH is rendered /ʌ/.");
console.log("- Stress marks are preserved, but this POC does not syllabify IPA.");
console.log("- Multiple CMUdict variants are reported instead of silently choosing one.");
console.log("- Treat these IPA strings as POC output, not final learner-facing transcription.");

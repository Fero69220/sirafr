/* ============================================================
   ★ LES NOMS D'ALLAH — FICHES DE MÉDITATION (v58.1) ★
   أسماء الله الحسنى

   99 noms établis par le Coran ou par la Sunna authentique, réunis
   en 77 fiches : les noms de même racine ou que le Prophète ﷺ a
   expliqués ensemble partagent une fiche (al-Awwal, al-Âkhir,
   az-Zâhir, al-Bâtin ; al-Ghafûr, al-Ghaffâr…).

   Pour corriger une fiche : éditez l'entrée correspondante.
     id      : adresse de la fiche (#asma/<id>) — ne pas changer
     theme   : clé de NOMS_THEMES
     noms    : le ou les noms de la fiche { ar, fr, trad }
     racine  : racine arabe et sens premier
     preuve  : où le nom est établi (Coran / Sunna)
     verset  : le texte mis en avant { ar, fr, ref }
     sens    : puces « Le sens »
     textes  : puces « Dans le Coran et la Sunna »
     mediter : puces « Méditer »
     vivre   : puces « Vivre ce nom »
     dua     : invocation par ce nom { ar (facultatif), fr, ref }
     voisins : (facultatif) noms associés, nuances
     sira    : (facultatif) { n : numéro du cours, txt } — lien vers la Sīra
   Le gras est autorisé dans les puces avec <b>…</b>.
   Ce fichier est chargé par <script src="noms.js"> et précaché par sw.js.
   ============================================================ */
const NOMS_THEMES = [
  { id: "tawhid",   fr: "L'Unique",                 ar: "التوحيد" },
  { id: "rahma",    fr: "Miséricorde et générosité", ar: "الرحمة" },
  { id: "maghfira", fr: "Pardon et pudeur",          ar: "المغفرة" },
  { id: "ilm",      fr: "Science et proximité",      ar: "العلم" },
  { id: "jalal",    fr: "Majesté et grandeur",       ar: "الجلال" },
  { id: "qudra",    fr: "Création et puissance",     ar: "القدرة" },
  { id: "hifz",     fr: "Protection et guidance",    ar: "الحفظ" }
];

const NOMS = [
  /* ==================== L'UNIQUE ==================== */
  {
    id: "allah", theme: "tawhid",
    noms: [
      { ar: "اللَّه", fr: "Allâh", trad: "Allah — Celui qu'on adore" },
      { ar: "الإِلَه", fr: "Al-Ilâh", trad: "La Divinité, le seul digne d'adoration" }
    ],
    racine: "أ ل ه (a-l-h) : adorer — le ma'lûh est celui vers qui le cœur se tourne avec amour, vénération et besoin",
    preuve: "Coran — le nom le plus cité du Livre",
    verset: { ar: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", fr: "Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même.", ref: "al-Baqara 255" },
    sens: [
      "Le nom propre du Seigneur, celui qui <b>rassemble tous les autres</b> : on dit « ar-Rahmân est un nom d'Allah », jamais l'inverse. Ibn 'Abbâs : « Allah est Celui qui possède la divinité et le droit d'être adoré sur toute Sa création. »",
      "Al-Ilâh : Celui que les cœurs divinisent — par l'amour, la crainte, l'espoir, la confiance. La shahâda ne nie pas l'existence d'autres « dieux » adorés : elle nie qu'un seul d'entre eux <b>mérite</b> de l'être."
    ],
    textes: [
      "« Votre Dieu est un Dieu unique. Point de divinité à part Lui, le Tout Miséricordieux, le Très Miséricordieux » (al-Baqara 163).",
      "« Celui dont la dernière parole est <b>lâ ilâha illâ llâh</b> entrera au Paradis » (Abû Dâwûd)."
    ],
    mediter: [
      "C'est le nom que tu prononces le plus : dans l'adhân, la basmala, le takbîr, le salâm. Combien de fois aujourd'hui l'as-tu dit en <b>pensant à Celui que tu nommais</b> ?",
      "Vers qui ton cœur se tourne-t-il en premier quand il a peur, quand il espère, quand il aime ? C'est là que se joue le sens d'al-Ilâh."
    ],
    vivre: [
      "Purifier l'adoration : ne demander, ne craindre d'une crainte révérencielle et n'espérer le secours qu'auprès de Lui.",
      "« Allâhumma » signifie « yâ Allâh » : la plupart des invocations du Prophète ﷺ commencent par ce nom — commence les tiennes ainsi."
    ],
    dua: { ar: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", fr: "Point de divinité à part Toi ! Gloire à Toi ! J'ai été du nombre des injustes.", ref: "invocation de Yûnus — al-Anbiyâ' 87" }
  },
  {
    id: "ar-rabb", theme: "tawhid",
    noms: [{ ar: "الرَّبّ", fr: "Ar-Rabb", trad: "Le Seigneur, Celui qui éduque et fait croître" }],
    racine: "ر ب ب (r-b-b) : posséder, diriger, faire grandir étape par étape (d'où tarbiya, l'éducation)",
    preuve: "Coran (Yâ-Sîn 58) et Sunna (Muslim)",
    verset: { ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", fr: "Louange à Allah, Seigneur des mondes.", ref: "al-Fâtiha 2" },
    sens: [
      "Le Maître qui crée, possède, gouverne — et qui <b>élève</b> Ses créatures d'un état à l'autre jusqu'à leur perfection.",
      "As-Sa'dî : Sa seigneurie est <b>générale</b> (Il crée et nourrit toute créature) et <b>particulière</b> (Il éduque Ses alliés par la foi, les y fait réussir et écarte d'eux ce qui les en détourne)."
    ],
    textes: [
      "« Salâm ! — parole d'un Seigneur Très Miséricordieux » (Yâ-Sîn 58). « Quant à l'inclinaison, glorifiez-y le Seigneur » (Muslim).",
      "Presque toutes les invocations des prophètes dans le Coran commencent par <b>Rabbi</b> ou <b>Rabbanâ</b> : on appelle Celui qui prend soin."
    ],
    mediter: [
      "Relis ta vie comme une tarbiya : cette épreuve, ce retard, cette porte fermée — qu'est-ce que ton Seigneur était en train de faire grandir en toi ?",
      "Il a été ton Rabb quand tu étais dans le ventre de ta mère, sans que tu demandes rien. Le serait-Il moins maintenant que tu L'invoques ?"
    ],
    vivre: [
      "Accepter d'être éduqué : la patience dans l'épreuve est la manière de dire « Tu es mon Seigneur » avec sa vie.",
      "Éduquer ceux dont on a la charge avec la même progressivité : le rabbânî, disent les savants, enseigne les petites choses avant les grandes."
    ],
    dua: { ar: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", fr: "Seigneur, nous nous sommes fait du tort à nous-mêmes ; si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons du nombre des perdants.", ref: "invocation d'Âdam et Hawwâ' — al-A'râf 23" }
  },
  {
    id: "al-wahid-al-ahad", theme: "tawhid",
    noms: [
      { ar: "الوَاحِد", fr: "Al-Wâhid", trad: "L'Unique" },
      { ar: "الأَحَد", fr: "Al-Ahad", trad: "L'Un, sans pareil" }
    ],
    racine: "و ح د (w-h-d) : être seul, sans second",
    preuve: "Coran",
    verset: { ar: "قُلْ هُوَ اللَّهُ أَحَدٌ", fr: "Dis : Lui, Allah, est Un.", ref: "al-Ikhlâs 1" },
    sens: [
      "Unique dans Son essence, Ses noms, Ses attributs et Ses actes : <b>rien ne Lui ressemble</b>, rien ne partage Sa seigneurie ni Son droit à l'adoration.",
      "Al-Ahad est plus fort qu'al-Wâhid : il nie toute pluralité, toute composition, tout égal — c'est pourquoi, au défini, il ne se dit que d'Allah."
    ],
    textes: [
      "La sourate al-Ikhlâs « équivaut au <b>tiers du Coran</b> » (Bukhârî) : un tiers du Livre parle de Lui.",
      "Al-Wâhid vient six fois dans le Coran, toujours suivi d'al-Qahhâr : « Il est l'Unique, le Dominateur suprême » (ar-Ra'd 16)."
    ],
    mediter: [
      "Tout ce qui est multiple a besoin d'un autre ; seul l'Un se suffit. De combien de « maîtres » dépend ta tranquillité : le regard des gens, l'argent, un poste ?",
      "« Un homme appartenant à des associés qui se le disputent, et un homme appartenant à un seul : sont-ils égaux ? » (az-Zumar 29). Le tawhîd est une <b>libération</b>."
    ],
    vivre: [
      "Unifier son intention : une seule Face recherchée dans l'acte, au lieu de mille regards à satisfaire.",
      "Réciter al-Ikhlâs matin, soir et au coucher en sachant ce qu'on affirme."
    ],
    dua: { ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ أَنِّي أَشْهَدُ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ، الْأَحَدُ الصَّمَدُ، الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", fr: "Ô Allah, je Te demande par ceci : j'atteste que Tu es Allah, point de divinité à part Toi, l'Un, le Soutien universel, qui n'a pas engendré et n'a pas été engendré, et que nul n'égale. — Le Prophète ﷺ entendit un homme invoquer ainsi et dit : « Il a invoqué Allah par Son nom le plus immense. »", ref: "Abû Dâwûd, at-Tirmidhî, Ibn Mâjah — Burayda" },
    sira: { n: 17, txt: "Bilâl sous la pierre brûlante, n'ayant qu'un mot : « Ahad, Ahad »." }
  },
  {
    id: "as-samad", theme: "tawhid",
    noms: [{ ar: "الصَّمَد", fr: "As-Samad", trad: "Le Soutien universel, Celui vers qui tous se tournent" }],
    racine: "ص م د (s-m-d) : se diriger vers quelqu'un pour son besoin ; ce qui est plein, sans creux",
    preuve: "Coran — une seule fois",
    verset: { ar: "اللَّهُ الصَّمَدُ", fr: "Allah, le Soutien universel.", ref: "al-Ikhlâs 2" },
    sens: [
      "Ibn 'Abbâs : « Le Maître dont la maîtrise est parfaite, le Noble dont la noblesse est parfaite, l'Immense dont l'immensité est parfaite… » — <b>parfait en tout</b>, donc recours de tous.",
      "Celui qui n'a besoin de rien — ni nourriture, ni boisson, ni aide — et dont tout a besoin."
    ],
    textes: [
      "Le nom n'apparaît qu'une fois, au cœur de la sourate qui vaut le tiers du Coran.",
      "« Ô hommes, c'est vous les indigents ayant besoin d'Allah, et c'est Allah le Riche, le Digne de louange » (Fâtir 15)."
    ],
    mediter: [
      "Regarde une journée ordinaire : le nourrisson, le malade, le chef d'État, l'oiseau — tous tendus vers un seul. Aucune demande ne Le gêne, aucune ne Le distrait d'une autre.",
      "Chez qui vas-tu d'abord quand tu as un besoin ? Le samad du cœur se reconnaît au <b>premier réflexe</b>."
    ],
    vivre: [
      "Commencer par Lui : deux rak'a et une invocation avant le coup de téléphone, pas après l'échec.",
      "Devenir, à sa mesure, quelqu'un vers qui l'on peut se tourner : « Allah aide Son serviteur tant que celui-ci aide son frère » (Muslim)."
    ],
    dua: { fr: "Ô Allah, Toi as-Samad : je dépose auprès de Toi mon besoin — ne me confie pas à moi-même, ne serait-ce qu'un clin d'œil.", ref: "d'après l'invocation du matin et du soir (al-Hâkim)" }
  },
  {
    id: "al-witr", theme: "tawhid",
    noms: [{ ar: "الوِتْر", fr: "Al-Witr", trad: "L'Impair, l'Unique sans second" }],
    racine: "و ت ر (w-t-r) : ce qui est impair, seul",
    preuve: "Sunna — Bukhârî et Muslim",
    verset: { ar: "إِنَّ اللَّهَ وِتْرٌ يُحِبُّ الْوِتْرَ", fr: "Allah est Witr et Il aime l'impair.", ref: "Bukhârî et Muslim — Abû Hurayra" },
    sens: [
      "L'Unique qui n'a ni associé ni semblable : l'impair est la signature de Son unicité.",
      "Cette phrase vient à la fin du hadith des quatre-vingt-dix-neuf noms — <b>cent moins un</b> : le nombre même de Ses noms est impair."
    ],
    textes: [
      "« Ô gens du Coran, priez le witr, car Allah est Witr et Il aime le witr » (Abû Dâwûd, at-Tirmidhî — 'Alî).",
      "L'impair traverse l'adoration : sept tours de tawâf, sept parcours du sa'y, sept cailloux, trois lavages des ablutions, le witr qui clôt la nuit."
    ],
    mediter: [
      "Pourquoi tant d'actes d'adoration sont-ils impairs ? Chaque fois, c'est un rappel discret : tu adores <b>Un seul</b>.",
      "Le Prophète ﷺ rompait son jeûne de l'Aïd par un nombre impair de dattes (Bukhârî) : même un geste banal peut porter le tawhîd."
    ],
    vivre: [
      "Ne pas s'endormir sans le witr : c'est la recommandation du Prophète ﷺ à Abû Hurayra (Bukhârî et Muslim).",
      "Faire du dhikr en nombre impair quand la Sunna le prévoit — trois, sept, trente-trois."
    ],
    dua: { ar: "سُبْحَانَ الْمَلِكِ الْقُدُّوسِ", fr: "Gloire au Roi, le Pur ! — trois fois après le salâm du witr, en élevant la voix à la troisième.", ref: "Abû Dâwûd, an-Nasâ'î" }
  },
  {
    id: "al-haqq", theme: "tawhid",
    noms: [{ ar: "الحَقّ", fr: "Al-Haqq", trad: "Le Vrai, le Réel" }],
    racine: "ح ق ق (h-q-q) : ce qui est établi, certain, qui ne passe pas",
    preuve: "Coran",
    verset: { ar: "ذَلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ وَأَنَّ مَا يَدْعُونَ مِنْ دُونِهِ هُوَ الْبَاطِلُ", fr: "Il en est ainsi parce qu'Allah est le Vrai, et que ce qu'ils invoquent en dehors de Lui est le faux.", ref: "al-Hajj 62" },
    sens: [
      "Celui dont l'existence est <b>certaine et nécessaire</b>, qui ne disparaît ni ne change ; vrai dans Son essence, Sa parole, Sa promesse, Sa rencontre.",
      "Tout le reste n'existe que par Lui et passera : « Tout périra sauf Sa Face » (al-Qasas 88)."
    ],
    textes: [
      "« Là, la protection appartient à Allah, <b>le Vrai</b> : c'est Lui qui accorde la meilleure récompense et la meilleure issue » (al-Kahf 44) — conclusion du récit des deux jardins.",
      "« Ce jour-là, Allah leur donnera leur pleine rétribution, et ils sauront qu'Allah est le Vrai, l'Évident » (an-Nûr 25)."
    ],
    mediter: [
      "Dans cent ans, que restera-t-il de ce qui t'angoisse ce soir ? Et de ce que tu as fait pour Lui ?",
      "Le poète Labîd : « Toute chose, hormis Allah, est vaine » — « la parole la plus vraie qu'un poète ait dite » (Bukhârî et Muslim)."
    ],
    vivre: [
      "Aimer la vérité même contre soi : dire vrai, reconnaître son tort, accepter le rappel.",
      "Adosser sa vie à ce qui ne passe pas : une promesse d'Allah vaut mieux qu'une certitude des hommes."
    ],
    dua: { ar: "أَنْتَ الْحَقُّ، وَوَعْدُكَ الْحَقُّ، وَلِقَاؤُكَ حَقٌّ، وَقَوْلُكَ حَقٌّ، وَالْجَنَّةُ حَقٌّ، وَالنَّارُ حَقٌّ، وَالنَّبِيُّونَ حَقٌّ، وَمُحَمَّدٌ ﷺ حَقٌّ، وَالسَّاعَةُ حَقٌّ", fr: "Tu es le Vrai, Ta promesse est vraie, Ta rencontre est vraie, Ta parole est vraie, le Paradis est vrai, le Feu est vrai, les prophètes sont vrais, Muhammad ﷺ est vrai, et l'Heure est vraie. — Extrait de l'invocation du Prophète ﷺ quand il se levait pour prier la nuit.", ref: "Bukhârî et Muslim — Ibn 'Abbâs" }
  },
  {
    id: "al-mubin", theme: "tawhid",
    noms: [{ ar: "المُبِين", fr: "Al-Mubîn", trad: "L'Évident, Celui qui rend tout clair" }],
    racine: "ب ي ن (b-y-n) : être clair, distinct ; séparer le vrai du faux",
    preuve: "Coran — une seule fois",
    verset: { ar: "وَيَعْلَمُونَ أَنَّ اللَّهَ هُوَ الْحَقُّ الْمُبِينُ", fr: "… et ils sauront qu'Allah est le Vrai, l'Évident.", ref: "an-Nûr 25" },
    sens: [
      "Celui dont l'existence et l'unicité sont <b>manifestes</b> par Ses signes : il n'y a en Lui aucune obscurité, seulement des regards qui se détournent.",
      "Celui qui <b>rend clair</b> : Il a montré à Ses serviteurs le chemin, le licite et l'illicite, par un Livre « explicite » (mubîn)."
    ],
    textes: [
      "« Nous leur montrerons Nos signes dans l'univers et en eux-mêmes, jusqu'à ce qu'il leur devienne évident que c'est la vérité » (Fussilat 53).",
      "« Je vous ai laissés sur la voie blanche : sa nuit est comme son jour, seul s'en écarte celui qui court à sa perte » (Ibn Mâjah)."
    ],
    mediter: [
      "Un seul signe suffirait : ta main, un œil, une graine qui fend la terre. Lequel as-tu cessé de voir à force de le voir ?",
      "Le doute vient rarement d'un manque de preuves ; il vient souvent d'un manque de silence."
    ],
    vivre: [
      "Être clair à son tour : dans sa parole, ses engagements, sa religion — sans double discours.",
      "Demander la clarté avant de décider : l'istikhâra est l'invocation de celui qui veut y voir clair."
    ],
    dua: { ar: "رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي", fr: "Seigneur, ouvre-moi la poitrine et facilite-moi ma tâche.", ref: "invocation de Mûsâ — Tâ-Hâ 25-26" }
  },
  {
    id: "al-hayy", theme: "tawhid",
    noms: [{ ar: "الحَيّ", fr: "Al-Hayy", trad: "Le Vivant, qui ne meurt pas" }],
    racine: "ح ي ي (h-y-y) : la vie",
    preuve: "Coran",
    verset: { ar: "وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ", fr: "Place ta confiance dans le Vivant qui ne meurt pas.", ref: "al-Furqân 58" },
    sens: [
      "Une vie <b>parfaite</b> : sans commencement, sans fin, sans sommeil ni fatigue — et dont découlent tous les attributs de perfection (science, ouïe, vue, puissance).",
      "Toute vie est un prêt de la Sienne : Il la donne et la reprend."
    ],
    textes: [
      "« Ô Allah, je cherche refuge auprès de Ta puissance — point de divinité à part Toi — contre l'égarement. Tu es <b>le Vivant qui ne meurt pas</b>, alors que les djinns et les hommes meurent » (Bukhârî et Muslim).",
      "À la mort du Prophète ﷺ, Abû Bakr : « Celui qui adorait Muhammad, Muhammad est mort ; celui qui adorait Allah, Allah est Vivant et ne meurt pas » (Bukhârî)."
    ],
    mediter: [
      "Tous ceux sur qui tu t'appuies mourront, ou tu mourras avant eux. Le verset ne dit pas seulement « fais confiance » : il dit <b>à qui</b>, et pourquoi.",
      "Ce qui est vivant en toi — la foi, le dhikr — vient du Vivant : « l'exemple de celui qui mentionne son Seigneur et de celui qui ne Le mentionne pas est celui du vivant et du mort » (Bukhârî)."
    ],
    vivre: [
      "Ne pas accrocher sa religion à une personne : les savants, les proches, les modèles passent ; Lui demeure.",
      "Faire vivre son cœur : Coran, dhikr, assemblées de science."
    ],
    dua: { ar: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ", fr: "Ô Vivant, ô Toi qui subsistes par Toi-même, c'est par Ta miséricorde que j'implore secours. — Le Prophète ﷺ le disait quand une affaire le préoccupait.", ref: "at-Tirmidhî — Anas" }
  },
  {
    id: "al-qayyum", theme: "tawhid",
    noms: [{ ar: "القَيُّوم", fr: "Al-Qayyûm", trad: "Celui qui subsiste par Lui-même et par qui tout subsiste" }],
    racine: "ق و م (q-w-m) : se tenir debout, maintenir",
    preuve: "Coran — trois fois, toujours après al-Hayy",
    verset: { ar: "لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ", fr: "Ni somnolence ni sommeil ne Le saisissent.", ref: "Âyat al-Kursî — al-Baqara 255" },
    sens: [
      "Il se tient <b>par Lui-même</b>, sans besoin de personne ; et Il <b>fait tenir</b> tout le reste : cieux, terre, battement de ton cœur.",
      "Al-Hayy al-Qayyûm : pour beaucoup de savants, ces deux noms réunis renvoient au <b>nom le plus immense</b> d'Allah — ils se trouvent dans al-Baqara 255, Âl 'Imrân 2 et Tâ-Hâ 111."
    ],
    textes: [
      "« Allah retient les cieux et la terre pour qu'ils ne s'effondrent pas ; et s'ils s'effondraient, nul autre après Lui ne pourrait les retenir » (Fâtir 41).",
      "« Allah ne dort pas, et il ne Lui sied pas de dormir ; Il abaisse la balance et l'élève » (Muslim)."
    ],
    mediter: [
      "Pendant que tu dors, qui fait tourner ce que tu crois tenir : ta respiration, tes enfants, ton travail, le monde ?",
      "Âyat al-Kursî se récite avant de dormir : tu remets la garde à Celui qui <b>ne dort pas</b>."
    ],
    vivre: [
      "Se décharger : tu n'es le qayyûm de rien. Faire sa part, puis lâcher le reste.",
      "Dans la détresse, revenir à ces deux noms, comme le faisait le Prophète ﷺ."
    ],
    dua: { ar: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ", fr: "Ô Vivant, ô Subsistant, par Ta miséricorde j'implore secours : arrange pour moi toutes mes affaires, et ne me confie pas à moi-même, ne serait-ce qu'un clin d'œil.", ref: "an-Nasâ'î (as-Sunan al-kubrâ), al-Hâkim — enseignée à Fâtima, matin et soir" }
  },
  {
    id: "al-awwal-al-akhir", theme: "tawhid",
    noms: [
      { ar: "الأَوَّل", fr: "Al-Awwal", trad: "Le Premier" },
      { ar: "الآخِر", fr: "Al-Âkhir", trad: "Le Dernier" },
      { ar: "الظَّاهِر", fr: "Az-Zâhir", trad: "Le Très-Haut, l'Apparent" },
      { ar: "البَاطِن", fr: "Al-Bâtin", trad: "Le Proche, le Caché" }
    ],
    racine: "Quatre noms que le Coran réunit et que le Prophète ﷺ a expliqués lui-même",
    preuve: "Coran — al-Hadîd 3",
    verset: { ar: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ", fr: "Il est le Premier et le Dernier, l'Apparent et le Caché, et Il est Omniscient.", ref: "al-Hadîd 3" },
    sens: [
      "L'explication est du Prophète ﷺ : « Tu es <b>le Premier</b> : rien avant Toi. Tu es <b>le Dernier</b> : rien après Toi. Tu es <b>az-Zâhir</b> : rien au-dessus de Toi. Tu es <b>al-Bâtin</b> : rien n'est plus proche que Toi » (Muslim).",
      "Deux noms pour le temps, deux pour l'espace : Il <b>englobe</b> tout — aucun instant, aucun lieu ne Lui échappe."
    ],
    textes: [
      "Ibn al-Qayyim : ces quatre noms sont les piliers de la connaissance d'Allah — Son antériorité, Sa permanence, Son élévation, Sa proximité.",
      "Ibn 'Abbâs conseillait à celui que le doute tourmente de réciter ce verset (Abû Dâwûd)."
    ],
    mediter: [
      "Avant ta première pensée, Il était ; après ton dernier souffle, Il sera. Ta vie est une parenthèse <b>à l'intérieur</b> de Sa présence.",
      "Au-dessus de tout, et plus proche que tout : l'élévation n'éloigne pas, la proximité ne rabaisse pas."
    ],
    vivre: [
      "Al-Awwal : tout bien vient de Lui <b>avant</b> ton effort. Al-Âkhir : tout acte doit finir <b>vers</b> Lui. Commencer par « bismillâh », finir par « al-hamdu lillâh ».",
      "Al-Bâtin connaît l'intérieur : soigner ce que personne ne voit."
    ],
    dua: { ar: "اللَّهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ", fr: "Ô Allah, Tu es le Premier : rien avant Toi ; le Dernier : rien après Toi ; az-Zâhir : rien au-dessus de Toi ; al-Bâtin : rien de plus proche que Toi. Acquitte-nous de la dette et enrichis-nous contre la pauvreté. — À dire au coucher.", ref: "Muslim — Abû Hurayra" }
  },
  {
    id: "al-warith", theme: "tawhid",
    noms: [{ ar: "الوَارِث", fr: "Al-Wârith", trad: "L'Héritier, Celui qui demeure après tout" }],
    racine: "و ر ث (w-r-th) : recueillir ce que laisse celui qui part",
    preuve: "Coran (al-Hijr 23, al-Anbiyâ' 89, al-Qasas 58)",
    verset: { ar: "وَإِنَّا لَنَحْنُ نُحْيِي وَنُمِيتُ وَنَحْنُ الْوَارِثُونَ", fr: "C'est Nous qui donnons la vie et donnons la mort, et c'est Nous les Héritiers.", ref: "al-Hijr 23" },
    sens: [
      "Celui qui reste quand tous les propriétaires sont partis : tout Lui <b>revient</b>, parce que tout était à Lui.",
      "« C'est Nous qui hériterons de la terre et de ceux qui sont sur elle, et c'est vers Nous qu'ils seront ramenés » (Maryam 40)."
    ],
    textes: [
      "Zakariyyâ, vieux et sans enfant : « Seigneur, ne me laisse pas seul, alors que Tu es le meilleur des héritiers » (al-Anbiyâ' 89) — et Yahyâ lui fut donné.",
      "« À qui appartient la royauté aujourd'hui ? — À Allah, l'Unique, le Dominateur suprême » (Ghâfir 16)."
    ],
    mediter: [
      "Ta maison a eu des propriétaires avant toi, elle en aura après toi. Tu n'es pas propriétaire : tu es <b>dépositaire</b>, pour un temps.",
      "Le Prophète ﷺ : « Le fils d'Âdam dit : mon bien, mon bien ! N'as-tu de ton bien que ce que tu as mangé et consommé, porté et usé, ou donné en aumône et ainsi fait durer ? » (Muslim)."
    ],
    vivre: [
      "Envoyer devant soi ce qu'on veut retrouver : seule l'aumône est vraiment « à toi ».",
      "Préparer ce qui continue après la mort : aumône courante, science utile, enfant pieux qui invoque (Muslim)."
    ],
    dua: { ar: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ", fr: "Seigneur, ne me laisse pas seul, alors que Tu es le meilleur des héritiers.", ref: "invocation de Zakariyyâ — al-Anbiyâ' 89" }
  },

  /* ==================== MISÉRICORDE ET GÉNÉROSITÉ ==================== */
  {
    id: "ar-rahman-ar-rahim", theme: "rahma",
    noms: [
      { ar: "الرَّحْمَن", fr: "Ar-Rahmân", trad: "Le Tout Miséricordieux" },
      { ar: "الرَّحِيم", fr: "Ar-Rahîm", trad: "Le Très Miséricordieux" }
    ],
    racine: "ر ح م (r-h-m) : la miséricorde — de là vient rahim, la matrice",
    preuve: "Coran — dans la basmala, en tête de cent treize sourates",
    verset: { ar: "الرَّحْمَنِ الرَّحِيمِ", fr: "Le Tout Miséricordieux, le Très Miséricordieux.", ref: "al-Fâtiha 3" },
    sens: [
      "<b>Ar-Rahmân</b> : la miséricorde comme attribut de Son essence, immense, qui embrasse toute créature — nom qui ne se donne qu'à Lui. <b>Ar-Rahîm</b> : la miséricorde qui <b>atteint</b> ceux qu'Il veut : « Il est Très Miséricordieux envers les croyants » (al-Ahzâb 43).",
      "« Ma miséricorde embrasse toute chose » (al-A'râf 156). Il a écrit au-dessus du Trône : « <b>Ma miséricorde devance Ma colère</b> » (Bukhârî et Muslim)."
    ],
    textes: [
      "« Allah a fait la miséricorde en cent parts : Il en a gardé quatre-vingt-dix-neuf et en a fait descendre <b>une seule</b> sur terre ; c'est par elle que les créatures se font miséricorde, au point que la jument lève son sabot de peur de blesser son petit » (Bukhârî et Muslim).",
      "Voyant une captive serrer un nourrisson contre elle : « Allah est <b>plus miséricordieux</b> envers Ses serviteurs que cette femme envers son enfant » (Bukhârî et Muslim)."
    ],
    mediter: [
      "Additionne toute la tendresse du monde, depuis Âdam — mères, pères, bêtes : c'est un centième. Que sont les quatre-vingt-dix-neuf autres, gardés pour le Jour où tu en auras le plus besoin ?",
      "Tu dis ces deux noms au moins dix-sept fois par jour dans la Fâtiha. Ta prière commence par la miséricorde avant de parler du Jugement."
    ],
    vivre: [
      "« Ceux qui font miséricorde, le Tout Miséricordieux leur fait miséricorde. Faites miséricorde à ceux qui sont sur terre, Celui qui est au ciel vous fera miséricorde » (Abû Dâwûd, at-Tirmidhî).",
      "Ne jamais désespérer, ni faire désespérer : « Ne désespérez pas de la miséricorde d'Allah » (az-Zumar 53)."
    ],
    dua: { ar: "رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا", fr: "Seigneur, accorde-nous de Ta part une miséricorde, et assure-nous la droiture dans notre affaire.", ref: "invocation des gens de la caverne — al-Kahf 10" },
    sira: { n: 30, txt: "À Tâ'if, blessé et chassé, le Prophète ﷺ refuse que l'ange des montagnes écrase ses ennemis : la miséricorde reçue devient miséricorde donnée." }
  },
  {
    id: "ar-rauf", theme: "rahma",
    noms: [{ ar: "الرَّؤُوف", fr: "Ar-Ra'ûf", trad: "Le Compatissant, plein de tendresse" }],
    racine: "ر أ ف (r-'-f) : la ra'fa, degré le plus délicat de la miséricorde",
    preuve: "Coran",
    verset: { ar: "إِنَّ اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَحِيمٌ", fr: "Allah est, envers les hommes, Compatissant et Très Miséricordieux.", ref: "al-Baqara 143" },
    sens: [
      "La ra'fa est une miséricorde <b>qui prévient le mal</b> avant qu'il n'arrive : elle écarte, elle allège, elle avertit.",
      "Le verset est descendu au changement de qibla : les compagnons s'inquiétaient pour les prières faites vers Jérusalem — « Allah n'est pas tel à laisser perdre votre foi »."
    ],
    textes: [
      "« Allah vous met en garde contre Lui-même ; et Allah est Compatissant envers Ses serviteurs » (Âl 'Imrân 30) : <b>l'avertissement lui-même</b> est une tendresse.",
      "Le Coran donne ce nom au Prophète ﷺ : « envers les croyants, compatissant et miséricordieux » (at-Tawba 128)."
    ],
    mediter: [
      "Combien d'accidents n'ont pas eu lieu, combien de fautes n'as-tu pas commises parce qu'une porte s'est fermée à temps ? La ra'fa ne se voit presque jamais : elle se <b>devine</b>.",
      "Les allègements de la Loi — raccourcir en voyage, rompre quand on est malade — sont Sa ra'fa mise en règles."
    ],
    vivre: [
      "Prendre les facilités qu'Il a données, sans se croire plus pieux que la Loi.",
      "Prévenir plutôt que réparer : avec ses enfants, ses proches, soi-même."
    ],
    dua: { ar: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَحِيمٌ", fr: "Seigneur, pardonne-nous ainsi qu'à nos frères qui nous ont précédés dans la foi, et ne mets dans nos cœurs aucune rancœur envers ceux qui ont cru. Seigneur, Tu es Compatissant et Très Miséricordieux.", ref: "al-Hashr 10" }
  },
  {
    id: "al-wadud", theme: "rahma",
    noms: [{ ar: "الوَدُود", fr: "Al-Wadûd", trad: "Le Tout Affectueux, qui aime et qui est aimé" }],
    racine: "و د د (w-d-d) : le wudd, l'amour pur qui se manifeste",
    preuve: "Coran — deux fois (Hûd 90, al-Burûj 14)",
    verset: { ar: "وَهُوَ الْغَفُورُ الْوَدُودُ", fr: "Et c'est Lui le Pardonneur, le Tout Affectueux.", ref: "al-Burûj 14" },
    sens: [
      "Le mot a deux sens, et les deux sont vrais : Celui qui <b>aime</b> Ses prophètes, Ses alliés, les repentants — et Celui qui <b>est aimé</b> d'eux plus que tout.",
      "Le wudd est plus que l'amour : c'est l'amour qui se montre, par des dons, de la douceur, de la proximité."
    ],
    textes: [
      "« Quand Allah aime un serviteur, Il appelle Jibrîl : J'aime untel, aime-le ! Jibrîl l'aime, puis l'annonce aux habitants du ciel… puis <b>l'agrément lui est accordé sur terre</b> » (Bukhârî et Muslim).",
      "Dans al-Burûj, le nom vient <b>juste après</b> la menace faite à ceux qui ont brûlé les croyants : même là, la porte est « le Pardonneur, le Tout Affectueux »."
    ],
    mediter: [
      "Il n'a pas besoin de toi, et Il t'aime si tu reviens. Un amour sans intérêt : le seul que tu rencontreras jamais.",
      "Shu'ayb à son peuple : « Demandez pardon à votre Seigneur et repentez-vous à Lui : mon Seigneur est <b>Très Miséricordieux, Tout Affectueux</b> » (Hûd 90)."
    ],
    vivre: [
      "Chercher ce qu'Il aime : « Mon serviteur ne cesse de se rapprocher de Moi par les œuvres surérogatoires jusqu'à ce que Je l'aime » (Bukhârî).",
      "Montrer son affection : le Prophète ﷺ disait à Mu'âdh « par Allah, je t'aime » (Abû Dâwûd)."
    ],
    dua: { ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ، وَحُبَّ مَنْ يُحِبُّكَ، وَحُبَّ عَمَلٍ يُقَرِّبُ إِلَى حُبِّكَ", fr: "Ô Allah, je Te demande Ton amour, l'amour de ceux qui T'aiment, et l'amour de tout acte qui rapproche de Ton amour.", ref: "at-Tirmidhî — Mu'âdh" }
  },
  {
    id: "al-barr", theme: "rahma",
    noms: [{ ar: "البَرّ", fr: "Al-Barr", trad: "Le Bienfaisant, le Bon" }],
    racine: "ب ر ر (b-r-r) : le birr, la bonté large et fidèle",
    preuve: "Coran — une seule fois",
    verset: { ar: "إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ", fr: "C'est Lui le Bienfaisant, le Très Miséricordieux.", ref: "at-Tûr 28" },
    sens: [
      "Celui dont la bonté <b>déborde</b> : Il donne avant qu'on demande, tient Sa promesse, et traite Ses serviteurs mieux qu'ils ne se traitent eux-mêmes.",
      "Ce sont les gens du Paradis qui le disent, en se retournant sur leur vie : « Nous L'invoquions auparavant : c'est Lui le Bienfaisant, le Très Miséricordieux. »"
    ],
    textes: [
      "Sa comptabilité est celle d'un Bienfaisant : la bonne action projetée compte <b>une</b>, accomplie <b>dix à sept cents</b> fois et plus ; la mauvaise projetée puis délaissée compte une <b>bonne</b>, accomplie <b>une seule</b> (Bukhârî et Muslim).",
      "« Et si vous comptiez les bienfaits d'Allah, vous ne sauriez les dénombrer » (Ibrâhîm 34)."
    ],
    mediter: [
      "Fais la liste de ce que tu n'as jamais demandé et que tu as : la vue, une langue, des parents, l'islam.",
      "Au Paradis, on comprendra que <b>chaque</b> instant de sa vie était de la bonté, même ceux qui ne ressemblaient pas à de la bonté."
    ],
    vivre: [
      "Le birr se rend d'abord aux parents : birr al-wâlidayn porte le nom même de Son attribut.",
      "« Vous n'atteindrez la vraie bonté (al-birr) que si vous donnez de ce que vous aimez » (Âl 'Imrân 92)."
    ],
    dua: { ar: "رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ", fr: "Seigneur, pardonne-nous nos péchés, efface nos mauvaises actions, et fais-nous mourir avec les gens de bien (al-abrâr).", ref: "Âl 'Imrân 193" }
  },
  {
    id: "al-latif", theme: "rahma",
    noms: [{ ar: "اللَّطِيف", fr: "Al-Latîf", trad: "Le Subtil, le Doux" }],
    racine: "ل ط ف (l-t-f) : ce qui est fin, délicat, qui passe sans bruit",
    preuve: "Coran",
    verset: { ar: "اللَّهُ لَطِيفٌ بِعِبَادِهِ", fr: "Allah est Doux envers Ses serviteurs.", ref: "ash-Shûrâ 19" },
    sens: [
      "Deux sens : Celui dont la <b>science</b> atteint le plus fin, le plus caché — « Ne connaît-Il pas ce qu'Il a créé, Lui le Subtil, le Parfaitement Informé ? » (al-Mulk 14).",
      "Et Celui dont la <b>bonté</b> arrive par des chemins qu'on ne voit pas, en faisant sortir le bien de ce qui semblait un mal."
    ],
    textes: [
      "Yûsuf, au bout du puits, de l'esclavage, de la calomnie et de la prison : « Mon Seigneur est <b>subtil</b> en ce qu'Il veut » (Yûsuf 100) — chaque malheur était une marche vers le trône.",
      "Luqmân : « Fût-ce le poids d'un grain de moutarde, au creux d'un rocher, dans les cieux ou dans la terre, Allah le fera venir. Allah est Subtil, Parfaitement Informé » (Luqmân 16)."
    ],
    mediter: [
      "Cherche dans ta vie <b>une</b> contrariété dont tu remercies Allah aujourd'hui. Puis pense à celle que tu vis en ce moment.",
      "Le lutf, c'est quand Il te donne ce dont tu as besoin en te refusant ce que tu demandes."
    ],
    vivre: [
      "Dans l'épreuve, dire : « Il y a là une douceur que je ne vois pas encore. »",
      "Être latîf : faire le bien sans bruit, corriger sans humilier, donner sans que la main gauche le sache."
    ],
    dua: { fr: "Yâ Latîf, sois doux avec moi dans ce que Tu as décrété, et montre-moi la bonté cachée dans ce que je n'aime pas.", ref: "invocation libre, d'après Yûsuf 100" },
    sira: { n: 43, txt: "Sur la route de la hijra, Surâqa part pour capturer le Prophète ﷺ et revient en détournant les poursuivants : le danger changé en protection." }
  },
  {
    id: "ar-rafiq", theme: "rahma",
    noms: [{ ar: "الرَّفِيق", fr: "Ar-Rafîq", trad: "Le Doux, qui agit avec douceur" }],
    racine: "ر ف ق (r-f-q) : le rifq, la douceur dans la manière de faire — contraire de la brutalité",
    preuve: "Sunna — Bukhârî et Muslim",
    verset: { ar: "إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الْأَمْرِ كُلِّهِ", fr: "Allah est Doux et Il aime la douceur en toute chose.", ref: "Bukhârî et Muslim — 'Â'isha" },
    sens: [
      "Doux dans Ses actes : Il a créé par étapes, légiféré par étapes (le vin, le jeûne, le combat), et ne charge une âme que selon sa capacité.",
      "Le hadith a une circonstance : des gens saluèrent le Prophète ﷺ d'une insulte déguisée, 'Â'isha répliqua vivement — « Doucement, 'Â'isha ! »"
    ],
    textes: [
      "« Il donne pour la douceur ce qu'Il ne donne <b>ni pour la dureté ni pour rien d'autre</b> » (Muslim).",
      "« La douceur n'est dans une chose que pour l'embellir, et n'en est retirée que pour l'enlaidir » (Muslim). « Celui qui est privé de douceur est privé de tout bien » (Muslim)."
    ],
    mediter: [
      "Il aurait pu t'imposer cinquante prières, tout interdire d'un coup, te saisir à la première faute. Regarde comme Il t'a conduit <b>pas à pas</b>.",
      "La Sīra entière est une pédagogie : treize ans de foi avant les lois."
    ],
    vivre: [
      "Avoir raison ne suffit pas : il faut la manière. À la maison d'abord — « quand Allah veut du bien à une famille, Il y fait entrer la douceur » (Ahmad).",
      "Être doux avec soi : avancer dans la religion « avec douceur » (Ahmad), sans se dégoûter de l'adoration."
    ],
    dua: { ar: "اللَّهُمَّ مَنْ وَلِيَ مِنْ أَمْرِ أُمَّتِي شَيْئًا فَرَفَقَ بِهِمْ فَارْفُقْ بِهِ", fr: "Ô Allah, celui qui a la charge d'une affaire de ma communauté et se montre doux envers eux, sois doux envers lui.", ref: "invocation du Prophète ﷺ — Muslim" },
    sira: { n: 56, txt: "La législation du combat par étapes — interdit, permis, puis ordonné : le rifq dans la Loi." }
  },
  {
    id: "al-halim", theme: "rahma",
    noms: [{ ar: "الحَلِيم", fr: "Al-Halîm", trad: "Le Longanime, qui ne Se hâte pas de punir" }],
    racine: "ح ل م (h-l-m) : le hilm, la retenue de celui qui pourrait sévir",
    preuve: "Coran",
    verset: { ar: "وَاعْلَمُوا أَنَّ اللَّهَ غَفُورٌ حَلِيمٌ", fr: "Et sachez qu'Allah est Pardonneur et Longanime.", ref: "al-Baqara 235" },
    sens: [
      "Il voit la désobéissance, Il a tout pouvoir de châtier <b>sur-le-champ</b> — et Il laisse du temps : pour qu'on revienne.",
      "Le hilm n'est pas de l'indifférence : c'est la patience de Celui qui sait et qui peut."
    ],
    textes: [
      "« Nul n'est plus patient qu'Allah devant une offense qu'Il entend : ils Lui attribuent un fils, et Lui leur accorde santé et subsistance » (Bukhârî et Muslim).",
      "« Si Allah s'en prenait aux gens pour ce qu'ils ont acquis, Il ne laisserait à la surface de la terre aucun être vivant ; mais Il leur donne un délai » (Fâtir 45)."
    ],
    mediter: [
      "Ce péché d'il y a des années : Il t'a vu, Il t'a nourri le lendemain, Il t'a couvert, Il t'a laissé prier. Qu'as-tu fait de ce <b>délai</b> ?",
      "L'invocation de la détresse commence par ce nom : « Lâ ilâha illâ llâh, al-'Azîm <b>al-Halîm</b> » (Bukhârî et Muslim)."
    ],
    vivre: [
      "Le Prophète ﷺ à Ashajj 'Abd al-Qays : « Tu as deux qualités qu'Allah aime : <b>la longanimité et la pondération</b> » (Muslim).",
      "Ne pas répondre à chaud. Laisser à l'autre le temps de revenir, comme on aime qu'Allah nous le laisse."
    ],
    dua: { ar: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ", fr: "Point de divinité à part Allah, l'Immense, le Longanime. Point de divinité à part Allah, Seigneur du Trône immense. Point de divinité à part Allah, Seigneur des cieux, Seigneur de la terre et Seigneur du noble Trône.", ref: "invocation de la détresse — Bukhârî et Muslim" }
  },
  {
    id: "al-karim-al-akram", theme: "rahma",
    noms: [
      { ar: "الكَرِيم", fr: "Al-Karîm", trad: "Le Noble, le Généreux" },
      { ar: "الأَكْرَم", fr: "Al-Akram", trad: "Le Plus Généreux" }
    ],
    racine: "ك ر م (k-r-m) : la noblesse qui donne — le karîm donne sans qu'on insiste et pardonne quand il peut punir",
    preuve: "Coran (al-Infitâr 6, al-'Alaq 3)",
    verset: { ar: "اقْرَأْ وَرَبُّكَ الْأَكْرَمُ", fr: "Lis ! Ton Seigneur est le Plus Généreux.", ref: "al-'Alaq 3" },
    sens: [
      "Celui qui donne <b>sans mesure et sans raison</b> autre que Sa générosité ; qui tient plus qu'Il ne promet ; qui ne laisse pas perdre celui qui se réfugie auprès de Lui.",
      "Al-Akram, superlatif absolu, est l'un des <b>tout premiers noms révélés</b> : Il Se présente comme le Plus Généreux avant de rien demander."
    ],
    textes: [
      "« Ô homme ! Qu'est-ce qui t'a trompé au sujet de ton Seigneur, <b>le Généreux</b> ? » (al-Infitâr 6) — le reproche lui-même est tendre : Il rappelle Sa générosité.",
      "« Votre Seigneur est Pudique et Généreux : Il a honte, quand Son serviteur lève les mains vers Lui, de les lui renvoyer <b>vides</b> » (Abû Dâwûd, at-Tirmidhî)."
    ],
    mediter: [
      "Premier don cité dans la première révélation : « Il a enseigné par le calame, enseigné à l'homme ce qu'il ne savait pas. » La science est Sa générosité la plus haute.",
      "On ne vient pas chez un généreux les mains pleines d'excuses : on vient, c'est tout."
    ],
    vivre: [
      "Demander <b>grand</b> : « Quand vous demandez à Allah, demandez-Lui le Firdaws » (Bukhârî).",
      "La noblesse auprès de Lui a un seul critère : « Le plus noble (akramakum) d'entre vous est le plus pieux » (al-Hujurât 13)."
    ],
    dua: { ar: "اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", fr: "Ô Allah, Tu es Celui qui efface, le Généreux, Tu aimes effacer : efface mes fautes.", ref: "at-Tirmidhî — 'Â'isha, pour la nuit du Destin" },
    sira: { n: 11, txt: "La grotte de Hirâ' : les premiers versets descendent, et avec eux ce nom." }
  },
  {
    id: "al-jawad", theme: "rahma",
    noms: [{ ar: "الجَوَاد", fr: "Al-Jawâd", trad: "Le Très Généreux, qui donne largement" }],
    racine: "ج و د (j-w-d) : le jûd, donner beaucoup et volontiers",
    preuve: "Sunna — at-Tirmidhî, al-Bayhaqî",
    verset: { ar: "إِنَّ اللَّهَ جَوَادٌ يُحِبُّ الْجُودَ", fr: "Allah est Très Généreux et Il aime la générosité.", ref: "at-Tirmidhî, al-Bayhaqî" },
    sens: [
      "Ses dons ne s'arrêtent jamais et ne diminuent rien de ce qu'Il possède.",
      "Il donne à celui qui demande et à celui qui ne demande pas, au croyant et à celui qui Le renie."
    ],
    textes: [
      "Hadith qudsî : « Ô Mes serviteurs, si le premier et le dernier d'entre vous, hommes et djinns, se tenaient sur un même plateau et Me demandaient, et que Je donne à chacun ce qu'il demande, cela ne diminuerait ce que J'ai que comme <b>l'aiguille plongée dans la mer</b> » (Muslim).",
      "« La main d'Allah est pleine, aucune dépense ne l'épuise, généreuse nuit et jour. Voyez ce qu'Il a dépensé depuis qu'Il a créé les cieux et la terre : cela n'a rien diminué » (Bukhârî et Muslim)."
    ],
    mediter: [
      "Tu hésites à redemander, comme on hésite devant un homme qu'on a déjà sollicité. Avec Lui, c'est l'inverse : <b>Il aime</b> qu'on Lui demande, et qu'on insiste.",
      "Ce que tu demandes te paraît énorme. Pense à l'aiguille et à la mer."
    ],
    vivre: [
      "Le Prophète ﷺ était « le plus généreux des hommes, et plus encore en Ramadan… plus généreux que <b>le vent envoyé</b> » (Bukhârî et Muslim).",
      "Donner de ce qu'on a : du temps, un savoir, un sourire, une place."
    ],
    dua: { ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ", fr: "Ô Allah, je Te demande de Ta grâce. — À dire en sortant de la mosquée.", ref: "Muslim" }
  },
  {
    id: "al-wahhab", theme: "rahma",
    noms: [{ ar: "الوَهَّاب", fr: "Al-Wahhâb", trad: "Le Donateur, qui donne sans contrepartie" }],
    racine: "و ه ب (w-h-b) : la hiba, le don pur, sans échange ni dû",
    preuve: "Coran — trois fois",
    verset: { ar: "وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ", fr: "Et accorde-nous de Ta part une miséricorde : c'est Toi le Donateur.", ref: "Âl 'Imrân 8" },
    sens: [
      "La forme intensive (fa''âl) : Celui qui donne <b>encore et encore</b>, à tous, toutes sortes de dons.",
      "Un don, non un salaire : rien de ce que tu as ne t'était dû."
    ],
    textes: [
      "Les enfants sont appelés hiba : « Il <b>fait don</b> de filles à qui Il veut, et fait don de garçons à qui Il veut » (ash-Shûrâ 49). Ibrâhîm : « Louange à Allah qui m'a <b>donné</b>, malgré la vieillesse, Ismâ'îl et Ishâq » (Ibrâhîm 39).",
      "Sulaymân demande l'impossible par ce nom : « Seigneur, pardonne-moi et <b>fais-moi don</b> d'un royaume tel que nul après moi n'aura le pareil : c'est Toi le Donateur » (Sâd 35)."
    ],
    mediter: [
      "La guidance aussi est une hiba : le verset demande de ne pas dévier <b>après</b> avoir été guidé. La foi n'est pas un acquis, c'est un don renouvelé.",
      "Qu'as-tu reçu sans l'avoir mérité ni même demandé ?"
    ],
    vivre: [
      "Demander par ce nom ce qui ne s'achète pas : la droiture du cœur, un enfant pieux, la sagesse.",
      "Donner sans attendre de retour, ni merci : « Nous ne voulons de vous ni récompense ni gratitude » (al-Insân 9)."
    ],
    dua: { ar: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ", fr: "Seigneur, ne fais pas dévier nos cœurs après nous avoir guidés, et accorde-nous de Ta part une miséricorde : c'est Toi le Donateur.", ref: "Âl 'Imrân 8" }
  },
  {
    id: "al-mannan", theme: "rahma",
    noms: [{ ar: "المَنَّان", fr: "Al-Mannân", trad: "Le Bienfaiteur, qui comble de faveurs" }],
    racine: "م ن ن (m-n-n) : la minna, le bienfait immense offert d'initiative",
    preuve: "Sunna — Abû Dâwûd, an-Nasâ'î, Ibn Mâjah",
    verset: { ar: "لَقَدْ مَنَّ اللَّهُ عَلَى الْمُؤْمِنِينَ إِذْ بَعَثَ فِيهِمْ رَسُولًا مِنْ أَنْفُسِهِمْ", fr: "Allah a comblé les croyants d'une faveur en leur envoyant un Messager issu d'eux-mêmes.", ref: "Âl 'Imrân 164" },
    sens: [
      "Celui qui <b>commence</b> par le bienfait avant toute demande — et dont la plus grande faveur est la guidance.",
      "Rappeler ses bienfaits est un défaut chez l'homme (al-Baqara 264) et une perfection chez Allah : tout vient réellement de Lui, et Son rappel est lui-même une miséricorde."
    ],
    textes: [
      "Un homme invoqua : « Ô Allah, je Te demande par ceci : à Toi la louange, point de divinité à part Toi, <b>al-Mannân</b>, Créateur des cieux et de la terre, ô Détenteur de la majesté et de la générosité, ô Vivant, ô Subsistant… » Le Prophète ﷺ dit : « Il a invoqué Allah par Son nom immense : invoqué par lui, Il exauce ; sollicité par lui, Il donne » (Abû Dâwûd, an-Nasâ'î, Ibn Mâjah).",
      "« C'est plutôt Allah qui vous a fait la faveur de vous guider vers la foi » (al-Hujurât 17)."
    ],
    mediter: [
      "Des milliards d'hommes ont vécu sans entendre parler du Prophète ﷺ comme tu en entends parler. Pourquoi toi ?",
      "Celui qui croit avoir « fait quelque chose pour l'islam » a oublié ce verset."
    ],
    vivre: [
      "Ne jamais rappeler un service rendu : « N'annulez pas vos aumônes par le rappel et le tort » (al-Baqara 264).",
      "Remercier pour la guidance <b>avant</b> tout autre bienfait."
    ],
    dua: { ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ لَكَ الْحَمْدَ، لَا إِلَهَ إِلَّا أَنْتَ، الْمَنَّانُ، بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ، يَا ذَا الْجَلَالِ وَالْإِكْرَامِ، يَا حَيُّ يَا قَيُّومُ", fr: "Ô Allah, je Te demande par ceci : à Toi la louange, point de divinité à part Toi, le Bienfaiteur, Créateur des cieux et de la terre, ô Détenteur de la majesté et de la générosité, ô Vivant, ô Subsistant…", ref: "Abû Dâwûd, an-Nasâ'î, Ibn Mâjah — Anas" }
  },
  {
    id: "al-muhsin", theme: "rahma",
    noms: [{ ar: "المُحْسِن", fr: "Al-Muhsin", trad: "Le Bienfaisant, qui fait tout à la perfection" }],
    racine: "ح س ن (h-s-n) : l'ihsân, bien faire et faire du bien",
    preuve: "Sunna — at-Tabarânî, 'Abd ar-Razzâq",
    verset: { ar: "الَّذِي أَحْسَنَ كُلَّ شَيْءٍ خَلَقَهُ", fr: "Celui qui a parfait tout ce qu'Il a créé.", ref: "as-Sajda 7" },
    sens: [
      "Deux sens liés : Il <b>fait bien</b> tout ce qu'Il fait — aucune création bâclée — et Il <b>fait du bien</b> à toutes Ses créatures.",
      "Hadith : « Allah est Bienfaisant (Muhsin) et Il aime la bienfaisance » (at-Tabarânî)."
    ],
    textes: [
      "« Allah a prescrit <b>l'excellence en toute chose</b> : quand vous tuez, tuez bien ; quand vous égorgez, égorgez bien ; que l'un de vous aiguise sa lame et ménage sa bête » (Muslim).",
      "« Et sois bienfaisant comme Allah a été bienfaisant envers toi » (al-Qasas 77)."
    ],
    mediter: [
      "L'aile d'un moucheron, la nervure d'une feuille : des choses que personne ne regardera jamais, <b>finies</b> comme si tout l'univers les regardait.",
      "« Y a-t-il d'autre récompense pour le bien que le bien ? » (ar-Rahmân 60)."
    ],
    vivre: [
      "L'ihsân dans l'adoration : « adorer Allah comme si tu Le voyais » (Muslim). L'ihsân dans le travail : finir ce qu'on commence.",
      "L'ihsân envers celui qui t'a fait du tort : le degré que le Coran appelle « la meilleure » réponse (Fussilat 34)."
    ],
    dua: { ar: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ", fr: "Ô Allah, aide-moi à Te mentionner, à Te remercier et à T'adorer de la meilleure façon.", ref: "Abû Dâwûd, an-Nasâ'î — recommandée à Mu'âdh après chaque prière" }
  },
  {
    id: "al-muti", theme: "rahma",
    noms: [{ ar: "المُعْطِي", fr: "Al-Mu'tî", trad: "Celui qui donne" }],
    racine: "ع ط و ('-t-w) : le 'atâ', le don",
    preuve: "Sunna — Bukhârî",
    verset: { ar: "وَاللَّهُ الْمُعْطِي وَأَنَا الْقَاسِمُ", fr: "C'est Allah qui donne, et moi je ne fais que répartir.", ref: "Bukhârî — Mu'âwiya" },
    sens: [
      "Le seul vrai donateur : les créatures ne sont que des <b>canaux</b>. Le Prophète ﷺ lui-même se décrit comme celui qui répartit.",
      "Le hadith commence ainsi : « Celui à qui Allah veut du bien, <b>Il lui fait comprendre la religion</b> » — le premier don cité est la science."
    ],
    textes: [
      "Après chaque prière : « Ô Allah, nul ne peut retenir ce que Tu donnes, nul ne peut donner ce que Tu retiens » (Bukhârî et Muslim).",
      "« Tous, Nous les pourvoyons, ceux-ci comme ceux-là, des dons de ton Seigneur ; et les dons de ton Seigneur ne sont <b>refusés</b> à personne » (al-Isrâ' 20)."
    ],
    mediter: [
      "Ton salaire, qui te le donne ? Ton employeur, ou Celui qui a fait que ton employeur existe, te choisisse et puisse payer ?",
      "Quand Il retient, c'est encore un don : Il t'épargne ce qui t'aurait nui."
    ],
    vivre: [
      "Remercier la main qui donne — « qui ne remercie pas les gens ne remercie pas Allah » (Abû Dâwûd) — sans y accrocher son cœur.",
      "Ne s'humilier devant personne pour sa subsistance : elle ne vient pas de lui."
    ],
    dua: { ar: "اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ", fr: "Ô Allah, nul ne peut retenir ce que Tu donnes, nul ne peut donner ce que Tu retiens, et la fortune du fortuné ne lui sert à rien contre Toi.", ref: "Bukhârî et Muslim — après chaque prière" }
  },
  {
    id: "ar-razzaq", theme: "rahma",
    noms: [{ ar: "الرَّزَّاق", fr: "Ar-Razzâq", trad: "Le Pourvoyeur" }],
    racine: "ر ز ق (r-z-q) : le rizq, tout ce dont on tire profit — nourriture, science, foi, affection",
    preuve: "Coran — une seule fois sous cette forme",
    verset: { ar: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ", fr: "C'est Allah le Pourvoyeur, le Détenteur de la force, l'Inébranlable.", ref: "adh-Dhâriyât 58" },
    sens: [
      "Il s'est <b>chargé</b> de la subsistance de chaque créature : « Il n'y a pas de bête sur terre dont la subsistance n'incombe à Allah » (Hûd 6).",
      "Deux subsistances : celle du corps, donnée à tous ; celle du cœur — foi, science, halâl — donnée à ceux qu'Il aime."
    ],
    textes: [
      "« Si vous placiez votre confiance en Allah comme il se doit, Il vous pourvoirait comme Il pourvoit <b>les oiseaux</b> : ils partent le matin le ventre creux et rentrent le soir rassasiés » (at-Tirmidhî) — ils <b>partent</b> : la confiance n'est pas l'immobilité.",
      "L'ange écrit pour l'embryon « sa subsistance, son terme, ses œuvres » (Bukhârî et Muslim) : ce qui t'est écrit ne te manquera pas."
    ],
    mediter: [
      "Juste avant ce verset : « Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent. Je ne veux d'eux aucune subsistance. » Il t'a libéré du souci du rizq <b>pour</b> l'adoration.",
      "Personne n'a jamais mangé une bouchée écrite pour toi."
    ],
    vivre: [
      "Chercher le halâl avec calme : « Craignez Allah et cherchez avec mesure ; nulle âme ne mourra avant d'avoir reçu toute sa subsistance » (Ibn Mâjah).",
      "Les clés du rizq selon les textes : la piété (at-Talâq 2-3), l'istighfâr (Nûh 10-12), le lien de parenté (Bukhârî)."
    ],
    dua: { ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا", fr: "Ô Allah, je Te demande une science utile, une subsistance pure et une œuvre agréée.", ref: "Ibn Mâjah — après la prière du matin" },
    sira: { n: 43, txt: "La tente d'Umm Ma'bad : une chèvre épuisée, sans lait — et tous boivent à satiété." }
  },
  {
    id: "al-muqit", theme: "rahma",
    noms: [{ ar: "المُقِيت", fr: "Al-Muqît", trad: "Le Nourricier, qui donne à chacun sa part" }],
    racine: "ق و ت (q-w-t) : le qût, la ration qui maintient en vie",
    preuve: "Coran — une seule fois",
    verset: { ar: "وَكَانَ اللَّهُ عَلَى كُلِّ شَيْءٍ مُقِيتًا", fr: "Et Allah est, sur toute chose, Muqît.", ref: "an-Nisâ' 85" },
    sens: [
      "Celui qui fait parvenir à chaque être <b>exactement</b> sa ration : au corps sa nourriture, au cœur sa connaissance.",
      "Des exégètes l'expliquent aussi par « le Puissant » et « le Gardien » : Celui qui a tout pouvoir sur chaque chose et veille sur elle."
    ],
    textes: [
      "Le verset parle d'<b>intercession</b> : qui intercède pour un bien en a une part, qui intercède pour un mal en porte une charge — Allah attribue à chacun son dû, exactement.",
      "« Il y a déterminé ses nourritures (aqwât) en quatre jours, à égalité pour ceux qui demandent » (Fussilat 10)."
    ],
    mediter: [
      "Le fœtus nourri sans bouche, l'oisillon, le poisson des abysses : la ration arrive, partout, à l'heure.",
      "Ton cœur aussi a une ration quotidienne. Quand l'a-t-il reçue pour la dernière fois ?"
    ],
    vivre: [
      "Nourrir ceux dont on a la charge : « Il suffit comme péché à un homme de négliger ceux qu'il doit nourrir (man yaqût) » (Abû Dâwûd).",
      "Donner à son cœur sa part quotidienne de Coran, même petite, mais régulière."
    ],
    dua: { ar: "اللَّهُمَّ اجْعَلْ رِزْقَ آلِ مُحَمَّدٍ قُوتًا", fr: "Ô Allah, fais que la subsistance de la famille de Muhammad soit le nécessaire (qût).", ref: "invocation du Prophète ﷺ — Bukhârî et Muslim" }
  },
  {
    id: "al-qabid-al-basit", theme: "rahma",
    noms: [
      { ar: "القَابِض", fr: "Al-Qâbid", trad: "Celui qui resserre" },
      { ar: "البَاسِط", fr: "Al-Bâsit", trad: "Celui qui étend" }
    ],
    racine: "ق ب ض (q-b-d) : saisir, resserrer — ب س ط (b-s-t) : étendre, déployer",
    preuve: "Sunna — Abû Dâwûd, at-Tirmidhî, Ibn Mâjah",
    verset: { ar: "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ وَإِلَيْهِ تُرْجَعُونَ", fr: "C'est Allah qui resserre et qui étend, et c'est vers Lui que vous serez ramenés.", ref: "al-Baqara 245" },
    sens: [
      "Il resserre et étend la subsistance, les cœurs, les vies — selon Sa sagesse. Les savants recommandent de citer ces deux noms <b>ensemble</b> : la perfection est dans leur réunion.",
      "Le hadith : les prix avaient monté, on demanda au Prophète ﷺ de les fixer — « C'est Allah qui fixe les prix, <b>qui resserre, qui étend</b> et qui pourvoit » (Abû Dâwûd, at-Tirmidhî, Ibn Mâjah)."
    ],
    textes: [
      "« Allah <b>étend Sa main</b> la nuit pour que se repente le fautif du jour, et étend Sa main le jour pour que se repente le fautif de la nuit, jusqu'à ce que le soleil se lève à l'ouest » (Muslim).",
      "« Si Allah étendait la subsistance à Ses serviteurs, ils commettraient des abus sur terre ; mais Il fait descendre avec mesure ce qu'Il veut » (ash-Shûrâ 27)."
    ],
    mediter: [
      "Le verset vient après l'appel à faire « un beau prêt » à Allah : ne crains pas de donner, ce n'est pas ta main qui resserre ou étend.",
      "Le resserrement du cœur n'est pas un abandon : c'est souvent ce qui ramène à la porte."
    ],
    vivre: [
      "Dans la gêne, patienter sans se plaindre de Lui ; dans l'aisance, remercier sans s'y installer. « L'affaire du croyant est étonnante : tout lui est un bien » (Muslim).",
      "Étendre la main : « Dépense, ô fils d'Âdam, et Je dépenserai pour toi » (Bukhârî et Muslim)."
    ],
    dua: { ar: "اللَّهُمَّ ابْسُطْ عَلَيْنَا مِنْ بَرَكَاتِكَ وَرَحْمَتِكَ وَفَضْلِكَ وَرِزْقِكَ", fr: "Ô Allah, étends sur nous Tes bénédictions, Ta miséricorde, Ta grâce et Ta subsistance.", ref: "Ahmad — invocation du Prophète ﷺ après Uhud" }
  },
  {
    id: "ash-shafi", theme: "rahma",
    noms: [{ ar: "الشَّافِي", fr: "Ash-Shâfî", trad: "Celui qui guérit" }],
    racine: "ش ف ي (sh-f-y) : le shifâ', la guérison",
    preuve: "Sunna — Bukhârî et Muslim",
    verset: { ar: "اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ", fr: "Guéris, c'est Toi Celui qui guérit : pas de guérison hormis la Tienne.", ref: "Bukhârî et Muslim — 'Â'isha" },
    sens: [
      "La guérison des corps et celle des cœurs ne viennent que de Lui ; le médecin et le remède sont des <b>causes</b> qu'Il a créées.",
      "Ibrâhîm : « Et quand je suis malade, c'est Lui qui me guérit » (ash-Shu'arâ' 80) — il s'attribue la maladie, par politesse, et attribue la guérison à son Seigneur."
    ],
    textes: [
      "« Allah n'a fait descendre aucune maladie sans faire descendre <b>son remède</b> » (Bukhârî). « Soignez-vous, serviteurs d'Allah » (Abû Dâwûd, at-Tirmidhî).",
      "Le Coran est « une guérison pour ce qui est dans les poitrines » (Yûnus 57)."
    ],
    mediter: [
      "Une coupure qui se referme seule, une fièvre qui tombe : tu as été guéri des milliers de fois sans y penser.",
      "La maladie a une autre face : « Aucune fatigue, maladie, souci, tristesse… n'atteint le musulman, jusqu'à l'épine qui le pique, sans qu'Allah n'efface par cela de ses fautes » (Bukhârî et Muslim)."
    ],
    vivre: [
      "Se soigner <b>et</b> invoquer : prendre le remède avec la main, et la guérison avec le cœur.",
      "Visiter le malade et invoquer pour lui avec les mots du Prophète ﷺ."
    ],
    dua: { ar: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَاسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا", fr: "Ô Allah, Seigneur des hommes, fais partir le mal ; guéris, c'est Toi Celui qui guérit, pas de guérison hormis la Tienne — une guérison qui ne laisse aucune maladie.", ref: "Bukhârî et Muslim" }
  },
  {
    id: "at-tayyib", theme: "rahma",
    noms: [{ ar: "الطَّيِّب", fr: "At-Tayyib", trad: "Le Bon, le Pur" }],
    racine: "ط ي ب (t-y-b) : ce qui est bon, pur, exempt de toute souillure",
    preuve: "Sunna — Muslim",
    verset: { ar: "إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا", fr: "Allah est Bon et n'accepte que ce qui est bon.", ref: "Muslim — Abû Hurayra" },
    sens: [
      "Exempt de tout défaut ; et n'agréant des œuvres, des paroles et des biens que ce qui est <b>pur</b> : pur d'intention, pur d'origine.",
      "Suite du hadith : l'homme au long voyage, hirsute, poussiéreux, les mains levées — « yâ Rabb, yâ Rabb » — mais sa nourriture est illicite, sa boisson, son vêtement : « <b>comment serait-il exaucé ?</b> »"
    ],
    textes: [
      "« Vers Lui monte la bonne parole, et l'œuvre pieuse, Il l'élève » (Fâtir 10).",
      "Dans le tashahhud : « at-tahiyyâtu lillâh, was-salawâtu <b>wat-tayyibât</b> » — tout ce qui est bon Lui revient."
    ],
    mediter: [
      "Cet homme avait tout pour être exaucé : le voyage, l'humilité, les mains levées, l'insistance. Une seule chose a tout fermé.",
      "Au Paradis n'entrent que des gens purifiés : « Paix sur vous, <b>vous avez été bons</b> (tibtum) : entrez-y » (az-Zumar 73)."
    ],
    vivre: [
      "Surveiller l'origine de ce qu'on mange : le halâl est la première condition de l'invocation.",
      "Donner en aumône de ce qui est bon, pas de ses restes (al-Baqara 267)."
    ],
    dua: { ar: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ", fr: "Ô Allah, fais que Ton licite me suffise pour me passer de Ton illicite, et enrichis-moi par Ta grâce pour me passer de tout autre que Toi.", ref: "at-Tirmidhî — 'Alî" }
  },
  {
    id: "al-jamil", theme: "rahma",
    noms: [{ ar: "الجَمِيل", fr: "Al-Jamîl", trad: "Le Beau" }],
    racine: "ج م ل (j-m-l) : la beauté",
    preuve: "Sunna — Muslim",
    verset: { ar: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ", fr: "Allah est Beau et Il aime la beauté.", ref: "Muslim — Ibn Mas'ûd" },
    sens: [
      "Beau dans Son essence, Ses noms, Ses attributs et Ses actes. Ibn al-Qayyim : toute beauté du monde est une <b>trace</b> de Sa création — que dire alors de Celui qui l'a donnée ?",
      "Circonstance : « N'entrera pas au Paradis celui qui a dans le cœur un atome d'orgueil. — Mais l'homme aime avoir un bel habit, de belles sandales ? — Allah est Beau et Il aime la beauté. L'orgueil, c'est <b>rejeter la vérité et mépriser les gens</b>. »"
    ],
    textes: [
      "La plus grande joie du Paradis sera de Le voir : « Des visages, ce jour-là, seront resplendissants, regardant leur Seigneur » (al-Qiyâma 22-23).",
      "« Allah aime voir la trace de Son bienfait sur Son serviteur » (at-Tirmidhî)."
    ],
    mediter: [
      "Un coucher de soleil t'arrête. Ce n'est qu'une créature, éphémère, dans un monde qui « ne vaut pas l'aile d'un moustique » (at-Tirmidhî). Que sera la vision de Celui qui l'a peint ?",
      "Le Coran demande de belles choses : « une belle patience » (sabr jamîl), « un beau pardon » (safh jamîl), « une belle séparation » (hajr jamîl)."
    ],
    vivre: [
      "Soigner son apparence sans orgueil, surtout pour la prière : « prenez votre parure en tout lieu de prière » (al-A'râf 31).",
      "Embellir l'intérieur : une patience <b>sans plainte</b>, un pardon <b>sans reproche</b>."
    ],
    dua: { ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ لَذَّةَ النَّظَرِ إِلَى وَجْهِكَ، وَالشَّوْقَ إِلَى لِقَائِكَ", fr: "Ô Allah, je Te demande la douceur de regarder Ta Face et le désir ardent de Te rencontrer.", ref: "an-Nasâ'î — 'Ammâr ibn Yâsir" }
  },

  /* ==================== PARDON ET PUDEUR ==================== */
  {
    id: "al-ghafur-al-ghaffar", theme: "maghfira",
    noms: [
      { ar: "الغَفُور", fr: "Al-Ghafûr", trad: "Le Pardonneur" },
      { ar: "الغَفَّار", fr: "Al-Ghaffâr", trad: "Le Grand Pardonneur, qui pardonne sans cesse" }
    ],
    racine: "غ ف ر (gh-f-r) : couvrir pour protéger — le mighfar est le casque du combattant",
    preuve: "Coran — al-Ghafûr y vient plus de quatre-vingt-dix fois",
    verset: { ar: "نَبِّئْ عِبَادِي أَنِّي أَنَا الْغَفُورُ الرَّحِيمُ", fr: "Informe Mes serviteurs que c'est Moi le Pardonneur, le Très Miséricordieux.", ref: "al-Hijr 49" },
    sens: [
      "Le pardon (maghfira) réunit deux choses : <b>couvrir</b> la faute — Il ne l'expose pas — et <b>protéger</b> de sa conséquence — Il n'en punit pas.",
      "Al-Ghafûr dit l'ampleur : aucune faute n'est trop grande. Al-Ghaffâr dit la répétition : aucune rechute n'est de trop, tant qu'on revient."
    ],
    textes: [
      "Hadith qudsî : « Ô fils d'Âdam, tant que tu M'invoques et espères en Moi, Je te pardonne ce que tu as fait, <b>et peu M'importe</b>. Si tes péchés atteignaient les nuages du ciel, puis que tu Me demandes pardon, Je te pardonnerais » (at-Tirmidhî).",
      "Nûh : « Implorez le pardon de votre Seigneur — Il est Grand Pardonneur — : Il enverra sur vous du ciel des pluies abondantes, vous accordera biens et enfants » (Nûh 10-12)."
    ],
    mediter: [
      "Le verset dit « <b>Mes</b> serviteurs », et il s'adresse aux fautifs. Il ne t'a pas retiré ce nom quand tu as péché.",
      "« Si vous ne péchiez pas, Allah vous ferait disparaître et amènerait des gens qui pèchent puis demandent pardon, et Il leur pardonnerait » (Muslim) : Il <b>aime</b> pardonner."
    ],
    vivre: [
      "Le Prophète ﷺ, dont les fautes étaient pardonnées, demandait pardon plus de soixante-dix fois par jour (Bukhârî) ; cent fois, dans une version (Muslim).",
      "Couvrir les fautes des autres comme on veut que les siennes soient couvertes."
    ],
    dua: { ar: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ", fr: "Ô Allah, je me suis fait beaucoup de tort à moi-même, et nul ne pardonne les péchés sinon Toi : accorde-moi un pardon venant de Toi et fais-moi miséricorde. Tu es le Pardonneur, le Très Miséricordieux.", ref: "Bukhârî et Muslim — enseignée à Abû Bakr pour sa prière" }
  },
  {
    id: "al-afuww", theme: "maghfira",
    noms: [{ ar: "العَفُوّ", fr: "Al-'Afuww", trad: "Celui qui efface les fautes" }],
    racine: "ع ف و ('-f-w) : effacer la trace — on dit que le vent « 'afat » les traces de pas",
    preuve: "Coran",
    verset: { ar: "إِنَّ اللَّهَ لَعَفُوٌّ غَفُورٌ", fr: "Allah est Celui qui efface, le Pardonneur.", ref: "al-Hajj 60" },
    sens: [
      "Plus que pardonner : <b>effacer</b>. La faute pardonnée est couverte ; la faute effacée a disparu du registre, comme si elle n'avait pas eu lieu.",
      "Le nom vient souvent avec al-Qadîr (an-Nisâ' 149) : Il efface alors qu'Il a <b>tout pouvoir</b> de punir — c'est le vrai 'afw."
    ],
    textes: [
      "'Â'isha : « Ô Messager d'Allah, si je tombe sur la nuit du Destin, que dire ? — Dis : <b>Allâhumma innaka 'Afuwwun tuhibbu l-'afwa fa'fu 'annî</b> » (at-Tirmidhî, Ibn Mâjah).",
      "« Qu'ils effacent et passent l'éponge ! N'aimez-vous pas qu'Allah vous pardonne ? » (an-Nûr 22) — descendu quand Abû Bakr avait juré de ne plus aider Mistah, qui avait colporté la calomnie contre sa fille."
    ],
    mediter: [
      "Pour la plus précieuse nuit de l'année, le Prophète ﷺ n'a pas enseigné de demander la richesse, ni même le Paradis : il a enseigné de demander <b>l'effacement</b>.",
      "Il <b>aime</b> effacer. Tu ne Le déranges pas en revenant : tu Lui apportes ce qu'Il aime."
    ],
    vivre: [
      "Effacer vraiment : ne plus rappeler la faute à celui qu'on a pardonné. Abû Bakr reprit son aide à Mistah et dit : « Par Allah, j'aime qu'Allah me pardonne. »",
      "« Allah n'ajoute à un serviteur, pour son pardon, que de la considération » (Muslim)."
    ],
    dua: { ar: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", fr: "Ô Allah, Tu es Celui qui efface, Tu aimes effacer : efface mes fautes.", ref: "at-Tirmidhî, Ibn Mâjah — 'Â'isha" }
  },
  {
    id: "at-tawwab", theme: "maghfira",
    noms: [{ ar: "التَّوَّاب", fr: "At-Tawwâb", trad: "Celui qui accueille le repentir, encore et encore" }],
    racine: "ت و ب (t-w-b) : revenir",
    preuve: "Coran",
    verset: { ar: "ثُمَّ تَابَ عَلَيْهِمْ لِيَتُوبُوا إِنَّ اللَّهَ هُوَ التَّوَّابُ الرَّحِيمُ", fr: "Puis Il revint vers eux pour qu'ils reviennent : c'est Allah l'Accueillant au repentir, le Très Miséricordieux.", ref: "at-Tawba 118" },
    sens: [
      "Tawba veut dire « retour », et le mot se dit des deux côtés : le serviteur <b>revient</b> vers Allah, et Allah <b>revient</b> vers lui.",
      "Le verset le montre : Sa tawba <b>encadre</b> la tienne — Il revient d'abord vers toi en t'inspirant le regret, puis Il revient encore en l'acceptant."
    ],
    textes: [
      "« Allah se réjouit du repentir de Son serviteur plus que l'un de vous qui, dans un désert, perd sa monture portant sa nourriture et son eau, désespère, s'allonge pour mourir — et la retrouve debout près de lui » (Bukhârî et Muslim).",
      "Ce verset clôt l'histoire des trois compagnons restés en arrière de Tabûk, dont Ka'b ibn Mâlik : cinquante jours de mise à l'écart, « la terre, si vaste, leur parut étroite » — puis la bonne nouvelle."
    ],
    mediter: [
      "Si tu as eu envie de revenir, c'est qu'Il est <b>déjà</b> revenu vers toi. Le regret est Son premier cadeau.",
      "L'homme du désert, fou de joie, se trompe de mots : « Ô Allah, Tu es mon serviteur et je suis Ton seigneur ! » Et Allah est <b>plus</b> joyeux que lui."
    ],
    vivre: [
      "Revenir vite, et revenir chaque fois : « Celui qui se repent d'un péché est comme celui qui n'a pas de péché » (Ibn Mâjah).",
      "Conditions du retour : cesser, regretter, résoudre de ne pas recommencer — et rendre son droit à celui qu'on a lésé."
    ],
    dua: { ar: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ", fr: "Seigneur, pardonne-moi et accueille mon repentir : Tu es l'Accueillant au repentir, le Très Miséricordieux. — On comptait au Prophète ﷺ cent fois cette parole en une seule assise.", ref: "Abû Dâwûd, at-Tirmidhî — Ibn 'Umar" }
  },
  {
    id: "al-hayiyy-as-sittir", theme: "maghfira",
    noms: [
      { ar: "الحَيِيّ", fr: "Al-Hayiyy", trad: "Le Pudique" },
      { ar: "السِّتِّير", fr: "As-Sittîr", trad: "Celui qui couvre, qui voile les fautes" }
    ],
    racine: "ح ي ي (h-y-y) : la pudeur (hayâ') — س ت ر (s-t-r) : couvrir, voiler",
    preuve: "Sunna — Abû Dâwûd, an-Nasâ'î",
    verset: { ar: "إِنَّ اللَّهَ عَزَّ وَجَلَّ حَيِيٌّ سِتِّيرٌ يُحِبُّ الْحَيَاءَ وَالسَّتْرَ", fr: "Allah, Puissant et Majestueux, est Pudique et Voilant : Il aime la pudeur et la discrétion.", ref: "Abû Dâwûd, an-Nasâ'î — Ya'lâ ibn Umayya" },
    sens: [
      "Une pudeur qui sied à Sa majesté : Il ne dévoile pas Son serviteur, et Il « a honte » de renvoyer vides des mains levées vers Lui.",
      "Le nom rapporté est <b>as-Sittîr</b> (ou as-Satîr) ; « as-Sattâr », si répandu dans les bouches, ne figure dans aucun texte."
    ],
    textes: [
      "Au Jour dernier, Allah rapproche le croyant, le couvre de Son voile et lui fait reconnaître ses fautes, une à une ; quand il se croit perdu : « <b>Je te les ai couvertes ici-bas, et Je te les pardonne aujourd'hui</b> » (Bukhârî et Muslim).",
      "« Toute ma communauté sera pardonnée, sauf ceux qui s'affichent : l'homme commet un acte la nuit, Allah le couvre, et au matin il raconte : j'ai fait ceci et cela » — il <b>déchire</b> lui-même le voile d'Allah (Bukhârî et Muslim)."
    ],
    mediter: [
      "Si chaque faute laissait une trace sur le visage, qui oserait sortir ? Ton honneur auprès des gens est fait de Son silence.",
      "Il sait tout de toi, et Il te laisse Le prier, être salué, être aimé."
    ],
    vivre: [
      "Ne pas raconter ses péchés, même pour rire ; ne pas fouiller ceux des autres : « Qui couvre un musulman, Allah le couvrira ici-bas et dans l'au-delà » (Muslim).",
      "La pudeur « n'apporte que du bien » (Bukhârî et Muslim) : dans le vêtement, le regard, la parole, et seul devant son écran."
    ],
    dua: { ar: "اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي", fr: "Ô Allah, couvre mes défauts et apaise mes frayeurs.", ref: "Abû Dâwûd, Ibn Mâjah — dans l'invocation du matin et du soir" }
  },
  {
    id: "ash-shakur-ash-shakir", theme: "maghfira",
    noms: [
      { ar: "الشَّكُور", fr: "Ash-Shakûr", trad: "Le Très Reconnaissant" },
      { ar: "الشَّاكِر", fr: "Ash-Shâkir", trad: "Le Reconnaissant" }
    ],
    racine: "ش ك ر (sh-k-r) : faire paraître le bienfait — une bête « shakûr » engraisse avec peu de fourrage",
    preuve: "Coran",
    verset: { ar: "إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ", fr: "Notre Seigneur est Pardonneur et Très Reconnaissant.", ref: "Fâtir 34" },
    sens: [
      "Il agrée le <b>peu</b> d'œuvres et le rend en <b>beaucoup</b> ; Il ne laisse perdre aucun bien, fût-il du poids d'un atome.",
      "Lui qui a donné la force d'agir, le temps, l'idée même de l'acte — Il <b>remercie</b> encore. Rien ne L'y oblige que Sa générosité."
    ],
    textes: [
      "Un homme écarta de la route une branche épineuse : « <b>Allah l'en remercia</b> et lui pardonna » (Bukhârî et Muslim). Un autre redescendit dans un puits pour abreuver un chien assoiffé : même récompense (Bukhârî et Muslim).",
      "« Quiconque fait de son plein gré une bonne œuvre, Allah est Reconnaissant, Omniscient » (al-Baqara 158)."
    ],
    mediter: [
      "Aucun de ces deux hommes ne savait qu'il jouait son éternité. Quel geste de ta journée pèsera ainsi ?",
      "Ce sont les gens du Paradis qui prononcent ce verset : arrivés, ils comprennent que ce qu'ils reçoivent est sans commune mesure avec ce qu'ils ont fait."
    ],
    vivre: [
      "Ne mépriser aucun bien : « fût-ce d'accueillir ton frère avec un visage souriant » (Muslim).",
      "Remercier : le Prophète ﷺ priait jusqu'à en avoir les pieds gonflés — « ne serais-je pas un <b>serviteur reconnaissant</b> ? » (Bukhârî et Muslim)."
    ],
    dua: { ar: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ", fr: "Seigneur, inspire-moi de Te remercier pour le bienfait dont Tu m'as comblé ainsi que mes parents, et de faire une bonne œuvre que Tu agrées.", ref: "invocation de Sulaymân — an-Naml 19" }
  },

  /* ==================== SCIENCE ET PROXIMITÉ ==================== */
  {
    id: "al-alim", theme: "ilm",
    noms: [
      { ar: "العَلِيم", fr: "Al-'Alîm", trad: "L'Omniscient" },
      { ar: "العَالِم", fr: "Al-'Âlim", trad: "Le Connaisseur de l'invisible et du visible" }
    ],
    racine: "ع ل م ('-l-m) : savoir",
    preuve: "Coran — al-'Alîm y vient plus de cent cinquante fois",
    verset: { ar: "وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ", fr: "C'est Lui qui détient les clefs de l'invisible ; nul autre que Lui ne les connaît.", ref: "al-An'âm 59" },
    sens: [
      "Une science qui <b>n'a pas été précédée d'ignorance</b> et que ne suit aucun oubli : ce qui fut, ce qui est, ce qui sera — et ce qui n'a pas été, comment il aurait été s'il avait été.",
      "Suite du verset : « Pas une feuille ne tombe sans qu'Il le sache ; pas une graine dans les ténèbres de la terre, rien de frais ni de sec, qui ne soit dans un Livre explicite. »"
    ],
    textes: [
      "Al-Khidr à Mûsâ, voyant un oiseau boire au bord de la mer : « Ma science et la tienne, auprès de la science d'Allah, ne sont que ce que cet oiseau a pris de la mer » (Bukhârî).",
      "« Il connaît ce que recèlent les poitrines » — avant même que la pensée ne soit formulée."
    ],
    mediter: [
      "Combien de feuilles tombent sur terre en une seconde d'automne ? Chacune est sue. Et toi, tu crains d'être oublié ?",
      "Il sait ce que tu ne sais pas de toi-même : pourquoi tu as vraiment fait cet acte ; ce que tu serais devenu avec ce que tu réclamais."
    ],
    vivre: [
      "Dire « Allâhu a'lam » sans honte. Le Coran n'a ordonné au Prophète ﷺ de demander un surplus que d'une seule chose : « Seigneur, accrois ma <b>science</b> » (Tâ-Hâ 114).",
      "S'en remettre à Son choix : l'istikhâra dit « Tu sais et je ne sais pas »."
    ],
    dua: { ar: "رَبِّ زِدْنِي عِلْمًا", fr: "Seigneur, accrois ma science.", ref: "Tâ-Hâ 114" }
  },
  {
    id: "al-khabir", theme: "ilm",
    noms: [{ ar: "الخَبِير", fr: "Al-Khabîr", trad: "Le Parfaitement Informé" }],
    racine: "خ ب ر (kh-b-r) : connaître de l'intérieur, savoir le fond des choses",
    preuve: "Coran",
    verset: { ar: "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ", fr: "Ne connaît-Il pas ce qu'Il a créé, Lui le Subtil, le Parfaitement Informé ?", ref: "al-Mulk 14" },
    sens: [
      "Si al-'Alîm sait tout, al-Khabîr connaît <b>l'intérieur</b> de tout : les secrets, les mobiles, les issues.",
      "Le verset argumente : Celui qui a <b>fabriqué</b> connaît mieux que quiconque ce qu'Il a fabriqué."
    ],
    textes: [
      "« Allah est Parfaitement Informé de ce que vous faites » revient après les ordres les plus intimes : baisser le regard (an-Nûr 30), être juste envers ses proches (an-Nisâ' 135), préparer son lendemain (al-Hashr 18).",
      "« Que vous cachiez votre parole ou la divulguiez, Il connaît le contenu des poitrines » (al-Mulk 13)."
    ],
    mediter: [
      "Les gens jugent tes actes ; Lui connaît tes raisons. Laquelle de tes bonnes actions tiendrait si l'on en montrait le mobile ?",
      "C'est aussi une consolation : l'effort que nul n'a vu, l'intention qu'on a mal comprise — Il en est informé."
    ],
    vivre: [
      "Travailler l'intérieur : « Allah ne regarde ni vos corps ni vos apparences, mais Il regarde <b>vos cœurs</b> et vos œuvres » (Muslim).",
      "Prendre conseil auprès de Sa Loi : « Nul ne t'informera comme Celui qui est Parfaitement Informé » (Fâtir 14)."
    ],
    dua: { ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ", fr: "Ô Allah, je cherche refuge auprès de Toi contre le fait de T'associer quoi que ce soit sciemment, et je Te demande pardon pour ce que je ne sais pas.", ref: "al-Bukhârî dans al-Adab al-mufrad" }
  },
  {
    id: "as-sami", theme: "ilm",
    noms: [{ ar: "السَّمِيع", fr: "As-Samî'", trad: "Celui qui entend tout" }],
    racine: "س م ع (s-m-') : entendre — et exaucer",
    preuve: "Coran",
    verset: { ar: "قَدْ سَمِعَ اللَّهُ قَوْلَ الَّتِي تُجَادِلُكَ فِي زَوْجِهَا وَتَشْتَكِي إِلَى اللَّهِ", fr: "Allah a bien entendu la parole de celle qui discutait avec toi au sujet de son époux et se plaignait à Allah.", ref: "al-Mujâdila 1" },
    sens: [
      "Il entend toutes les voix, en toutes langues, avec tous les besoins, <b>en même temps</b> — sans qu'une voix en couvre une autre.",
      "Entendre veut aussi dire <b>exaucer</b> : « sami'a llâhu li-man hamidah », Allah répond à celui qui Le loue."
    ],
    textes: [
      "'Â'isha, à propos de ce verset : « Louange à Allah dont l'ouïe embrasse toutes les voix ! La plaignante parlait au Prophète ﷺ dans un coin de la pièce, et <b>je n'entendais pas</b> ce qu'elle disait » (an-Nasâ'î, Ibn Mâjah).",
      "Des compagnons élevaient la voix dans le dhikr : « Ménagez-vous : vous n'invoquez ni un sourd ni un absent. Vous invoquez un <b>Entendant, Proche</b> » (Bukhârî et Muslim)."
    ],
    mediter: [
      "Khawla était une femme âgée, pauvre, sans appui : sa plainte a été entendue au-dessus de sept cieux et tranchée par un Coran récité jusqu'à la fin des temps.",
      "À Mûsâ et Hârûn devant Pharaon : « Ne craignez rien. Je suis avec vous : <b>J'entends et Je vois</b> » (Tâ-Hâ 46). Cela suffit."
    ],
    vivre: [
      "Surveiller sa langue : ce qui se dit à voix basse est entendu.",
      "Se plaindre <b>à</b> Lui : Ya'qûb — « Je ne me plains de mon chagrin et de ma tristesse qu'à Allah » (Yûsuf 86)."
    ],
    dua: { ar: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ", fr: "Seigneur, accepte de nous : c'est Toi Celui qui entend tout, l'Omniscient.", ref: "invocation d'Ibrâhîm et Ismâ'îl élevant la Kaaba — al-Baqara 127" }
  },
  {
    id: "al-basir", theme: "ilm",
    noms: [{ ar: "البَصِير", fr: "Al-Basîr", trad: "Celui qui voit tout" }],
    racine: "ب ص ر (b-s-r) : voir",
    preuve: "Coran",
    verset: { ar: "لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ", fr: "Rien ne Lui ressemble, et c'est Lui Celui qui entend tout, Celui qui voit tout.", ref: "ash-Shûrâ 11" },
    sens: [
      "Il voit tout, le plus petit comme le plus caché — « la fourmi noire sur la roche noire dans la nuit noire », disent les savants.",
      "Ce verset est la règle de tous les noms : on <b>affirme</b> ce qu'Il affirme de Lui-même (Il entend, Il voit) et on <b>nie toute ressemblance</b> avec les créatures."
    ],
    textes: [
      "« Ne sait-il pas qu'Allah voit ? » (al-'Alaq 14) — parmi les premiers versets révélés, à propos d'Abû Jahl qui voulait empêcher le Prophète ﷺ de prier.",
      "« Place ta confiance dans le Puissant, le Très Miséricordieux, <b>qui te voit quand tu te lèves</b>, et tes mouvements parmi ceux qui se prosternent » (ash-Shu'arâ' 217-219)."
    ],
    mediter: [
      "Être vu par Lui est une menace pour l'injuste et une <b>tendresse</b> pour celui qui se lève prier quand tout le monde dort.",
      "Personne ne t'a vu renoncer à ce péché, seul, porte fermée. Si."
    ],
    vivre: [
      "C'est la définition de l'ihsân : « adorer Allah comme si tu Le voyais ; et si tu ne Le vois pas, <b>Lui te voit</b> » (Muslim).",
      "Être le même seul et en public."
    ],
    dua: { ar: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي بَصَرِي نُورًا، وَفِي سَمْعِي نُورًا", fr: "Ô Allah, mets de la lumière dans mon cœur, de la lumière dans ma vue, de la lumière dans mon ouïe.", ref: "Bukhârî et Muslim — Ibn 'Abbâs" },
    sira: { n: 29, txt: "Abû Jahl veut empêcher le Prophète ﷺ de prier près de la Kaaba — « Ne sait-il pas qu'Allah voit ? »" }
  },
  {
    id: "al-hakim", theme: "ilm",
    noms: [{ ar: "الحَكِيم", fr: "Al-Hakîm", trad: "Le Sage" }],
    racine: "ح ك م (h-k-m) : juger, et faire les choses avec justesse — la hikma met chaque chose à sa place",
    preuve: "Coran — plus de quatre-vingt-dix fois",
    verset: { ar: "وَعَسَى أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ وَعَسَى أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ وَاللَّهُ يَعْلَمُ وَأَنْتُمْ لَا تَعْلَمُونَ", fr: "Il se peut que vous détestiez une chose alors qu'elle est un bien pour vous, et que vous aimiez une chose alors qu'elle est un mal pour vous. Allah sait, et vous ne savez pas.", ref: "al-Baqara 216" },
    sens: [
      "Deux sens : Celui qui <b>juge</b> et légifère ; et Celui qui a la <b>sagesse</b> — rien dans Sa création ni dans Sa Loi n'est vain, mal placé ou sans raison.",
      "Il vient très souvent avec <b>al-'Azîz</b> : une puissance sans sagesse serait tyrannie, une sagesse sans puissance serait impuissance."
    ],
    textes: [
      "L'histoire de Mûsâ et al-Khidr (al-Kahf 65-82) : la barque abîmée, le mur relevé — trois scandales apparents, trois miséricordes.",
      "« Pensiez-vous que Nous vous avions créés sans but ? » (al-Mu'minûn 115)."
    ],
    mediter: [
      "Tu lis ta vie page par page ; Lui a écrit le livre. Que sais-tu du chapitre suivant pour juger celui-ci ?",
      "Chaque interdit protège quelque chose. Lequel, dans ce qui te pèse ?"
    ],
    vivre: [
      "Devant un décret, remplacer « pourquoi moi ? » par « que veut-Il m'apprendre ? ».",
      "Demander la sagesse : « Celui à qui la sagesse est donnée a reçu <b>un bien immense</b> » (al-Baqara 269)."
    ],
    dua: { ar: "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ", fr: "Seigneur, accorde-moi la sagesse et fais-moi rejoindre les vertueux.", ref: "invocation d'Ibrâhîm — ash-Shu'arâ' 83" }
  },
  {
    id: "al-hakam", theme: "ilm",
    noms: [{ ar: "الحَكَم", fr: "Al-Hakam", trad: "Le Juge, l'Arbitre" }],
    racine: "ح ك م (h-k-m) : trancher entre deux parties",
    preuve: "Sunna — Abû Dâwûd, an-Nasâ'î",
    verset: { ar: "إِنَّ اللَّهَ هُوَ الْحَكَمُ وَإِلَيْهِ الْحُكْمُ", fr: "C'est Allah le Juge, et c'est à Lui que revient le jugement.", ref: "Abû Dâwûd, an-Nasâ'î — Abû Shurayh" },
    sens: [
      "Celui dont le jugement est <b>sans appel et sans erreur</b> : Il tranche ici-bas par Sa Loi, et au Jour dernier entre Ses serviteurs.",
      "Circonstance : un homme était surnommé « Abû l-Hakam » parce qu'il arbitrait entre les siens. Le Prophète ﷺ lui dit cette parole, puis lui demanda le nom de son aîné, et l'appela <b>Abû Shurayh</b>."
    ],
    textes: [
      "« Chercherai-je un autre juge qu'Allah, alors que c'est Lui qui a fait descendre vers vous le Livre bien détaillé ? » (al-An'âm 114).",
      "« Patiente jusqu'à ce qu'Allah juge : Il est <b>le meilleur des juges</b> » (Yûnus 109)."
    ],
    mediter: [
      "Il y aura un Jour où même la brebis sans cornes obtiendra son droit de la brebis cornue (Muslim). Aucune injustice n'est classée sans suite.",
      "Le Prophète ﷺ a changé le surnom avec délicatesse : il a d'abord loué l'homme d'arbitrer entre les siens — « comme c'est bien ! »"
    ],
    vivre: [
      "Revenir à Sa Loi dans ses litiges, et l'accepter « sans éprouver d'angoisse pour ce qui a été décidé » (an-Nisâ' 65).",
      "Si l'on doit arbitrer — entre ses enfants, ses employés — être juste, même contre soi."
    ],
    dua: { ar: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ", fr: "Seigneur, tranche entre nous et notre peuple par la vérité : Tu es le meilleur de ceux qui tranchent.", ref: "invocation de Shu'ayb — al-A'râf 89" }
  },
  {
    id: "al-muhit", theme: "ilm",
    noms: [{ ar: "المُحِيط", fr: "Al-Muhît", trad: "Celui qui cerne tout" }],
    racine: "ح و ط (h-w-t) : entourer de tous côtés — le hâ'it est le mur d'enceinte",
    preuve: "Coran",
    verset: { ar: "أَلَا إِنَّهُ بِكُلِّ شَيْءٍ مُحِيطٌ", fr: "C'est Lui, certes, qui cerne toute chose.", ref: "Fussilat 54" },
    sens: [
      "Il cerne tout par Sa <b>science</b>, Sa <b>puissance</b> et Sa domination : rien n'est hors de portée, rien n'est hors de vue.",
      "« Allah cerne toute chose de Sa science » (at-Talâq 12)."
    ],
    textes: [
      "Après les armées de Pharaon et de Thamûd : « Et Allah, derrière eux, <b>les cerne</b> de toutes parts » (al-Burûj 20). Ils encerclaient les croyants ; ils étaient encerclés.",
      "« Ô djinns et hommes ! Si vous pouvez sortir des confins des cieux et de la terre, sortez ! » (ar-Rahmân 33)."
    ],
    mediter: [
      "On peut fuir un créancier, un tyran, un pays. De Lui, on ne peut fuir que <b>vers</b> Lui : « Fuyez donc vers Allah » (adh-Dhâriyât 50).",
      "Ceux qui complotent contre le vrai sont à l'intérieur d'un cercle qu'ils ne voient pas."
    ],
    vivre: [
      "Sérénité devant la force des injustes : ils sont cernés.",
      "Avant de dormir : « Nul refuge ni salut contre Toi, <b>sinon auprès de Toi</b>. »"
    ],
    dua: { ar: "لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ", fr: "Nul refuge ni salut contre Toi, sinon auprès de Toi.", ref: "Bukhârî et Muslim — al-Barâ', invocation du coucher" }
  },
  {
    id: "al-wasi", theme: "ilm",
    noms: [{ ar: "الوَاسِع", fr: "Al-Wâsi'", trad: "L'Immense, dont la largesse embrasse tout" }],
    racine: "و س ع (w-s-') : être vaste, contenir",
    preuve: "Coran",
    verset: { ar: "وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ إِنَّ اللَّهَ وَاسِعٌ عَلِيمٌ", fr: "À Allah l'Orient et l'Occident : où que vous vous tourniez, là est la Face d'Allah. Allah est Immense, Omniscient.", ref: "al-Baqara 115" },
    sens: [
      "Vaste dans <b>tous</b> Ses attributs : Sa science, Sa miséricorde, Sa richesse, Son pardon, Sa grâce — aucun n'a de limite qu'on puisse atteindre.",
      "« Ma miséricorde embrasse (wasi'at) toute chose » (al-A'râf 156). « Son Kursî embrasse (wasi'a) les cieux et la terre » (al-Baqara 255)."
    ],
    textes: [
      "Un bédouin pria : « Ô Allah, fais-moi miséricorde ainsi qu'à Muhammad, et à personne d'autre ! » Le Prophète ﷺ : « <b>Tu as rétréci ce qui est vaste</b> » (Bukhârî).",
      "« Shaytân vous promet la pauvreté et vous commande l'avarice ; Allah vous promet un pardon de Sa part et une grâce. Allah est Immense, Omniscient » (al-Baqara 268)."
    ],
    mediter: [
      "La peur de manquer vient toujours d'une image étroite d'Allah : pas assez de place, pas assez de rizq, pas assez de pardon pour moi.",
      "Après le divorce même : « S'ils se séparent, Allah enrichira chacun de Sa largesse. Allah est Immense et Sage » (an-Nisâ' 130)."
    ],
    vivre: [
      "Élargir : sa poitrine face aux avis différents, son assise pour celui qui arrive (al-Mujâdila 11), son invocation pour tous les musulmans.",
      "Donner sans craindre : ce qui est auprès de l'Immense ne s'épuise pas."
    ],
    dua: { ar: "رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ", fr: "Seigneur, Tu embrasses toute chose de Ta miséricorde et de Ta science : pardonne à ceux qui se repentent et suivent Ton chemin.", ref: "invocation des anges porteurs du Trône — Ghâfir 7" }
  },
  {
    id: "al-qarib", theme: "ilm",
    noms: [{ ar: "القَرِيب", fr: "Al-Qarîb", trad: "Le Proche" }],
    racine: "ق ر ب (q-r-b) : être proche",
    preuve: "Coran",
    verset: { ar: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ", fr: "Et quand Mes serviteurs t'interrogent sur Moi : Je suis proche, Je réponds à l'appel de celui qui M'invoque quand il M'invoque.", ref: "al-Baqara 186" },
    sens: [
      "Proche de celui qui L'invoque et L'adore — d'une proximité qui <b>ne contredit pas Son élévation</b> au-dessus de Sa création : rien ne Lui ressemble.",
      "Partout ailleurs le Coran dit « Ils t'interrogent… <b>dis</b> : … ». Ici, pas de « dis » : la réponse vient <b>directement</b>, comme pour retirer tout intermédiaire."
    ],
    textes: [
      "« Le serviteur n'est jamais aussi proche de son Seigneur que lorsqu'il est <b>prosterné</b> : multipliez-y l'invocation » (Muslim).",
      "Hadith qudsî : « S'il se rapproche de Moi d'un empan, Je Me rapproche de lui d'une coudée ; s'il vient à Moi en marchant, <b>Je viens à lui en hâte</b> » (Bukhârî et Muslim)."
    ],
    mediter: [
      "Ce verset est posé <b>au milieu</b> des versets du jeûne : le jeûneur a une invocation qui n'est pas rejetée.",
      "Pas de rendez-vous, pas de langue imposée, pas d'heure de fermeture. Qu'attends-tu ?"
    ],
    vivre: [
      "Faire de la prosternation le lieu où l'on dit tout.",
      "Se rapprocher par ce qu'Il aime le plus : « Mon serviteur ne se rapproche de Moi par rien que J'aime davantage que ce que Je lui ai <b>imposé</b> » (Bukhârî)."
    ],
    dua: { ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى", fr: "Ô Allah, je Te demande la guidance, la piété, la chasteté et la suffisance.", ref: "Muslim — Ibn Mas'ûd" }
  },
  {
    id: "al-mujib", theme: "ilm",
    noms: [{ ar: "المُجِيب", fr: "Al-Mujîb", trad: "Celui qui répond, qui exauce" }],
    racine: "ج و ب (j-w-b) : répondre",
    preuve: "Coran — Hûd 61",
    verset: { ar: "إِنَّ رَبِّي قَرِيبٌ مُجِيبٌ", fr: "Mon Seigneur est proche, et Il répond.", ref: "parole de Sâlih — Hûd 61" },
    sens: [
      "Il répond à <b>quiconque</b> L'appelle : le croyant par faveur, l'opprimé par justice — « même mécréant » (Ahmad) —, l'angoissé par miséricorde : « N'est-ce pas Lui qui répond à l'angoissé quand il L'invoque ? » (an-Naml 62).",
      "« Invoquez-Moi, Je vous répondrai » (Ghâfir 60) : l'ordre et la promesse dans la même phrase."
    ],
    textes: [
      "« Aucun musulman n'invoque — sans péché ni rupture de lien — sans qu'Allah lui donne l'une de trois choses : Il <b>hâte</b> sa demande, Il la lui <b>réserve</b> pour l'au-delà, ou Il <b>écarte</b> de lui un mal équivalent. — Alors nous multiplierons ! — Allah donne plus encore » (Ahmad).",
      "« On est exaucé tant qu'on ne s'impatiente pas en disant : j'ai invoqué et je n'ai pas été exaucé » (Bukhârî et Muslim)."
    ],
    mediter: [
      "Aucune invocation sincère n'est donc perdue : elle est payée ici, payée là-bas, ou changée en protection.",
      "Zakariyyâ a demandé un enfant dans l'extrême vieillesse, Yûnus a appelé du ventre du poisson, Ayyûb après des années de maladie : à chaque fois, le Coran dit « <b>Nous lui répondîmes</b> »."
    ],
    vivre: [
      "Répondre soi-même : le verset continue — « qu'ils <b>Me répondent</b> donc et croient en Moi ».",
      "Invoquer avec certitude, d'un cœur présent : « Allah n'exauce pas l'invocation d'un cœur distrait » (at-Tirmidhî)."
    ],
    dua: { ar: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", fr: "Seigneur, j'ai grand besoin du bien que Tu feras descendre vers moi.", ref: "invocation de Mûsâ, exilé et sans rien, à Madyan — al-Qasas 24" }
  },

  /* ==================== MAJESTÉ ET GRANDEUR ==================== */
  {
    id: "al-malik", theme: "jalal",
    noms: [
      { ar: "المَلِك", fr: "Al-Malik", trad: "Le Roi" },
      { ar: "المَلِيك", fr: "Al-Malîk", trad: "Le Souverain absolu" }
    ],
    racine: "م ل ك (m-l-k) : posséder et régner",
    preuve: "Coran (al-Hashr 23, al-Qamar 55)",
    verset: { ar: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ", fr: "C'est Lui Allah, point de divinité à part Lui : le Roi, le Pur, la Paix.", ref: "al-Hashr 23" },
    sens: [
      "Il possède tout <b>et</b> Il gouverne tout : Son ordre s'exécute, nul ne Le destitue, nul ne Lui demande de comptes.",
      "Les rois de ce monde règnent sur ce qu'ils n'ont pas créé et quittent ce qu'ils croient posséder. « Il donne la royauté à qui Il veut et l'arrache à qui Il veut » (Âl 'Imrân 26)."
    ],
    textes: [
      "« Allah saisira la terre et pliera les cieux de Sa droite, puis dira : <b>Je suis le Roi ! Où sont les rois de la terre ?</b> » (Bukhârî et Muslim).",
      "« Le nom le plus avili auprès d'Allah : un homme qui se fait appeler <b>roi des rois</b> » (Bukhârî et Muslim). Aux pieux : « un séjour de vérité, auprès d'un <b>Souverain</b> omnipotent » (al-Qamar 55)."
    ],
    mediter: [
      "« À qui appartient la royauté aujourd'hui ? » (Ghâfir 16). Ce Jour-là, plus personne ne répondra. Aujourd'hui, tu peux encore répondre avant d'y être forcé.",
      "An-Nâs te fait chercher refuge auprès du « Seigneur des hommes, <b>Roi</b> des hommes, Dieu des hommes » : celui qui est chez le Roi ne craint pas les sujets."
    ],
    vivre: [
      "Être roi de soi-même : de sa colère, de sa langue, de ses envies.",
      "Se rappeler que ce qu'on « possède » est un dépôt dont on répondra : « chacun de vous est un berger » (Bukhârî et Muslim)."
    ],
    dua: { ar: "اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", fr: "Ô Allah, Maître de la royauté ! Tu donnes la royauté à qui Tu veux et Tu l'arraches à qui Tu veux ; Tu honores qui Tu veux et Tu abaisses qui Tu veux. Le bien est dans Ta main. Tu es Omnipotent.", ref: "Âl 'Imrân 26" }
  },
  {
    id: "al-quddus", theme: "jalal",
    noms: [{ ar: "القُدُّوس", fr: "Al-Quddûs", trad: "Le Pur, le Saint" }],
    racine: "ق د س (q-d-s) : la pureté, ce qui est exempt de toute souillure",
    preuve: "Coran (al-Hashr 23, al-Jumu'a 1)",
    verset: { ar: "يُسَبِّحُ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ الْمَلِكِ الْقُدُّوسِ الْعَزِيزِ الْحَكِيمِ", fr: "Ce qui est dans les cieux et ce qui est sur la terre glorifie Allah, le Roi, le Pur, le Puissant, le Sage.", ref: "al-Jumu'a 1" },
    sens: [
      "Exempt de <b>tout défaut</b> et de toute ressemblance avec les créatures ; au-dessus de tout ce que les imaginations Lui prêtent.",
      "Le nom suit « le Roi » dans les deux versets : les rois d'ici-bas sont injustes, capricieux, mortels — Lui est un Roi <b>sans tache</b>."
    ],
    textes: [
      "Les anges : « Nous Te glorifions par Ta louange et <b>proclamons Ta sainteté</b> » (al-Baqara 30).",
      "Le Prophète ﷺ disait, incliné et prosterné : « Subbûhun Quddûs, Seigneur des anges et de l'Esprit » (Muslim) ; et après le witr : « Subhâna l-Maliki l-Quddûs » (Abû Dâwûd, an-Nasâ'î)."
    ],
    mediter: [
      "Chaque fois qu'une pensée te dit « pourquoi Allah a-t-Il… », ce nom répond : le défaut est dans ta vue, pas dans Son acte.",
      "La terre où Il a parlé à Mûsâ est appelée « la vallée <b>sanctifiée</b> » : ce qui s'approche de Lui se purifie."
    ],
    vivre: [
      "Purifier ce qu'on Lui présente : le corps par les ablutions, l'argent par la zakât, le cœur par le repentir.",
      "Garder de Lui la meilleure opinion : « Je suis auprès de l'opinion que Mon serviteur se fait de Moi » (Bukhârî et Muslim)."
    ],
    dua: { ar: "سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ", fr: "Parfaitement Glorifié, Parfaitement Pur, Seigneur des anges et de l'Esprit. — Dans l'inclinaison et la prosternation.", ref: "Muslim — 'Â'isha" }
  },
  {
    id: "as-subbuh", theme: "jalal",
    noms: [{ ar: "السُّبُّوح", fr: "As-Subbûh", trad: "Le Parfaitement Glorifié" }],
    racine: "س ب ح (s-b-h) : s'éloigner — le tasbîh éloigne d'Allah tout ce qui ne Lui sied pas",
    preuve: "Sunna — Muslim",
    verset: { ar: "تُسَبِّحُ لَهُ السَّمَاوَاتُ السَّبْعُ وَالْأَرْضُ وَمَنْ فِيهِنَّ وَإِنْ مِنْ شَيْءٍ إِلَّا يُسَبِّحُ بِحَمْدِهِ وَلَكِنْ لَا تَفْقَهُونَ تَسْبِيحَهُمْ", fr: "Les sept cieux, la terre et ceux qui s'y trouvent Le glorifient. Il n'est rien qui ne célèbre Sa gloire et Sa louange, mais vous ne comprenez pas leur glorification.", ref: "al-Isrâ' 44" },
    sens: [
      "Celui que <b>tout glorifie</b> et qui est digne de l'être : « subhânallâh » Le déclare au-dessus de tout manque, de tout associé, de toute comparaison.",
      "Le nom vient dans le dhikr de l'inclinaison et de la prosternation : « <b>Subbûhun Quddûs</b>, Seigneur des anges et de l'Esprit » (Muslim)."
    ],
    textes: [
      "« Deux paroles légères sur la langue, lourdes dans la balance, aimées du Tout Miséricordieux : <b>subhânallâhi wa bi-hamdih, subhânallâhi l-'Azîm</b> » (Bukhârî et Muslim).",
      "« Celui qui dit subhânallâhi wa bi-hamdih cent fois par jour, ses fautes sont effacées, fussent-elles comme l'écume de la mer » (Bukhârî et Muslim)."
    ],
    mediter: [
      "Le tonnerre, les oiseaux ailes déployées, les montagnes avec Dâwûd : tout est en tasbîh. Dans ce concert, l'homme distrait est <b>la seule fausse note</b>.",
      "Yûnus, dans trois ténèbres, n'a d'abord demandé aucune délivrance : il a dit « <b>subhânaka</b> » — « S'il n'avait pas été de ceux qui glorifient, il serait resté dans son ventre jusqu'au Jour » (as-Sâffât 143-144)."
    ],
    vivre: [
      "Dire « subhânallâh » devant ce qui étonne ou choque, comme le faisait le Prophète ﷺ.",
      "Remplir les temps morts : trajets, files d'attente, insomnies."
    ],
    dua: { ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ", fr: "Gloire et louange à Allah, autant que le nombre de Ses créatures, autant qu'Il en est satisfait, autant que pèse Son Trône, autant que l'encre de Ses paroles. — Trois fois le matin : cela pèse plus lourd qu'une matinée entière de dhikr.", ref: "Muslim — Juwayriya" }
  },
  {
    id: "as-salam", theme: "jalal",
    noms: [{ ar: "السَّلَام", fr: "As-Salâm", trad: "La Paix, l'Exempt de tout défaut" }],
    racine: "س ل م (s-l-m) : être sain et sauf, intact — même racine qu'islâm",
    preuve: "Coran — al-Hashr 23",
    verset: { ar: "وَاللَّهُ يَدْعُو إِلَى دَارِ السَّلَامِ", fr: "Allah appelle à la Demeure de la paix.", ref: "Yûnus 25" },
    sens: [
      "<b>Sain</b> de tout défaut dans Son essence, Ses attributs et Ses actes ; et <b>source</b> de toute paix et de toute sécurité pour Ses créatures.",
      "Après chaque prière : « Ô Allah, Tu es as-Salâm et de Toi vient la paix » (Muslim)."
    ],
    textes: [
      "Les compagnons disaient dans la prière « que la paix soit sur Allah ». Le Prophète ﷺ : « Ne dites pas cela : <b>Allah est as-Salâm</b> » — et il leur enseigna le tashahhud (Bukhârî et Muslim).",
      "Jibrîl vint dire : « Voici Khadîja qui arrive ; transmets-lui <b>le salâm de son Seigneur</b>, et annonce-lui une maison au Paradis, sans vacarme ni fatigue » (Bukhârî et Muslim)."
    ],
    mediter: [
      "On ne souhaite pas la paix à Celui qui <b>est</b> la Paix : on la Lui demande.",
      "Le salut que tu donnes vingt fois par jour est l'un de Ses noms posé sur ton frère : « as-Salâm est un des noms d'Allah qu'Il a placé sur terre : répandez-le entre vous » (al-Bukhârî, al-Adab al-mufrad)."
    ],
    vivre: [
      "« Le musulman est celui dont les musulmans sont <b>à l'abri</b> de la langue et de la main » (Bukhârî et Muslim).",
      "Répandre le salâm, à qui l'on connaît et à qui l'on ne connaît pas (Bukhârî et Muslim)."
    ],
    dua: { ar: "اللَّهُمَّ أَنْتَ السَّلَامُ، وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", fr: "Ô Allah, Tu es la Paix et de Toi vient la paix. Béni sois-Tu, ô Détenteur de la majesté et de la générosité.", ref: "Muslim — Thawbân, après chaque prière" },
    sira: { n: 28, txt: "Jibrîl transmet à Khadîja le salâm de son Seigneur." }
  },
  {
    id: "al-mumin", theme: "jalal",
    noms: [{ ar: "المُؤْمِن", fr: "Al-Mu'min", trad: "Celui qui donne la sécurité et confirme la vérité" }],
    racine: "أ م ن (a-m-n) : la sécurité (amn) et la confirmation (îmân, tasdîq)",
    preuve: "Coran — une seule fois, al-Hashr 23",
    verset: { ar: "الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ", fr: "Celui qui les a nourris contre la faim et rassurés contre la peur.", ref: "Quraysh 4" },
    sens: [
      "Celui qui <b>met à l'abri</b> : Ses créatures de Son injustice — « ton Seigneur ne lèse personne » — et Ses alliés de la peur, ici-bas et au Jour de la grande frayeur.",
      "Celui qui <b>confirme</b> : Il atteste Lui-même de Son unicité (Âl 'Imrân 18), confirme Ses messagers par les miracles, et tient Sa promesse."
    ],
    textes: [
      "« Ceux qui ont cru et n'ont pas mêlé leur foi d'injustice : <b>à eux la sécurité</b>, et ce sont eux les bien-guidés » (al-An'âm 82).",
      "Aux croyants, à la mort : « N'ayez pas peur, ne soyez pas tristes » (Fussilat 30)."
    ],
    mediter: [
      "La peur est partout ; la sécurité n'a qu'une adresse. Plus la foi est pure, plus la paix intérieure est complète : c'est la promesse d'al-An'âm 82.",
      "Ton îmân porte Son nom : tu crois en Celui qui a d'abord « cru » en Sa propre parole en la confirmant."
    ],
    vivre: [
      "« Par Allah, il ne croit pas, celui dont le voisin <b>n'est pas à l'abri</b> de ses nuisances » (Bukhârî et Muslim).",
      "Être quelqu'un auprès de qui on se sent en sécurité : secrets gardés, dépôts rendus, colères maîtrisées."
    ],
    dua: { ar: "اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي", fr: "Ô Allah, couvre mes défauts et apaise mes frayeurs.", ref: "Abû Dâwûd, Ibn Mâjah — matin et soir" }
  },
  {
    id: "al-muhaymin", theme: "jalal",
    noms: [{ ar: "المُهَيْمِن", fr: "Al-Muhaymin", trad: "Le Vigilant, qui veille sur tout et domine tout" }],
    racine: "ه ي م ن (h-y-m-n) : surveiller, garder, avoir autorité sur",
    preuve: "Coran — une seule fois, al-Hashr 23",
    verset: { ar: "الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ", fr: "… le Sécurisant, le Vigilant, le Puissant, le Contraignant, le Majestueux.", ref: "al-Hashr 23" },
    sens: [
      "Le <b>témoin</b> de toute chose, qui veille sur Ses créatures — leurs actes, leurs termes, leurs subsistances — sans que rien Lui échappe.",
      "Le Coran porte le même qualificatif : « confirmant le Livre qui le précède et <b>prévalant</b> (muhayminan) sur lui » (al-Mâ'ida 48) — gardien et juge des Écritures antérieures."
    ],
    textes: [
      "« Tu ne te trouves dans aucune situation, tu ne récites aucun passage du Coran, vous n'accomplissez aucun acte sans que Nous soyons <b>témoin</b> au moment où vous l'entreprenez » (Yûnus 61).",
      "Les trois derniers versets d'al-Hashr réunissent plus de quinze noms : les savants recommandent de les méditer ensemble."
    ],
    mediter: [
      "Rien n'est livré au hasard : pas une cellule, pas une orbite, pas une heure de ta vie n'est sans gardien.",
      "Être surveillé par un ennemi est une prison ; être veillé par le Très Miséricordieux est un <b>repos</b>."
    ],
    vivre: [
      "Faire prévaloir le Coran sur ses opinions, ses habitudes et l'air du temps.",
      "La murâqaba : se savoir sous Son regard dans ce qu'on fait maintenant."
    ],
    dua: { ar: "اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي، وَعَنْ يَمِينِي وَعَنْ شِمَالِي، وَمِنْ فَوْقِي", fr: "Ô Allah, garde-moi par-devant et par-derrière, à ma droite et à ma gauche, et au-dessus de moi.", ref: "Abû Dâwûd, Ibn Mâjah — matin et soir" }
  },
  {
    id: "al-aziz", theme: "jalal",
    noms: [{ ar: "العَزِيز", fr: "Al-'Azîz", trad: "Le Tout-Puissant, l'Invincible" }],
    racine: "ع ز ز ('-z-z) : être fort, rare, inaccessible",
    preuve: "Coran — environ quatre-vingt-dix fois",
    verset: { ar: "مَنْ كَانَ يُرِيدُ الْعِزَّةَ فَلِلَّهِ الْعِزَّةُ جَمِيعًا", fr: "Quiconque veut la puissance : c'est à Allah qu'appartient toute la puissance.", ref: "Fâtir 10" },
    sens: [
      "Ibn al-Qayyim : la 'izza a trois sens, tous parfaits chez Lui — la <b>force</b>, la <b>victoire</b> sur tout adversaire, et l'<b>inaccessibilité</b> : nul ne peut L'atteindre ni Lui nuire.",
      "Dans ash-Shu'arâ', après chaque peuple détruit, le même refrain : « Ton Seigneur, c'est Lui <b>le Tout-Puissant, le Très Miséricordieux</b> » — puissant contre les négateurs, miséricordieux envers les croyants sauvés."
    ],
    textes: [
      "Ibn Ubayy avait dit : « Le plus puissant en fera sortir le plus vil. » Réponse : « <b>La puissance est à Allah, à Son Messager et aux croyants</b>, mais les hypocrites ne savent pas » (al-Munâfiqûn 8).",
      "'Umar, entrant à Jérusalem en vêtement rapiécé : « Nous étions le plus vil des peuples et Allah nous a honorés par l'islam ; si nous cherchons l'honneur ailleurs, Allah nous avilira » (al-Hâkim)."
    ],
    mediter: [
      "Où cherches-tu ta dignité ? Dans un titre, une marque, l'approbation d'un milieu ? Ces 'izza-là se retirent avec ce qui les donne.",
      "Le verset continue : « Vers Lui monte la bonne parole » — la 'izza se gagne par l'obéissance."
    ],
    vivre: [
      "Ne s'humilier que devant Lui : « Il ne convient pas au croyant de s'avilir » (at-Tirmidhî).",
      "Fierté sans orgueil : les croyants sont « humbles envers les croyants, fiers face aux négateurs » (al-Mâ'ida 54)."
    ],
    dua: { ar: "أَعُوذُ بِعِزَّةِ اللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ", fr: "Je cherche refuge auprès de la puissance d'Allah et de Son pouvoir contre le mal que je ressens et que je redoute. — Sept fois, la main posée sur l'endroit douloureux, après « bismillâh » trois fois.", ref: "Muslim — 'Uthmân ibn Abî l-'Âs" }
  },
  {
    id: "al-jabbar", theme: "jalal",
    noms: [{ ar: "الجَبَّار", fr: "Al-Jabbâr", trad: "Le Contraignant — et Celui qui répare" }],
    racine: "ج ب ر (j-b-r) : contraindre ; et réparer — la jabîra est l'attelle qui ressoude l'os",
    preuve: "Coran — une seule fois, al-Hashr 23",
    verset: { ar: "الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ", fr: "… le Tout-Puissant, le Contraignant, le Majestueux. Gloire à Allah, au-dessus de ce qu'ils Lui associent !", ref: "al-Hashr 23" },
    sens: [
      "Trois sens : Celui dont la volonté <b>s'impose</b> à tout ; le <b>Très-Haut</b> hors d'atteinte ; et Celui qui <b>répare</b> — qui ressoude les cœurs brisés, enrichit le pauvre, relève le faible.",
      "C'est pourquoi on peut dire « yâ Jabbâr » dans la détresse : on appelle Celui qui remet les os en place."
    ],
    textes: [
      "Entre les deux prosternations : « Seigneur, pardonne-moi, fais-moi miséricorde, <b>répare-moi</b> (wajburnî), guide-moi, pourvois-moi » (at-Tirmidhî).",
      "Dans l'inclinaison : « Gloire au Détenteur de la <b>contrainte</b> (jabarût), de la royauté, de la majesté et de l'immensité » (Abû Dâwûd, an-Nasâ'î)."
    ],
    mediter: [
      "Le même nom fait trembler le tyran et console le brisé. De quel côté te trouves-tu aujourd'hui ?",
      "Ta fracture — un deuil, un échec, une humiliation — n'est pas au-dessus de Son jabr."
    ],
    vivre: [
      "Jabr al-khawâtir : réparer les cœurs — une visite, un mot, une dette effacée. Les savants y voyaient l'une des œuvres les plus aimées.",
      "Chez l'homme, « jabbâr » est un blâme : « Ainsi Allah scelle le cœur de tout orgueilleux tyran » (Ghâfir 35)."
    ],
    dua: { ar: "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاجْبُرْنِي، وَاهْدِنِي، وَارْزُقْنِي", fr: "Ô Allah, pardonne-moi, fais-moi miséricorde, répare-moi, guide-moi et pourvois-moi.", ref: "at-Tirmidhî — Ibn 'Abbâs, entre les deux prosternations" },
    sira: { n: 3, txt: "Abraha et son éléphant devant la Kaaba : l'armée la plus puissante d'Arabie défaite par des oiseaux." }
  },
  {
    id: "al-mutakabbir", theme: "jalal",
    noms: [{ ar: "المُتَكَبِّر", fr: "Al-Mutakabbir", trad: "Le Majestueux, à qui seul revient la grandeur" }],
    racine: "ك ب ر (k-b-r) : la grandeur — la kibriyâ' est la grandeur souveraine",
    preuve: "Coran — une seule fois, al-Hashr 23",
    verset: { ar: "وَلَهُ الْكِبْرِيَاءُ فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ", fr: "À Lui la grandeur souveraine dans les cieux et sur la terre, et c'est Lui le Tout-Puissant, le Sage.", ref: "al-Jâthiya 37" },
    sens: [
      "Celui qui est au-dessus de tout mal, de toute injustice, de tout défaut — et à qui la grandeur appartient <b>en propre</b>.",
      "Chez la créature, se grandir est un mensonge : elle revendique ce qu'elle n'a pas. Chez Lui, c'est la stricte <b>vérité</b>."
    ],
    textes: [
      "Hadith qudsî : « La grandeur est Mon manteau et la majesté Mon pagne : quiconque Me dispute l'un des deux, <b>Je le jette au Feu</b> » (Muslim, Abû Dâwûd).",
      "« N'entrera pas au Paradis celui qui a dans le cœur le poids d'un atome d'orgueil… L'orgueil, c'est rejeter la vérité et mépriser les gens » (Muslim)."
    ],
    mediter: [
      "Le premier péché de la création fut une phrase d'orgueil : « Je suis meilleur que lui » (al-A'râf 12).",
      "L'orgueilleux ne vole pas les hommes : il tente de se vêtir d'un habit qui n'appartient qu'à Allah."
    ],
    vivre: [
      "Le test de l'orgueil est simple : accepter la vérité de <b>n'importe qui</b>, et ne regarder personne de haut.",
      "Le Prophète ﷺ raccommodait ses sandales, servait sa famille, et s'asseyait là où l'assemblée s'arrêtait."
    ],
    dua: { ar: "سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ", fr: "Gloire au Détenteur de la contrainte, de la royauté, de la grandeur et de l'immensité. — Dans l'inclinaison et la prosternation de la prière de nuit.", ref: "Abû Dâwûd, an-Nasâ'î — 'Awf ibn Mâlik" }
  },
  {
    id: "al-kabir", theme: "jalal",
    noms: [{ ar: "الكَبِير", fr: "Al-Kabîr", trad: "Le Grand" }],
    racine: "ك ب ر (k-b-r) : être grand",
    preuve: "Coran",
    verset: { ar: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ", fr: "Le Connaisseur de l'invisible et du visible, le Grand, le Sublime.", ref: "ar-Ra'd 9" },
    sens: [
      "Plus grand que tout, dans Son essence et Ses attributs : tout ce qui est grand est <b>petit</b> devant Lui.",
      "« Allâhu akbar » ne dit pas « plus grand que telle chose » : il dit plus grand, <b>sans complément</b> — que tout ce que tu peux nommer, craindre ou imaginer."
    ],
    textes: [
      "Le takbîr ouvre la prière, l'adhân, les deux fêtes, accompagne chaque mouvement : on entre dans la prière en déclarant que tout le reste est plus petit.",
      "« Et proclame hautement Sa grandeur » (al-Isrâ' 111). « Afin que vous proclamiez la grandeur d'Allah pour vous avoir guidés » (al-Baqara 185)."
    ],
    mediter: [
      "Ce qui occupe ta prière est, à cet instant, plus grand qu'Allah <b>dans ton cœur</b>. Le takbîr est là pour remettre les choses à leur taille.",
      "Les compagnons disaient Allâhu akbar en montant et subhânallâh en descendant (Bukhârî) : la hauteur leur rappelait plus haut."
    ],
    vivre: [
      "Devant une peur, un puissant, une tentation : dire « Allâhu akbar » en le <b>pensant</b>.",
      "Multiplier le takbîr dans les dix premiers jours de Dhû l-Hijja et les jours de fête."
    ],
    dua: { ar: "اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا", fr: "Allah est le plus grand, immensément ; louange à Allah, abondamment ; gloire à Allah, matin et soir. — Un homme ouvrit ainsi sa prière ; le Prophète ﷺ dit : « Les portes du ciel se sont ouvertes pour elle. »", ref: "Muslim — Ibn 'Umar" }
  },
  {
    id: "al-azim", theme: "jalal",
    noms: [{ ar: "العَظِيم", fr: "Al-'Azîm", trad: "L'Immense" }],
    racine: "ع ظ م ('-z-m) : être immense, considérable",
    preuve: "Coran",
    verset: { ar: "وَمَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ وَالْأَرْضُ جَمِيعًا قَبْضَتُهُ يَوْمَ الْقِيَامَةِ وَالسَّمَاوَاتُ مَطْوِيَّاتٌ بِيَمِينِهِ", fr: "Ils n'ont pas estimé Allah à Sa juste mesure, alors que la terre entière sera dans Sa poigne au Jour de la Résurrection, et les cieux pliés dans Sa droite.", ref: "az-Zumar 67" },
    sens: [
      "Immense au point que <b>nulle raison ne L'embrasse</b>. Âyat al-Kursî, le plus grand verset, se clôt sur : « Il est le Très-Haut, l'Immense ».",
      "Tout ce que les cœurs peuvent magnifier est, devant Lui, comme rien."
    ],
    textes: [
      "Quand descendit « Glorifie le nom de ton Seigneur, l'Immense » (al-Wâqi'a 96), le Prophète ﷺ dit : « Mettez-la dans votre <b>inclinaison</b> » (Abû Dâwûd) — d'où « subhâna rabbiya l-'Azîm ».",
      "« Quiconque magnifie les rites d'Allah : cela relève de la piété des cœurs » (al-Hajj 32)."
    ],
    mediter: [
      "Tu dis « l'Immense » plié en deux, et « le Très-Haut » le front au sol : la posture du corps enseigne le sens du mot.",
      "La légèreté avec laquelle on désobéit se mesure à la petitesse de l'image qu'on a de Lui. Un ancien disait : « Ne regarde pas la petitesse de la faute, regarde <b>la grandeur de Celui</b> à qui tu désobéis. »"
    ],
    vivre: [
      "Magnifier ce qu'Il a magnifié : Sa parole, Son Prophète ﷺ, Ses maisons, Ses limites.",
      "Dire « subhâna rabbiya l-'Azîm » lentement, au moins trois fois, en sachant ce qu'on dit."
    ],
    dua: { ar: "سُبْحَانَ رَبِّيَ الْعَظِيمِ", fr: "Gloire à mon Seigneur, l'Immense. — Dans l'inclinaison.", ref: "Muslim — Hudhayfa" }
  },
  {
    id: "al-aliyy", theme: "jalal",
    noms: [
      { ar: "العَلِيّ", fr: "Al-'Aliyy", trad: "Le Très-Haut" },
      { ar: "الأَعْلَى", fr: "Al-A'lâ", trad: "Le Plus-Haut" },
      { ar: "المُتَعَالِي", fr: "Al-Muta'âlî", trad: "Le Sublime, élevé au-dessus de tout" }
    ],
    racine: "ع ل و ('-l-w) : l'élévation",
    preuve: "Coran (al-Baqara 255, al-A'lâ 1, ar-Ra'd 9)",
    verset: { ar: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى", fr: "Glorifie le nom de ton Seigneur, le Plus-Haut.", ref: "al-A'lâ 1" },
    sens: [
      "Les savants distinguent trois élévations, toutes établies : celle de <b>l'essence</b> — Il est au-dessus de Sa création, établi sur Son Trône —, celle du <b>rang</b> — nul attribut ne dépasse les Siens —, celle de la <b>domination</b> — tout Lui est soumis.",
      "Al-Muta'âlî ajoute : élevé au-dessus de tout ce que les menteurs Lui attribuent."
    ],
    textes: [
      "Quand ce verset descendit, le Prophète ﷺ dit : « Mettez-la dans votre <b>prosternation</b> » (Abû Dâwûd) — d'où « subhâna rabbiya l-A'lâ ».",
      "Le Prophète ﷺ demanda à une servante : « Où est Allah ? — <b>Au ciel</b>. — Qui suis-je ? — Le Messager d'Allah. — Affranchis-la : elle est croyante » (Muslim)."
    ],
    mediter: [
      "C'est au point <b>le plus bas</b> — le front dans la poussière — que tu proclames le Plus-Haut, et c'est là que tu es le plus proche de Lui.",
      "Celui qui invoque lève les mains et le regard du cœur vers le haut : l'élévation d'Allah est inscrite dans la nature humaine."
    ],
    vivre: [
      "Chercher l'élévation par l'abaissement : « Nul ne s'humilie pour Allah sans qu'Allah l'élève » (Muslim).",
      "Viser haut : « Allah aime les choses élevées et déteste les choses viles » (at-Tabarânî)."
    ],
    dua: { ar: "سُبْحَانَ رَبِّيَ الْأَعْلَى", fr: "Gloire à mon Seigneur, le Plus-Haut. — Dans la prosternation.", ref: "Muslim — Hudhayfa" }
  },
  {
    id: "al-majid", theme: "jalal",
    noms: [{ ar: "المَجِيد", fr: "Al-Majîd", trad: "Le Glorieux" }],
    racine: "م ج د (m-j-d) : le majd, l'ampleur de la noblesse et des bienfaits",
    preuve: "Coran (Hûd 73, al-Burûj 15)",
    verset: { ar: "رَحْمَتُ اللَّهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ إِنَّهُ حَمِيدٌ مَجِيدٌ", fr: "Que la miséricorde d'Allah et Ses bénédictions soient sur vous, gens de cette maison ! Il est Digne de louange, Glorieux.", ref: "parole des anges à Sâra — Hûd 73" },
    sens: [
      "Le majd réunit <b>la grandeur des attributs et la largesse des dons</b> : Al-Majîd est immense en Lui-même et immense en générosité.",
      "Les anges le disent à Sâra, stupéfaite d'enfanter dans la vieillesse : « T'étonnes-tu de l'ordre d'Allah ? » — rien n'est trop grand pour le Glorieux."
    ],
    textes: [
      "Tu termines chaque prière par ce nom : « … comme Tu as prié sur Ibrâhîm et la famille d'Ibrâhîm, <b>innaka Hamîdun Majîd</b> » (Bukhârî et Muslim).",
      "Dans la Fâtiha : quand le serviteur dit « Maître du Jour de la Rétribution », Allah dit : « <b>Mon serviteur M'a glorifié</b> (majjadanî) » (Muslim)."
    ],
    mediter: [
      "Le Coran aussi est « majîd » (Qâf 1, al-Burûj 21) : noble, ample, inépuisable — la parole ressemble à Celui qui parle.",
      "Pourquoi la prière sur le Prophète ﷺ se clôt-elle par ces deux noms ? On demande <b>beaucoup</b> : on s'adresse à Celui dont la louange et la gloire rendent la demande petite."
    ],
    vivre: [
      "Glorifier Allah <b>avant</b> de demander : un homme invoqua sans louange ni prière sur le Prophète ﷺ — « celui-ci s'est précipité » (Abû Dâwûd, at-Tirmidhî).",
      "Chercher la vraie gloire, celle de l'au-delà ; l'autre est un bruit qui s'éteint."
    ],
    dua: { ar: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ", fr: "Ô Allah, prie sur Muhammad et sur la famille de Muhammad, comme Tu as prié sur Ibrâhîm et sur la famille d'Ibrâhîm : Tu es Digne de louange, Glorieux.", ref: "Bukhârî et Muslim — Ka'b ibn 'Ujra" }
  },
  {
    id: "al-hamid", theme: "jalal",
    noms: [{ ar: "الحَمِيد", fr: "Al-Hamîd", trad: "Le Digne de louange" }],
    racine: "ح م د (h-m-d) : le hamd, la louange faite avec amour et vénération",
    preuve: "Coran",
    verset: { ar: "يَا أَيُّهَا النَّاسُ أَنْتُمُ الْفُقَرَاءُ إِلَى اللَّهِ وَاللَّهُ هُوَ الْغَنِيُّ الْحَمِيدُ", fr: "Ô hommes ! C'est vous les indigents ayant besoin d'Allah, et c'est Allah le Riche, le Digne de louange.", ref: "Fâtir 15" },
    sens: [
      "Loué <b>en toute circonstance</b> : pour ce qu'Il est, pour ce qu'Il donne, et pour ce qu'Il retient — car Il ne retient que par sagesse.",
      "Le hamd est plus que le remerciement : on remercie pour un bienfait reçu ; on loue Allah pour <b>ce qu'Il est</b>, même sans rien avoir reçu."
    ],
    textes: [
      "« <b>Al-hamdu lillâh</b> remplit la balance » (Muslim). Le Coran s'ouvre par elle ; les gens du Paradis y finissent : « la fin de leur invocation : louange à Allah, Seigneur des mondes » (Yûnus 10).",
      "Devant ce qu'il aimait, le Prophète ﷺ disait : « Louange à Allah par la grâce de qui s'accomplissent les bonnes choses » ; devant ce qu'il n'aimait pas : « <b>Louange à Allah en toute situation</b> » (Ibn Mâjah)."
    ],
    mediter: [
      "Le riche qui n'a besoin de personne est rarement aimé. Lui est Riche <b>et</b> Digne de louange : Sa richesse ne se déverse qu'en bienfaits.",
      "Quand Allah reprend l'enfant de Son serviteur et que celui-ci Le loue et dit « nous sommes à Allah… » : « Bâtissez-lui une maison au Paradis, et appelez-la <b>la maison de la louange</b> » (at-Tirmidhî)."
    ],
    vivre: [
      "Dire al-hamdu lillâh après avoir mangé, bu, éternué, s'être réveillé — et dans l'épreuve.",
      "« Allah est satisfait du serviteur qui mange une bouchée et L'en loue, boit une gorgée et L'en loue » (Muslim)."
    ],
    dua: { ar: "اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ، أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ", fr: "Ô Allah, à Toi la louange : Tu es la lumière des cieux, de la terre et de ceux qui s'y trouvent. À Toi la louange : Tu es Celui qui maintient les cieux, la terre et ceux qui s'y trouvent. — Début de l'invocation du Prophète ﷺ dans la prière de nuit.", ref: "Bukhârî et Muslim — Ibn 'Abbâs" }
  },
  {
    id: "al-ghaniyy", theme: "jalal",
    noms: [{ ar: "الغَنِيّ", fr: "Al-Ghaniyy", trad: "Le Riche, qui Se suffit à Lui-même" }],
    racine: "غ ن ي (gh-n-y) : se passer de, n'avoir besoin de rien",
    preuve: "Coran",
    verset: { ar: "وَمَنْ جَاهَدَ فَإِنَّمَا يُجَاهِدُ لِنَفْسِهِ إِنَّ اللَّهَ لَغَنِيٌّ عَنِ الْعَالَمِينَ", fr: "Quiconque lutte ne lutte que pour lui-même : Allah Se passe largement des mondes.", ref: "al-'Ankabût 6" },
    sens: [
      "Il n'a besoin <b>de rien ni de personne</b>, en rien ; et tout a besoin de Lui, en tout, à chaque instant.",
      "Ni ton obéissance ne L'augmente, ni ta désobéissance ne Le diminue : Ses ordres sont <b>pour toi</b>."
    ],
    textes: [
      "Hadith qudsî : « Ô Mes serviteurs ! Vous ne parviendrez jamais à Me nuire, ni à M'être utiles. Si le premier et le dernier d'entre vous avaient le cœur du plus pieux, cela <b>n'ajouterait rien</b> à Mon royaume ; le cœur du plus pervers, cela n'en retrancherait rien » (Muslim).",
      "« La richesse n'est pas l'abondance des biens : la richesse, c'est <b>la richesse de l'âme</b> » (Bukhârî et Muslim)."
    ],
    mediter: [
      "Il t'appelle à prier cinq fois par jour sans avoir besoin d'une seule de tes prières. Qui, alors, a besoin de qui ?",
      "Ta pauvreté devant Lui est ta seule vraie richesse : c'est elle qui ouvre Ses portes."
    ],
    vivre: [
      "Se passer des gens autant que possible : « Qui cherche à se suffire, Allah le rend suffisant » (Bukhârî et Muslim).",
      "Montrer son besoin à Lui seul."
    ],
    dua: { ar: "اللَّهُمَّ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ، أَنْتَ الْغَنِيُّ وَنَحْنُ الْفُقَرَاءُ، أَنْزِلْ عَلَيْنَا الْغَيْثَ", fr: "Ô Allah, Tu es Allah, point de divinité à part Toi : Tu es le Riche et nous sommes les indigents. Fais descendre sur nous la pluie. — Invocation du Prophète ﷺ pour demander la pluie.", ref: "Abû Dâwûd — 'Â'isha" }
  },
  {
    id: "as-sayyid", theme: "jalal",
    noms: [{ ar: "السَّيِّد", fr: "As-Sayyid", trad: "Le Maître" }],
    racine: "س و د (s-w-d) : le su'dad, la maîtrise, la prééminence",
    preuve: "Sunna — Abû Dâwûd",
    verset: { ar: "السَّيِّدُ اللَّهُ تَبَارَكَ وَتَعَالَى", fr: "Le Maître, c'est Allah, Béni et Très-Haut.", ref: "Abû Dâwûd — 'Abdullâh ibn ash-Shikhkhîr" },
    sens: [
      "Celui à qui revient la maîtrise <b>véritable et complète</b> : toute créature est Son serviteur, tout besoin remonte à Lui.",
      "Circonstance : la délégation des Banû 'Âmir dit au Prophète ﷺ : « Tu es notre maître. » Il répondit par cette parole. Ils insistèrent : « Le meilleur d'entre nous ! » — « Dites ce que vous avez à dire, et <b>que Shaytân ne vous entraîne pas</b>. »"
    ],
    textes: [
      "Ibn 'Abbâs explique as-Samad par : « le Maître (as-Sayyid) dont la maîtrise est parfaite ».",
      "Le Prophète ﷺ est pourtant « le maître des fils d'Âdam au Jour de la Résurrection, <b>sans orgueil</b> » (Muslim) : il ne refusait pas le mot, il fermait la porte de l'exagération."
    ],
    mediter: [
      "L'homme le plus digne d'éloges est celui qui s'en méfiait le plus : « Ne m'encensez pas comme les chrétiens ont encensé le fils de Maryam. Je ne suis qu'un serviteur ; dites : le serviteur d'Allah et Son Messager » (Bukhârî).",
      "Ton plus beau titre : <b>'abd</b>. C'est celui qu'Allah donne à Son Prophète ﷺ dans le moment le plus élevé : « Gloire à Celui qui fit voyager de nuit <b>Son serviteur</b> » (al-Isrâ' 1)."
    ],
    vivre: [
      "Refuser la flatterie, et ne pas flatter.",
      "Sayyid al-istighfâr, « la maîtresse des demandes de pardon », commence par : « Tu es mon Seigneur… et <b>je suis Ton serviteur</b>. »"
    ],
    dua: { ar: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ", fr: "Ô Allah, Tu es mon Seigneur, point de divinité à part Toi. Tu m'as créé et je suis Ton serviteur… — Début de Sayyid al-istighfâr (voir les adhkâr du matin et du soir).", ref: "Bukhârî — Shaddâd ibn Aws" },
    sira: { n: 31, txt: "Le voyage nocturne : au sommet de l'honneur, le Coran l'appelle « Son serviteur »." }
  },

  /* ==================== CRÉATION ET PUISSANCE ==================== */
  {
    id: "al-khaliq", theme: "qudra",
    noms: [
      { ar: "الخَالِق", fr: "Al-Khâliq", trad: "Le Créateur" },
      { ar: "الخَلَّاق", fr: "Al-Khallâq", trad: "Le Créateur incessant" }
    ],
    racine: "خ ل ق (kh-l-q) : déterminer la mesure d'une chose, puis la faire exister",
    preuve: "Coran (al-Hashr 24, al-Hijr 86)",
    verset: { ar: "أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ", fr: "Ont-ils été créés à partir de rien, ou sont-ils eux-mêmes les créateurs ?", ref: "at-Tûr 35" },
    sens: [
      "Celui qui <b>conçoit</b> chaque chose selon une mesure, puis la fait exister <b>sans modèle</b>. Al-Khallâq : Il crée sans cesse, création après création.",
      "« C'est Lui Allah, le Créateur, Celui qui donne existence, le Formateur » (al-Hashr 24) : trois noms, trois temps — la conception, la venue à l'être, la forme."
    ],
    textes: [
      "Jubayr ibn Mut'im, encore idolâtre, venu négocier les captifs de Badr, entendit le Prophète ﷺ réciter at-Tûr à la prière du Maghrib. À ce verset : « <b>Mon cœur faillit s'envoler</b> » (Bukhârî).",
      "« Voilà la création d'Allah. Montrez-Moi donc ce qu'ont créé ceux qui sont en dehors de Lui ! » (Luqmân 11)."
    ],
    mediter: [
      "Trois hypothèses seulement : né de rien, né de soi-même, ou créé. Le verset te laisse éliminer les deux premières.",
      "Toute l'humanité réunie ne sait pas créer <b>une mouche</b> (al-Hajj 73)."
    ],
    vivre: [
      "Le tafakkur : « Dans la création des cieux et de la terre, et l'alternance de la nuit et du jour, il y a des signes pour les doués d'intelligence » (Âl 'Imrân 190) — versets que le Prophète ﷺ récitait en se levant la nuit.",
      "Respecter Sa création : corps, bêtes, terre, eau — même au bord d'un fleuve, ne pas gaspiller l'eau des ablutions."
    ],
    dua: { ar: "رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ", fr: "Seigneur, Tu n'as pas créé cela en vain. Gloire à Toi ! Préserve-nous du châtiment du Feu.", ref: "Âl 'Imrân 191" },
    sira: { n: 22, txt: "Jubayr ibn Mut'im entend la sourate at-Tûr : « mon cœur faillit s'envoler »." }
  },
  {
    id: "al-bari", theme: "qudra",
    noms: [{ ar: "البَارِئ", fr: "Al-Bâri'", trad: "Celui qui donne l'existence, sans défaut" }],
    racine: "ب ر أ (b-r-') : faire exister à partir du néant ; être indemne — de là bariyya, les créatures",
    preuve: "Coran (al-Hashr 24, al-Baqara 54)",
    verset: { ar: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَى", fr: "C'est Lui Allah, le Créateur, Celui qui donne existence, le Formateur. À Lui les plus beaux noms.", ref: "al-Hashr 24" },
    sens: [
      "Celui qui fait <b>passer à l'existence</b> ce qu'Il a conçu, chaque créature distincte des autres et <b>exempte d'incohérence</b>.",
      "« Tu ne vois dans la création du Tout Miséricordieux aucune disproportion. Ramène le regard : y vois-tu une faille ? » (al-Mulk 3)."
    ],
    textes: [
      "Mûsâ, après le veau d'or : « Revenez à <b>votre Créateur</b> (bâri'ikum) » (al-Baqara 54) — vous avez adoré un veau fabriqué, revenez à Celui qui vous a fabriqués.",
      "« Nul malheur n'atteint la terre ni vos personnes qui ne soit dans un Livre <b>avant que Nous ne le fassions exister</b> (nabra'ahâ) » (al-Hadîd 22)."
    ],
    mediter: [
      "Il fut un temps où tu n'étais « pas même une chose mentionnée » (al-Insân 1). Tu es passé du néant à l'être sans l'avoir demandé.",
      "Huit milliards de visages, pas deux identiques ; pas deux voix, pas deux empreintes."
    ],
    vivre: [
      "Devant un malheur, se rappeler qu'il était écrit avant d'exister : « afin que vous ne vous affligiez pas de ce qui vous a échappé » (al-Hadîd 23).",
      "Ne pas railler une créature : c'est critiquer l'ouvrage du Bâri'."
    ],
    dua: { ar: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", fr: "Je cherche refuge auprès des paroles parfaites d'Allah contre le mal de ce qu'Il a créé.", ref: "Muslim — Khawla bint Hakîm" }
  },
  {
    id: "al-musawwir", theme: "qudra",
    noms: [{ ar: "المُصَوِّر", fr: "Al-Musawwir", trad: "Le Formateur, qui donne à chacun sa forme" }],
    racine: "ص و ر (s-w-r) : la sûra, la forme, l'image",
    preuve: "Coran — une seule fois, al-Hashr 24",
    verset: { ar: "هُوَ الَّذِي يُصَوِّرُكُمْ فِي الْأَرْحَامِ كَيْفَ يَشَاءُ", fr: "C'est Lui qui vous donne forme dans les matrices, comme Il veut.", ref: "Âl 'Imrân 6" },
    sens: [
      "Celui qui donne à chaque créature <b>sa forme propre</b>, par laquelle elle se distingue de toutes les autres.",
      "« Il vous a donné forme, et <b>a parfait vos formes</b> » (Ghâfir 64). « Nous avons créé l'homme dans la plus belle stature » (at-Tîn 4)."
    ],
    textes: [
      "Dans la prosternation : « Mon visage s'est prosterné devant Celui qui l'a créé, <b>lui a donné forme</b>, a fendu son ouïe et sa vue. Béni soit Allah, le meilleur des créateurs » (Muslim).",
      "« L'homme pense-t-il que Nous ne réunirons jamais ses os ? Mais si ! Nous sommes capable de remettre en ordre <b>jusqu'au bout de ses doigts</b> » (al-Qiyâma 3-4)."
    ],
    mediter: [
      "Trois ténèbres, aucun outil, aucun regard : et un visage en sort, avec les yeux de ta mère.",
      "Ce que tu n'aimes pas dans ton apparence a été <b>choisi</b> : « comme Il veut »."
    ],
    vivre: [
      "Accepter sa forme et celle des autres ; ne pas se moquer d'un physique.",
      "Remercier pour la forme reçue en la mettant au sol : le visage est ce que l'homme a de plus noble, et c'est lui qu'on pose à terre."
    ],
    dua: { ar: "سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ", fr: "Mon visage s'est prosterné devant Celui qui l'a créé, lui a donné forme, a fendu son ouïe et sa vue. Béni soit Allah, le meilleur des créateurs.", ref: "Muslim — 'Alî" }
  },
  {
    id: "al-qadir", theme: "qudra",
    noms: [
      { ar: "القَادِر", fr: "Al-Qâdir", trad: "Le Capable" },
      { ar: "القَدِير", fr: "Al-Qadîr", trad: "L'Omnipotent" },
      { ar: "المُقْتَدِر", fr: "Al-Muqtadir", trad: "Le Tout-Puissant, dont le pouvoir s'exerce pleinement" }
    ],
    racine: "ق د ر (q-d-r) : pouvoir, et mesurer — de là le qadar, le destin",
    preuve: "Coran (al-An'âm 65, al-Baqara 20, al-Kahf 45)",
    verset: { ar: "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَنْ يَقُولَ لَهُ كُنْ فَيَكُونُ", fr: "Quand Il veut une chose, Son ordre consiste à dire : « Sois », et elle est.", ref: "Yâ-Sîn 82" },
    sens: [
      "Rien ne Lui est <b>impossible</b>, rien ne Lui est difficile, rien ne Le fatigue. Les trois formes vont croissant : Il peut ; Il peut tout ; Son pouvoir s'exerce sans que rien résiste.",
      "« Allah est Omnipotent » clôt des dizaines de versets : après chaque promesse qui te paraît trop grande."
    ],
    textes: [
      "Abû Mas'ûd frappait un esclave ; une voix derrière lui : « Sache, Abû Mas'ûd, qu'<b>Allah a plus de pouvoir sur toi</b> que tu n'en as sur lui ! » Il se retourna : c'était le Prophète ﷺ. « Il est libre, pour la Face d'Allah. — Si tu ne l'avais pas fait, le Feu t'aurait touché » (Muslim).",
      "L'istikhâra : « Je Te demande de me donner la capacité par Ta puissance… car <b>Tu peux et je ne peux pas</b> » (Bukhârî)."
    ],
    mediter: [
      "Ce que tu appelles « impossible » : un enfant pour Zakariyyâ, un chemin dans la mer pour Mûsâ, une sortie pour Yûnus. Le mot n'existe que de ton côté.",
      "Ton pouvoir sur plus faible que toi est une épreuve : quelqu'un de plus puissant regarde."
    ],
    vivre: [
      "Demander sans se dire « c'est trop ».",
      "Pardonner quand on peut se venger : le pardon du puissant est le seul qui compte."
    ],
    dua: { ar: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ", fr: "Ô Allah, je Te demande de choisir pour moi par Ta science, de me donner la capacité par Ta puissance, et je Te demande de Ta grâce immense : Tu peux et je ne peux pas, Tu sais et je ne sais pas, et Tu es le grand Connaisseur des choses cachées. — Début de l'invocation de l'istikhâra.", ref: "Bukhârî — Jâbir" }
  },
  {
    id: "al-qawiyy", theme: "qudra",
    noms: [{ ar: "القَوِيّ", fr: "Al-Qawiyy", trad: "Le Fort" }],
    racine: "ق و ي (q-w-y) : la force",
    preuve: "Coran",
    verset: { ar: "كَتَبَ اللَّهُ لَأَغْلِبَنَّ أَنَا وَرُسُلِي إِنَّ اللَّهَ قَوِيٌّ عَزِيزٌ", fr: "Allah a écrit : « Je vaincrai, Moi et Mes messagers. » Allah est Fort, Tout-Puissant.", ref: "al-Mujâdila 21" },
    sens: [
      "Une force <b>complète</b>, que n'atteint aucune faiblesse, et devant laquelle toute force créée est empruntée.",
      "Il vient presque toujours avec al-'Azîz, après la mention du secours donné aux messagers : force pour vaincre, puissance pour n'être pas vaincu."
    ],
    textes: [
      "« <b>Lâ hawla wa lâ quwwata illâ billâh</b> est un des trésors du Paradis » (Bukhârî et Muslim) : ni changement d'état ni force, sinon par Allah.",
      "Les 'Âd disaient : « Qui est plus fort que nous ? » — « N'ont-ils pas vu qu'Allah, qui les a créés, est <b>plus fort qu'eux</b> ? » (Fussilat 15). Un vent a suffi."
    ],
    mediter: [
      "Ta force du matin dépend d'une nuit de sommeil, d'un repas, d'un battement. La Sienne ne dépend de rien.",
      "Au Fossé, dix mille hommes cernaient Médine : « Allah a renvoyé les mécréants avec leur rage… Allah est <b>Fort, Tout-Puissant</b> » (al-Ahzâb 25). Un vent, encore."
    ],
    vivre: [
      "« Le croyant fort est meilleur et plus aimé d'Allah que le croyant faible, et en chacun il y a du bien. Tiens à ce qui t'est utile, <b>demande l'aide d'Allah</b> et ne baisse pas les bras » (Muslim).",
      "La vraie force : « Le fort n'est pas celui qui terrasse ; le fort est celui qui <b>se maîtrise dans la colère</b> » (Bukhârî et Muslim)."
    ],
    dua: { ar: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", fr: "Il n'y a de force ni de puissance que par Allah.", ref: "Bukhârî et Muslim — Abû Mûsâ" }
  },
  {
    id: "al-matin", theme: "qudra",
    noms: [{ ar: "المَتِين", fr: "Al-Matîn", trad: "L'Inébranlable" }],
    racine: "م ت ن (m-t-n) : être ferme, solide — le matn est le dos, ce qui porte",
    preuve: "Coran — une seule fois",
    verset: { ar: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ", fr: "C'est Allah le Pourvoyeur, le Détenteur de la force, l'Inébranlable.", ref: "adh-Dhâriyât 58" },
    sens: [
      "Le degré <b>extrême</b> de la force : Sa puissance ne faiblit pas, ne s'interrompt pas, ne connaît ni peine ni lassitude.",
      "« Nous avons créé les cieux, la terre et ce qui est entre eux en six jours, <b>sans éprouver la moindre fatigue</b> » (Qâf 38)."
    ],
    textes: [
      "Le nom vient avec ar-Razzâq : nourrir toute créature, à chaque instant, depuis toujours — seule une force inébranlable le peut.",
      "« Je leur accorde un délai : <b>Mon stratagème est solide</b> (matîn) » (al-A'râf 183)."
    ],
    mediter: [
      "Tout ce sur quoi tu t'es appuyé a fini par céder un jour : une santé, une amitié, une institution. Un seul appui ne cède pas.",
      "Le délai laissé aux injustes n'est pas de la faiblesse : c'est la tranquillité de Celui que rien ne presse."
    ],
    vivre: [
      "S'accrocher à « l'anse la plus solide, qui ne se brise pas » (al-Baqara 256) : la foi en Allah.",
      "La constance : « L'œuvre la plus aimée d'Allah est la plus <b>régulière</b>, même si elle est petite » (Bukhârî et Muslim)."
    ],
    dua: { ar: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ", fr: "Ô Toi qui retournes les cœurs, affermis mon cœur sur Ta religion. — L'invocation que le Prophète ﷺ répétait le plus, selon Anas.", ref: "at-Tirmidhî — Anas" }
  },
  {
    id: "al-qahir", theme: "qudra",
    noms: [
      { ar: "القَاهِر", fr: "Al-Qâhir", trad: "Le Dominateur" },
      { ar: "القَهَّار", fr: "Al-Qahhâr", trad: "Le Dominateur suprême" }
    ],
    racine: "ق ه ر (q-h-r) : soumettre, l'emporter sur",
    preuve: "Coran (al-An'âm 18 ; ar-Ra'd 16)",
    verset: { ar: "وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ وَهُوَ الْحَكِيمُ الْخَبِيرُ", fr: "C'est Lui le Dominateur, au-dessus de Ses serviteurs ; c'est Lui le Sage, le Parfaitement Informé.", ref: "al-An'âm 18" },
    sens: [
      "Toute créature Lui est <b>soumise</b>, de gré ou de force : les tyrans par la mort, les astres par leurs orbites, toi par la faim, le sommeil et la vieillesse.",
      "Al-Qahhâr vient six fois, <b>toujours après al-Wâhid</b> : il ne peut y avoir deux dominateurs absolus — la domination prouve l'unicité."
    ],
    textes: [
      "« Le jour où ils surgiront, rien d'eux ne sera caché à Allah. À qui la royauté, aujourd'hui ? — <b>À Allah, l'Unique, le Dominateur suprême</b> » (Ghâfir 16).",
      "Yûsuf en prison : « Des seigneurs éparpillés sont-ils meilleurs, ou Allah, l'Unique, le Dominateur suprême ? » (Yûsuf 39)."
    ],
    mediter: [
      "La mort est le qahr que nul n'a vaincu : ni Pharaon, ni Qârûn, ni les médecins des rois.",
      "Le verset ajoute « le Sage, le Parfaitement Informé » : Sa domination n'est jamais aveugle."
    ],
    vivre: [
      "Ne dominer personne : « Quant à l'orphelin, <b>ne le brime pas</b> (fa-lâ taqhar) » (ad-Duhâ 9).",
      "Devant l'oppresseur, se rappeler qui est au-dessus de lui."
    ],
    dua: { ar: "لَا إِلَهَ إِلَّا اللَّهُ الْوَاحِدُ الْقَهَّارُ، رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الْعَزِيزُ الْغَفَّارُ", fr: "Point de divinité à part Allah, l'Unique, le Dominateur suprême, Seigneur des cieux, de la terre et de ce qui est entre eux, le Tout-Puissant, le Grand Pardonneur. — Le Prophète ﷺ le disait quand il se retournait dans son lit, la nuit.", ref: "an-Nasâ'î (as-Sunan al-kubrâ), al-Hâkim — 'Â'isha" }
  },
  {
    id: "al-fattah", theme: "qudra",
    noms: [{ ar: "الفَتَّاح", fr: "Al-Fattâh", trad: "Celui qui ouvre, et qui tranche" }],
    racine: "ف ت ح (f-t-h) : ouvrir ; juger entre deux parties ; donner la victoire",
    preuve: "Coran — une seule fois",
    verset: { ar: "مَا يَفْتَحِ اللَّهُ لِلنَّاسِ مِنْ رَحْمَةٍ فَلَا مُمْسِكَ لَهَا وَمَا يُمْسِكْ فَلَا مُرْسِلَ لَهُ مِنْ بَعْدِهِ", fr: "Ce qu'Allah ouvre aux hommes de miséricorde, nul ne peut le retenir ; et ce qu'Il retient, nul ne peut le relâcher après Lui.", ref: "Fâtir 2" },
    sens: [
      "Il <b>ouvre</b> ce qui est fermé : les portes de la subsistance, de la science, des cœurs, des issues. Et Il <b>tranche</b> entre Ses serviteurs par la vérité : « Notre Seigneur nous réunira, puis tranchera entre nous : c'est Lui al-Fattâh, l'Omniscient » (Saba' 26).",
      "Le fath est aussi la <b>victoire</b> : « Nous t'avons accordé une victoire éclatante » (al-Fath 1)."
    ],
    textes: [
      "En entrant à la mosquée : « Ô Allah, <b>ouvre-moi</b> les portes de Ta miséricorde » (Muslim).",
      "« Si les habitants des cités avaient cru et avaient été pieux, Nous leur aurions <b>ouvert</b> des bénédictions du ciel et de la terre » (al-A'râf 96)."
    ],
    mediter: [
      "Une porte fermée par les hommes ne l'est pas tant que Lui ne l'a pas fermée ; une porte ouverte par Lui, personne ne la refermera.",
      "Al-Hudaybiya ressemblait à un recul : le Coran l'a appelée « fath mubîn ». Tes ouvertures n'ont pas toujours le visage que tu attends."
    ],
    vivre: [
      "Demander l'ouverture avant d'étudier, de chercher un travail, d'aborder un cœur fermé.",
      "Être une clé : « Il y a des gens qui sont des clés du bien et des verrous du mal » (Ibn Mâjah)."
    ],
    dua: { ar: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", fr: "Ô Allah, ouvre-moi les portes de Ta miséricorde.", ref: "Muslim — en entrant à la mosquée" }
  },
  {
    id: "al-muqaddim-al-muakhkhir", theme: "qudra",
    noms: [
      { ar: "المُقَدِّم", fr: "Al-Muqaddim", trad: "Celui qui avance" },
      { ar: "المُؤَخِّر", fr: "Al-Mu'akhkhir", trad: "Celui qui retarde" }
    ],
    racine: "ق د م (q-d-m) : mettre en avant — أ خ ر (a-kh-r) : mettre en arrière",
    preuve: "Sunna — Bukhârî et Muslim",
    verset: { ar: "أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَهَ إِلَّا أَنْتَ", fr: "C'est Toi qui avances et c'est Toi qui retardes. Point de divinité à part Toi.", ref: "Bukhârî et Muslim" },
    sens: [
      "Il place chaque chose et chaque personne <b>à son rang et à son heure</b> : Il avance qui Il veut par Son aide, retarde qui Il veut par Sa sagesse.",
      "Deux noms à citer <b>ensemble</b>, comme al-Qâbid et al-Bâsit. Le Prophète ﷺ les disait à la fin de son invocation de la nuit, et entre le tashahhud et le salâm."
    ],
    textes: [
      "« Quand leur terme arrive, ils ne peuvent <b>ni le retarder</b> d'une heure <b>ni l'avancer</b> » (al-A'râf 34).",
      "Il a avancé des derniers venus et retardé des premiers : Bilâl l'esclave devant les chefs de Quraysh ; Salmân le Perse compté parmi « les gens de la maison »."
    ],
    mediter: [
      "Ce mariage, cet enfant, ce poste qui tardent : le retard vient de Celui qui sait l'heure. Ce qui arrive « en retard » pour toi arrive <b>à l'heure</b> pour Lui.",
      "Celui qu'Allah avance, nul ne le recule ; celui qu'Il recule, aucun piston ne l'avance."
    ],
    vivre: [
      "Avancer ce qu'Allah a avancé : l'obligation avant le surérogatoire, les droits des parents, la prière à son heure.",
      "Ne jalouser personne pour son rang : ce n'est pas lui qui s'est placé là."
    ],
    dua: { ar: "اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَهَ إِلَّا أَنْتَ", fr: "Ô Allah, pardonne-moi ce que j'ai avancé et ce que j'ai retardé, ce que j'ai caché et ce que j'ai montré, et ce que Tu connais mieux que moi. C'est Toi qui avances et c'est Toi qui retardes. Point de divinité à part Toi.", ref: "Muslim — 'Alî, entre le tashahhud et le salâm" },
    sira: { n: 46, txt: "Salmân le Perse et Suhayb le Byzantin : venus de loin, arrivés devant." }
  },

  /* ==================== PROTECTION ET GUIDANCE ==================== */
  {
    id: "al-hafiz", theme: "hifz",
    noms: [
      { ar: "الحَافِظ", fr: "Al-Hâfiz", trad: "Le Gardien" },
      { ar: "الحَفِيظ", fr: "Al-Hafîz", trad: "Le Préservateur, qui garde tout" }
    ],
    racine: "ح ف ظ (h-f-z) : garder, préserver, ne rien laisser perdre",
    preuve: "Coran (Yûsuf 64, Hûd 57)",
    verset: { ar: "فَاللَّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ", fr: "Allah est le meilleur gardien, et Il est le plus miséricordieux des miséricordieux.", ref: "parole de Ya'qûb — Yûsuf 64" },
    sens: [
      "Il <b>garde</b> les cieux de s'effondrer, Ses créatures de périr avant leur terme, Son Livre de toute altération (al-Hijr 9), Ses alliés de ce qui ruinerait leur foi.",
      "Et Il <b>conserve</b> les actes de chacun, sans rien oublier : « Mon Seigneur est, sur toute chose, gardien » (Hûd 57)."
    ],
    textes: [
      "Le Prophète ﷺ à Ibn 'Abbâs, encore enfant : « <b>Préserve Allah, Il te préservera</b> ; préserve Allah, tu Le trouveras devant toi… Sache que si la communauté entière se réunissait pour te nuire, elle ne te nuirait que par ce qu'Allah a écrit contre toi » (at-Tirmidhî).",
      "Ya'qûb avait confié Yûsuf à ses fils, qui l'ont perdu ; il confie Binyâmîn <b>à Allah</b> — et les deux lui reviennent."
    ],
    mediter: [
      "Chaque homme a « des anges qui se relaient, devant lui et derrière lui, et le gardent par l'ordre d'Allah » (ar-Ra'd 11). De combien de dangers n'as-tu jamais rien su ?",
      "Un savant très âgé et encore vigoureux disait : « Ces membres, nous les avons préservés du péché dans notre jeunesse ; Allah nous les préserve dans notre vieillesse. »"
    ],
    vivre: [
      "Préserver Ses limites, ses prières (« hâfizû 'alâ s-salawât »), sa langue, son regard.",
      "Confier à Allah ceux qu'on quitte : « Je vous confie à Allah, <b>dont les dépôts ne se perdent pas</b> » (Ibn Mâjah)."
    ],
    dua: { ar: "اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي، وَعَنْ يَمِينِي وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي", fr: "Ô Allah, garde-moi par-devant et par-derrière, à ma droite et à ma gauche, et au-dessus de moi ; et je cherche refuge auprès de Ton immensité contre le fait d'être englouti par en dessous.", ref: "Abû Dâwûd, Ibn Mâjah — matin et soir" },
    sira: { n: 42, txt: "La grotte de Thawr : les poursuivants à l'entrée — « Que penses-tu de deux dont Allah est le troisième ? »" }
  },
  {
    id: "al-waliyy-al-mawla", theme: "hifz",
    noms: [
      { ar: "الوَلِيّ", fr: "Al-Waliyy", trad: "L'Allié, le Protecteur proche" },
      { ar: "المَوْلَى", fr: "Al-Mawlâ", trad: "Le Maître secourable" }
    ],
    racine: "و ل ي (w-l-y) : être tout proche, prendre en charge, soutenir",
    preuve: "Coran (ash-Shûrâ 9, 28 ; al-Anfâl 40)",
    verset: { ar: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ", fr: "Allah est l'Allié de ceux qui croient : Il les fait sortir des ténèbres vers la lumière.", ref: "al-Baqara 257" },
    sens: [
      "Celui qui <b>prend en charge</b> les affaires de Ses alliés : Il les guide, les défend, arrange leur vie et leur au-delà.",
      "« Les ténèbres » est au pluriel, « la lumière » au singulier : les égarements sont mille, le chemin est un."
    ],
    textes: [
      "À Uhud, Abû Sufyân cria : « Nous avons al-'Uzzâ, et vous n'avez pas de 'Uzzâ ! » Le Prophète ﷺ : « Répondez-lui : <b>Allah est notre Mawlâ, et vous n'avez pas de mawlâ</b> » (Bukhârî).",
      "Hadith qudsî : « Quiconque prend pour ennemi l'un de Mes alliés, <b>Je lui déclare la guerre</b>… Quand Je l'aime, Je suis l'ouïe par laquelle il entend, la vue par laquelle il voit… S'il Me demande, Je lui donne ; s'il cherche refuge auprès de Moi, Je le protège » (Bukhârî)."
    ],
    mediter: [
      "Qui sont Ses alliés ? Pas une caste : « Ceux qui <b>croient et sont pieux</b> » (Yûnus 63). La porte est ouverte à quiconque prend ce chemin.",
      "« Excellent Maître, excellent Secoureur » (al-Anfâl 40) : tu n'es l'orphelin de personne."
    ],
    vivre: [
      "Entrer dans Sa wilâya par la voie du hadith : d'abord les obligations, puis les surérogatoires, sans relâche.",
      "Aimer ceux qu'Il aime et les soutenir : « Les croyants et les croyantes sont <b>alliés</b> les uns des autres » (at-Tawba 71)."
    ],
    dua: { ar: "أَنْتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ", fr: "Tu es mon Allié ici-bas et dans l'au-delà : fais-moi mourir soumis et fais-moi rejoindre les vertueux.", ref: "invocation de Yûsuf — Yûsuf 101" }
  },
  {
    id: "an-nasir", theme: "hifz",
    noms: [{ ar: "النَّصِير", fr: "An-Nasîr", trad: "Le Secoureur" }],
    racine: "ن ص ر (n-s-r) : secourir, donner la victoire",
    preuve: "Coran",
    verset: { ar: "وَكَفَى بِاللَّهِ وَلِيًّا وَكَفَى بِاللَّهِ نَصِيرًا", fr: "Allah suffit comme Allié, et Allah suffit comme Secoureur.", ref: "an-Nisâ' 45" },
    sens: [
      "Celui dont le secours est <b>sûr</b> et ne peut être vaincu : « Si Allah vous secourt, nul ne peut vous vaincre ; s'Il vous abandonne, qui donc vous secourra après Lui ? » (Âl 'Imrân 160).",
      "Son secours n'est pas toujours la victoire visible : c'est parfois la fermeté, la patience, ou l'issue que l'on ne voit que plus tard."
    ],
    textes: [
      "« Ô vous qui croyez ! <b>Si vous secourez Allah, Il vous secourra</b> et affermira vos pas » (Muhammad 7).",
      "« Si vous ne le secourez pas, Allah l'a déjà secouru, quand les mécréants l'avaient expulsé, <b>deuxième de deux</b>, quand ils étaient dans la grotte » (at-Tawba 40)."
    ],
    mediter: [
      "Nûh, neuf cent cinquante ans, presque seul : « Je suis vaincu : secours-moi ! » (al-Qamar 10) — quatre mots, et les portes du ciel s'ouvrirent.",
      "« Quand viendra le secours d'Allah ? — Le secours d'Allah est <b>proche</b> » (al-Baqara 214)."
    ],
    vivre: [
      "« Secours ton frère, qu'il soit injuste ou opprimé. — Injuste ? — Tu l'empêches d'être injuste : <b>c'est cela le secourir</b> » (Bukhârî).",
      "Ne pas accrocher son espoir au nombre ni aux moyens : le jour de Hunayn, « votre grand nombre vous a émerveillés, et il ne vous a servi à rien » (at-Tawba 25)."
    ],
    dua: { ar: "اللَّهُمَّ أَنْتَ عَضُدِي وَنَصِيرِي، بِكَ أَحُولُ وَبِكَ أَصُولُ وَبِكَ أُقَاتِلُ", fr: "Ô Allah, Tu es mon soutien et mon Secoureur : par Toi je manœuvre, par Toi je charge, par Toi je combats. — Invocation du Prophète ﷺ en expédition.", ref: "Abû Dâwûd, at-Tirmidhî — Anas" },
    sira: { n: 42, txt: "La hijra : « deuxième de deux », sans armée — et secouru." }
  },
  {
    id: "al-wakil", theme: "hifz",
    noms: [{ ar: "الوَكِيل", fr: "Al-Wakîl", trad: "Le Garant, à qui l'on s'en remet" }],
    racine: "و ك ل (w-k-l) : confier son affaire à quelqu'un",
    preuve: "Coran",
    verset: { ar: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", fr: "Allah nous suffit : quel excellent Garant !", ref: "Âl 'Imrân 173" },
    sens: [
      "Celui qui se <b>charge</b> des affaires de quiconque s'en remet à Lui — et qui a la science, la puissance et la miséricorde pour les mener à bien.",
      "« Quiconque place sa confiance en Allah, <b>Il lui suffit</b> » (at-Talâq 3)."
    ],
    textes: [
      "Ibn 'Abbâs : « <b>Hasbunâ llâhu wa ni'ma l-Wakîl</b> : Ibrâhîm l'a dite quand on le jeta dans le feu, et Muhammad ﷺ l'a dite quand on leur dit : les gens se sont rassemblés contre vous, craignez-les » (Bukhârî).",
      "La suite du verset : « Ils revinrent avec un bienfait d'Allah et une grâce, <b>sans qu'aucun mal les ait touchés</b> » (Âl 'Imrân 174)."
    ],
    mediter: [
      "Le même mot, dans le feu et devant une armée : dans les deux cas, le danger s'est retourné.",
      "Tu confies tes papiers à un avocat, ta santé à un médecin, et tu dors. Et quand tu as confié ton affaire à Allah ?"
    ],
    vivre: [
      "Le tawakkul n'est pas l'abandon des causes : « Dois-je l'attacher et m'en remettre à Allah, ou la lâcher et m'en remettre à Lui ? — <b>Attache-la, et remets-t'en à Allah</b> » (at-Tirmidhî).",
      "En sortant de chez soi : « Bismillâh, tawakkaltu 'alâ llâh… » — il est alors dit : tu es guidé, protégé, préservé (Abû Dâwûd, at-Tirmidhî)."
    ],
    dua: { ar: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", fr: "Allah me suffit. Point de divinité à part Lui. C'est en Lui que je place ma confiance, et Il est le Seigneur du Trône immense.", ref: "at-Tawba 129" }
  },
  {
    id: "al-hasib", theme: "hifz",
    noms: [{ ar: "الحَسِيب", fr: "Al-Hasîb", trad: "Celui qui suffit, et qui demande des comptes" }],
    racine: "ح س ب (h-s-b) : compter ; et suffire (hasbî : il me suffit)",
    preuve: "Coran",
    verset: { ar: "وَكَفَى بِاللَّهِ حَسِيبًا", fr: "Et Allah suffit pour tenir les comptes.", ref: "an-Nisâ' 6" },
    sens: [
      "Deux sens : <b>Celui qui suffit</b> à Ses serviteurs pour tout ce qui les préoccupe ; et <b>Celui qui compte</b> — qui recense leurs actes et les en rétribue avec exactitude.",
      "Le verset parle des biens de l'orphelin : prenez des témoins quand vous les lui remettez — et sachez qu'au-dessus des témoins, il y a un Comptable."
    ],
    textes: [
      "« Nous poserons les balances exactes, au Jour de la Résurrection : nulle âme ne sera lésée en rien ; fût-ce du poids d'un grain de moutarde, Nous le ferons venir. <b>Nous suffisons pour compter</b> » (al-Anbiyâ' 47).",
      "« Il est le plus prompt des comptables » (al-An'âm 62)."
    ],
    mediter: [
      "« Lis ton livre ! Tu suffis aujourd'hui, toi-même, pour te demander des comptes » (al-Isrâ' 14). Que contient la page d'aujourd'hui ?",
      "Aucun bien ne sera oublié, même ceux que tu as oubliés toi-même : c'est aussi une bonne nouvelle."
    ],
    vivre: [
      "'Umar : « <b>Demandez-vous des comptes avant qu'on ne vous en demande</b>, pesez vos actes avant qu'on ne les pèse. » Un court bilan avant de dormir.",
      "Rendre les droits ici-bas : dettes, torts, paroles — là-bas, on ne paie plus qu'en bonnes actions (Bukhârî)."
    ],
    dua: { ar: "اللَّهُمَّ حَاسِبْنِي حِسَابًا يَسِيرًا", fr: "Ô Allah, demande-moi des comptes d'une manière facile. — Le Prophète ﷺ le disait dans certaines de ses prières ; le « compte facile », expliqua-t-il à 'Â'isha, c'est qu'Allah regarde le registre et passe outre.", ref: "Ahmad — 'Â'isha" }
  },
  {
    id: "al-hafiyy", theme: "hifz",
    noms: [{ ar: "الحَفِيّ", fr: "Al-Hafiyy", trad: "Le Bienveillant, plein d'égards" }],
    racine: "ح ف و (h-f-w) : accueillir avec empressement, entourer d'attentions",
    preuve: "Coran — une seule fois",
    verset: { ar: "سَأَسْتَغْفِرُ لَكَ رَبِّي إِنَّهُ كَانَ بِي حَفِيًّا", fr: "J'implorerai pour toi le pardon de mon Seigneur : Il a toujours été plein d'égards pour moi.", ref: "parole d'Ibrâhîm — Maryam 47" },
    sens: [
      "Celui qui <b>accueille</b> Son serviteur avec bonté, prend soin de lui, et répond à son appel avec égards.",
      "Un nom rare, prononcé une seule fois, par « l'ami intime » d'Allah : c'est le mot de quelqu'un qui <b>a l'habitude</b> d'être bien reçu."
    ],
    textes: [
      "Le contexte : son père vient de le menacer — « je te lapiderai ; éloigne-toi de moi pour longtemps ». Ibrâhîm répond « paix sur toi », et se tourne vers Celui qui, Lui, ne l'a <b>jamais</b> repoussé.",
      "Ce qui suit : « Quand il se fut écarté d'eux… Nous lui fîmes don d'Ishâq et de Ya'qûb » (Maryam 49)."
    ],
    mediter: [
      "Rejeté par son propre père, il ne parle pas de ce qu'il perd : il parle de Celui qui lui reste.",
      "Regarde ton histoire avec Lui : les invocations exaucées, les sorties inespérées. Tu pourrais dire toi aussi : « Il a toujours été plein d'égards pour moi. »"
    ],
    vivre: [
      "Quand une porte humaine se ferme, ne pas frapper plus fort : se tourner vers l'autre.",
      "Bien accueillir : l'invité, le demandeur, l'enfant qui interrompt."
    ],
    dua: { ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ", fr: "Seigneur, fais que j'accomplisse la prière, ainsi qu'une partie de ma descendance. Seigneur, accepte mon invocation.", ref: "invocation d'Ibrâhîm — Ibrâhîm 40" }
  },
  {
    id: "al-hadi", theme: "hifz",
    noms: [{ ar: "الهَادِي", fr: "Al-Hâdî", trad: "Le Guide" }],
    racine: "ه د ي (h-d-y) : montrer le chemin avec douceur, et y conduire",
    preuve: "Coran (al-Hajj 54, al-Furqân 31)",
    verset: { ar: "وَإِنَّ اللَّهَ لَهَادِ الَّذِينَ آمَنُوا إِلَى صِرَاطٍ مُسْتَقِيمٍ", fr: "Allah guide assurément ceux qui croient vers un droit chemin.", ref: "al-Hajj 54" },
    sens: [
      "Deux guidances : <b>montrer</b> le chemin (irshâd) — elle est donnée à tous, par les prophètes et les Livres ; et <b>faire entrer</b> la foi dans le cœur (tawfîq) — elle n'appartient qu'à Lui.",
      "Il guide aussi chaque créature vers ce qui la fait vivre : « Notre Seigneur est Celui qui a donné à chaque chose sa forme, <b>puis l'a guidée</b> » (Tâ-Hâ 50) — l'abeille, l'oiseau migrateur, le nouveau-né vers le sein."
    ],
    textes: [
      "À la mort d'Abû Tâlib : « <b>Tu ne guides pas qui tu aimes</b> ; c'est Allah qui guide qui Il veut » (al-Qasas 56).",
      "Hadith qudsî : « Ô Mes serviteurs, vous êtes tous égarés, sauf celui que Je guide : <b>demandez-Moi la guidance</b>, Je vous guiderai » (Muslim)."
    ],
    mediter: [
      "Dix-sept fois par jour au moins, tu demandes « guide-nous sur le droit chemin » — toi qui y es déjà. C'est que la guidance se redemande <b>à chaque pas</b>.",
      "Le Prophète ﷺ n'a pas pu guider l'oncle qui l'avait protégé quarante ans ; un Perse venu du bout du monde a trouvé. La guidance n'est ni un héritage ni un mérite."
    ],
    vivre: [
      "Montrer le chemin : « Qu'Allah guide par toi un seul homme vaut mieux pour toi que les chamelles rousses » (Bukhârî et Muslim) — et laisser les cœurs à Allah.",
      "Invoquer pour ses proches plutôt que désespérer d'eux."
    ],
    dua: { ar: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي", fr: "Ô Allah, guide-moi et rends-moi juste. — « Pense, en demandant la guidance, à ton chemin ; et en demandant la justesse, à celle de la flèche. »", ref: "Muslim — 'Alî" },
    sira: { n: 45, txt: "Salmân al-Fârisî : de la Perse à Médine, de maître en maître, jusqu'à trouver." }
  }
];

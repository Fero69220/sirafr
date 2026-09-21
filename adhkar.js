/* ============================================================
   ★ LA JOURNÉE DU MUSULMAN — ADHKÂR ET INVOCATIONS (v58.1) ★
   أذكار اليوم والليلة — أدعية النبي ﷺ

   Deux tableaux :
     ROUTINE : les moments de la journée, du réveil au coucher
               (adresses #routine et #routine/<id>) ;
     DUAS    : les invocations du Prophète ﷺ par thème
               (adresses #duas et #duas/<id>).

   Chaque parole :
     id    : identifiant (sert au compteur et aux favoris) — ne pas changer
     titre : titre français
     ar    : texte arabe vocalisé      tr : phonétique      fr : traduction
     n     : nombre de répétitions (1 par défaut)
     src   : recueil(s) et rapporteur
     note  : mérite, moment ou circonstance (facultatif)
     geste : true pour une sunna d'action, sans texte à réciter
     soir  : { ar, tr, fr } — variante du soir (adhkâr du matin et du soir)
     sira  : numéro du cours de la Sīra lié (facultatif)
   Textes repris des recueils de hadith (Bukhârî, Muslim, Abû Dâwûd,
   at-Tirmidhî, an-Nasâ'î, Ibn Mâjah, Ahmad) ; traductions du site.
   Ce fichier est chargé par <script src="adhkar.js"> et précaché par sw.js.
   ============================================================ */

/* ---------- Adhkâr communs au matin et au soir ---------- */
const ADHKAR_MATIN_SOIR = [
  {
    id: "kursi", titre: "Âyat al-Kursî",
    ar: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    tr: "Allâhu lâ ilâha illâ huwa l-Hayyu l-Qayyûm, lâ ta'khudhuhu sinatun wa lâ nawm, lahu mâ fî s-samâwâti wa mâ fî l-ard, man dhâ lladhî yashfa'u 'indahu illâ bi-idhnih, ya'lamu mâ bayna aydîhim wa mâ khalfahum, wa lâ yuhîtûna bi-shay'in min 'ilmihi illâ bimâ shâ', wasi'a kursiyyuhu s-samâwâti wa l-ard, wa lâ ya'ûduhu hifzuhumâ, wa huwa l-'Aliyyu l-'Azîm.",
    fr: "Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur, et de Sa science ils n'embrassent que ce qu'Il veut. Son Kursî déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Il est le Très-Haut, l'Immense.",
    src: "al-Baqara 255 — an-Nasâ'î (as-Sunan al-kubrâ), al-Hâkim — Ubayy ibn Ka'b",
    note: "Qui la dit le matin est protégé des djinns jusqu'au soir ; qui la dit le soir, jusqu'au matin."
  },
  {
    id: "muawwidhat", titre: "Al-Ikhlâs, al-Falaq et an-Nâs", n: 3,
    fr: "Les trois dernières sourates du Coran : « Dis : Lui, Allah, est Un… », « Dis : je cherche refuge auprès du Seigneur de l'aube… », « Dis : je cherche refuge auprès du Seigneur des hommes… »",
    tr: "Qul huwa llâhu ahad… — Qul a'ûdhu bi-rabbi l-falaq… — Qul a'ûdhu bi-rabbi n-nâs…",
    src: "Abû Dâwûd, at-Tirmidhî — 'Abdullâh ibn Khubayb",
    note: "« Dis-les trois fois le soir et le matin : elles te suffiront contre toute chose. »"
  },
  {
    id: "asbahna", titre: "Nous voici au matin, et la royauté est à Allah",
    ar: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    tr: "Asbahnâ wa asbaha l-mulku lillâh, wa l-hamdu lillâh, lâ ilâha illâ llâhu wahdahu lâ sharîka lah, lahu l-mulku wa lahu l-hamd, wa huwa 'alâ kulli shay'in qadîr. Rabbi as'aluka khayra mâ fî hâdhâ l-yawmi wa khayra mâ ba'dah, wa a'ûdhu bika min sharri mâ fî hâdhâ l-yawmi wa sharri mâ ba'dah. Rabbi a'ûdhu bika mina l-kasali wa sû'i l-kibar, rabbi a'ûdhu bika min 'adhâbin fî n-nâri wa 'adhâbin fî l-qabr.",
    fr: "Nous voici au matin, et la royauté appartient à Allah. Louange à Allah. Point de divinité à part Allah, Seul, sans associé ; à Lui la royauté, à Lui la louange, et Il est Omnipotent. Seigneur, je Te demande le bien de ce jour et le bien de ce qui le suit, et je cherche refuge auprès de Toi contre le mal de ce jour et le mal de ce qui le suit. Seigneur, je cherche refuge auprès de Toi contre la paresse et les maux de la vieillesse. Seigneur, je cherche refuge auprès de Toi contre un châtiment dans le Feu et un châtiment dans la tombe.",
    soir: {
      titre: "Nous voici au soir, et la royauté est à Allah",
      ar: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
      tr: "Amsaynâ wa amsâ l-mulku lillâh, wa l-hamdu lillâh, lâ ilâha illâ llâhu wahdahu lâ sharîka lah, lahu l-mulku wa lahu l-hamd, wa huwa 'alâ kulli shay'in qadîr. Rabbi as'aluka khayra mâ fî hâdhihi l-laylati wa khayra mâ ba'dahâ, wa a'ûdhu bika min sharri mâ fî hâdhihi l-laylati wa sharri mâ ba'dahâ. Rabbi a'ûdhu bika mina l-kasali wa sû'i l-kibar, rabbi a'ûdhu bika min 'adhâbin fî n-nâri wa 'adhâbin fî l-qabr.",
      fr: "Nous voici au soir, et la royauté appartient à Allah. Louange à Allah. Point de divinité à part Allah, Seul, sans associé ; à Lui la royauté, à Lui la louange, et Il est Omnipotent. Seigneur, je Te demande le bien de cette nuit et le bien de ce qui la suit, et je cherche refuge auprès de Toi contre le mal de cette nuit et le mal de ce qui la suit. Seigneur, je cherche refuge auprès de Toi contre la paresse et les maux de la vieillesse. Seigneur, je cherche refuge auprès de Toi contre un châtiment dans le Feu et un châtiment dans la tombe."
    },
    src: "Muslim — Ibn Mas'ûd"
  },
  {
    id: "bika-asbahna", titre: "C'est par Toi que nous atteignons le matin",
    ar: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
    tr: "Allâhumma bika asbahnâ, wa bika amsaynâ, wa bika nahyâ, wa bika namût, wa ilayka n-nushûr.",
    fr: "Ô Allah, c'est par Toi que nous atteignons le matin, par Toi que nous atteignons le soir, par Toi que nous vivons, par Toi que nous mourons, et c'est vers Toi la résurrection.",
    soir: {
      titre: "C'est par Toi que nous atteignons le soir",
      ar: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
      tr: "Allâhumma bika amsaynâ, wa bika asbahnâ, wa bika nahyâ, wa bika namût, wa ilayka l-masîr.",
      fr: "Ô Allah, c'est par Toi que nous atteignons le soir, par Toi que nous atteignons le matin, par Toi que nous vivons, par Toi que nous mourons, et c'est vers Toi le retour."
    },
    src: "at-Tirmidhî, Abû Dâwûd — Abû Hurayra"
  },
  {
    id: "sayyid-istighfar", titre: "Sayyid al-istighfâr — la maîtresse des demandes de pardon",
    ar: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    tr: "Allâhumma anta rabbî, lâ ilâha illâ ant, khalaqtanî wa anâ 'abduk, wa anâ 'alâ 'ahdika wa wa'dika mâ stata't, a'ûdhu bika min sharri mâ sana't, abû'u laka bi-ni'matika 'alayy, wa abû'u bi-dhanbî, fa-ghfir lî, fa-innahu lâ yaghfiru dh-dhunûba illâ ant.",
    fr: "Ô Allah, Tu es mon Seigneur, point de divinité à part Toi. Tu m'as créé et je suis Ton serviteur ; je tiens Ton pacte et Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal que j'ai commis. Je reconnais Ton bienfait sur moi et je reconnais mon péché : pardonne-moi, car nul ne pardonne les péchés sinon Toi.",
    src: "Bukhârî — Shaddâd ibn Aws",
    note: "« Qui la dit le jour avec certitude et meurt avant le soir est des gens du Paradis ; qui la dit la nuit avec certitude et meurt avant le matin est des gens du Paradis. »"
  },
  {
    id: "afiya", titre: "Le pardon et la préservation, de tous côtés",
    ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ. اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي. اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي. اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي، وَعَنْ يَمِينِي وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
    tr: "Allâhumma innî as'aluka l-'afwa wa l-'âfiyata fî d-dunyâ wa l-âkhira. Allâhumma innî as'aluka l-'afwa wa l-'âfiyata fî dînî wa dunyâya wa ahlî wa mâlî. Allâhumma stur 'awrâtî wa âmin raw'âtî. Allâhumma hfaznî min bayni yadayya wa min khalfî, wa 'an yamînî wa 'an shimâlî, wa min fawqî, wa a'ûdhu bi-'azamatika an ughtâla min tahtî.",
    fr: "Ô Allah, je Te demande le pardon et la préservation ici-bas et dans l'au-delà. Ô Allah, je Te demande le pardon et la préservation dans ma religion, ma vie d'ici-bas, ma famille et mes biens. Ô Allah, couvre mes défauts et apaise mes frayeurs. Ô Allah, garde-moi par-devant et par-derrière, à ma droite et à ma gauche, et au-dessus de moi ; et je cherche refuge auprès de Ton immensité contre le fait d'être englouti par en dessous.",
    src: "Abû Dâwûd, Ibn Mâjah — Ibn 'Umar",
    note: "« Le Messager d'Allah ﷺ ne délaissait jamais ces paroles, ni le soir ni le matin. »"
  },
  {
    id: "alim-al-ghayb", titre: "Contre le mal de mon âme et celui de Shaytân",
    ar: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ",
    tr: "Allâhumma 'âlima l-ghaybi wa sh-shahâda, fâtira s-samâwâti wa l-ard, rabba kulli shay'in wa malîkah, ashhadu an lâ ilâha illâ ant, a'ûdhu bika min sharri nafsî, wa min sharri sh-shaytâni wa shirkih.",
    fr: "Ô Allah, Connaisseur de l'invisible et du visible, Créateur des cieux et de la terre, Seigneur et Souverain de toute chose ! J'atteste qu'il n'y a de divinité que Toi. Je cherche refuge auprès de Toi contre le mal de mon âme, et contre le mal de Shaytân et son appel à T'associer autrui.",
    src: "Abû Dâwûd, at-Tirmidhî — Abû Hurayra",
    note: "Abû Bakr demanda : « Ordonne-moi des paroles à dire matin et soir. » Le Prophète ﷺ lui enseigna celles-ci : « Dis-les le matin, le soir, et en te couchant. »"
  },
  {
    id: "bismillah-la-yadurr", titre: "Au nom d'Allah, avec le nom de qui rien ne nuit", n: 3,
    ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ",
    tr: "Bismi llâhi lladhî lâ yadurru ma'a smihi shay'un fî l-ardi wa lâ fî s-samâ', wa huwa s-Samî'u l-'Alîm.",
    fr: "Au nom d'Allah, avec le nom de qui rien ne peut nuire, ni sur terre ni dans le ciel, et Il est Celui qui entend tout, l'Omniscient.",
    src: "Abû Dâwûd, at-Tirmidhî — 'Uthmân ibn 'Affân",
    note: "« Qui la dit trois fois, rien ne lui nuira. »"
  },
  {
    id: "raditu", titre: "J'agrée Allah comme Seigneur", n: 3,
    ar: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا",
    tr: "Radîtu billâhi rabbâ, wa bi-l-islâmi dînâ, wa bi-Muhammadin — salla llâhu 'alayhi wa sallam — nabiyyâ.",
    fr: "J'agrée Allah comme Seigneur, l'islam comme religion, et Muhammad ﷺ comme prophète.",
    src: "Abû Dâwûd, at-Tirmidhî, Ahmad",
    note: "« Il incombe à Allah de le satisfaire au Jour de la Résurrection. »"
  },
  {
    id: "ya-hayyu", titre: "Ne me confie pas à moi-même",
    ar: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
    tr: "Yâ Hayyu yâ Qayyûm, bi-rahmatika astaghîth, aslih lî sha'nî kullah, wa lâ takilnî ilâ nafsî tarfata 'ayn.",
    fr: "Ô Vivant, ô Toi qui subsistes par Toi-même, par Ta miséricorde j'implore secours : arrange pour moi toutes mes affaires, et ne me confie pas à moi-même, ne serait-ce qu'un clin d'œil.",
    src: "an-Nasâ'î (as-Sunan al-kubrâ), al-Hâkim — Anas",
    note: "Recommandation du Prophète ﷺ à sa fille Fâtima, pour le matin et le soir."
  },
  {
    id: "fitra", titre: "Sur la nature originelle de l'islam",
    ar: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
    tr: "Asbahnâ 'alâ fitrati l-islâm, wa 'alâ kalimati l-ikhlâs, wa 'alâ dîni nabiyyinâ Muhammad, wa 'alâ millati abînâ Ibrâhîma hanîfan musliman wa mâ kâna mina l-mushrikîn.",
    fr: "Nous voici au matin sur la nature originelle de l'islam, sur la parole de la sincérité, sur la religion de notre prophète Muhammad ﷺ et sur la voie de notre père Ibrâhîm, pur monothéiste, soumis, et qui n'était pas du nombre des associateurs.",
    soir: {
      ar: "أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
      tr: "Amsaynâ 'alâ fitrati l-islâm, wa 'alâ kalimati l-ikhlâs, wa 'alâ dîni nabiyyinâ Muhammad, wa 'alâ millati abînâ Ibrâhîma hanîfan musliman wa mâ kâna mina l-mushrikîn.",
      fr: "Nous voici au soir sur la nature originelle de l'islam, sur la parole de la sincérité, sur la religion de notre prophète Muhammad ﷺ et sur la voie de notre père Ibrâhîm, pur monothéiste, soumis, et qui n'était pas du nombre des associateurs."
    },
    src: "Ahmad — 'Abd ar-Rahmân ibn Abzâ"
  },
  {
    id: "hasbiya", titre: "Allah me suffit", n: 7,
    ar: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    tr: "Hasbiya llâhu lâ ilâha illâ hû, 'alayhi tawakkalt, wa huwa rabbu l-'arshi l-'azîm.",
    fr: "Allah me suffit. Point de divinité à part Lui. C'est en Lui que je place ma confiance, et Il est le Seigneur du Trône immense.",
    src: "at-Tawba 129 — Abû Dâwûd, d'Abû d-Dardâ'",
    note: "« Qui la dit sept fois matin et soir, Allah lui suffit contre ce qui le préoccupe. » Parole rapportée d'Abû d-Dardâ'."
  },
  {
    id: "adada-khalqih", titre: "Autant que le nombre de Ses créatures", n: 3, soirNon: true,
    ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
    tr: "Subhâna llâhi wa bi-hamdih, 'adada khalqih, wa ridâ nafsih, wa zinata 'arshih, wa midâda kalimâtih.",
    fr: "Gloire et louange à Allah, autant que le nombre de Ses créatures, autant qu'Il en est satisfait, autant que pèse Son Trône, autant que l'encre de Ses paroles.",
    src: "Muslim — Juwayriya",
    note: "Le Prophète ﷺ sortit à l'aube et revint en milieu de matinée : Juwayriya était restée à sa place de prière, en dhikr. « J'ai dit après toi quatre paroles, trois fois : pesées avec tout ce que tu as dit aujourd'hui, elles l'emporteraient. »"
  },
  {
    id: "kalimat-tammat", titre: "Refuge auprès des paroles parfaites d'Allah", n: 3, matinNon: true,
    ar: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    tr: "A'ûdhu bi-kalimâti llâhi t-tâmmâti min sharri mâ khalaq.",
    fr: "Je cherche refuge auprès des paroles parfaites d'Allah contre le mal de ce qu'Il a créé.",
    src: "Muslim, Ahmad, at-Tirmidhî — Abû Hurayra",
    note: "Un homme avait été piqué par un scorpion : « Si tu avais dit, le soir venu… cela ne t'aurait pas nui. » Se dit aussi en s'installant dans un lieu (Muslim — Khawla bint Hakîm)."
  },
  {
    id: "tahlil", titre: "Lâ ilâha illâ llâh, Seul, sans associé", n: 10,
    ar: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    tr: "Lâ ilâha illâ llâhu wahdahu lâ sharîka lah, lahu l-mulku wa lahu l-hamd, wa huwa 'alâ kulli shay'in qadîr.",
    fr: "Point de divinité à part Allah, Seul, sans associé. À Lui la royauté, à Lui la louange, et Il est Omnipotent.",
    src: "Bukhârî et Muslim — Abû Hurayra (cent fois) ; Ahmad — Abû Ayyûb (dix fois)",
    note: "Cent fois dans la journée : l'équivalent de dix esclaves affranchis, cent bonnes actions inscrites, cent mauvaises effacées, et une protection contre Shaytân jusqu'au soir. Dix fois, matin et soir, pour qui veut commencer."
  },
  {
    id: "subhanallah-100", titre: "Subhânallâhi wa bi-hamdih", n: 100,
    ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    tr: "Subhâna llâhi wa bi-hamdih.",
    fr: "Gloire et louange à Allah.",
    src: "Muslim — Abû Hurayra",
    note: "« Qui la dit cent fois le matin et cent fois le soir, nul ne viendra au Jour de la Résurrection avec mieux que lui, sauf celui qui a dit autant ou davantage. »"
  }
];

/* ---------- Les moments de la journée ---------- */
const ROUTINE = [
  {
    id: "reveil", fr: "Au réveil", ar: "الاستيقاظ", quand: "En ouvrant les yeux", icone: "☾",
    intro: "Le premier mot de la journée est une louange : le sommeil est « le frère de la mort », et se réveiller, c'est être rendu à la vie.",
    items: [
      {
        id: "reveil-hamd", titre: "Louange à Celui qui nous a rendu la vie",
        ar: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
        tr: "Al-hamdu lillâhi lladhî ahyânâ ba'da mâ amâtanâ wa ilayhi n-nushûr.",
        fr: "Louange à Allah qui nous a rendu la vie après nous avoir fait mourir, et c'est vers Lui la résurrection.",
        src: "Bukhârî — Hudhayfa ; Muslim — al-Barâ'"
      },
      {
        id: "reveil-taarra", titre: "Pour celui qui se réveille dans la nuit",
        ar: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. الْحَمْدُ لِلَّهِ، وَسُبْحَانَ اللَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        tr: "Lâ ilâha illâ llâhu wahdahu lâ sharîka lah, lahu l-mulku wa lahu l-hamd, wa huwa 'alâ kulli shay'in qadîr. Al-hamdu lillâh, wa subhâna llâh, wa lâ ilâha illâ llâh, wa llâhu akbar, wa lâ hawla wa lâ quwwata illâ billâh.",
        fr: "Point de divinité à part Allah, Seul, sans associé ; à Lui la royauté, à Lui la louange, et Il est Omnipotent. Louange à Allah, gloire à Allah, point de divinité à part Allah, Allah est le plus grand, et il n'y a de force ni de puissance que par Allah.",
        src: "Bukhârî — 'Ubâda ibn as-Sâmit",
        note: "« Puis s'il dit : Ô Allah, pardonne-moi — ou s'il invoque —, il est exaucé ; et s'il fait ses ablutions et prie, sa prière est acceptée. »"
      },
      {
        id: "reveil-al-imran", titre: "Regarder le ciel et réciter la fin d'Âl 'Imrân", geste: true,
        fr: "Ibn 'Abbâs passa une nuit chez sa tante Maymûna : le Prophète ﷺ se réveilla, essuya le sommeil de son visage, puis récita les dix derniers versets d'Âl 'Imrân — « Dans la création des cieux et de la terre, et l'alternance de la nuit et du jour, il y a des signes pour les doués d'intelligence… » (190-200) — avant de faire ses ablutions et de prier.",
        src: "Bukhârî et Muslim — Ibn 'Abbâs"
      },
      {
        id: "reveil-siwak", titre: "Le siwâk, et se laver les mains trois fois", geste: true,
        fr: "« Quand le Prophète ﷺ se levait la nuit, il se frottait la bouche avec le siwâk » (Bukhârî et Muslim — Hudhayfa). « Quand l'un de vous se réveille, qu'il ne plonge pas la main dans le récipient avant de l'avoir lavée trois fois : il ne sait pas où sa main a passé la nuit » (Bukhârî et Muslim).",
        src: "Bukhârî et Muslim"
      }
    ]
  },
  {
    id: "purification", fr: "Toilettes et ablutions", ar: "الطهارة", quand: "Avant la prière", icone: "≈",
    intro: "Même les lieux les plus ordinaires ont leur parole : on entre du pied gauche en demandant protection, on sort du pied droit en demandant pardon.",
    items: [
      {
        id: "khala-entrer", titre: "En entrant aux toilettes",
        ar: "بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
        tr: "Bismi llâh. Allâhumma innî a'ûdhu bika mina l-khubuthi wa l-khabâ'ith.",
        fr: "Au nom d'Allah. Ô Allah, je cherche refuge auprès de Toi contre les démons mâles et femelles.",
        src: "Bukhârî et Muslim — Anas ; « bismillâh » : at-Tirmidhî, Ibn Mâjah — 'Alî"
      },
      {
        id: "khala-sortir", titre: "En sortant des toilettes",
        ar: "غُفْرَانَكَ",
        tr: "Ghufrânak.",
        fr: "Ton pardon !",
        src: "Abû Dâwûd, at-Tirmidhî, Ibn Mâjah — 'Â'isha"
      },
      {
        id: "wudu-avant", titre: "Avant les ablutions",
        ar: "بِسْمِ اللَّهِ",
        tr: "Bismi llâh.",
        fr: "Au nom d'Allah.",
        src: "Abû Dâwûd, Ibn Mâjah, Ahmad"
      },
      {
        id: "wudu-apres", titre: "Après les ablutions",
        ar: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ، وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
        tr: "Ashhadu an lâ ilâha illâ llâhu wahdahu lâ sharîka lah, wa ashhadu anna Muhammadan 'abduhu wa rasûluh. Allâhumma j'alnî mina t-tawwâbîn, wa j'alnî mina l-mutatahhirîn.",
        fr: "J'atteste qu'il n'y a de divinité qu'Allah, Seul, sans associé, et j'atteste que Muhammad est Son serviteur et Son messager. Ô Allah, fais-moi compter parmi ceux qui se repentent et parmi ceux qui se purifient.",
        src: "Muslim — 'Umar ; la fin : at-Tirmidhî",
        note: "« Les huit portes du Paradis lui sont ouvertes : il entre par celle qu'il veut. »"
      }
    ]
  },
  {
    id: "mosquee", fr: "L'adhân et la mosquée", ar: "الأذان والمسجد", quand: "À l'appel de la prière", icone: "۩",
    intro: "Cinq fois par jour, la même séquence : répondre à l'appel, marcher, entrer, prier, sortir — chaque pas a sa parole.",
    items: [
      {
        id: "adhan-repeter", titre: "Répéter après le muezzin", geste: true,
        fr: "On répète chaque phrase de l'adhân après lui ; à « hayya 'alâ s-salâh » et « hayya 'alâ l-falâh », on dit : « lâ hawla wa lâ quwwata illâ billâh ». « Qui le dit de tout son cœur entre au Paradis » (Muslim). Puis on prie sur le Prophète ﷺ (Muslim).",
        src: "Bukhârî et Muslim ; Muslim — 'Umar"
      },
      {
        id: "adhan-apres", titre: "Après l'adhân",
        ar: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
        tr: "Allâhumma rabba hâdhihi d-da'wati t-tâmma, wa s-salâti l-qâ'ima, âti Muhammadan al-wasîlata wa l-fadîla, wa b'ath-hu maqâman mahmûdan alladhî wa'adtah.",
        fr: "Ô Allah, Seigneur de cet appel parfait et de la prière qui va être accomplie, accorde à Muhammad le rang élevé (al-wasîla) et la prééminence, et ressuscite-le à la station louable que Tu lui as promise.",
        src: "Bukhârî — Jâbir",
        note: "« Mon intercession lui sera acquise au Jour de la Résurrection. » Et « l'invocation entre l'adhân et l'iqâma n'est pas rejetée » (Abû Dâwûd, at-Tirmidhî)."
      },
      {
        id: "mosquee-aller", titre: "En marchant vers la mosquée",
        ar: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي لِسَانِي نُورًا، وَاجْعَلْ فِي سَمْعِي نُورًا، وَاجْعَلْ فِي بَصَرِي نُورًا، وَاجْعَلْ مِنْ خَلْفِي نُورًا، وَمِنْ أَمَامِي نُورًا، وَاجْعَلْ مِنْ فَوْقِي نُورًا، وَمِنْ تَحْتِي نُورًا. اللَّهُمَّ أَعْطِنِي نُورًا",
        tr: "Allâhumma j'al fî qalbî nûrâ, wa fî lisânî nûrâ, wa j'al fî sam'î nûrâ, wa j'al fî basarî nûrâ, wa j'al min khalfî nûrâ, wa min amâmî nûrâ, wa j'al min fawqî nûrâ, wa min tahtî nûrâ. Allâhumma a'tinî nûrâ.",
        fr: "Ô Allah, mets de la lumière dans mon cœur, de la lumière sur ma langue, de la lumière dans mon ouïe, de la lumière dans ma vue, de la lumière derrière moi, de la lumière devant moi, de la lumière au-dessus de moi, de la lumière au-dessous de moi. Ô Allah, donne-moi de la lumière.",
        src: "Muslim — Ibn 'Abbâs"
      },
      {
        id: "mosquee-entrer", titre: "En entrant — pied droit",
        ar: "أَعُوذُ بِاللَّهِ الْعَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ. بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ. اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
        tr: "A'ûdhu billâhi l-'Azîm, wa bi-wajhihi l-karîm, wa sultânihi l-qadîm, mina sh-shaytâni r-rajîm. Bismi llâh, wa s-salâtu wa s-salâmu 'alâ rasûli llâh. Allâhumma ftah lî abwâba rahmatik.",
        fr: "Je cherche refuge auprès d'Allah l'Immense, de Sa noble Face et de Son autorité éternelle, contre Shaytân le lapidé. Au nom d'Allah, que la prière et la paix soient sur le Messager d'Allah. Ô Allah, ouvre-moi les portes de Ta miséricorde.",
        src: "Abû Dâwûd ; Muslim — Abû Humayd",
        note: "« Quand il dit cela, Shaytân dit : il est protégé de moi pour le reste de la journée » (Abû Dâwûd)."
      },
      {
        id: "mosquee-sortir", titre: "En sortant — pied gauche",
        ar: "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ. اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
        tr: "Bismi llâh, wa s-salâtu wa s-salâmu 'alâ rasûli llâh. Allâhumma innî as'aluka min fadlik.",
        fr: "Au nom d'Allah, que la prière et la paix soient sur le Messager d'Allah. Ô Allah, je Te demande de Ta grâce.",
        src: "Muslim — Abû Humayd ; Ibn Mâjah"
      }
    ]
  },
  {
    id: "priere", fr: "Après chaque prière", ar: "أذكار بعد الصلاة", quand: "Après le salâm", icone: "✦",
    intro: "Le Prophète ﷺ ne se levait pas aussitôt le salâm donné. Ces quelques minutes sont, de tous les adhkâr, ceux qu'on a le plus d'occasions de dire : cinq fois par jour.",
    items: [
      {
        id: "salat-istighfar", titre: "Demander pardon, trois fois", n: 3,
        ar: "أَسْتَغْفِرُ اللَّهَ",
        tr: "Astaghfiru llâh.",
        fr: "Je demande pardon à Allah.",
        src: "Muslim — Thawbân"
      },
      {
        id: "salat-salam", titre: "Tu es la Paix",
        ar: "اللَّهُمَّ أَنْتَ السَّلَامُ، وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        tr: "Allâhumma anta s-Salâm, wa minka s-salâm, tabârakta yâ dhâ l-jalâli wa l-ikrâm.",
        fr: "Ô Allah, Tu es la Paix et de Toi vient la paix. Béni sois-Tu, ô Détenteur de la majesté et de la générosité.",
        src: "Muslim — Thawbân"
      },
      {
        id: "salat-la-mani", titre: "Nul ne retient ce que Tu donnes",
        ar: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
        tr: "Lâ ilâha illâ llâhu wahdahu lâ sharîka lah, lahu l-mulku wa lahu l-hamd, wa huwa 'alâ kulli shay'in qadîr. Allâhumma lâ mâni'a limâ a'tayt, wa lâ mu'tiya limâ mana't, wa lâ yanfa'u dhâ l-jaddi minka l-jadd.",
        fr: "Point de divinité à part Allah, Seul, sans associé ; à Lui la royauté, à Lui la louange, et Il est Omnipotent. Ô Allah, nul ne peut retenir ce que Tu donnes, nul ne peut donner ce que Tu retiens, et la fortune du fortuné ne lui sert à rien contre Toi.",
        src: "Bukhârî et Muslim — al-Mughîra ibn Shu'ba"
      },
      {
        id: "salat-subhanallah", titre: "Subhânallâh", n: 33,
        ar: "سُبْحَانَ اللَّهِ", tr: "Subhâna llâh.", fr: "Gloire à Allah.",
        src: "Muslim — Abû Hurayra"
      },
      {
        id: "salat-hamdulillah", titre: "Al-hamdu lillâh", n: 33,
        ar: "الْحَمْدُ لِلَّهِ", tr: "Al-hamdu lillâh.", fr: "Louange à Allah.",
        src: "Muslim — Abû Hurayra"
      },
      {
        id: "salat-allahuakbar", titre: "Allâhu akbar", n: 33,
        ar: "اللَّهُ أَكْبَرُ", tr: "Allâhu akbar.", fr: "Allah est le plus grand.",
        src: "Muslim — Abû Hurayra"
      },
      {
        id: "salat-cent", titre: "Pour compléter la centaine",
        ar: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        tr: "Lâ ilâha illâ llâhu wahdahu lâ sharîka lah, lahu l-mulku wa lahu l-hamd, wa huwa 'alâ kulli shay'in qadîr.",
        fr: "Point de divinité à part Allah, Seul, sans associé. À Lui la royauté, à Lui la louange, et Il est Omnipotent.",
        src: "Muslim — Abû Hurayra",
        note: "« Ses fautes lui sont pardonnées, fussent-elles comme l'écume de la mer. »"
      },
      {
        id: "salat-kursi", titre: "Âyat al-Kursî", geste: true,
        fr: "« Celui qui récite Âyat al-Kursî après chaque prière prescrite, rien ne le sépare de l'entrée au Paradis, sinon la mort. » Le texte se trouve dans les adhkâr du matin.",
        src: "an-Nasâ'î (as-Sunan al-kubrâ) — Abû Umâma"
      },
      {
        id: "salat-muawwidhat", titre: "Al-Ikhlâs, al-Falaq et an-Nâs", geste: true,
        fr: "Une fois après chaque prière ; trois fois après le Fajr et le Maghrib.",
        src: "Abû Dâwûd, at-Tirmidhî, an-Nasâ'î — 'Uqba ibn 'Âmir"
      },
      {
        id: "salat-ainni", titre: "Aide-moi à Te mentionner",
        ar: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ",
        tr: "Allâhumma a'innî 'alâ dhikrik, wa shukrik, wa husni 'ibâdatik.",
        fr: "Ô Allah, aide-moi à Te mentionner, à Te remercier et à T'adorer de la meilleure façon.",
        src: "Abû Dâwûd, an-Nasâ'î — Mu'âdh",
        note: "Le Prophète ﷺ prit la main de Mu'âdh : « Mu'âdh, par Allah, je t'aime. Je te recommande de ne jamais délaisser, à la fin de chaque prière, de dire… »"
      },
      {
        id: "salat-fajr-ilm", titre: "Après la prière du matin",
        ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
        tr: "Allâhumma innî as'aluka 'ilman nâfi'â, wa rizqan tayyibâ, wa 'amalan mutaqabbalâ.",
        fr: "Ô Allah, je Te demande une science utile, une subsistance pure et une œuvre agréée.",
        src: "Ibn Mâjah — Umm Salama"
      }
    ]
  },
  {
    id: "matin", fr: "Les adhkâr du matin", ar: "أذكار الصباح", quand: "Après la prière du Fajr", icone: "☀",
    intro: "« Et glorifie ton Seigneur par Sa louange avant le lever du soleil et avant son coucher » (Tâ-Hâ 130). Le meilleur moment va de l'aube au lever du soleil ; qui l'a manqué les dit quand il le peut dans la matinée.",
    items: []
  },
  {
    id: "maison", fr: "S'habiller, sortir, rentrer", ar: "الخروج والدخول", quand: "Dans la journée", icone: "⌂",
    intro: "Le seuil de la maison est une frontière : on le passe dans un sens en s'en remettant à Allah, dans l'autre en mentionnant Son nom.",
    items: [
      {
        id: "vetement", titre: "En s'habillant",
        ar: "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
        tr: "Al-hamdu lillâhi lladhî kasânî hâdhâ wa razaqanîhi min ghayri hawlin minnî wa lâ quwwa.",
        fr: "Louange à Allah qui m'a vêtu de ceci et me l'a accordé, sans force ni puissance de ma part.",
        src: "Abû Dâwûd, at-Tirmidhî, Ibn Mâjah — Mu'âdh ibn Anas"
      },
      {
        id: "sortir", titre: "En sortant de chez soi",
        ar: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        tr: "Bismi llâh, tawakkaltu 'alâ llâh, wa lâ hawla wa lâ quwwata illâ billâh.",
        fr: "Au nom d'Allah. Je place ma confiance en Allah. Il n'y a de force ni de puissance que par Allah.",
        src: "Abû Dâwûd, at-Tirmidhî — Anas",
        note: "« Il lui est dit : tu es guidé, tu es protégé, tu es préservé — et Shaytân s'écarte de lui. »"
      },
      {
        id: "sortir-adilla", titre: "Contre l'égarement et l'injustice",
        ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ، أَوْ أَزِلَّ أَوْ أُزَلَّ، أَوْ أَظْلِمَ أَوْ أُظْلَمَ، أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ",
        tr: "Allâhumma innî a'ûdhu bika an adilla aw udall, aw azilla aw uzall, aw azlima aw uzlam, aw ajhala aw yujhala 'alayy.",
        fr: "Ô Allah, je cherche refuge auprès de Toi contre le fait de m'égarer ou d'être égaré, de trébucher ou qu'on me fasse trébucher, d'être injuste ou de subir l'injustice, de mal me conduire ou qu'on se conduise mal envers moi.",
        src: "Abû Dâwûd, at-Tirmidhî, an-Nasâ'î, Ibn Mâjah — Umm Salama",
        note: "Umm Salama : « Le Prophète ﷺ ne sortait jamais de chez moi sans lever les yeux au ciel et dire cela. »"
      },
      {
        id: "rentrer", titre: "En rentrant chez soi", geste: true,
        fr: "On mentionne Allah en entrant, puis on salue les siens. « Quand l'homme entre chez lui et mentionne Allah en entrant et en mangeant, Shaytân dit aux siens : pas de gîte pour vous ce soir, ni de dîner » (Muslim — Jâbir). « Quand vous entrez dans des maisons, adressez-vous mutuellement une salutation venant d'Allah, bénie et bonne » (an-Nûr 61).",
        src: "Muslim — Jâbir ; an-Nûr 61"
      },
      {
        id: "majlis", titre: "À la fin d'une assemblée",
        ar: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
        tr: "Subhânaka llâhumma wa bi-hamdik, ashhadu an lâ ilâha illâ ant, astaghfiruka wa atûbu ilayk.",
        fr: "Gloire et louange à Toi, ô Allah. J'atteste qu'il n'y a de divinité que Toi. Je Te demande pardon et je reviens à Toi.",
        src: "Abû Dâwûd, at-Tirmidhî — Abû Hurayra",
        note: "« Ce qui s'est dit dans cette assemblée lui est pardonné. »"
      },
      {
        id: "istighfar-100", titre: "Demander pardon, cent fois dans la journée", n: 100,
        ar: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
        tr: "Astaghfiru llâha wa atûbu ilayh.",
        fr: "Je demande pardon à Allah et je reviens à Lui.",
        src: "Bukhârî — Abû Hurayra ; Muslim — al-Agharr al-Muzanî",
        note: "« Par Allah, je demande pardon à Allah et reviens à Lui plus de soixante-dix fois par jour » (Bukhârî). « Ô gens, revenez à Allah : moi-même, je reviens à Lui cent fois par jour » (Muslim)."
      }
    ]
  },
  {
    id: "repas", fr: "Les repas", ar: "الطعام", quand: "À table", icone: "◔",
    intro: "« Jeune homme, mentionne le nom d'Allah, mange de la main droite, et mange de ce qui est devant toi » (Bukhârî et Muslim) — le conseil du Prophète ﷺ à 'Umar ibn Abî Salama, enfant.",
    items: [
      {
        id: "repas-avant", titre: "Avant de manger",
        ar: "بِسْمِ اللَّهِ",
        tr: "Bismi llâh.",
        fr: "Au nom d'Allah.",
        src: "Abû Dâwûd, at-Tirmidhî — 'Â'isha",
        note: "Si l'on a oublié au début : « bismi llâhi awwalahu wa âkhirah » — au nom d'Allah, à son début et à sa fin."
      },
      {
        id: "repas-apres", titre: "Après avoir mangé",
        ar: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
        tr: "Al-hamdu lillâhi lladhî at'amanî hâdhâ wa razaqanîhi min ghayri hawlin minnî wa lâ quwwa.",
        fr: "Louange à Allah qui m'a nourri de ceci et me l'a accordé, sans force ni puissance de ma part.",
        src: "Abû Dâwûd, at-Tirmidhî, Ibn Mâjah — Mu'âdh ibn Anas",
        note: "« Ses fautes passées lui sont pardonnées. »"
      },
      {
        id: "repas-apres-2", titre: "Quand on débarrasse la table",
        ar: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ، غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ وَلَا مُسْتَغْنًى عَنْهُ رَبَّنَا",
        tr: "Al-hamdu lillâhi hamdan kathîran tayyiban mubârakan fîh, ghayra makfiyyin wa lâ muwadda'in wa lâ mustaghnan 'anhu rabbanâ.",
        fr: "Louange à Allah, une louange abondante, pure et bénie — une louange qu'on ne saurait tenir pour suffisante, ni abandonner, ni dont on pourrait se passer, ô notre Seigneur.",
        src: "Bukhârî — Abû Umâma"
      },
      {
        id: "repas-invite", titre: "Pour celui qui vous a invité",
        ar: "اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ، وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ",
        tr: "Allâhumma bârik lahum fîmâ razaqtahum, wa ghfir lahum wa rhamhum.",
        fr: "Ô Allah, bénis-les dans ce que Tu leur as accordé, pardonne-leur et fais-leur miséricorde.",
        src: "Muslim — 'Abdullâh ibn Busr"
      },
      {
        id: "iftar", titre: "En rompant le jeûne",
        ar: "ذَهَبَ الظَّمَأُ، وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
        tr: "Dhahaba z-zama', wa btallati l-'urûq, wa thabata l-ajru in shâ'a llâh.",
        fr: "La soif est partie, les veines sont humectées, et la récompense est acquise, si Allah le veut.",
        src: "Abû Dâwûd — Ibn 'Umar"
      }
    ]
  },
  {
    id: "soir", fr: "Les adhkâr du soir", ar: "أذكار المساء", quand: "Après la prière du 'Asr", icone: "☼",
    intro: "Les mêmes paroles qu'au matin, tournées vers la nuit qui vient. Le meilleur moment va du 'Asr au coucher du soleil ; qui l'a manqué les dit quand il le peut dans la soirée.",
    items: []
  },
  {
    id: "coucher", fr: "Avant de dormir", ar: "أذكار النوم", quand: "Au lit", icone: "☽",
    intro: "Le Prophète ﷺ faisait ses ablutions, secouait sa couche, s'allongeait sur le côté droit, la main droite sous la joue. Les dernières paroles du jour sont une remise de soi.",
    items: [
      {
        id: "nawm-nafth", titre: "Les trois sourates, en passant les mains sur le corps", n: 3, 
        fr: "« Chaque nuit, en gagnant son lit, le Prophète ﷺ joignait les paumes, y soufflait légèrement, y récitait al-Ikhlâs, al-Falaq et an-Nâs, puis les passait sur tout ce qu'il pouvait de son corps, en commençant par la tête, le visage et le devant du corps — trois fois. »",
        tr: "Qul huwa llâhu ahad… — Qul a'ûdhu bi-rabbi l-falaq… — Qul a'ûdhu bi-rabbi n-nâs…",
        src: "Bukhârî — 'Â'isha"
      },
      {
        id: "nawm-kursi", titre: "Âyat al-Kursî", geste: true,
        fr: "« Quand tu gagnes ton lit, récite Âyat al-Kursî : un gardien venu d'Allah ne cessera de veiller sur toi, et aucun démon ne t'approchera jusqu'au matin. » C'est un démon, pris en train de voler l'aumône, qui l'apprit à Abû Hurayra — « il t'a dit vrai, bien qu'il soit un grand menteur », dit le Prophète ﷺ. Le texte se trouve dans les adhkâr du matin.",
        src: "Bukhârî — Abû Hurayra"
      },
      {
        id: "nawm-baqara", titre: "Les deux derniers versets d'al-Baqara", geste: true,
        fr: "« Le Messager a cru en ce qui lui a été révélé de la part de son Seigneur, ainsi que les croyants… » jusqu'à la fin de la sourate (al-Baqara 285-286). « Qui les récite la nuit, ils lui suffisent. »",
        src: "Bukhârî et Muslim — Abû Mas'ûd"
      },
      {
        id: "nawm-bismika", titre: "C'est en Ton nom que je meurs et que je vis",
        ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        tr: "Bismika llâhumma amûtu wa ahyâ.",
        fr: "C'est en Ton nom, ô Allah, que je meurs et que je vis.",
        src: "Bukhârî — Hudhayfa"
      },
      {
        id: "nawm-janbi", titre: "En Ton nom, Seigneur, j'ai posé mon flanc",
        ar: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
        tr: "Bismika rabbî wada'tu janbî, wa bika arfa'uh, fa-in amsakta nafsî fa-rhamhâ, wa in arsaltahâ fa-hfazhâ bimâ tahfazu bihi 'ibâdaka s-sâlihîn.",
        fr: "C'est en Ton nom, Seigneur, que j'ai posé mon flanc, et c'est par Toi que je le relèverai. Si Tu retiens mon âme, fais-lui miséricorde ; si Tu la renvoies, garde-la comme Tu gardes Tes serviteurs vertueux.",
        src: "Bukhârî et Muslim — Abû Hurayra",
        note: "Après avoir secoué sa couche avec le pan de son vêtement : « il ne sait pas ce qui l'y a remplacé »."
      },
      {
        id: "nawm-qini", titre: "Préserve-moi de Ton châtiment", n: 3,
        ar: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
        tr: "Allâhumma qinî 'adhâbaka yawma tab'athu 'ibâdak.",
        fr: "Ô Allah, préserve-moi de Ton châtiment le Jour où Tu ressusciteras Tes serviteurs.",
        src: "Abû Dâwûd — Hafsa ; at-Tirmidhî — Hudhayfa",
        note: "La main droite sous la joue."
      },
      {
        id: "nawm-subhanallah", titre: "Subhânallâh", n: 33,
        ar: "سُبْحَانَ اللَّهِ", tr: "Subhâna llâh.", fr: "Gloire à Allah.",
        src: "Bukhârî et Muslim — 'Alî"
      },
      {
        id: "nawm-hamdulillah", titre: "Al-hamdu lillâh", n: 33,
        ar: "الْحَمْدُ لِلَّهِ", tr: "Al-hamdu lillâh.", fr: "Louange à Allah.",
        src: "Bukhârî et Muslim — 'Alî"
      },
      {
        id: "nawm-allahuakbar", titre: "Allâhu akbar", n: 34,
        ar: "اللَّهُ أَكْبَرُ", tr: "Allâhu akbar.", fr: "Allah est le plus grand.",
        src: "Bukhârî et Muslim — 'Alî",
        note: "Fâtima, les mains abîmées par la meule, vint demander un serviteur. Le Prophète ﷺ vint chez elle et 'Alî, déjà couchés : « Vous indiquerai-je mieux que ce que vous avez demandé ?… Cela vaut mieux pour vous qu'un serviteur. »"
      },
      {
        id: "nawm-aslamtu", titre: "Les dernières paroles",
        ar: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ",
        tr: "Allâhumma aslamtu nafsî ilayk, wa fawwadtu amrî ilayk, wa wajjahtu wajhî ilayk, wa alja'tu zahrî ilayk, raghbatan wa rahbatan ilayk, lâ malja'a wa lâ manjâ minka illâ ilayk, âmantu bi-kitâbika lladhî anzalt, wa bi-nabiyyika lladhî arsalt.",
        fr: "Ô Allah, je T'ai soumis mon âme, je T'ai confié mon affaire, j'ai tourné mon visage vers Toi, j'ai adossé mon dos à Toi, par désir et par crainte de Toi. Nul refuge ni salut contre Toi, sinon auprès de Toi. Je crois en Ton Livre que Tu as fait descendre, et en Ton prophète que Tu as envoyé.",
        src: "Bukhârî et Muslim — al-Barâ' ibn 'Âzib",
        note: "« Fais tes ablutions comme pour la prière, allonge-toi sur le côté droit, et dis… Si tu meurs cette nuit-là, tu meurs sur la fitra. Fais-en tes dernières paroles. »"
      },
      {
        id: "nawm-mulk", titre: "La sourate al-Mulk", geste: true,
        fr: "« Le Prophète ﷺ ne dormait pas avant d'avoir récité as-Sajda et al-Mulk » (at-Tirmidhî — Jâbir). « Une sourate de trente versets a intercédé pour un homme jusqu'à ce qu'il lui soit pardonné : Tabâraka lladhî bi-yadihi l-mulk » (Abû Dâwûd, at-Tirmidhî). Voir sa fiche dans les sourates.",
        src: "at-Tirmidhî, Abû Dâwûd"
      }
    ]
  },
  {
    id: "nuit", fr: "La nuit et le witr", ar: "قيام الليل", quand: "Dans le dernier tiers de la nuit", icone: "✧",
    intro: "« Notre Seigneur descend chaque nuit au ciel le plus proche, quand il reste le dernier tiers de la nuit, et dit : Qui M'invoque, que Je l'exauce ? Qui Me demande, que Je lui donne ? Qui Me demande pardon, que Je lui pardonne ? » (Bukhârî et Muslim).",
    items: [
      {
        id: "layl-istiftah", titre: "En se levant pour prier la nuit",
        ar: "اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ، أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ، أَنْتَ الْحَقُّ، وَوَعْدُكَ الْحَقُّ، وَلِقَاؤُكَ حَقٌّ، وَالْجَنَّةُ حَقٌّ، وَالنَّارُ حَقٌّ، وَالسَّاعَةُ حَقٌّ. اللَّهُمَّ لَكَ أَسْلَمْتُ، وَبِكَ آمَنْتُ، وَعَلَيْكَ تَوَكَّلْتُ، وَإِلَيْكَ أَنَبْتُ، وَبِكَ خَاصَمْتُ، وَإِلَيْكَ حَاكَمْتُ، فَاغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَهَ إِلَّا أَنْتَ",
        tr: "Allâhumma laka l-hamd, anta nûru s-samâwâti wa l-ardi wa man fîhinn, wa laka l-hamd, anta qayyimu s-samâwâti wa l-ardi wa man fîhinn, wa laka l-hamd, anta l-Haqq, wa wa'duka l-haqq, wa liqâ'uka haqq, wa l-jannatu haqq, wa n-nâru haqq, wa s-sâ'atu haqq. Allâhumma laka aslamt, wa bika âmant, wa 'alayka tawakkalt, wa ilayka anabt, wa bika khâsamt, wa ilayka hâkamt, fa-ghfir lî mâ qaddamtu wa mâ akhkhart, wa mâ asrartu wa mâ a'lant, anta l-Muqaddimu wa anta l-Mu'akhkhir, lâ ilâha illâ ant.",
        fr: "Ô Allah, à Toi la louange : Tu es la lumière des cieux, de la terre et de ceux qui s'y trouvent. À Toi la louange : Tu es Celui qui maintient les cieux, la terre et ceux qui s'y trouvent. À Toi la louange : Tu es le Vrai, Ta promesse est vraie, Ta rencontre est vraie, le Paradis est vrai, le Feu est vrai, l'Heure est vraie. Ô Allah, à Toi je me soumets, en Toi je crois, en Toi je place ma confiance, vers Toi je reviens, par Toi je plaide, à Toi je m'en remets pour juger : pardonne-moi ce que j'ai avancé et ce que j'ai retardé, ce que j'ai caché et ce que j'ai montré. C'est Toi qui avances et c'est Toi qui retardes. Point de divinité à part Toi.",
        src: "Bukhârî et Muslim — Ibn 'Abbâs (version abrégée)"
      },
      {
        id: "witr-qunut", titre: "Le qunût du witr",
        ar: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، إِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ",
        tr: "Allâhumma hdinî fîman hadayt, wa 'âfinî fîman 'âfayt, wa tawallanî fîman tawallayt, wa bârik lî fîmâ a'tayt, wa qinî sharra mâ qadayt, fa-innaka taqdî wa lâ yuqdâ 'alayk, innahu lâ yadhillu man wâlayt, tabârakta rabbanâ wa ta'âlayt.",
        fr: "Ô Allah, guide-moi parmi ceux que Tu as guidés, préserve-moi parmi ceux que Tu as préservés, prends-moi en charge parmi ceux que Tu as pris en charge, bénis ce que Tu m'as donné, et protège-moi du mal de ce que Tu as décrété : c'est Toi qui décrètes, et nul ne décrète contre Toi. N'est jamais humilié celui que Tu prends pour allié. Béni et exalté sois-Tu, notre Seigneur.",
        src: "Abû Dâwûd, at-Tirmidhî, an-Nasâ'î — al-Hasan ibn 'Alî",
        note: "« Le Messager d'Allah ﷺ m'a enseigné des paroles à dire dans le witr. »"
      },
      {
        id: "witr-apres", titre: "Après le salâm du witr", n: 3,
        ar: "سُبْحَانَ الْمَلِكِ الْقُدُّوسِ",
        tr: "Subhâna l-Maliki l-Quddûs.",
        fr: "Gloire au Roi, le Pur !",
        src: "Abû Dâwûd, an-Nasâ'î — Ubayy ibn Ka'b",
        note: "En élevant et en allongeant la voix à la troisième."
      }
    ]
  },
  {
    id: "vendredi", fr: "Le vendredi", ar: "يوم الجمعة", quand: "Du jeudi soir au vendredi soir", icone: "۞",
    intro: "« Le meilleur jour sur lequel le soleil se soit levé est le vendredi » (Muslim).",
    items: [
      {
        id: "jumua-kahf", titre: "Réciter la sourate al-Kahf", geste: true,
        fr: "« Celui qui récite la sourate al-Kahf le jour du vendredi, une lumière l'éclaire entre les deux vendredis » (al-Hâkim, al-Bayhaqî). Voir sa fiche dans les sourates.",
        src: "al-Hâkim, al-Bayhaqî — Abû Sa'îd"
      },
      {
        id: "jumua-salat-nabi", titre: "Multiplier la prière sur le Prophète ﷺ", n: 100,
        ar: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
        tr: "Allâhumma salli wa sallim 'alâ nabiyyinâ Muhammad.",
        fr: "Ô Allah, prie sur notre prophète Muhammad et accorde-lui la paix.",
        src: "Abû Dâwûd, an-Nasâ'î — Aws ibn Aws ; Muslim",
        note: "« Multipliez ce jour-là la prière sur moi : votre prière m'est présentée » (Abû Dâwûd). « Qui prie sur moi une fois, Allah prie sur lui dix fois » (Muslim). Le nombre de cent est ici un simple repère pour le compteur."
      },
      {
        id: "jumua-heure", titre: "Guetter l'heure de l'exaucement", geste: true,
        fr: "« Il y a dans le vendredi une heure où aucun serviteur musulman ne demande un bien à Allah, debout en prière, sans qu'Il le lui donne » (Bukhârî et Muslim). « Cherchez-la dans la dernière heure après le 'Asr » (Abû Dâwûd, an-Nasâ'î — Jâbir).",
        src: "Bukhârî et Muslim ; Abû Dâwûd, an-Nasâ'î"
      },
      {
        id: "jumua-ghusl", titre: "Le bain, le parfum, partir tôt", geste: true,
        fr: "« Celui qui se lave le vendredi, se purifie autant qu'il peut, s'enduit de son huile ou du parfum de sa maison, puis sort sans séparer deux personnes, prie ce qui lui est écrit, puis se tait quand l'imam parle : il lui est pardonné ce qu'il y a entre ce vendredi et l'autre » (Bukhârî — Salmân).",
        src: "Bukhârî — Salmân al-Fârisî"
      }
    ]
  }
];

/* les adhkâr du matin et du soir sont construits depuis la liste commune */
(function () {
  const variante = (x, soir) => {
    const o = Object.assign({}, x);
    if (soir && x.soir) Object.assign(o, x.soir);
    delete o.soir; delete o.soirNon; delete o.matinNon;
    o.id = (soir ? "soir-" : "matin-") + x.id;
    return o;
  };
  ROUTINE.find((m) => m.id === "matin").items = ADHKAR_MATIN_SOIR.filter((x) => !x.matinNon).map((x) => variante(x, false));
  ROUTINE.find((m) => m.id === "soir").items = ADHKAR_MATIN_SOIR.filter((x) => !x.soirNon).map((x) => variante(x, true));
})();

/* ============================================================
   ★ LES INVOCATIONS DU PROPHÈTE ﷺ, PAR THÈME ★
   ============================================================ */
const DUAS = [
  {
    id: "essentielles", fr: "Celles qu'il répétait le plus", ar: "جوامع الدعاء",
    intro: "'Â'isha : « Le Messager d'Allah ﷺ aimait les invocations qui rassemblent beaucoup en peu de mots, et délaissait le reste » (Abû Dâwûd).",
    items: [
      {
        id: "rabbana-atina", titre: "Le bien d'ici-bas et le bien de l'au-delà",
        ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        tr: "Rabbanâ âtinâ fî d-dunyâ hasana, wa fî l-âkhirati hasana, wa qinâ 'adhâba n-nâr.",
        fr: "Seigneur, accorde-nous un bien ici-bas et un bien dans l'au-delà, et préserve-nous du châtiment du Feu.",
        src: "al-Baqara 201 — Bukhârî et Muslim — Anas",
        quand: "Anas : « C'était l'invocation que le Prophète ﷺ faisait le plus. » Il la disait aussi entre le coin yéménite et la Pierre noire."
      },
      {
        id: "muqallib", titre: "Affermis mon cœur",
        ar: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
        tr: "Yâ muqalliba l-qulûb, thabbit qalbî 'alâ dînik.",
        fr: "Ô Toi qui retournes les cœurs, affermis mon cœur sur Ta religion.",
        src: "at-Tirmidhî — Anas, Umm Salama",
        quand: "Umm Salama lui demanda pourquoi il la répétait tant : « Il n'est pas un être humain dont le cœur ne soit entre deux doigts d'Allah : Il redresse qui Il veut, Il fait dévier qui Il veut. »"
      },
      {
        id: "huda-tuqa", titre: "Guidance, piété, chasteté, suffisance",
        ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
        tr: "Allâhumma innî as'aluka l-hudâ wa t-tuqâ wa l-'afâfa wa l-ghinâ.",
        fr: "Ô Allah, je Te demande la guidance, la piété, la chasteté et la suffisance.",
        src: "Muslim — Ibn Mas'ûd"
      },
      {
        id: "aslih-dini", titre: "Ma religion, ma vie, mon au-delà",
        ar: "اللَّهُمَّ أَصْلِحْ لِي دِينِيَ الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي، وَاجْعَلِ الْحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ، وَاجْعَلِ الْمَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ",
        tr: "Allâhumma aslih lî dîniya lladhî huwa 'ismatu amrî, wa aslih lî dunyâya llatî fîhâ ma'âshî, wa aslih lî âkhiratî llatî fîhâ ma'âdî, wa j'ali l-hayâta ziyâdatan lî fî kulli khayr, wa j'ali l-mawta râhatan lî min kulli sharr.",
        fr: "Ô Allah, arrange ma religion, qui est la sauvegarde de mon affaire ; arrange ma vie d'ici-bas, où se trouve ma subsistance ; arrange mon au-delà, où se trouve mon retour. Fais de la vie un surcroît de tout bien pour moi, et fais de la mort un repos de tout mal.",
        src: "Muslim — Abû Hurayra"
      },
      {
        id: "khayr-kullih", titre: "Tout le bien, immédiat et futur",
        ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ، عَاجِلِهِ وَآجِلِهِ، مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ، عَاجِلِهِ وَآجِلِهِ، مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ. اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ عَبْدُكَ وَنَبِيُّكَ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا عَاذَ بِهِ عَبْدُكَ وَنَبِيُّكَ. اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَسْأَلُكَ أَنْ تَجْعَلَ كُلَّ قَضَاءٍ قَضَيْتَهُ لِي خَيْرًا",
        tr: "Allâhumma innî as'aluka mina l-khayri kullih, 'âjilihi wa âjilih, mâ 'alimtu minhu wa mâ lam a'lam, wa a'ûdhu bika mina sh-sharri kullih, 'âjilihi wa âjilih, mâ 'alimtu minhu wa mâ lam a'lam. Allâhumma innî as'aluka min khayri mâ sa'alaka 'abduka wa nabiyyuk, wa a'ûdhu bika min sharri mâ 'âdha bihi 'abduka wa nabiyyuk. Allâhumma innî as'aluka l-jannata wa mâ qarraba ilayhâ min qawlin aw 'amal, wa a'ûdhu bika mina n-nâri wa mâ qarraba ilayhâ min qawlin aw 'amal, wa as'aluka an taj'ala kulla qadâ'in qadaytahu lî khayrâ.",
        fr: "Ô Allah, je Te demande tout le bien, immédiat et futur, celui que je connais et celui que j'ignore ; et je cherche refuge auprès de Toi contre tout le mal, immédiat et futur, celui que je connais et celui que j'ignore. Ô Allah, je Te demande le bien que T'a demandé Ton serviteur et prophète, et je cherche refuge auprès de Toi contre le mal dont Ton serviteur et prophète a cherché refuge. Ô Allah, je Te demande le Paradis et toute parole ou œuvre qui en rapproche ; je cherche refuge auprès de Toi contre le Feu et toute parole ou œuvre qui en rapproche ; et je Te demande de faire que tout décret que Tu as décrété pour moi soit un bien.",
        src: "Ibn Mâjah, Ahmad — 'Â'isha",
        quand: "Le Prophète ﷺ l'enseigna à 'Â'isha : celui qui ne sait pas quoi demander demande ainsi tout ce que le Prophète ﷺ a demandé."
      }
    ]
  },
  {
    id: "pardon", fr: "Demander pardon", ar: "الاستغفار",
    intro: "« Heureux celui qui trouvera dans son registre beaucoup de demandes de pardon » (Ibn Mâjah). Sayyid al-istighfâr, la plus complète, se trouve dans les adhkâr du matin et du soir.",
    items: [
      {
        id: "afuww", titre: "Tu aimes effacer : efface mes fautes",
        ar: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
        tr: "Allâhumma innaka 'Afuwwun tuhibbu l-'afwa fa-'fu 'annî.",
        fr: "Ô Allah, Tu es Celui qui efface, Tu aimes effacer : efface mes fautes.",
        src: "at-Tirmidhî, Ibn Mâjah — 'Â'isha",
        quand: "« Si je tombe sur la nuit du Destin, que dire ? » — C'est la réponse du Prophète ﷺ."
      },
      {
        id: "zalamtu", titre: "Je me suis fait beaucoup de tort",
        ar: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
        tr: "Allâhumma innî zalamtu nafsî zulman kathîrâ, wa lâ yaghfiru dh-dhunûba illâ ant, fa-ghfir lî maghfiratan min 'indika wa rhamnî, innaka anta l-Ghafûru r-Rahîm.",
        fr: "Ô Allah, je me suis fait beaucoup de tort à moi-même, et nul ne pardonne les péchés sinon Toi : accorde-moi un pardon venant de Toi et fais-moi miséricorde. Tu es le Pardonneur, le Très Miséricordieux.",
        src: "Bukhârî et Muslim — Abû Bakr",
        quand: "Abû Bakr — le meilleur homme de cette communauté après son Prophète ﷺ — demanda : « Enseigne-moi une invocation pour ma prière. »"
      },
      {
        id: "tub-alayya", titre: "Cent fois en une seule assise", n: 100,
        ar: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
        tr: "Rabbi ghfir lî wa tub 'alayy, innaka anta t-Tawwâbu r-Rahîm.",
        fr: "Seigneur, pardonne-moi et accueille mon repentir : Tu es l'Accueillant au repentir, le Très Miséricordieux.",
        src: "Abû Dâwûd, at-Tirmidhî — Ibn 'Umar",
        quand: "« Nous comptions au Messager d'Allah ﷺ, en une seule assise, cent fois cette parole. »"
      },
      {
        id: "yunus", titre: "L'invocation de Yûnus",
        ar: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
        tr: "Lâ ilâha illâ anta subhânaka innî kuntu mina z-zâlimîn.",
        fr: "Point de divinité à part Toi ! Gloire à Toi ! J'ai été du nombre des injustes.",
        src: "al-Anbiyâ' 87 — at-Tirmidhî — Sa'd ibn Abî Waqqâs",
        quand: "« Aucun musulman n'invoque par elle, pour quoi que ce soit, sans qu'Allah l'exauce. »"
      },
      {
        id: "dhanbi-kullah", titre: "Tous mes péchés — dans la prosternation",
        ar: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلَانِيَتَهُ وَسِرَّهُ",
        tr: "Allâhumma ghfir lî dhanbî kullah, diqqahu wa jillah, wa awwalahu wa âkhirah, wa 'alâniyatahu wa sirrah.",
        fr: "Ô Allah, pardonne-moi tous mes péchés : le petit et le grand, le premier et le dernier, le public et le secret.",
        src: "Muslim — Abû Hurayra"
      }
    ]
  },
  {
    id: "detresse", fr: "Angoisse, tristesse, dette", ar: "الهمّ والكرب",
    intro: "Le Prophète ﷺ a connu le deuil, la faim, l'exil, la calomnie. Voici ce qu'il disait — et ce qu'il a enseigné de dire.",
    items: [
      {
        id: "hamm-hazan", titre: "Contre le souci et la tristesse",
        ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
        tr: "Allâhumma innî a'ûdhu bika mina l-hammi wa l-hazan, wa l-'ajzi wa l-kasal, wa l-bukhli wa l-jubn, wa dala'i d-dayni wa ghalabati r-rijâl.",
        fr: "Ô Allah, je cherche refuge auprès de Toi contre le souci et la tristesse, l'incapacité et la paresse, l'avarice et la lâcheté, le poids de la dette et la domination des hommes.",
        src: "Bukhârî — Anas",
        quand: "Anas, qui servit le Prophète ﷺ dix ans : « Je l'entendais la dire souvent. » Huit maux, deux par deux : le souci regarde l'avenir, la tristesse le passé."
      },
      {
        id: "karb", titre: "L'invocation de la détresse",
        ar: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ",
        tr: "Lâ ilâha illâ llâhu l-'Azîmu l-Halîm, lâ ilâha illâ llâhu rabbu l-'arshi l-'azîm, lâ ilâha illâ llâhu rabbu s-samâwâti wa rabbu l-ardi wa rabbu l-'arshi l-karîm.",
        fr: "Point de divinité à part Allah, l'Immense, le Longanime. Point de divinité à part Allah, Seigneur du Trône immense. Point de divinité à part Allah, Seigneur des cieux, Seigneur de la terre et Seigneur du noble Trône.",
        src: "Bukhârî et Muslim — Ibn 'Abbâs",
        quand: "Le Prophète ﷺ la disait dans la détresse. Elle ne contient aucune demande : seulement le tawhîd."
      },
      {
        id: "rahmataka-arju", titre: "C'est Ta miséricorde que j'espère",
        ar: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو، فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لَا إِلَهَ إِلَّا أَنْتَ",
        tr: "Allâhumma rahmataka arjû, fa-lâ takilnî ilâ nafsî tarfata 'ayn, wa aslih lî sha'nî kullah, lâ ilâha illâ ant.",
        fr: "Ô Allah, c'est Ta miséricorde que j'espère : ne me confie pas à moi-même, ne serait-ce qu'un clin d'œil, et arrange pour moi toutes mes affaires. Point de divinité à part Toi.",
        src: "Abû Dâwûd — Abû Bakra",
        quand: "« Les invocations de l'affligé. »"
      },
      {
        id: "abduka", titre: "Fais du Coran le printemps de mon cœur",
        ar: "اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي",
        tr: "Allâhumma innî 'abduk, ibnu 'abdik, ibnu amatik, nâsiyatî bi-yadik, mâdin fiyya hukmuk, 'adlun fiyya qadâ'uk, as'aluka bi-kulli smin huwa lak, sammayta bihi nafsak, aw anzaltahu fî kitâbik, aw 'allamtahu ahadan min khalqik, awi sta'tharta bihi fî 'ilmi l-ghaybi 'indak, an taj'ala l-qur'âna rabî'a qalbî, wa nûra sadrî, wa jalâ'a huznî, wa dhahâba hammî.",
        fr: "Ô Allah, je suis Ton serviteur, fils de Ton serviteur, fils de Ta servante. Mon toupet est dans Ta main. Ton jugement s'exécute sur moi, Ton décret sur moi est juste. Je Te demande par tout nom qui est à Toi — par lequel Tu T'es nommé, que Tu as fait descendre dans Ton Livre, que Tu as enseigné à l'une de Tes créatures, ou que Tu as gardé auprès de Toi dans la science de l'invisible — de faire du Coran le printemps de mon cœur, la lumière de ma poitrine, la dissipation de ma tristesse et le départ de mon souci.",
        src: "Ahmad, Ibn Hibbân — Ibn Mas'ûd",
        quand: "« Nul n'est atteint d'un souci ou d'une tristesse et ne dit cela, sans qu'Allah ôte son souci et le remplace par une joie. » Remarque : « ou que Tu as gardé auprès de Toi » — Ses noms ne se limitent donc pas à quatre-vingt-dix-neuf."
      },
      {
        id: "dayn", titre: "Pour s'acquitter d'une dette",
        ar: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
        tr: "Allâhumma kfinî bi-halâlika 'an harâmik, wa aghninî bi-fadlika 'amman siwâk.",
        fr: "Ô Allah, fais que Ton licite me suffise pour me passer de Ton illicite, et enrichis-moi par Ta grâce pour me passer de tout autre que Toi.",
        src: "at-Tirmidhî — 'Alî",
        quand: "Un esclave qui devait racheter sa liberté vint se plaindre à 'Alî : « Je vais t'enseigner des paroles que m'a enseignées le Messager d'Allah ﷺ : aurais-tu une dette grosse comme une montagne, Allah l'acquitterait pour toi. »"
      },
      {
        id: "hasbuna", titre: "Allah nous suffit",
        ar: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
        tr: "Hasbunâ llâhu wa ni'ma l-Wakîl.",
        fr: "Allah nous suffit : quel excellent Garant !",
        src: "Âl 'Imrân 173 — Bukhârî — Ibn 'Abbâs",
        quand: "« Ibrâhîm l'a dite quand on le jeta dans le feu, et Muhammad ﷺ l'a dite quand on leur dit : les gens se sont rassemblés contre vous. »"
      },
      {
        id: "musiba", titre: "Devant un malheur",
        ar: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي، وَأَخْلِفْ لِي خَيْرًا مِنْهَا",
        tr: "Innâ lillâhi wa innâ ilayhi râji'ûn. Allâhumma'jurnî fî musîbatî, wa akhlif lî khayran minhâ.",
        fr: "Nous sommes à Allah et c'est vers Lui que nous retournons. Ô Allah, récompense-moi dans mon malheur, et remplace-le-moi par quelque chose de meilleur.",
        src: "Muslim — Umm Salama",
        quand: "Umm Salama, à la mort de son mari : « Qui est meilleur qu'Abû Salama ? » Elle la dit pourtant — « et Allah me donna à sa place le Messager d'Allah ﷺ »."
      }
    ]
  },
  {
    id: "protection", fr: "Chercher refuge", ar: "الاستعاذة",
    intro: "Chercher refuge est une adoration : on reconnaît qu'on ne se protège pas soi-même.",
    items: [
      {
        id: "zawal-nima", titre: "Contre la disparition de Ton bienfait",
        ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ",
        tr: "Allâhumma innî a'ûdhu bika min zawâli ni'matik, wa tahawwuli 'âfiyatik, wa fujâ'ati niqmatik, wa jamî'i sakhatik.",
        fr: "Ô Allah, je cherche refuge auprès de Toi contre la disparition de Ton bienfait, le retournement de Ta préservation, la soudaineté de Ta vengeance, et tout ce qui Te courrouce.",
        src: "Muslim — Ibn 'Umar"
      },
      {
        id: "ilm-la-yanfa", titre: "Contre une science qui ne profite pas",
        ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا",
        tr: "Allâhumma innî a'ûdhu bika min 'ilmin lâ yanfa', wa min qalbin lâ yakhsha', wa min nafsin lâ tashba', wa min da'watin lâ yustajâbu lahâ.",
        fr: "Ô Allah, je cherche refuge auprès de Toi contre une science qui ne profite pas, un cœur qui ne se recueille pas, une âme qui ne se rassasie pas, et une invocation qui n'est pas exaucée.",
        src: "Muslim — Zayd ibn Arqam"
      },
      {
        id: "jahd-al-bala", titre: "Contre la dureté de l'épreuve",
        ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ، وَدَرَكِ الشَّقَاءِ، وَسُوءِ الْقَضَاءِ، وَشَمَاتَةِ الْأَعْدَاءِ",
        tr: "Allâhumma innî a'ûdhu bika min jahdi l-balâ', wa daraki sh-shaqâ', wa sû'i l-qadâ', wa shamâtati l-a'dâ'.",
        fr: "Ô Allah, je cherche refuge auprès de Toi contre la dureté de l'épreuve, le fait d'être rattrapé par le malheur, le mauvais décret, et la joie maligne des ennemis.",
        src: "Bukhârî et Muslim — Abû Hurayra"
      },
      {
        id: "arba", titre: "Quatre refuges, avant le salâm",
        ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
        tr: "Allâhumma innî a'ûdhu bika min 'adhâbi jahannam, wa min 'adhâbi l-qabr, wa min fitnati l-mahyâ wa l-mamât, wa min sharri fitnati l-masîhi d-dajjâl.",
        fr: "Ô Allah, je cherche refuge auprès de Toi contre le châtiment de la Géhenne, contre le châtiment de la tombe, contre l'épreuve de la vie et de la mort, et contre le mal de l'épreuve du Faux Messie.",
        src: "Muslim — Abû Hurayra",
        quand: "« Quand l'un de vous a fini le dernier tashahhud, qu'il cherche refuge auprès d'Allah contre quatre choses. »"
      },
      {
        id: "enfants", titre: "Pour protéger ses enfants",
        ar: "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
        tr: "U'îdhukumâ bi-kalimâti llâhi t-tâmma, min kulli shaytânin wa hâmma, wa min kulli 'aynin lâmma.",
        fr: "Je vous place tous deux sous la protection des paroles parfaites d'Allah, contre tout démon et toute bête venimeuse, et contre tout œil malfaisant.",
        src: "Bukhârî — Ibn 'Abbâs",
        quand: "Le Prophète ﷺ le disait pour al-Hasan et al-Husayn : « Votre père Ibrâhîm protégeait ainsi Ismâ'îl et Ishâq. » Pour un seul enfant : u'îdhuka (garçon), u'îdhuki (fille)."
      }
    ]
  },
  {
    id: "priere", fr: "Dans la prière", ar: "أدعية الصلاة",
    intro: "« Le serviteur n'est jamais aussi proche de son Seigneur que lorsqu'il est prosterné : multipliez-y l'invocation » (Muslim).",
    items: [
      {
        id: "ruku-sujud", titre: "Dans l'inclinaison et la prosternation",
        ar: "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي",
        tr: "Subhânaka llâhumma rabbanâ wa bi-hamdik, Allâhumma ghfir lî.",
        fr: "Gloire et louange à Toi, ô Allah notre Seigneur. Ô Allah, pardonne-moi.",
        src: "Bukhârî et Muslim — 'Â'isha",
        quand: "« Il la disait beaucoup, mettant en pratique le Coran » — la sourate an-Nasr : « Glorifie ton Seigneur par Sa louange et demande-Lui pardon. »"
      },
      {
        id: "bayna-sajdatayn", titre: "Entre les deux prosternations",
        ar: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي",
        tr: "Rabbi ghfir lî, rabbi ghfir lî.",
        fr: "Seigneur, pardonne-moi. Seigneur, pardonne-moi.",
        src: "Abû Dâwûd, Ibn Mâjah — Hudhayfa"
      },
      {
        id: "istikhara", titre: "L'istikhâra — demander à Allah de choisir",
        ar: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ، ثُمَّ أَرْضِنِي بِهِ",
        tr: "Allâhumma innî astakhîruka bi-'ilmik, wa astaqdiruka bi-qudratik, wa as'aluka min fadlika l-'azîm, fa-innaka taqdiru wa lâ aqdir, wa ta'lamu wa lâ a'lam, wa anta 'allâmu l-ghuyûb. Allâhumma in kunta ta'lamu anna hâdhâ l-amra khayrun lî fî dînî wa ma'âshî wa 'âqibati amrî, fa-qdurhu lî wa yassirhu lî thumma bârik lî fîh, wa in kunta ta'lamu anna hâdhâ l-amra sharrun lî fî dînî wa ma'âshî wa 'âqibati amrî, fa-srifhu 'annî wa srifnî 'anh, wa qdur liya l-khayra haythu kân, thumma ardinî bih.",
        fr: "Ô Allah, je Te demande de choisir pour moi par Ta science, de me donner la capacité par Ta puissance, et je Te demande de Ta grâce immense : Tu peux et je ne peux pas, Tu sais et je ne sais pas, et Tu es le grand Connaisseur des choses cachées. Ô Allah, si Tu sais que cette affaire est un bien pour moi dans ma religion, ma subsistance et l'issue de mon affaire, décrète-la-moi, facilite-la-moi, puis bénis-la-moi. Et si Tu sais que cette affaire est un mal pour moi dans ma religion, ma subsistance et l'issue de mon affaire, détourne-la de moi et détourne-moi d'elle ; décrète-moi le bien où qu'il soit, puis rends-m'en satisfait.",
        src: "Bukhârî — Jâbir",
        quand: "« Le Prophète ﷺ nous enseignait l'istikhâra en toute chose, comme il nous enseignait une sourate du Coran. » Deux rak'a en dehors de l'obligatoire, puis cette invocation, en nommant son affaire à la place de « cette affaire »."
      }
    ]
  },
  {
    id: "vie", fr: "Au fil de la vie", ar: "أذكار الأحوال",
    intro: "Un éternuement, une averse, un départ, une colère : le Prophète ﷺ n'a laissé aucun moment sans parole.",
    items: [
      {
        id: "atas", titre: "Quand on éternue",
        ar: "الْحَمْدُ لِلَّهِ — يَرْحَمُكَ اللَّهُ — يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ",
        tr: "Al-hamdu lillâh. — Yarhamuka llâh. — Yahdîkumu llâhu wa yuslihu bâlakum.",
        fr: "Celui qui éternue : « Louange à Allah. » — Son frère : « Qu'Allah te fasse miséricorde. » — Il répond : « Qu'Allah vous guide et améliore votre état. »",
        src: "Bukhârî — Abû Hurayra"
      },
      {
        id: "rukub", titre: "En montant en voiture, en train, en avion",
        ar: "بِسْمِ اللَّهِ، الْحَمْدُ لِلَّهِ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
        tr: "Bismi llâh, al-hamdu lillâh, subhâna lladhî sakhkhara lanâ hâdhâ wa mâ kunnâ lahu muqrinîn, wa innâ ilâ rabbinâ la-munqalibûn.",
        fr: "Au nom d'Allah. Louange à Allah. Gloire à Celui qui a mis ceci à notre service, alors que nous n'étions pas capables de le dominer ; et c'est vers notre Seigneur que nous retournerons.",
        src: "az-Zukhruf 13-14 — Abû Dâwûd, at-Tirmidhî — 'Alî"
      },
      {
        id: "safar", titre: "En partant en voyage",
        ar: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى. اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ. اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ",
        tr: "Allâhumma innâ nas'aluka fî safarinâ hâdhâ l-birra wa t-taqwâ, wa mina l-'amali mâ tardâ. Allâhumma hawwin 'alaynâ safaranâ hâdhâ wa twi 'annâ bu'dah. Allâhumma anta s-sâhibu fî s-safar, wa l-khalîfatu fî l-ahl.",
        fr: "Ô Allah, nous Te demandons dans ce voyage la bonté et la piété, et les œuvres que Tu agrées. Ô Allah, facilite-nous ce voyage et raccourcis-nous sa distance. Ô Allah, Tu es le Compagnon dans le voyage et Celui qui veille sur la famille.",
        src: "Muslim — Ibn 'Umar"
      },
      {
        id: "matar", titre: "Quand il pleut",
        ar: "اللَّهُمَّ صَيِّبًا نَافِعًا — مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
        tr: "Allâhumma sayyiban nâfi'â. — Mutirnâ bi-fadli llâhi wa rahmatih.",
        fr: "Pendant la pluie : « Ô Allah, une pluie bienfaisante. » — Après : « Nous avons reçu la pluie par la grâce d'Allah et Sa miséricorde. »",
        src: "Bukhârî — 'Â'isha ; Bukhârî et Muslim — Zayd ibn Khâlid",
        quand: "L'invocation sous la pluie est un moment d'exaucement. Le Prophète ﷺ découvrait une partie de son corps pour que la pluie l'atteigne : « elle vient tout juste de chez son Seigneur » (Muslim)."
      },
      {
        id: "ghadab", titre: "Quand la colère monte",
        ar: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        tr: "A'ûdhu billâhi mina sh-shaytâni r-rajîm.",
        fr: "Je cherche refuge auprès d'Allah contre Shaytân le lapidé.",
        src: "Bukhârî et Muslim — Sulaymân ibn Surad",
        quand: "Deux hommes s'insultaient, l'un avait le visage rouge : « Je connais une parole qui, s'il la disait, ferait partir ce qu'il ressent. » Et aussi : se taire, s'asseoir si l'on est debout, faire ses ablutions."
      },
      {
        id: "marid", titre: "Au chevet d'un malade", n: 7,
        ar: "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ",
        tr: "As'alu llâha l-'Azîm, rabba l-'arshi l-'azîm, an yashfiyak.",
        fr: "Je demande à Allah l'Immense, Seigneur du Trône immense, de te guérir.",
        src: "Abû Dâwûd, at-Tirmidhî — Ibn 'Abbâs",
        quand: "« Qui visite un malade dont le terme n'est pas venu et dit cela sept fois, Allah le guérit. » Le Prophète ﷺ disait aussi au malade : « Lâ ba's, tahûrun in shâ'a llâh » — ce n'est rien, une purification si Allah le veut (Bukhârî)."
      },
      {
        id: "waja", titre: "Quand on a mal quelque part", n: 7,
        ar: "أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ",
        tr: "A'ûdhu billâhi wa qudratihi min sharri mâ ajidu wa uhâdhir.",
        fr: "Je cherche refuge auprès d'Allah et de Sa puissance contre le mal que je ressens et que je redoute.",
        src: "Muslim — 'Uthmân ibn Abî l-'Âs",
        quand: "« Pose ta main sur l'endroit douloureux, dis bismillâh trois fois, puis dis sept fois… »"
      },
      {
        id: "zawaj", titre: "Aux jeunes mariés",
        ar: "بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
        tr: "Bâraka llâhu lak, wa bâraka 'alayk, wa jama'a baynakumâ fî khayr.",
        fr: "Qu'Allah te bénisse, fasse descendre Sa bénédiction sur toi, et vous unisse tous deux dans le bien.",
        src: "Abû Dâwûd, at-Tirmidhî, Ibn Mâjah — Abû Hurayra"
      },
      {
        id: "jazak", titre: "À celui qui vous a fait du bien",
        ar: "جَزَاكَ اللَّهُ خَيْرًا",
        tr: "Jazâka llâhu khayrâ.",
        fr: "Qu'Allah te récompense par un bien.",
        src: "at-Tirmidhî — Usâma ibn Zayd",
        quand: "« Celui à qui l'on fait un bien et qui dit cela à son auteur est allé au bout de l'éloge. »"
      }
    ]
  },
  {
    id: "coran", fr: "Les invocations du Coran", ar: "أدعية القرآن",
    intro: "Les mots des prophètes et des pieux, choisis par Allah pour être récités jusqu'à la fin des temps.",
    items: [
      {
        id: "la-tuzigh", titre: "Ne fais pas dévier nos cœurs",
        ar: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
        tr: "Rabbanâ lâ tuzigh qulûbanâ ba'da idh hadaytanâ, wa hab lanâ min ladunka rahma, innaka anta l-Wahhâb.",
        fr: "Seigneur, ne fais pas dévier nos cœurs après nous avoir guidés, et accorde-nous de Ta part une miséricorde : c'est Toi le Donateur.",
        src: "Âl 'Imrân 8"
      },
      {
        id: "walidayn", titre: "Pour ses parents",
        ar: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        tr: "Rabbi rhamhumâ kamâ rabbayânî saghîrâ.",
        fr: "Seigneur, fais-leur miséricorde comme ils m'ont élevé tout petit.",
        src: "al-Isrâ' 24"
      },
      {
        id: "qurrata-ayun", titre: "Pour son foyer",
        ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
        tr: "Rabbanâ hab lanâ min azwâjinâ wa dhurriyyâtinâ qurrata a'yun, wa j'alnâ li-l-muttaqîna imâmâ.",
        fr: "Seigneur, fais que nos épouses et nos descendants soient la joie de nos yeux, et fais de nous un modèle pour les pieux.",
        src: "al-Furqân 74"
      },
      {
        id: "zidni-ilma", titre: "Pour la science",
        ar: "رَبِّ زِدْنِي عِلْمًا",
        tr: "Rabbi zidnî 'ilmâ.",
        fr: "Seigneur, accrois ma science.",
        src: "Tâ-Hâ 114"
      },
      {
        id: "ishrah", titre: "Avant de prendre la parole — l'invocation de Mûsâ",
        ar: "رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي، يَفْقَهُوا قَوْلِي",
        tr: "Rabbi shrah lî sadrî, wa yassir lî amrî, wa hlul 'uqdatan min lisânî, yafqahû qawlî.",
        fr: "Seigneur, ouvre-moi la poitrine, facilite-moi ma tâche, et dénoue un nœud de ma langue, afin qu'ils comprennent ma parole.",
        src: "Tâ-Hâ 25-28"
      },
      {
        id: "muqim-as-salat", titre: "Pour la prière, la sienne et celle de ses enfants",
        ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
        tr: "Rabbi j'alnî muqîma s-salâti wa min dhurriyyatî, rabbanâ wa taqabbal du'â'.",
        fr: "Seigneur, fais que j'accomplisse la prière, ainsi qu'une partie de ma descendance. Seigneur, accepte mon invocation.",
        src: "Ibrâhîm 40"
      },
      {
        id: "la-tuakhidhna", titre: "La fin d'al-Baqara",
        ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا",
        tr: "Rabbanâ lâ tu'âkhidhnâ in nasînâ aw akhta'nâ.",
        fr: "Seigneur, ne nous tiens pas rigueur si nous oublions ou commettons une erreur.",
        src: "al-Baqara 286",
        quand: "À chaque demande de ce verset, Allah répondit : « Je l'ai fait » (Muslim — Ibn 'Abbâs)."
      },
      {
        id: "faqir", titre: "Quand on n'a plus rien — l'invocation de Mûsâ à Madyan",
        ar: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        tr: "Rabbi innî limâ anzalta ilayya min khayrin faqîr.",
        fr: "Seigneur, j'ai grand besoin du bien que Tu feras descendre vers moi.",
        src: "al-Qasas 24",
        quand: "Fugitif, affamé, assis à l'ombre après avoir aidé deux inconnues : dans les versets qui suivent, il reçoit un toit, un travail et une épouse."
      }
    ]
  },
  {
    id: "sira", fr: "Dans la Sīra", ar: "أدعية السيرة",
    intro: "Des invocations que l'on rencontre au fil des cours, à l'endroit exact où elles ont été dites.",
    items: [
      {
        id: "taif", titre: "À Tâ'if, adossé à un mur, les pieds en sang", sira: 30,
        ar: "اللَّهُمَّ إِلَيْكَ أَشْكُو ضَعْفَ قُوَّتِي، وَقِلَّةَ حِيلَتِي، وَهَوَانِي عَلَى النَّاسِ، يَا أَرْحَمَ الرَّاحِمِينَ، أَنْتَ رَبُّ الْمُسْتَضْعَفِينَ وَأَنْتَ رَبِّي، إِلَى مَنْ تَكِلُنِي؟ إِلَى بَعِيدٍ يَتَجَهَّمُنِي، أَمْ إِلَى عَدُوٍّ مَلَّكْتَهُ أَمْرِي؟ إِنْ لَمْ يَكُنْ بِكَ عَلَيَّ غَضَبٌ فَلَا أُبَالِي، وَلَكِنَّ عَافِيَتَكَ هِيَ أَوْسَعُ لِي. أَعُوذُ بِنُورِ وَجْهِكَ الَّذِي أَشْرَقَتْ لَهُ الظُّلُمَاتُ، وَصَلَحَ عَلَيْهِ أَمْرُ الدُّنْيَا وَالْآخِرَةِ، مِنْ أَنْ تُنْزِلَ بِي غَضَبَكَ، أَوْ يَحِلَّ عَلَيَّ سَخَطُكَ، لَكَ الْعُتْبَى حَتَّى تَرْضَى، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِكَ",
        tr: "Allâhumma ilayka ashkû da'fa quwwatî, wa qillata hîlatî, wa hawânî 'alâ n-nâs, yâ arhama r-râhimîn, anta rabbu l-mustad'afîna wa anta rabbî, ilâ man takilunî ? ilâ ba'îdin yatajahhamunî, am ilâ 'aduwwin mallaktahu amrî ? In lam yakun bika 'alayya ghadabun fa-lâ ubâlî, wa lâkinna 'âfiyataka hiya awsa'u lî. A'ûdhu bi-nûri wajhika lladhî ashraqat lahu z-zulumât, wa salaha 'alayhi amru d-dunyâ wa l-âkhira, min an tunzila bî ghadabak, aw yahilla 'alayya sakhatuk, laka l-'utbâ hattâ tardâ, wa lâ hawla wa lâ quwwata illâ bik.",
        fr: "Ô Allah, c'est à Toi que je me plains de la faiblesse de ma force, du peu de mes moyens et du mépris des gens pour moi. Ô le plus Miséricordieux des miséricordieux, Tu es le Seigneur des opprimés et Tu es mon Seigneur. À qui me confies-Tu ? À un étranger qui me renfrogne le visage, ou à un ennemi à qui Tu as donné pouvoir sur moi ? Si Tu n'es pas en colère contre moi, peu m'importe — mais Ta préservation m'est plus large. Je cherche refuge auprès de la lumière de Ta Face, par laquelle les ténèbres s'illuminent et par laquelle s'arrange l'affaire d'ici-bas et de l'au-delà, contre le fait que Ta colère s'abatte sur moi ou que Ton courroux me frappe. À Toi de me reprendre jusqu'à ce que Tu sois satisfait. Il n'y a de force ni de puissance que par Toi.",
        src: "Ibn Ishâq (Sīra d'Ibn Hishâm), at-Tabarânî",
        quand: "Texte célèbre des livres de Sīra ; des savants du hadith jugent sa chaîne faible. Il est cité ici comme récit de Sīra, tel que le cours 30 le rapporte."
      },
      {
        id: "hijra-mudkhal", titre: "À l'heure de l'émigration", sira: 42,
        ar: "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ، وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ، وَاجْعَلْ لِي مِنْ لَدُنْكَ سُلْطَانًا نَصِيرًا",
        tr: "Rabbi adkhilnî mudkhala sidq, wa akhrijnî mukhraja sidq, wa j'al lî min ladunka sultânan nasîrâ.",
        fr: "Seigneur, fais-moi entrer d'une entrée de vérité, fais-moi sortir d'une sortie de vérité, et accorde-moi de Ta part un pouvoir secourable.",
        src: "al-Isrâ' 80 — at-Tirmidhî — Ibn 'Abbâs",
        quand: "Ibn 'Abbâs : « Le Prophète ﷺ était à La Mecque, puis il reçut l'ordre d'émigrer, et ce verset descendit. »"
      },
      {
        id: "badr", titre: "La nuit de Badr, les mains levées jusqu'à ce que son manteau tombe", sira: 60,
        ar: "اللَّهُمَّ أَنْجِزْ لِي مَا وَعَدْتَنِي، اللَّهُمَّ آتِ مَا وَعَدْتَنِي، اللَّهُمَّ إِنْ تُهْلِكْ هَذِهِ الْعِصَابَةَ مِنْ أَهْلِ الْإِسْلَامِ لَا تُعْبَدْ فِي الْأَرْضِ",
        tr: "Allâhumma anjiz lî mâ wa'adtanî, Allâhumma âti mâ wa'adtanî, Allâhumma in tuhlik hâdhihi l-'isâbata min ahli l-islâmi lâ tu'bad fî l-ard.",
        fr: "Ô Allah, accomplis pour moi ce que Tu m'as promis. Ô Allah, donne ce que Tu m'as promis. Ô Allah, si Tu fais périr cette troupe de gens de l'islam, Tu ne seras plus adoré sur terre.",
        src: "Muslim — 'Umar ibn al-Khattâb",
        quand: "Trois cents et quelques hommes face à mille. Abû Bakr ramassa son manteau, le lui remit sur les épaules : « Ô Prophète d'Allah, cela suffit, ton Seigneur accomplira ce qu'Il t'a promis. » Alors descendit : « Je vais vous aider d'un millier d'anges » (al-Anfâl 9)."
      }
    ]
  }
];

/* Les règles de l'invocation — affichées en tête de la page des invocations */
const DUAS_ADAB = {
  regles: [
    "Commencer par <b>louer Allah</b> et prier sur le Prophète ﷺ : un homme invoqua sans cela — « celui-ci s'est précipité » (Abû Dâwûd, at-Tirmidhî).",
    "Invoquer <b>avec certitude</b> et d'un cœur présent : « Invoquez Allah en étant certains d'être exaucés ; Allah n'exauce pas l'invocation d'un cœur distrait » (at-Tirmidhî).",
    "<b>Insister</b>, répéter trois fois, ne pas s'impatienter : « On est exaucé tant qu'on ne dit pas : j'ai invoqué et je n'ai pas été exaucé » (Bukhârî et Muslim).",
    "Lever les mains, face à la qibla, à voix basse : « Invoquez votre Seigneur avec humilité et discrétion » (al-A'râf 55).",
    "Veiller au <b>licite</b> : l'homme aux mains levées dont la nourriture est illicite — « comment serait-il exaucé ? » (Muslim)."
  ],
  moments: [
    "Le <b>dernier tiers de la nuit</b> (Bukhârî et Muslim).",
    "Dans la <b>prosternation</b> (Muslim).",
    "Entre l'<b>adhân et l'iqâma</b> (Abû Dâwûd, at-Tirmidhî).",
    "La dernière heure du <b>vendredi</b>, après le 'Asr (Abû Dâwûd, an-Nasâ'î).",
    "Le <b>jeûneur</b> jusqu'à la rupture, le <b>voyageur</b>, l'<b>opprimé</b>, le parent pour son enfant (at-Tirmidhî).",
    "Pour son frère <b>en son absence</b> : un ange dit « âmîn, et pour toi la même chose » (Muslim)."
  ]
};

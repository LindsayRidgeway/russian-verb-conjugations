// Essential Russian Verbs - Part 7 (учить, сказать)
addVerbData({
  // Teach/Learn (memorize)
  "учить/выучить": {
    infinitive: "учить/выучить",
    english: "teach/learn (memorize)",
    imperfective: "учить",
    perfective: "выучить",
    groups: ["essential"],
    conjugations: {
      past: {
        imperfective: {
          "1sg_m": { russian: "я учил", english: "I was teaching/learning (masc.)" },
          "1sg_f": { russian: "я учила", english: "I was teaching/learning (fem.)" },
          "2sg_m": { russian: "ты учил", english: "you were teaching/learning (masc.)" },
          "2sg_f": { russian: "ты учила", english: "you were teaching/learning (fem.)" },
          "3sg_m": { russian: "он учил", english: "he was teaching/learning" },
          "3sg_f": { russian: "она учила", english: "she was teaching/learning" },
          "3sg_n": { russian: "оно учило", english: "it was teaching/learning" },
          "1pl": { russian: "мы учили", english: "we were teaching/learning" },
          "2pl": { russian: "вы учили", english: "you were teaching/learning" },
          "3pl": { russian: "они учили", english: "they were teaching/learning" }
        },
        perfective: {
          "1sg_m": { russian: "я выучил", english: "I learned/memorized (masc.)" },
          "1sg_f": { russian: "я выучила", english: "I learned/memorized (fem.)" },
          "2sg_m": { russian: "ты выучил", english: "you learned/memorized (masc.)" },
          "2sg_f": { russian: "ты выучила", english: "you learned/memorized (fem.)" },
          "3sg_m": { russian: "он выучил", english: "he learned/memorized" },
          "3sg_f": { russian: "она выучила", english: "she learned/memorized" },
          "3sg_n": { russian: "оно выучило", english: "it learned/memorized" },
          "1pl": { russian: "мы выучили", english: "we learned/memorized" },
          "2pl": { russian: "вы выучили", english: "you learned/memorized" },
          "3pl": { russian: "они выучили", english: "they learned/memorized" }
        }
      },
      present: {
        imperfective: {
          "1sg": { russian: "я учу", english: "I teach/learn/am teaching" },
          "2sg": { russian: "ты учишь", english: "you teach/learn/are teaching" },
          "3sg": { russian: "он/она учит", english: "he/she teaches/learns/is teaching" },
          "1pl": { russian: "мы учим", english: "we teach/learn/are teaching" },
          "2pl": { russian: "вы учите", english: "you teach/learn/are teaching" },
          "3pl": { russian: "они учат", english: "they teach/learn/are teaching" }
        }
      },
      future: {
        imperfective: {
          "1sg": { russian: "я буду учить", english: "I will be teaching/learning" },
          "2sg": { russian: "ты будешь учить", english: "you will be teaching/learning" },
          "3sg": { russian: "он/она будет учить", english: "he/she will be teaching/learning" },
          "1pl": { russian: "мы будем учить", english: "we will be teaching/learning" },
          "2pl": { russian: "вы будете учить", english: "you will be teaching/learning" },
          "3pl": { russian: "они будут учить", english: "they will be teaching/learning" }
        },
        perfective: {
          "1sg": { russian: "я выучу", english: "I will learn/memorize" },
          "2sg": { russian: "ты выучишь", english: "you will learn/memorize" },
          "3sg": { russian: "он/она выучит", english: "he/she will learn/memorize" },
          "1pl": { russian: "мы выучим", english: "we will learn/memorize" },
          "2pl": { russian: "вы выучите", english: "you will learn/memorize" },
          "3pl": { russian: "они выучат", english: "they will learn/memorize" }
        }
      }
    }
  },

  // Say (perfective form as standalone)
  "сказать/сказать": {
    infinitive: "сказать",
    english: "say/tell",
    imperfective: "сказать",
    perfective: "сказать", 
    groups: ["essential"],
    conjugations: {
      past: {
        perfective: {
          "1sg_m": { russian: "я сказал", english: "I said/told (masc.)" },
          "1sg_f": { russian: "я сказала", english: "I said/told (fem.)" },
          "2sg_m": { russian: "ты сказал", english: "you said/told (masc.)" },
          "2sg_f": { russian: "ты сказала", english: "you said/told (fem.)" },
          "3sg_m": { russian: "он сказал", english: "he said/told" },
          "3sg_f": { russian: "она сказала", english: "she said/told" },
          "3sg_n": { russian: "оно сказало", english: "it said/told" },
          "1pl": { russian: "мы сказали", english: "we said/told" },
          "2pl": { russian: "вы сказали", english: "you said/told" },
          "3pl": { russian: "они сказали", english: "they said/told" }
        }
      },
      future: {
        perfective: {
          "1sg": { russian: "я скажу", english: "I will say/tell" },
          "2sg": { russian: "ты скажешь", english: "you will say/tell" },
          "3sg": { russian: "он/она скажет", english: "he/she will say/tell" },
          "1pl": { russian: "мы скажем", english: "we will say/tell" },
          "2pl": { russian: "вы скажете", english: "you will say/tell" },
          "3pl": { russian: "они скажут", english: "they will say/tell" }
        }
      }
    }
  }
});
const TEST_DATA = {
    // Reading, Part 1
    'reading-pt1-gap1': {
        correct: 'университетe', level: 'A1–',
        topic: 'The Prepositional case for place (A1–): when we\'re talking about a place (<em>где?</em>), we use the Prepositional case (<em>ком?/чём?</em>) with the preposition <strong>в</strong> or <strong>на</strong>. The word <strong>университет</strong> is masculine, so in the Prepositional case, it gets the ending <strong>-е</strong>.'
    },
    'reading-pt1-gap2': {
        correct: 'работаю', level: 'A1–',
        topic: 'Basic present tense verb conjugation (A1–): when saying "I do X," we use a conjugated form of the verb (predicate). The verb <strong>работать</strong> is a Type I verb (e-conjugation), and when used in the 1st person singular, it gets the ending <strong>-ю</strong>.'
    },
    'reading-pt1-gap3': {
        correct: 'журнал', level: 'A1–',
        topic: 'The Accusative сase for direct objects (A1–): we use the Accusative case with direct objects (when you do something <em>to</em> an object). The word <strong>журнал</strong> is a masculine, inanimate noun, so its Accusative form is the same as its Nominative form.'
    },
    'reading-pt1-gap4': {
        correct: 'мою', level: 'A1–',
        topic: 'Possessive pronouns (A1–): the possessive pronoun <strong>мой</strong> agrees with nouns in gender, number, and case. The word <strong>профессия</strong> is feminine, which is why it becomes <strong>моя</strong>. In the sentence it\'s used in the Accusative case, so you make моя agree with the Accusative noun and get <strong>мою</strong>.'
    },
    'reading-pt1-gap5': {
        correct: 'изучать', level: 'A1–',
        topic: 'Using infinitives after verbs (A1–): when a verb like <strong>любить</strong> or <strong>мочь</strong> is followed by another verb, the construction is \'conjugated verb + infinitive.\' That’s how you get <strong>[он] любит изучать</strong>.'
    },
    'reading-pt1-gap6': {
        correct: 'по-английски, по-итальянски и по-немецки', level: 'A1–',
        topic: 'Adverbs from languages (A1–): to show what language someone is speaking, we use an adverbial expression formed from the name of the language. It takes the prefix <strong>по-</strong> and the suffix <strong>-и</strong>, and it doesn\'t have an ending because it doesn\'t change.'
    },
    'reading-pt1-gap7': {
        correct: 'ходит', level: 'A1+',
        topic: 'Basic verbs of motion in daily actions (A1+): when describing an action that is regularly repeated, we use the verbs of motion from the <strong>ходить</strong> group. In this sentence we need a conjugated verb form, which is why we get <strong>[он] ходит</strong>.'
    },
    'reading-pt1-gap8': {
        correct: 'есть', level: 'A1–',
        topic: 'The Genitive case for possession (A1–): when we say that we have something, we use the verb <strong>есть</strong> and a noun in the Genitive case, following the construction \'у + noun in the Genitive case + есть.\''
    },
    'reading-pt1-gap9': {
        correct: 'рядом', level: 'A2–',
        topic: 'The use of prepositions and basic adverbs of place (A1-A2): the word <strong>рядом</strong> is always used with the preposition <strong>с</strong>. When we use the preposition <strong>с</strong> to express togetherness, it always takes the Instrumental case.'
    },
    'reading-pt1-gap10': {
        correct: 'два', level: 'A1+',
        topic: 'Agreement of numerals 1-4 (A1+): the numerals <strong>один, два, три, четыре</strong> have a special rule to follow — we need a Genitive noun, singular form. The numerals <strong>один</strong> and <strong>два</strong> also change depending on the gender of the noun. The word <strong>этаж</strong> is masculine, so we use the masculine form of <strong>два</strong> and the Genitive singular form of <strong>этаж</strong> to get <strong>два этажа</strong>.'
    },
    'reading-pt1-gap11': {
        correct: 'комнат', level: 'A1+',
        topic: 'Agreement of numerals 5, 6, 7... (A1+): for the numerals <strong>пять, шесть, семь...</strong>, we need a Genetive plural noun. That\'s why we use <strong>семь</strong> + the plural noun <strong>комнаты</strong> in the Genitive to get <strong>семь комнат</strong>.'
    },
    'reading-pt1-gap12': {
        correct: 'гостиной', level: 'A1–',
        topic: 'Vocabulary for rooms in an apartment or house (A1–).'
    },
    'reading-pt1-gap13': {
        correct: 'детьми', level: 'A1+',
        topic: 'The Instrumental case togetherness (A1+): the preposition <strong>с</strong> (when means togetherness) always needs the Instrumental case. It\'s also important to remember that some words have special plural forms, and the word <strong>дети</strong> is one such exception.'
    },
    'reading-pt1-gap14': {
        correct: 'умная', level: 'A1–',
        topic: 'Basic descriptive vocabulary (adjectives) for a simple description of a person, an animal, or an object (A1–).'
    },
    'reading-pt1-gap15': {
        correct: 'ужин', level: 'A1+',
        topic: 'Vocabulary for daily activities: work, study, rest, breakfast, lunch, dinner, and so on (A1+).'
    },
    'reading-pt1-q1': {
        correct: 'В офисе', level: 'A1+',
        topic: 'Understanding facts in a text, using the question word <strong>где?</strong> (A1+): you can find the answer to this question in sentence 3 of text 1: А я программист, я работаю <strong>в офисе</strong>.'
    },
    'reading-pt1-q2': {
        correct: 'Изучать языки и читать', level: 'A1+',
        topic: 'Understanding facts in a text, using the question word <strong>что?</strong> (A1+): you can find the answer to this question in sentences 7 and 9 of text 1: Он любит <strong>изучать языки</strong>. <…> Ещё он любит <strong>читать</strong>.'
    },
    'reading-pt1-q3': {
        correct: 'Завтракает и читает', level: 'A1+',
        topic: 'Understanding facts in a text and time markers (A1+): you can find the answer to this question in sentence 4 of text 1: Каждый день я встаю рано утром, <strong>завтракаю и читаю</strong> журнал.'
    },

    // Reading, Part 2
    'reading-pt2-gap1': {
        correct: 'решил', level: 'A2–',
        topic: 'Verb aspect in the past tense (A2–): to show a completed action in the past, we use a <strong>perfective</strong> verb in the past tense.'
    },
    'reading-pt2-gap2': {
        correct: 'была', level: 'A1+',
        topic: 'The linking verb (A1+): the linking verb <strong>быть</strong> in the past tense agrees with the subject’s gender and number. The words <strong>погода</strong> is feminine, so we use <strong>была</strong>.'
    },
    'reading-pt2-gap3': {
        correct: 'захотел', level: 'A2–',
        topic: 'Perfective verbs (A2–): the prefix <strong>за-</strong> is used here to show that an action has just begun. '
    },
    'reading-pt2-gap4': {
        correct: 'по', level: 'A2+',
        topic: 'Confident use of cases with prepositions (A2+): to describe movement on a surface, we use the preposition <strong>по</strong> with the Dative case.'
    },
    'reading-pt2-gap5': {
        correct: 'зашёл', level: 'A2+',
        topic: 'Distinguishing prefixed verbs of motion (A2+): we use the prefix <strong>за-</strong> to show that a person entered a place for a short time while they were going somewhere else or doing something else.'
    },
    'reading-pt2-gap6': {
        correct: 'открылся', level: 'A2+',
        topic: 'Reflexive verbs for a passive meaning, the wors который (A2+): we use reflexive verbs with the postfixes <strong>-ся/-сь</strong> to describe an action without saying who did it (as if the action happened on its own). This construction shows that the object was the reason for the action, or that the action happened to it without anyone\'s direct involvement. Also, here we agree the predicate not with the subject of the main clause (музей), but with its “representative” in the subordinate clause (the word который).'
    },
    'reading-pt2-gap7': {
        correct: 'интересных', level: 'A2+',
        topic: 'Common adjectives to describe things, choosing an adjective that fits the context (A2+).'
    },
    'reading-pt2-gap8': {
        correct: 'встретился', level: 'A2–',
        topic: 'Basic reflexive verbs (A2–): to describe a two-way (“reciprocal”) action, we use reflexive verbs with the postfix <strong>-ся/-сь</strong>.'
    },
    'reading-pt2-gap9': {
        correct: 'которого', level: 'A2–',
        topic: 'The word <strong>который</strong> (A2–): to avoid repeating the subject in a complex sentence, we use the word <strong>который</strong>. In this sentence, <strong>который</strong> replaces the noun from the first part of the sentence and so it has the same gender, number, and case.'
    },
    'reading-pt2-gap10': {
        correct: 'сидели', level: 'A2+',
        topic: 'Perfective vs. imperfective verbs (A2+): when we want to express that an action lasted for some time (a process), rather than being a single event (a fact), we use the <strong>imperfective</strong>.'
    },
    'reading-pt2-gap11': {
        correct: 'долго', level: 'A2+',
        topic: 'Confident use of common adverbs, choosing an adverb that expresses the duration of an action (A2+).'
    },
    'reading-pt2-gap12': {
        correct: 'пришёл', level: 'A2+',
        topic: 'Distinguishing prefixed verbs of motion (A2+): we use the prefix <strong>при-</strong> to show that a movement has been completed and has reached its final destination.'
    },
    'reading-pt2-gap13': {
        correct: 'в', level: 'A2+',
        topic: 'Prepositions in set expressions (A2+): we use the preposition в to show not only a physical location, but also to show being part of or inside a group (в компании, в группе, etc.).'
    },
    'reading-pt2-q1': {
        correct: 'В центр города', level: 'A2+',
        topic: 'The question word <strong>куда?</strong> for movement and purpose (A2+): the answer to this question is in sentence 1 of text 2.'
    },
    'reading-pt2-q2': {
        correct: 'Смотрел картины', level: 'A2+',
        topic: 'Finding facts about actions (A2+): by analysing the information in sentences 3 and 4, we can make a conclusion about what the narrator did.'
    },
    'reading-pt2-q3': {
        correct: 'О планах на жизнь', level: 'A2–',
        topic: 'The preposition <strong>о</strong> (A2–): we use the preposition <strong>о</strong> with the Prepositional case to show what a conversation or question is about.'
    },


    // Reading, Part 3
    'reading-pt3-gap1': {
        correct: 'посетила', level: 'A2+',
        topic: 'Distinguishing verbs of motion and visiting with their aspectual and semantic nuances (A2+): to describe a single, purposeful visit to some place, we use the verb <strong>посетить</strong>.'
    },
    'reading-pt3-gap2': {
        correct: 'маленьким', level: 'A2+',
        topic: 'Adjective agreement (A2+): the adjective <strong>маленький</strong> agrees with the noun <strong>мячик</strong>, which is in the Instrumental case, so it has the ending <strong>-им</strong>.'
    },
    'reading-pt3-gap3': {
        correct: 'а', level: 'A2+',
        topic: 'The conjunction <strong>а</strong> (A2+): we use the conjunction <strong>а</strong> to compare or contrast two simple sentences and/or show a difference between two ideas/things.'
    },
    'reading-pt3-gap4': {
        correct: 'было', level: 'A2+',
        topic: 'Impersonal sentences with было (A2+): to talk about past states or evaluations, we use an impersonal sentence with <strong>было</strong>.'
    },
    'reading-pt3-gap5': {
        correct: 'потому что', level: 'A2–',
        topic: 'The conjunction <strong>потому что</strong> (A2–): we use <strong>потому что</strong> to explain why something happened. It links two simple sentences, with the main one being the result and the second one being the reason.'
    },
    'reading-pt3-gap6': {
        correct: 'заметила', level: 'A2+',
        topic: 'Choosing context-appropriate vocabulary (A2+): all three verbs — <em>заметить, приметить, and подметить</em> — have the meaning \'to see something\'. But the word <strong>вдруг</strong> here creates a context of a sudden, unplanned action, and the verb <strong>заметить</strong> is the best way to express this.'
    },
    'reading-pt3-gap7': {
        correct: 'меньше', level: 'A2+',
        topic: 'The comparative degree (A2+): when we compare things, we use the construction <strong>\'comparative form with -ее + чем…\'</strong> But some words (<em>маленький, большой, долгий</em>, and others) have irregular comparative forms.'
    },
    'reading-pt3-gap8': {
        correct: 'самым грустным', level: 'B1–',
        topic: 'Complex superlative forms (B1–): to show the highest level of a quality, we use the superlative. The phrase <strong>из всех</strong> implies a comparison to a whole group, which means we need the complex superlative form <strong>\'самый + Nominative adjective.\'</strong>'
    },
    'reading-pt3-gap9': {
        correct: 'почувствовала', level: 'B1–',
        topic: 'Verbs for internal states (B1–): based on the context, we can conclude that the character made a choice based on intuition, not on external factors. The verb <strong>почувствовать</strong> is the only one that works to describe this kind of inner understanding.'
    },
    'reading-pt3-gap10': {
        correct: 'подошла', level: 'B1–',
        topic: 'Verbs of motion with the prefixes (B1–): to show approaching an object, we use the prefix <strong>под-/подо-</strong>.'
    },
    'reading-pt3-gap11': {
        correct: 'обняла', level: 'B1–',
        topic: 'Verb aspects for a sequence of events (B1–): when we want to show a single, completed action within a series of sequential actions, we use a <strong>perfective</strong> verb.'
    },
    'reading-pt3-gap12': {
        correct: 'буду любить', level: 'B1–',
        topic: 'Imperfective verbs in the future tense (B1–): we use the complex future tense, formed by <strong>быть + the infinitive of the main verb</strong>, to show a long-lasting or continuous action in the future.'
    },
    'reading-pt3-q1': {
        correct: 'все котята нуждались в доме', level: 'A2+',
        topic: 'Understanding cause and effect (A2+): by analysing sentence 4 of text 3 we can find the answer to this question.'
    },
    'reading-pt3-q2': {
        correct: 'особенный', level: 'B1+',
        topic: 'Understanding what a text implies (B1+): to find the answer to this question, we need to analyse sentences 5-7 of text 3.'
    },
    'reading-pt3-q3': {
        correct: 'нежность и теплоту', level: 'B1–',
        topic: 'Interpreting emotions (B1–): we can understand what the character is feeling by analysing sentences 5-8 of text 3.'
    },


    // Reading, Part 4
    'reading-pt4-gap1': {
        correct: 'из-за которого', level: 'B2',
        topic: 'Subordinate clauses of reason (B2): <strong>из-за которого</strong> is the only construction that both expresses a cause-and-effect relationship and agrees with the noun <strong>состояние</strong> (neuter, singular). It shows that the state itself is the reason.'
    },
    'reading-pt4-gap2': {
        correct: 'ничего', level: 'B1–',
        topic: 'Double negation for complete absence (B1–): to show a complete absence of something in a negative sentence, we use the double negation form <strong>\'не + a negative pronoun\'</strong>.'
    },
    'reading-pt4-gap3': {
        correct: 'проявляется', level: 'B1–',
        topic: 'Choosing reflexive verbs (B1–): to talk about a process that happens on its own, with no external force, we use a reflexive verb with the suffix <strong>-ся/-сь</strong>. The verb <strong>проявляется</strong> works best here because it shows that <strong>выгорание</strong> is becoming obvious.'
    },
    'reading-pt4-gap4': {
        correct: 'девяти', level: 'B1+',
        topic: 'Cardinal numerals with <strong>более</strong> (B1+): after the word <strong>более</strong>, a cardinal numeral takes the Genitive case.'
    },
    'reading-pt4-gap5': {
        correct: 'несут', level: 'B1+',
        topic: 'Set expressions (B1+): <strong>нести ответственность</strong> is a set expression, so the verb <strong>нести</strong> be replaced by any other verb.'
    },
    'reading-pt4-gap6': {
        correct: 'справиться', level: 'B1+',
        topic: 'Set expressions (B1+): the phrase <strong>справиться с</strong> + Instrumental noun is a fixed phrase. No other offered verb is used with the preposition с to mean \'to overcome something\'.'
    },
    'reading-pt4-gap7': {
        correct: 'понять', level: 'B1–',
        topic: 'Choosing a verb appropriate to the context (B1–): to express the cognitive process of realising or grasping the reasons for something we use the verb <strong>понять</strong>.'
    },
    'reading-pt4-gap8': {
        correct: 'достаточно', level: 'B2',
        topic: 'Adverbs of degree, quantity, and measure (B2): we use the adverb <strong>достаточно</strong> (\'enough\') to show that an action or amount is adequate and no extra effort is needed.'
    },
    'reading-pt4-gap9': {
        correct: 'взять', level: 'B1+',
        topic: 'Set expressions (B1+): <strong>брать/взять отпуск</strong> is a set expression. Since a one-time action is implied in this context, we use the perfective verb.'
    },
    'reading-pt4-gap10': {
        correct: 'также', level: 'B1–',
        topic: 'Adverbs of addition or reinforcement (B1–): we use the adverb <strong>также</strong> to add new information that is just as important as what has already been said. It connects pieces of information and adds new details.'
    },
    'reading-pt4-gap11': {
        correct: 'можете', level: 'B1–',
        topic: 'Modal verbs (B1–): the sentence is about a process that lasts for some time (and not a single action), so we use the imperfective conjugated <strong>можете</strong>.'
    },
    'reading-pt4-gap12': {
        correct: 'обратитесь', level: 'B1+',
        topic: 'Set expressions and collocations (B1+): the expression <strong>обратиться к</strong> + Dative case is a set expression that means \'to ask for help, ask a question, or make a request to someone\'.'
    },
    'reading-pt4-q1': {
        correct: 'полностью истощает', level: 'B2',
        topic: 'Analysis and generalisation of information (B2): we can get the answer to this question by analysing sentence 2 of text 4.'
    },
    'reading-pt4-q2': {
        correct: 'слишком много работают', level: 'B1–',
        topic: 'Understanding details, cause-and-effect relationships, and logical connections (B1–): we can get the answer to this question by analysing sentence 3 of text 4.'
    },
    'reading-pt4-q3': {
        correct: 'Обратиться за помощью', level: 'B1–',
        topic: 'Understanding conditional constructions (B1–): the answer to this question is in sentence 7 of text 4.'
    },
    'reading-pt4-q4': {
        correct: 'Приоритет заботы о себе', level: 'C1',
        topic: 'Generalising and identifying the main idea (B2–C1): we can get the answer to this question by analysing sentences 4-7 of text 4.'
    },

    // Reading, Part 5
    'reading-pt5-gap1': {
        correct: 'уверенно', level: 'B1–',
        topic: 'Adverbs with emotional-modal overtones (B1–): we use the adverb <strong>уверенно</strong> to describe a high degree of certainty, when the speaker does not doubt their words. It emphasizes firmness and a lack of hesitation in the statement.'
    },
    'reading-pt5-gap2': {
        correct: 'когда-либо', level: 'B1–',
        topic: 'The particles <strong>-то, -либо, кое-</strong> (B1–): we use the adverb <strong>когда-либо</strong> (in the meaning of \'at least once, at some time\') in combination with the superlative degree of an adjective to express an extreme or a generalisation.'
    },
    'reading-pt5-gap3': {
        correct: 'занимаюсь', level: 'B1–',
        topic: 'Set expressions (B1–): the verb <strong>заниматься</strong> with a noun in the Instrumental case is a set expression that means \'to have something as a main activity, profession, or hobby\'.'
    },
    'reading-pt5-gap4': {
        correct: 'открыл', level: 'B2',
        topic: 'Figurative meaning of words (B2): we use <strong>открыть в + Prepositional case</strong> metaphorically to express discovering a certain quality or feeling in oneself. It implies that a person realised or discovered something that was previously hidden.'
    },
    'reading-pt5-gap5': {
        correct: 'у меня появилась', level: 'B1–',
        topic: 'Impersonal sentences (B1–): the impersonal construction <strong>появиться у + Genitive case</strong> expresses “passive acquisition” (when a person got something without trying, as if it just appeared).'
    },
    'reading-pt5-gap6': {
        correct: 'попробовал сделать', level: 'B1–',
        topic: 'Verb aspects in infinitive constructions (B1–): the construction <strong>попробовать + perfective infinitive</strong> means \'to try to do something and finish it\'.'
    },
    'reading-pt5-gap7': {
        correct: 'оставляло желать лучшего', level: 'B2',
        topic: 'Idioms and set expressions (B2): we say that something <strong>оставляет желать лучшего</strong> (meaning its quality is not good) to express disappointment or a negative opinion about something in a polite way.'
    },
    'reading-pt5-gap8': {
        correct: 'совсем скоро', level: 'B2',
        topic: 'Adverb of time (B2): we use the phrase <strong>совсем скоро</strong> to show a quick but not immediate transition from one action to another.'
    },
    'reading-pt5-gap9': {
        correct: 'записался', level: 'B1–',
        topic: 'Synonymous verbs (B1–): the verb <strong>записаться на + Accusative case</strong> means \'to register for something\'.'
    },
    'reading-pt5-gap10': {
        correct: 'обучился', level: 'B1–',
        topic: 'Reflexive verbs (B1–): the verb <strong>обучиться + Dative case</strong> shows that a person learned a skill on their own. Other verbs that have a similar meaning don\'t take the Dative case.'
    },
    'reading-pt5-gap11': {
        correct: 'был замечен', level: 'B2',
        topic: 'The passive voice (passive participles) (B2): to form the passive voice, we use <strong>быть in the past tense + a short passive participle</strong>.'
    },
    'reading-pt5-gap12': {
        correct: 'дело всей моей жизни', level: 'B2',
        topic: 'Idioms and set expressions (B2): we use the idiom <strong>дело всей жизни</strong> to say that something is a person\'s main occupation, calling, or passion. It shows a deep personal attachment to an activity.'
    },
    'reading-pt5-gap13': {
        correct: 'не только', level: 'B2',
        topic: 'Correlative conjunctions (B2): we use the conjunction <strong>не только..., но и...</strong> to add and emphasise information, showing that the second part is just as important as the first.'
    },
    'reading-pt5-gap14': {
        correct: 'но и', level: 'B2',
        topic: 'Correlative conjunctions (B2): we use the conjunction <strong>не только..., но и...</strong> to add and emphasise information, showing that the second part is just as important as the first.'
    },
    'reading-pt5-q1': {
        correct: 'благодаря его первым снимкам', level: 'B2',
        topic: 'Understanding text details, identifying inconsistencies in a text (B2).'
    },
    'reading-pt5-q2': {
        correct: 'Случайность', level: 'B2',
        topic: 'Understanding hidden cause-and-effect relationships, interpreting and rephrasing information for generalisations (B2).'
    },
    'reading-pt5-q3': {
        correct: 'призвание', level: 'B2',
        topic: 'Analysis and synthesis of information, ability to combine information from different parts of the text to make a comprehensive conclusion (B2).'
    },
    'reading-pt5-q4': {
        correct: 'Случайные события', level: 'C1',
        topic: 'Formulating a conceptual conclusion: interpreting, summaring all the information, and formulating the core idea of the text (B2–C1).'
    },


    // Listening, Part 1
    'listening-pt1-q1': {
        correct: 'Неправда', level: 'A1–',
        topic: 'Direct statements (A1–): the audio says: “Грета из Швеции, но она <strong>живёт в России</strong>.”'
    },
    'listening-pt1-q2': {
        correct: 'Неправда', level: 'A2–',
        topic: 'Understanding time in a text (A1–A2): the audio says: “Я познакомилась с Гретой 2 года назад. <strong>Тогда мы обе работали в большом офисе</strong>.”'
    },
    'listening-pt1-q3': {
        correct: 'работает в студии', level: 'A2–',
        topic: 'Generalising characteristics, differentiating between past and present, differentiating details that are similar in meaning (A2–).'
    },
    // Listening, Part 2
    'listening-pt2-q1': {
        correct: 'Неправда', level: 'A2–',
        topic: 'Numerical ranges (A2–): the audio says: “Эта кошка весит примерно как маленький котёнок — <strong>от одного до полутора</strong> килограммов.”'
    },
    'listening-pt2-q2': {
        correct: 'Неправда', level: 'B1–',
        topic: 'Negation and contrast (A2–B1): the audio says: “В отличие от многих диких кошек, ржавая кошка <strong>живёт не на деревьях</strong>…”'
    },
    'listening-pt2-q3': {
        correct: 'быстро двигается', level: 'B1–',
        topic: 'Synthesizing information: comparing several details and understanding their how they are connected to choose the most complete and accurate statement (B1).'
    },
    // Listening, Part 3
    'listening-pt3-q1': {
        correct: 'Неправда', level: 'B1–',
        topic: 'Distinguishing the object of the statement, rhetorical question (B1–): in the audio, the author talks about general ideas, not about their personal ideas as being weird.'
    },
    'listening-pt3-q2': {
        correct: 'не совсем нормальный', level: 'B2',
        topic: 'Paraphrasing (B1–B2): the audio says: “Откройте соцсети и увидете идеальную семью. <…> И вы не можете сказать: "А мне это не интересно”. <…> Потому что, <strong>значит, с вами что-то так</strong>…”'
    },
    'listening-pt3-q3': {
        correct: 'перестать навязывать', level: 'C1',
        topic: 'Synthesis of information and identifying the main idea (B2–C1): the main idea of the audio can be generally expressed by the author\'s rhetorical question: “Может, просто надо отстать друг от друга и жить спокойно свою жизнь?”.'
    },

    // Grammar test
    'grammar-q1': {
        correct: 'работы', level: 'A1+',
        topic: 'The Genitive case for absence (A1+): to say that someone doesn\'t have something, we use the construction <strong>\'у + Gen. + нет + Gen.\'</strong>'
    },
    'grammar-q2': {
        correct: 'Моему другу', level: 'A1+',
        topic: 'The Dative case for age (A1+): when we talk about age, we use the construction <strong>\'Dat. + X лет/год/года.\'</strong> The word <strong>друг</strong> gets the ending <strong>-у</strong> in the Dative case, and the possessive pronoun <strong>мой</strong> agrees with the noun in both case and gender.'
    },
    'grammar-q3': {
        correct: 'читала', level: 'A1+',
        topic: 'Basic past tense (A1+): a verb in the past tense gets the suffix <strong>-л-</strong>, and its ending matches the subject’s gender or number. In this sentence, the subject (\'я\') is singular, so the only choice is <strong>читала.</strong>'
    },
    'grammar-q4': {
        correct: 'Какую', level: 'A1–',
        topic: 'Choosing between <strong>что?</strong> and <strong>какой?</strong> (A1-): when a question implies a choice, we most often use the question word <strong>какой?</strong> instead of <strong>что?</strong>'
    },
    'grammar-q5': {
        correct: 'нельзя', level: 'A1+',
        topic: 'Basic modal words (A1+): to talk about what is possible or impossible, and what is allowed or forbidden, we use the impersonal modal words <strong>можно</strong> and <strong>нельзя</strong>.'
    },
    'grammar-q6': {
        correct: 'дольше', level: 'A2–',
        topic: 'The comparative degree (A2–): when we compare things, we use the construction "comparative with <strong>-ее + чем…</strong>" But some words (for example, долгий, хороший, частый, and others) have irregular comparative forms.'
    },
    'grammar-q7': {
        correct: 'писала', level: 'A2–',
        topic: 'Basic understanding of verb aspect (A2–): to talk about an action in the past that wasn’t completed, we use a past tense <strong>imperfective</strong> verb.'
    },
    'grammar-q8': {
        correct: 'холодно', level: 'A2–',
        topic: 'Impersonal sentences (A1–A2): to describe states, we use impersonal constructions (without a subject), for example, <em>холодно, тепло, весело</em>.'
    },
    'grammar-q9': {
        correct: 'о', level: 'A2–',
        topic: 'The Prepositional case with the preposition <strong>о</strong> (A2–): when we want to show the topic of a conversation or thought, we use the preposition <strong>о</strong> with a noun in the Prepositional case.'
    },
    'grammar-q10': {
        correct: 'из-за', level: 'A2+',
        topic: 'The preposition <strong>из-за</strong> for cause (A2+): we use the preposition <strong>из-за</strong> with the Genitive case to show the reason for an action or event.'
    },
    'grammar-q11': {
        correct: 'предпочёл бы', level: 'B1–',
        topic: 'The subjunctive mood (B1–): to talk about a hypothetical wish, we use the subjunctive mood with the construction <strong>a past tense verb + бы</strong>.'
    },
    'grammar-q12': {
        correct: 'Мне кажется', level: 'B1–',
        topic: 'Introductory words (B1–): when we want to give a personal opinion or make a guess using the verb <strong>казаться</strong>, we use a pronoun in the Dative case.'
    },
    'grammar-q13': {
        correct: 'Расскажите', level: 'B1–',
        topic: 'Verbs of speech, polite forms (B1–): to respectfully ask someone to tell a detailed story about something, we address them using <strong>Вы</strong> and use the verb <strong>рассказать</strong> in the imperative mood.'
    },
    'grammar-q14': {
        correct: 'думая', level: 'B1+',
        topic: 'Adverbial participles (B1+): we use adverbial participles to describe a secondary action (an action that happens at the same time as the main one).'
    },
    'grammar-q15': {
        correct: 'что она хочет погулять со мной', level: 'B1–',
        topic: 'Basic indirect speech (B1–): to convey what another person said, we change the pronoun (so that it is clear whose words we are conveying) and place the indirect speech construction in a subordinate clause, which is connected to the main clause with the conjunction <strong>что</strong>.'
    },
    'grammar-q16': {
        correct: 'обнимают; целуются', level: 'B1–',
        topic: 'Reflexive verbs, verb aspects to express a sequence of actions (B1–): we use the imperfective verbs to describe a sequence of actions that are part of an ongoing process. A mutual action (an action that both people do to each other) can be shown in two ways: a) using a reflexive imperfective verb with <strong>-ся/-сь</strong>, or b) using a non-reflexive imperfective verb + the phrase <strong>друг друга</strong>.'
    },
    'grammar-q17': {
        correct: 'написавшие', level: 'B2',
        topic: 'Participles (B2): to describe a feature of an object based on an action that is happening now, we use a present active participle. This participle replaces a subordinate clause with the word <strong>который</strong>.'
    },
    'grammar-q18': {
        correct: 'пришлось', level: 'B2',
        topic: 'Impersonal constructions (B2): we use the impersonal construction <strong>\'Dative case + пришлось\'</strong> to show that a person did something not because they wanted to, but because they had to.'
    },
    'grammar-q19': {
        correct: 'несмотря на то, что', level: 'B2',
        topic: 'Concessive conjunctions (B2): we use the conjunction <strong>несмотря на то, что</strong> to express a concessive relationship (when one event or fact occurs despite another).'
    },
    'grammar-q20': {
        correct: 'Если бы у меня был твой номер', level: 'B2',
        topic: 'Conditional sentences (B2): we use the construction <strong>\'eсли бы… + a past tense verb with бы\'</strong> to show that an action would have happened if a certain condition had been fulfilled.'
    },
};


-- Insert words with types and meanings
INSERT INTO words (word_label, word_type_id) VALUES 
  ("Ubiquitous", 1),
  ("Ameliorate", 2),
  ("Quixotic", 3),
  ("Sycophant", 1),
  ("Cacophony", 4),
  ("Disparate", 1),
  ("Ephemeral", 2),
  ("Esoteric", 3),
  ("Exacerbate", 2),
  ("Facade", 1),
  ("Fastidious", 3),
  ("Garrulous", 2),
  ("Harangue", 1),
  ("Iconoclast", 3),
  ("Ineffable", 4),
  ("Juxtapose", 2),
  ("Languid", 3),
  ("Mellifluous", 2),
  ("Nefarious", 1),
  ("Obfuscate", 2),
  ("Pernicious", 3),
  ("Quandary", 1),
  ("Reticent", 3),
  ("Serendipity", 2),
  ("Taciturn", 3),
  ("Ubiquitous", 1),
  ("Voracious", 2),
  ("Wane", 1),
  ("Xenophobe", 3),
  ("Yuxtaposicion", 2),  -- Spanish for juxtaposition
  ("Zephyr", 1);

-- Insert meanings
INSERT INTO meanings (ar_synonym, en_meaning, example, word_id) VALUES
  ("واسع الانتشار", "Being present everywhere", "The ubiquitous use of smartphones", 1),
  ("تحسين", "Make (something bad or unsatisfactory) better", "Efforts to ameliorate the situation", 2),
  ("خيالي", "Exceedingly idealistic; unrealistic and impractical", "A quixotic pursuit of world peace", 3),
  ("متملق", "A person who acts obsequiously towards someone important", "The sycophant constantly praised the boss", 4),
  ("صوت مزعج", "A harsh, discordant mixture of sounds", "The cacophony of the busy city", 5),
  ("متفرد", "Essentially different in kind; not allowing comparison", "Disparate views on the issue", 6),
  ("قصير المدى", "Lasting for a very short time", "The ephemeral beauty of a sunset", 7),
  ("غامض", "Intended for or understood by only a small number of people", "Esoteric knowledge", 8),
  ("تفاقم", "Make (a problem, bad situation, or negative feeling) worse", "Attempts to exacerbate the tension", 9),
  ("واجهة خارجية", "Outward appearance that is maintained to conceal a less pleasant or creditable reality", "Behind the facade of success, there were struggles", 10),
  ("متأن", "Very attentive to and concerned about accuracy and detail", "A fastidious approach to design", 11),
  ("ثرثار", "Excessively talkative, especially on trivial matters", "The garrulous old man shared endless stories", 12),
  ("خطبة طويلة وعدوانية", "A lengthy and aggressive speech", "The politician delivered a harangue against corruption", 13),
  ("كسّار الأصنام", "A person who attacks or criticizes cherished beliefs or institutions", "The iconoclast challenged traditional norms", 14),
  ("لا يمكن وصفه بالكلمات", "Too great or extreme to be expressed or described in words", "The ineffable beauty of nature", 15),
  ("تجاور", "Place or deal with close together for contrasting effect", "Juxtapose the modern with the traditional", 16),
  ("كسول", "Displaying or having a disinclination for physical exertion or effort; slow and relaxed", "A languid summer afternoon", 17),
  ("حلو أو موسيقي; لطيف للسماع", "Sweet or musical; pleasant to hear", "The mellifluous tones of a violin", 18),
  ("شرير", "Wicked, villainous, or criminal", "A nefarious plot to overthrow the government", 19),
  ("جعل غامضًا أو غير واضح", "Render obscure, unclear, or unintelligible", "The author's attempt to obfuscate the meaning", 20),
  ("له تأثير ضار، خاصة بطريقة تدريجية أو دقيقة", "Having a harmful effect, especially in a gradual or subtle way", "The pernicious influence of gossip", 21),
  ("مأزق", "A state of perplexity or uncertainty over what to do in a difficult situation", "I found myself in a quandary", 22),
  ("ساكت", "Not revealing one's thoughts or feelings readily", "She was reticent about her personal life", 23),
  ("اللقاء السعيد الصدفي", "The occurrence and development of events by chance in a happy or beneficial way", "Serendipity led them to discover a hidden talent", 24),
  ("كتواضع", "Reserved or uncommunicative in speech; saying little", "The taciturn man rarely spoke at social gatherings", 25),
  ("واسع الانتشار", "Being present everywhere", "The ubiquitous use of smartphones", 26),
  ("جشع", "Wanting or devouring great quantities of food", "The voracious appetite of the athlete", 27),
  ("تضاءل", "Decrease in vigor, power, or extent; become weaker", "The moon's brightness began to wane", 28),
  ("كراهية أو تحامل تجاه الأجانب", "Dislike of or prejudice against people from other countries", "His xenophobia was evident in his remarks", 29),
  ("Yuxtaposicion", "Yuxtaposicion", "La yuxtaposición de estilos en la obra de arte", 30),
  ("نسيم خفيف", "A gentle, mild breeze", "The zephyr rustled the leaves in the trees", 31);

-- Insert additional meanings for words with more than one meaning
-- Word: Disparate
INSERT INTO meanings (ar_synonym, en_meaning, example, word_id) VALUES
  ('متنوع', 'Distinct and dissimilar', 'A disparate collection of artworks', 6);

-- Word: Ubiquitous
INSERT INTO meanings (ar_synonym, en_meaning, example, word_id) VALUES
  ('شائع', 'Present, appearing, or found everywhere', 'The ubiquitous nature of social media', 26);

-- Word: Juxtapose
INSERT INTO meanings (ar_synonym, en_meaning, example, word_id) VALUES
  ('مقارنة', 'Compare or contrast', 'Juxtapose different perspectives on the issue', 30);

-- Word: Fastidious
INSERT INTO meanings (ar_synonym, en_meaning, example, word_id) VALUES
  ('متطلب جدًا', 'Difficult to please; demanding', 'A fastidious eater who avoids certain foods', 27);

-- Word: Taciturn
INSERT INTO meanings (ar_synonym, en_meaning, example, word_id) VALUES
  ('صامت', 'Silent or uncommunicative in general', 'His taciturn demeanor made it hard to know his thoughts', 31);

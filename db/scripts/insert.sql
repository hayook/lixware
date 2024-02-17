-- Inserting words into the 'types' table
INSERT INTO types (type_label) VALUES
('Conjunction'),
('Interjection'),
('Adjective'),
('Adverb'),
('Noun'),
('Pronoun'),
('Preposition'),
('Verb');

-- Inserting words into the 'words' table
INSERT INTO words (word_label, word_type_id) VALUES
('Over', 5),
('Quickly', 4),
('Ocean', 1),
('But', 1), -- 
('Run', 2),
('Slowly', 4),
('Mountain', 1),
('Swim', 2),
('Jump', 2),
('Happy', 3),
('I', 6), -- 
('Loudly', 4),
('Beautiful', 3),
('Oh', 2), -- 
('They', 6),
('Colorful', 3),
('And', 1), -- 
('Apple', 1),
('Wow', 2), -- 
('Under', 5);

-- Inserting example meanings into the 'meanings' table
INSERT INTO meanings (ar_synonym, en_meaning, example, word_id) VALUES
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 1),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 2),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 3),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 4),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 5),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 6),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 7),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 8),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 9),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 10),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 11),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 12),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 13),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 14),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 15),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 16),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 17),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 18),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 19),
('فوق', 'In a higher position; above', 'The bird is flying over the clouds.', 20);

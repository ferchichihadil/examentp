-- Création de la table "actualites"
CREATE TABLE actualites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  description TEXT,
  date DATE NOT NULL DEFAULT CURRENT_DATE
);
-- Ajout d'exemples de données
INSERT INTO actualites (titre, description, date)
VALUES ('Titre de l\'article 1', 'Description de l\'article 1', '2023-11-28'),
       ('Titre de l\'article 2', 'Description de l\'article 2', '2023-11-27'),
       ('Titre de l\'article 3', 'Description de l\'article 3', '2023-11-26');

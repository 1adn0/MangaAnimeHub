user_id INT,
    anime_id INT,
    manga_id INT,
    date_added DATE NOT NULL,
    type ENUM('anime', 'manga') NOT NULL,
    PRIMARY KEY (user_id, anime_id, manga_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (anime_id) REFERENCES anime(anime_id),
    FOREIGN KEY (manga_id) REFERENCES manga(manga_id)
);

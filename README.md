# ESTRUTURA DO PROJETO:

'''
-src
    -controller
        -mooviesController.js
        -categoryController.js

    -router
        -moovies.js
        -category.js
    -bd

-inde.js
 -packge.json
-packge-lock.json
        -.env
        -.env.example
        -.gitignore
    -readme.md
'''
 # Schema BD
    CREATE TABLE category(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255),
    );

'''
    CREATE TABLE moovies(
        id SERIAL PRIMARY KEY,
        category_id INTEGER REFERENCES category(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(255),
        realease_date VARCHAR(255)
    );
'''
let saison = {
    printemps: " -Ail\n -Carotte\n -Chou frisé\n -Chou-fleur\n -Fraise\n -Grain de café\n -Haricot vert\n -Panais\n -pomme de terre\n -Rhubarbe\n -Riz non moulu\n -Tulipe\n -Zinnia bleue" ,
    été: " -Blé\n -Carambole\n -Chou rouge\n -courge d'été\n -Fleur tropicale d'été\n -Houblon\n -Maïs\n -Melon\n -Mirtylle\n -Pavot\n -Piment fort\n -Radis\n -Tomate\n -Tournesole",
    automne: " -Amarante\n -Artichaut\n -Betterave\n -blé\n -Brocoli\n -Canneberges\n -Chou chinois\n -Citrouille\n -Igname\n -Raisin\n -Rose de féé\n Tournsesol",
    hiver: " -Poudremelon",
    spécial: " -Baie de gemme sucrée\n -Feuille de thé\n -Fruit ancient\n -Fruit de cactus"
}

let printemps = {
    ail:  "Disponible qu'a partire de le 2éme année\n -prix: 40po\n -temps de croissance: 4 jours\n se revend\n -basic: 60po\n -argent: 75po\n -or: 90po\n -légendaire: 120po ",
    carrote: "À creuser uniquement\n -temps de croissance: 3 jours\nSe revend\n -basique: 35po\n -argent: 43po\n -52po\n -or: 52po\n -légendaire: 70po",
    chouFrisé: " -prix: 70po\n -temps de croissance: 6jours\nse vend\n -basique: 110po\n -argent: 137po\n -or: 165po\n -légendaire: 220po",
    choueFleur: "Peut devenir une culture géante\n -prix: 80\n -temps de croissance: 12 jours\nse revend\n -basique: 175po\n -argent: 218po\n -or: 262po\n -légendaire: 350po",
    fraise: " -prix: 100\n -temp de croissance: 8jours\n -repousse tout les 4 jours avec une faible chance d'avoire une fraise supplémentaire\nse revend\n -basique: 120po\n -argent: 150po\n -or: 180po\n -légendaire: 240po",
    grainDeCafé: "récupérable uniquement au chariot de voyage et 1% de chance a l'esprit de poussière\n -prix: 2 500po\n -temps de croissance: 10 jours\n -repousse tout les 2jours\nse revend\n -basique: 15po\n -argent: 18po\n -or: 22po\n -légendaire: 30po",
    haricotVert: " -prix: 60po\n -temps de croissance: 10 jours\n -repousse tout les 3 jours\nse revend\n -basique: 40po\n -argent: 50po\n -or: 60po\n -légendaire: 80po",
    panais: " -prix: 20po\n -temps de croissance: 4 jours\nse revend\n -basique: 35po\n -argent: 43po\n -or: 52 po\n -légendaire: 70po",
    pommeDeTerre: " -prix: 50po\n -temps de croissance: 6jours\nse revend\n -basique: 80po\n -argent: 100po\n -or: 120po\n -légendaire: 160po",
    rhubarbe: "Achat uniquement chez Oasis\n -prix 100po\n -temps de croissance: 13jours\nse revend\n -basique: 220po\n -argents: 275po\n -or: 330po\n -légendaire: 440po",
    rizNonMoulu: " -prix: 40po\n -temps de croissance: 6 à 8 jours\nse revend\n -basique: 30po\n -argent: 37po\n -or: 45po\n -légendaire: 60po",
    tulipe: " -prix: 20po\n -temps de coissance: 6 jours\nse revend\n -basique: 30po\n -argent: 37po\n -or: 45po\n -légenraire: 60po",
    zinniaBleue: " -prix: 30po\n -temps de croissance: 7 jours\nse revend\n -basique 50po\n -argent: 62po\n -or: 75po\n -légendaire: 100po",
}

let été = {
    blé: " -prix: 10po\n -tempd de croissance: 4jours\nse revend\n •basique: 25po\n •argent: 31po\n •or: 37po\n •légendaire: 50po",
    carambole: "Achat uniquement chez Oasis\n -prix: 400po\n -temps de pousse: 13jours\nSe revend\n •basique: 750po\n •argent: 937po\n •or: 1 125po\n •légendaire: 1 500po",
    chouRouge: "Disponible qu'à partire de la deuxième année\n -prix: 100po\n -temps de pousse: 9 jours\nse revend\n •basique: 260po\n •argent: 325po\n •or: 390po\n •légendaire: 520po",
    courgeDété: "À creuser uniquement\n -temps de pousse: 6 jours\n -repousse tout les 3 jours\nse revend\n •basique: 45po\n •argent: 56po\n •or: 67po\n •légandaire: 90po",
    fleurTropicaleDété: " -prix: 50po\n -temps de pousse: 8 jours\nse revend\n -basique: 90po\n •argent: 112po\n •or: 135po\n •légendaire: 180po",
    houblon: " -prix: 60po\n -temps de pousse: 11 jours\n -repousse tout les jours\nse revend\n •basique: 25po\n •argent 31po\n •or: 37po\n •légendaire: 50po",
    maïs: " -prix: 150po\n -temps de pousse: 14 jours\n -repousse tout les 4 jours\nse revend\n •basique: 50po\n •argent: 62po\n •or: 75po\n •légendaire: 100po",
    melon: "Peux devenir une culture géante\n -prix: 80po\n -temps de pousse: 12 jours\nse revend\n •basique: 250po\n •argent: 312po\n •or: 375po\n •légendaire: 500po",
    myrtille: "≈2% de chance de produire plus de myrtille\n -prix: 80po\n -temps de pousse: 13 jours\n -repousse tout les 4 jours\nse revend\n •basique: 50po\n •argent: 62po\n •or: 75po\n •légendaire: 100po",
    pavot: " -prix: 100po\n -temps de pousse: 7 jours\nse revend\n •basique: 140po\n •argent: 175po\n •or: 210po\n •légendaire: 280po",
    pimentFort: " -prix: 40po\n -temps de pousse: 5 jours\n -repousse tout les 3 jours\nse revend\n •basique: 40po\n •argent: 50po\n •or: 60po\n •légendaire: 80po",
    radis: " -prix: 40po\n -temps de pousse: 6 jours\nse revend\n -basique: 90po\n •argent: 112po\n •or: 135po\n •légendaire: 180po",
    tomate: " -prix: 50po\n -temps de pousse: 11 jours\n -repousse tout les 4 jours\nse revend\n -basique: 60po\n •argent: 75po\n •or: 90po\n •légendaire: 120po",
    tournesol: "Produira également de 0 à 3 graine de tournesol\n -prix: 200po\n -temps de pousse: 8 jours\nse revend\n •basique: 80po\n •argent: 100po\n •or: 120po\n •légendaire: 160po",
}

let automne = {
    amarante: " -prix: 70po\n -temps de pousse: 7 jours\nse revend\n -basique: 150po\n -argent: 187po\n -or: 225po\n -légendaire: 300po",
    artichaut: "Disponible à partire de la deuxième année\n -prix: 30po\n -temps de pousse: 8 jours\nse revend\n •basique: 160po\n •argent: 200po\n •or: 240po\n •légendaire: 320po",
    aubergine: " -prix: 20po\n -temps de pousse: 5 jours\n -repousse tout les 5 jours\nse revend\n •basique: 60po\n •argent: 75po\n •or: 90po\n •légendaire: 120po",
    bettrave: "Achat uniquement chez Oasis\n -prix: 20po\n -temps de pousse: 6 jours\nse revend\n •basique: 100po\n •argent: 125po\n •or: 150po\n •légendaire: 200po",
    brocoli: "À creuser uniquement\n -temps de pousse: 8 jours\n -repousse tout les 4 jours\nse revend\n •basique: 70po\n •argent: 87po\n •or: 105\n •légendaire: 140po",
    cannberges: " -prix: 240po\n -temps de pousse: 7 jours\n -repouse tout les 5 jours\nse revend\n •basique: 75po\n •argent: 93po\n •or: 112po\n •légendaire: 150po",
    chouChinois: " -prix: 50po\n -temps de pusse: 4 jours\nse revend\n •basique: 80po\n •argent: 100po\n •or: 120po\n •légendaire: 160po",
    citrouille: "Peux devenir une culture géante\n -prix: 100po\n -temps de pousse: 13 jours\nse revend\n •basique: 320po\n •argent 400po\n •or: 180po\n •légendaire: 640po",
    igname: " -prix: 60po\n -temps de pousse: 10 jours:\nse revend\n •basique: 160po\n •argent: 200po\n •or: 240po\n •légendaire: 320po",
    raisin: " -prix: 60po\n -temps de pousse: 10 jours\n -repousse tout les 3 jours\nse revend\n •basique: 80po\n •argent: 100\n •or: 120po\n •légendaire: 160po",
    roseDeFée: " -prix: 200po\n -temps de pousse 12 jours\nse revend\n •basique: 290po\n •argent: 362po\n •or: 435po\n •légendaire: 580po",
    tournesol: "Produira également de 0 à 3 graine de tournesol\n -prix: 200po\n -temps de pousse: 8 jours\nse revend\n •basique: 80po\n •argent: 100po\n •or: 120po\n •légendaire: 160po",
}

let hiver = {
    poudremelon: "À creuser uniquement\n -temps de pousse: 7 jours\nse revend\n •basique: 60po\n •argent: 75po\n •or: 90po\n •légendaire: 120po",
}
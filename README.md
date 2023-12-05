Collection Type
Hier können Inhalte definiert werden die öfter als einmal benötigt werden. (vgl class in html)
Muss im Singular geschrieben werden weil strapi es automatisch im plural verwendet. User -> Users

Single Type
Nomen est omen, da können Sachen definiert werden die nur einmal vorhanden sind (vgl id in html), also Beispielsweise Seiten also eine einzelne Page

NOTE immer nach dem erstellen von einem Type ´´´npm run strapi ts:generate-types´´´ laufen lassen und den dev-server neu starten. (nur bei TS)
Man muss dann einzelne Typen in Settings->Roles für die Öffentlichkeit zuerst einmal freigeben.

Components
eine Collection von Feldern. Kann in den Types verwendet werden. Also ein Überschriftenfeld (Überschrift + Subüberschrift), ein Body-Field zb.
Kann auf mehreren Seiten verwendet werden aber muss nicht. Auf diese kann nie direkt zugegriffen werden (über api) wenn dann nur über(mit) einem Type.

Zum Abfragen der Inhalte schaut des dann so aus: 'http://localhost:1337/api/entries' (all) oder  'http://localhost:1337/api/entries/1' (one by id) 


NAch dem löschen von types den dist ordner löschen.
# Istruzioni per lavorare sulla repository

## Scopo e perimetro

Questa repository contiene il sito della **Gelateria Caraibi di Carpi**. Lavorare esclusivamente in questa cartella, salvo istruzioni esplicite dell'utente. Le informazioni commerciali nel codice possono essere storiche: non inventare orari, prodotti, prezzi, indirizzi o contatti.

## Architettura

- Gatsby 5, React 18 e componenti prevalentemente a classi.
- Le route sono definite dai file in `src/pages/`: homepage, prodotti, torte personalizzate, gusti, FAQ, creagelato e 404.
- Layout e componenti condivisi sono in `src/components/`.
- Il catalogo è in `feeds/catalog.json` ed è esposto alle pagine da `src/data/products.js`. I gusti sono in `src/data/flavours.json`, condivisi con il generatore; la selezione casuale è in `src/pages/creagelato.js`.
- Gli stili sono in `src/assets/scss/`, con ingresso `main.scss`; preservare la suddivisione esistente.
- Metadati, plugin, dominio e GTM sono in `gatsby-config.js`. Non modificare identificativi di tracking o configurazioni di produzione senza necessità legata al task.
- Non è presente un backend o un CMS nella repository.

## Ambiente e comandi

Usare **Node 24** (versione di riferimento 24.13.0 in `.nvmrc`) e **npm 11**. I vincoli sono in `package.json`.

```powershell
npm.cmd ci
npm.cmd run develop
npm.cmd run build
npm.cmd run serve
```

In WSL usare Node 24 e npm 11 per Linux e dipendenze installate con `npm ci` nello stesso ambiente. È disponibile il runtime locale `.tools/node-v24.13.0-linux-x64/bin/`: aggiungerlo al PATH prima di eseguire `npm run build`. Non usare il Node 12 di sistema e non riutilizzare dipendenze native Windows.

Versionare `package-lock.json` insieme alle modifiche delle dipendenze. Non aggiungere `.tools/`, `node_modules/`, `.cache/` o `public/` a Git. Usare Dart Sass, senza reintrodurre `node-sass`. Gli stili esistenti richiedono ancora compatibilità con la sintassi Sass storica: non aggiornare Sass senza verificare compilazione e resa grafica. La sitemap è generata in `/sitemap-index.xml`.

## Convenzioni

- Rispettare il codice circostante e `.prettierrc`: apici singoli, niente punto e virgola e trailing comma ES5.
- Evitare riformattazioni globali non richieste; lo script `format` riscrive i file JavaScript.
- Conservare accenti, diacritici ed emoji già presenti nei testi rivolti agli utenti; non aggiungere emoji nel codice.
- Aggiungere un commento che spieghi il motivo delle soluzioni particolarmente complesse.
- Gatsby esegue anche rendering lato server: non accedere a `window` o `document` al caricamento dei moduli o durante il rendering senza una protezione adeguata. Preferire lifecycle client o gestori di eventi per le API del browser.
- Non pubblicare né effettuare push senza una richiesta dell'utente.
- Quando si creano o rinominano file sorgente, aggiungerli allo staging con `git add`. Non aggiungere automaticamente output, file temporanei o documentazione Markdown generata.

## Verifiche

Non esiste una suite di test configurata: lo script `test` è un segnaposto. Per modifiche applicative, eseguire `npm.cmd run build` e controllare le pagine coinvolte. Per modifiche solo documentali, controllare che percorsi e comandi corrispondano alla repository. Segnalare gli avvisi o i limiti rilevanti senza modificare contenuti o dipendenze estranei al task.

## Feed prodotti

Il catalogo è in `feeds/catalog.json`; `npm.cmd run feeds:generate` produce tre feed in `static/feeds/` e il report `feeds/readiness.json`. La modalità confermata è vendita solo locale con ritiro in gelateria, nessun checkout online e nessuna consegna. Prezzo e disponibilità vanno omessi completamente dagli export, come richiesto dall’utente: non reinserirli, non presumere stock e non usare zero o `unknown` al loro posto. Leggere `feeds/README.md`: Google esporta la sola anagrafica locale, non l’inventario; Meta e OpenAI restano non conformi per i campi obbligatori intenzionalmente omessi. L’utente ha autorizzato esplicitamente la pubblicazione dei tre feed il 21 novembre 2026, pur con i campi obbligatori omessi: mantenerli in `static/feeds/` per includerli in `public/feeds/`. Non registrarli nelle piattaforme come feed conformi; per OpenAI occorre anche conferma Italia/EUR. `prebuild` rigenera i feed prima della build. Gli ID interni devono restare stabili.

## Contenuti e immagini statiche

Pubblicare solo `public/`, inclusa `public/media/`. Il server non richiede Node né un image server. L’hook `onPreBootstrap` genera varianti responsive e `src/generated/images.json` tramite `scripts/optimize-images.cjs` e Sharp (dipendenza di build). Non versionare il manifest o gli output in `public/`; usare `OptimizedImage` per gli asset locali e preservare le dimensioni intrinseche. Non mettere `loading=lazy` sul logo prioritario; riservare la priorità bassa alle slide non visibili.

I contenuti confermati sono in `src/data/business.json` e `src/data/faq.json`: orari 10:30–13:00 e 14:30–21:00, martedì chiuso, aperture festive straordinarie da confermare e chiusura invernale da metà dicembre a metà febbraio. Non trasformare “metà” in date esatte non fornite. Prenotazione via telefono, WhatsApp o visita in gelateria; prezzi da chiedere in negozio; solo ritiro a Carpi. Torte custom anche per 50 o più persone, porzioni dei semifreddi da preservare, servizio aziende di prenotazione coni/coppette, ingredienti descritti come genuini. Non aggiungere certificazioni o dichiarazioni su allergeni non confermate.

La navigazione e le FAQ native `details`/`summary` devono funzionare senza JavaScript. Mantenere i contenuti principali già presenti nell’HTML della build. Il carousel è manuale; non aggiungere autoplay. Testare anche la build statica, non soltanto `gatsby develop`.

## Compatibilità delle sitemap

Usare `npm.cmd run build` per eseguire anche `postbuild` e generare l’alias statico `/sitemap.xml` tramite `scripts/create-sitemap-alias.cjs`. Le console usano già quel percorso: non rimuoverlo quando si pubblica `/sitemap-index.xml`. Entrambi devono rimandare alle sitemap aggiornate e contenere solo pagine canoniche. Redirect HTTP/HTTPS e dominio www devono essere configurati sull’hosting. Non richiedere convalide nelle console prima del deploy effettivo.

## Hosting Aruba Windows

`static/web.config` viene copiato nella build: applica redirect permanente a HTTPS con www, MIME AVIF/WebP e cache annuale delle immagini con hash. Preservare le impostazioni Aruba esistenti durante gli aggiornamenti. Prima del deploy confrontare la build con lo spazio remoto e salvare un backup dei file sostituiti; verificare poi sito, sitemap, redirect e MIME online. Le credenziali locali in `ftp_credentials.json` sono ignorate da Git: non stamparle, versionarle o copiarle sul server.

## Approvazione Pistacchio Nocciola

L’utente ha approvato esplicitamente il 21 novembre 2026 la scheda Pistacchio Nocciola (6 porzioni) e l’immagine `src/assets/images/products/pistacchio_nocciola.png`, preparata dalla foto `pistacchio-nocciola.jpg`. La pubblicazione su sito e feed è autorizzata. Il campo interno `publication_status` è `approved`.

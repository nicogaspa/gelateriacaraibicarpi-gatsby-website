# Istruzioni per lavorare sulla repository

## Scopo e perimetro

Questa repository contiene il sito della **Gelateria Caraibi di Carpi**. Lavorare esclusivamente in questa cartella, salvo istruzioni esplicite dell'utente. Le informazioni commerciali nel codice possono essere storiche: non inventare orari, prodotti, prezzi, indirizzi o contatti.

## Architettura

- Gatsby 5, React 18 e componenti prevalentemente a classi.
- Le route sono definite dai file in `src/pages/`: homepage, prodotti, creagelato e 404.
- Layout e componenti condivisi sono in `src/components/`.
- Il catalogo è in `src/pages/prodotti.js`; i gusti e le immagini del generatore sono in `src/components/BuildYourIceCream.js`, con la selezione casuale in `src/pages/creagelato.js`.
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

Il catalogo statico è in `feeds/catalog.json`; `npm.cmd run feeds:generate` produce tre bozze in `feeds/drafts/` e un report in `feeds/readiness.json`. Leggere `feeds/README.md` prima di modificarle. Non inventare prezzi, disponibilità o identificativi. Non copiare le bozze in `static/` finché mancano i dati commerciali; per OpenAI confermare il supporto a Italia/EUR, dato che il percorso standard documentato è USA. Gli ID interni non devono cambiare quando cambiano prezzi o titoli.

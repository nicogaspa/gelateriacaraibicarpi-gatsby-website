# Gelateria Caraibi Carpi

Sito della **Gelateria Caraibi di Carpi**, in via Nuova Ponente 5/F. Presenta la gelateria, i prodotti artigianali e i contatti, e include un generatore casuale di abbinamenti di gusti.

Il dominio configurato è https://www.gelateriacaraibicarpi.it. Indirizzo, orari, contatti e descrizioni riportati nel codice sono contenuti del sito esistente: verificarli con la gelateria prima di aggiornarli o pubblicarli.

## Tecnologie

- Gatsby 5.16.1 e React 18.3.1, con pagine generate staticamente.
- SCSS tramite `gatsby-plugin-sass` e Dart Sass 1.77.8. Questa versione mantiene compatibili gli stili SCSS storici; la migrazione alle API Sass moderne è un intervento separato.
- React Helmet per i metadati; plugin per sitemap, robots.txt, manifest e supporto offline.
- Google Tag Manager configurato in `gatsby-config.js`, disabilitato durante lo sviluppo.

Non è presente un backend applicativo o un CMS nella repository: contenuti e immagini sono nel sorgente.

## Struttura

| Percorso | Contenuto |
| --- | --- |
| `src/pages/index.js` | Homepage, presentazione, prodotti e contatti |
| `src/pages/prodotti.js` | Catalogo di torte, semifreddi e altri prodotti |
| `src/pages/creagelato.js` | Pagina del generatore di gelati |
| `src/pages/404.js` | Pagina di errore |
| `src/components/` | Layout, navigazione, footer, carousel e generatore |
| `src/assets/scss/` | Stili, variabili e mixin |
| `src/assets/images/` | Logo, fotografie e immagini dei prodotti e del generatore |
| `gatsby-config.js` | Metadati, dominio e configurazione dei plugin |
| `.prettierrc` | Regole di formattazione JavaScript |

## Sviluppo locale su Windows

Il progetto richiede **Node.js 24.13.0 o superiore nella serie 24** e **npm 11**. La versione di riferimento è indicata in `.nvmrc` e i requisiti sono dichiarati in `package.json`.

Dalla cartella della repository, in PowerShell:

```powershell
node --version
npm.cmd ci
npm.cmd run develop
```

`npm ci` installa le versioni riproducibili del lockfile. Quando si cambiano dipendenze, usare `npm.cmd install` e aggiornare anche `package-lock.json`.

Il sito di sviluppo è disponibile su http://localhost:8000. Per fermarlo in una sessione interattiva usare `Ctrl+C`.

## Altri comandi

```powershell
npm.cmd run build
npm.cmd run format
```

Per visualizzare la build di produzione:

```powershell
npm.cmd run serve
```

`build` genera il sito statico in `public/`; il server di anteprima usa normalmente http://localhost:9000. `format` riscrive i file JavaScript: limitarne l'uso alle modifiche intenzionali.

Non sono configurati test automatici: `npm test` è un segnaposto che termina con errore. Validare le modifiche con la compilazione Gatsby e controllando homepage, prodotti e generatore nel browser.

`node_modules/`, `.cache/`, `public/` e `.tools/` sono ignorati da Git. `package-lock.json` è versionato per rendere riproducibili le installazioni. `.tools/` contiene soltanto eventuali strumenti o log locali, non necessari per eseguire il sito con Node 24. La repository non contiene una procedura di deploy automatizzata.

## Note sulla migrazione

Lo stack è stato aggiornato da Gatsby 2 / React 16 a Gatsby 5 / React 18, seguendo le [indicazioni di migrazione di Gatsby](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/). `node-sass` è stato sostituito da Dart Sass. La sitemap usa ora il formato del plugin corrente: `/sitemap-index.xml`, con riferimento aggiornato in `robots.txt`.

Le immagini dinamiche del generatore usano l’export `default` dei moduli Webpack 5. `smoothscroll-polyfill` e `prop-types`, già importati dai componenti, sono dichiarati come dipendenze dirette.

La compilazione può segnalare avvisi di deprecazione SCSS e React Helmet, e il server di sviluppo segnala avvisi di accessibilità del markup esistente. Su Windows, le dipendenze Gatsby possono inoltre tentare di invocare `WMIC`, assente nelle versioni recenti del sistema: durante la verifica questo avviso non ha impedito la build.

## Feed prodotti

Le specifiche verificate, le tre bozze statiche e i dati mancanti sono descritti in [feeds/README.md](feeds/README.md). Rigenerare con `npm.cmd run feeds:generate`. Le bozze non sono pubblicate: occorrono prezzi, disponibilità, pagine prodotto e conferma dei canali/mercati.

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
| `src/pages/torte-gelato-carpi.js` | Torte personalizzate e servizio aziende |
| `src/pages/gusti.js` | Gusti del gelato |
| `src/pages/faq.js` | Domande frequenti, disponibili anche senza JavaScript |
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

I tre feed statici per vendita esclusivamente locale e solo ritiro sono descritte in [feeds/README.md](feeds/README.md). Rigenerare con `npm.cmd run feeds:generate`. Prezzo e disponibilità sono intenzionalmente omessi: Google esporta la sola anagrafica locale, mentre Meta e OpenAI restano incompleti rispetto ai loro requisiti. I file sono pubblicati in `/feeds/`, generati in `static/feeds/` e copiati nella build statica.

## Pubblicazione esclusivamente statica

Eseguire `npm.cmd ci` e `npm.cmd run build`, poi pubblicare **l’intero contenuto di `public/`**, inclusa la cartella `media/`. Non servono Node, un database, API o un servizio immagini sul server. Le prenotazioni avvengono tramite telefono, WhatsApp o visita in negozio; non esiste checkout online. Per l’anteprima locale della build usare `npm.cmd run serve`.

`gatsby-node.js` genera immagini responsive AVIF/WebP e fallback JPEG/PNG con Sharp durante `onPreBootstrap`. Il manifest `src/generated/images.json` è ignorato da Git e viene ricreato automaticamente; non va scritto a mano. I nomi degli asset contengono un hash e le dimensioni. Una build da sorgenti richiede la dipendenza di sviluppo Sharp, quindi non usare `npm ci --omit=dev` prima di generare il sito.

Le foto principali sono presenti nell’HTML generato; le altre usano caricamento nativo lazy. Il logo ha priorità alta e non è lazy; le immagini hanno dimensioni e `srcset`/`sizes`. Il carousel non avanza automaticamente, per evitare movimento e caricamenti non richiesti. I font di testo sono quelli di sistema, senza richieste a Google Fonts.

Orari, contatti e stagionalità sono in `src/data/business.json`; le FAQ in `src/data/faq.json`; il catalogo mostrato nelle pagine deriva da `feeds/catalog.json`. La pagina `/gusti/` è recuperata dal sito pubblico. I title, le descrizioni, i canonical e Open Graph sono inclusi nell’HTML statico. Le date esatte di chiusura e le aperture festive non vengono inventate né codificate come calendario automatico.

La build include `web.config` da `static/web.config` per l’hosting Windows/IIS Aruba: redirect permanente a HTTPS con www, MIME AVIF/WebP e cache annuale per le immagini con hash. Preservare il percorso di compilazione Aruba presente nel file; se si cambia hosting, adattare questa configurazione. Le risposte 404 devono mantenere lo stato HTTP 404. La sitemap corrente è `/sitemap-index.xml`; `robots.txt` la richiama. I feed sono pubblicati su richiesta esplicita in `/feeds/`; il report dei requisiti mancanti resta locale.

## Compatibilità sitemap delle console

`npm.cmd run build` esegue anche `postbuild`, che genera `/sitemap.xml` come copia dell’indice `/sitemap-index.xml`. Google Search Console e Bing hanno già sorgenti registrate sul vecchio percorso: pubblicare entrambi i file evita di mantenere per errore la vecchia sitemap con quattro URL. Entrambi gli indici puntano alle sitemap aggiornate con le sei pagine del sito. Il passaggio deve avvenire nella build prima dell’upload statico; il solo comando `gatsby build` non esegue l’hook npm `postbuild`.

Il 20 novembre 2026 la nuova build è stata pubblicata via FTPS su Aruba, dopo il confronto con la produzione e il backup locale dei file sostituiti. Sono stati verificati i contenuti delle sei pagine, gli indici sitemap, il redirect permanente HTTP→HTTPS con www, il redirect della variante senza slash, i MIME AVIF/WebP e lo stato HTTP 404 per URL inesistenti. Il backup e il report del confronto sono in `.tools/ftp-deploy-2026-11-20/` e non sono versionati. `ftp_credentials.json` è escluso da Git e non deve mai essere pubblicato.

## Esecuzione in WSL

Nella cartella Linux usare Node 24 e npm 11 per Linux, con dipendenze installate tramite `npm ci` nello stesso ambiente. Non riutilizzare `node_modules` installato su Windows: Sharp e altri moduli includono binari specifici della piattaforma. Il runtime locale usato per la build è in `.tools/node-v24.13.0-linux-x64/` (non versionato). Prima dei comandi npm, da questa repository:

```bash
export PATH="$PWD/.tools/node-v24.13.0-linux-x64/bin:$PATH"
npm run build
```

# Cataloghi per vendita locale e ritiro

Configurazione confermata dall'utente il 20 novembre 2026: **vendita esclusivamente locale, solo ritiro in gelateria, nessuna consegna e nessun acquisto online**. Prezzo e disponibilità sono omessi completamente dai tre export: non sono presenti colonne vuote, valori null, zero o disponibilità presunte per questi campi.

## File e generazione

- `feeds/catalog.json`: 12 prodotti nella repository, ID stabili, immagini e configurazione `sales`.
- `static/feeds/google-products.tsv`: anagrafica prodotti locali Google; intestazioni TSV con spazi, secondo la specifica locale.
- `static/feeds/meta-products.csv`: catalogo descrittivo Meta senza prezzo/disponibilità, non conforme per l'invio.
- `static/feeds/openai-products.jsonl`: catalogo descrittivo OpenAI senza prezzo/disponibilità, non conforme per l'invio; search e Ads restano disabilitati.
- `feeds/readiness.json`: requisiti mancanti e stato distinto per piattaforma.

```powershell
npm.cmd run feeds:generate
```

Il generatore funziona senza database o richieste di rete e non aggiunge automaticamente i campi esclusi. Le descrizioni degli export precisano vendita locale e ritiro; la descrizione originale è conservata nel catalogo sorgente. Gli ID sono interni, non GTIN o MPN. La categoria `5788` (Frozen Desserts & Novelties) è una classificazione derivata dalla [tassonomia Google](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt).

## Google: prodotti locali e inventario sono due livelli distinti

La [specifica prodotti locali](https://support.google.com/merchants/answer/14779112?hl=en) richiede nell'anagrafica `id`, `title`, `description`, `image_link` e il brand pertinente; gli identificativi GTIN/MPN dipendono dal prodotto. Prezzo e disponibilità non sono inseriti in questo export di anagrafica. Il link alla pagina prodotto è condizionato al tipo di vetrina scelto: non sono inventate pagine individuali. Le intestazioni del TSV locale usano spazi, per esempio `image link`.

Questo file **non è sufficiente da solo per attivare la visibilità locale**. Occorre configurare il programma locale in Merchant Center e collegare il negozio al Profilo dell'attività. La [specifica inventario locale](https://support.google.com/merchants/answer/14819809?hl=en) richiede almeno `id`, `store_code` e `availability`; il prezzo è opzionale in quel feed e può dipendere dalla configurazione e dagli altri dati forniti. Non viene generato un inventario senza disponibilità e non si presume stock positivo. La scelta di omettere la disponibilità impedisce quindi di completare il percorso inventario locale con i soli file qui presenti.

La modalità di ritiro va configurata secondo le funzionalità realmente offerte: non sono dichiarati acquisto online, riserva online, tempi di preparazione o un `pickup_method` non verificati. Per lo stesso motivo non è inserita una consegna gratuita. Attivare solo le destinazioni locali coerenti con la vendita in negozio, non le offerte Shopping online.

## Meta: il ritiro non elimina i campi obbligatori

La [specifica cataloghi Meta](https://developers.facebook.com/documentation/ads-commerce/catalog/reference) richiede prezzo e disponibilità anche per il catalogo prodotti usato con vendita locale. L'export richiesto dall'utente li omette ed è quindi **una bozza descrittiva incompleta**, non un feed conforme. Il report continua a segnalarli come requisiti mancanti: la loro rimozione non viene interpretata come disponibilità o prezzo zero.

Sono conservati ID, titolo, descrizione, brand, condizione, immagine e categoria. Il sito non dispone di pagine per singolo prodotto né di fotografie aggiuntive: questi restano ulteriori limiti. Le foto principali verificate sono PNG 1000×657 pixel, inferiori a 8 MB. Non vengono duplicate per simulare altre immagini.

## OpenAI: catalogo descrittivo incompleto

Lo [schema discovery stabile](https://developers.openai.com/commerce/specs/file-upload/products?fields=required&version=currently-stable&view=table) richiede prezzo e disponibilità. Per rispettare la scelta dell'utente sono assenti anche le chiavi JSON: non viene usato il precedente `availability=unknown`. Restano omessi i link prodotto non disponibili; `is_eligible_search` e `is_ads_eligible` sono `false`.

Il mercato reale rimane IT, senza sostituirlo con US. Il percorso standard di upload documentato è USA: il supporto Italia/EUR va confermato con OpenAI e richiede onboarding merchant. Vendita locale e ritiro non rimuovono questi requisiti. Per l'invio futuro consultare anche la [guida di consegna](https://developers.openai.com/commerce/guides/submit-product-feeds).

## Informazioni confermate e questioni aperte

La modalità di vendita è confermata: non occorre richiederla di nuovo. Non richiedere prezzi e disponibilità come semplice completamento di questi export: la loro esclusione è intenzionale. Segnalare invece che per attivare specifici canali occorrerebbe cambiare questa scelta o usare un percorso diverso, da concordare.

Restano da verificare gli identificativi realmente assegnati e le varianti delle torte/confezioni. I campi `identifiers_absent_confirmed` e `sale_unit_confirmed` non sono automaticamente impostati a true. Non usare `identifier_exists=no` senza conferma.

## Sito pubblico, repository e hosting

Il catalogo locale contiene 12 prodotti, mostrati anche nella pagina prodotti della repository. Gli URL delle immagini puntano al sito attuale: prima di sostituirlo trasferire gli asset e aggiornare gli URL, usando gli asset locali e le varianti statiche generate in build.

I tre file sono pubblicati per richiesta esplicita dell’utente del 21 novembre 2026, senza prezzo e disponibilità. Il generatore scrive in `static/feeds/`; Gatsby li copia in `public/feeds/` durante la build. `npm.cmd run build` li rigenera prima della compilazione tramite `prebuild`.

- Google: https://www.gelateriacaraibicarpi.it/feeds/google-products.tsv
- Meta: https://www.gelateriacaraibicarpi.it/feeds/meta-products.csv
- OpenAI: https://www.gelateriacaraibicarpi.it/feeds/openai-products.jsonl

La pubblicazione rende i file scaricabili ma non li registra presso le piattaforme e non cambia i requisiti mancanti documentati in `feeds/readiness.json`. Il catalogo sorgente, il report e le credenziali FTP restano fuori da `static/` e dalla pubblicazione. `static/web.config` configura i MIME necessari a IIS per JSONL, TSV e CSV.

## Approvazione Pistacchio Nocciola

L’utente ha approvato foto scontornata e scheda Pistacchio Nocciola (6 porzioni) il 21 novembre 2026, autorizzando la pubblicazione su sito e feed. Il catalogo comprende 12 prodotti e il campo interno `publication_status` della torta è `approved`.

# Feed prodotti: requisiti e stato

Verifica del 20 novembre 2026. Sono state generate **bozze**, non feed approvati o pronti per essere inviati. I campi commerciali mancanti restano vuoti/null; non sono stati inventati prezzi, disponibilità, codici GTIN o MPN.

## File e aggiornamento

- `feeds/catalog.json`: snapshot statico modificabile dei prodotti del sito pubblico, con dati commerciali da completare.
- `feeds/drafts/google-products.tsv`: bozza Google Merchant Center per offerte online.
- `feeds/drafts/meta-products.csv`: bozza catalogo prodotti Meta.
- `feeds/drafts/openai-products.jsonl`: bozza schema OpenAI discovery.
- `feeds/readiness.json`: campi mancanti per piattaforma e problemi comuni.
- `scripts/generate-product-feeds.cjs`: rigenera le bozze dal catalogo senza database o richieste di rete.

```powershell
npm.cmd run feeds:generate
```

Gli ID assegnati sono interni e devono restare stabili. Non sono SKU originali, GTIN o MPN. Nomi e descrizioni sono quelli del sito; i tag HTML sono rimossi e le interruzioni di riga diventano spazi. `condition=new` descrive prodotti artigianali nuovi. EUR e IT rappresentano il contesto italiano del negozio, senza implicare supporto del mercato OpenAI.

La categoria assegnata, `5788` (Frozen Desserts & Novelties), è una classificazione ricavata dal tipo di prodotto, non un dato pubblicato dalla gelateria. È tratta dalla [tassonomia ufficiale Google](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt).

## Google Merchant Center

Per un feed di prodotti online, i campi di base sono `id`, `title`, `description`, `link`, `image_link`, `availability`, `price` e il brand pertinente. `condition` è obbligatorio per usato/ricondizionato; qui è valorizzato `new`. GTIN e MPN dipendono dagli identificativi assegnati al prodotto: non inventarli. Usare `identifier_exists=no` soltanto dopo aver confermato l'effettiva assenza di identificativi applicabili. Fonte: [specifica prodotti Google](https://support.google.com/merchants/answer/7052112?hl=en).

Prezzo e disponibilità devono corrispondere alla pagina e al checkout; la valuta va inclusa, per esempio nel formato `25.00 EUR` (solo esempio di sintassi). Per offerte online italiane servono costi e condizioni di spedizione configurati nel feed oppure nell'account. Non inserire una spedizione gratuita presunta. Le varianti acquistabili devono avere righe e prezzi propri. Il sito attuale consente il contatto telefonico, senza checkout: il solo feed non rende il sito idoneo alle offerte Shopping online. Fonte: [requisiti checkout](https://support.google.com/merchants/answer/9158778?hl=en).

Se la vendita è esclusivamente in gelateria, valutare invece [prodotti locali](https://support.google.com/merchants/answer/14779112?hl=en) e [inventario locale](https://support.google.com/merchants/answer/14819809?hl=en): occorrono configurazione del negozio, collegamento al Business Profile e dati di prezzo/disponibilità per negozio. Questa bozza non è un feed inventario locale; non sostituire il modello senza confermare il canale di vendita.

## Meta

Il minimo per il caricamento comprende `id`, `title`, `description`, `availability`, `condition`, `price`, `link`, `image_link` e almeno uno fra `brand`, `gtin`, `mpn`. La tabella attuale classifica inoltre come richiesti `brand`, una fra `google_product_category` e `fb_product_category`, e `additional_image_link`, distinguendoli dai campi che bloccano materialmente il caricamento. Le bozze includono queste colonne; le immagini aggiuntive restano vuote perché non disponibili. Non duplicare la foto principale per simulare fotografie ulteriori. Fonte: [riferimento ufficiale cataloghi Meta](https://developers.facebook.com/documentation/ads-commerce/catalog/reference).

Disponibilità: `in stock` o `out of stock`; prezzi con punto decimale e valuta ISO. Il link deve riferirsi al prodotto specifico sul dominio del negozio. Le foto principali pubblicate sono PNG, 1000×657 pixel e inferiori a 8 MB; superano il requisito dimensionale minimo di 500×500. Questa verifica tecnica non equivale ad approvazione creativa o commerciale. Ulteriori campi dipendono da varianti, mercato e checkout; non dichiarare ingredienti, allergeni, certificazioni o caratteristiche non verificate.

## OpenAI

La specifica stabile discovery richiede **11 campi**: `item_id`, `title`, `description`, `url`, `brand`, `seller_name`, `image_url`, `availability`, `price`, `target_countries`, `store_country`. Non usare elenchi di campi provenienti da vecchie versioni della specifica. `availability=unknown` è ammesso esplicitamente e non dichiara il prodotto disponibile. Il prezzo rimane obbligatorio; qui è `null`, quindi le righe sono incomplete. Fonte: [schema ufficiale prodotti](https://developers.openai.com/commerce/specs/file-upload/products?fields=required&version=currently-stable&view=table).

Il percorso standard di upload è attualmente USA. Impostare IT/EUR non abilita il mercato italiano: ottenere conferma da OpenAI per l'integrazione e i paesi/valute consentiti. Non sostituire i dati reali con US/USD. La bozza resta disabilitata per search e Ads. Varianti richiedono `group_id`, `listing_has_variations` e `variant_dict`; Ads richiede l'abilitazione pertinente e checkout è un'integrazione separata.

La consegna può avvenire tramite URL HTTPS ospitato, upload manuale o SFTP nel percorso merchant, dopo verifica dell'identità e configurazione del business. Pubblicare semplicemente un file non completa l'onboarding e non garantisce visibilità. Fonte: [invio feed OpenAI](https://developers.openai.com/commerce/guides/submit-product-feeds).

## Dati da completare

1. Canale di vendita: solo prenotazione/ritiro oppure e-commerce; eventuali condizioni e zone di consegna.
2. Prezzo IVA inclusa per unità acquistabile, formato/confezione e varianti. Il sito descrive torte personalizzate con più porzioni e pasticcini in scatole diverse: non è possibile assegnare un unico prezzo senza definire l'offerta.
3. Disponibilità aggiornata per articolo; tempi di preparazione per gli ordini su richiesta.
4. URL della pagina del singolo prodotto con prezzo e disponibilità visibili. Nel sito pubblico esiste soltanto la pagina di catalogo: i link nelle bozze sono quindi vuoti, anziché fingere pagine inesistenti.
5. GTIN/MPN effettivi o conferma che non siano stati assegnati; ulteriori fotografie per Meta.
6. Onboarding e conferma geografica OpenAI.

## Differenza tra sito pubblico e repository

Lo snapshot contiene 13 prodotti, mentre `src/pages/prodotti.js` ne contiene 12. Il sito pubblico include anche **Pi-No, Pistacchio e Nocciola**; non è stato aggiunto autonomamente alle pagine della repository. Gli URL delle immagini puntano al sito attualmente pubblico e sono stati verificati via HTTP. Prima di sostituire il sito, trasferire gli asset necessari e aggiornare gli URL: una nuova build potrebbe eliminare i vecchi nomi hash, e l'immagine Pi-No non è presente nella copia locale.

## Hosting successivo

Le bozze sono fuori da `static/`: non vengono pubblicate con Gatsby. Dopo il completamento e la validazione dei dati, i file definitivi possono essere copiati in `static/feeds/`, da cui Gatsby li pubblicherà come `/feeds/google-products.tsv`, `/feeds/meta-products.csv` e `/feeds/openai-products.jsonl`. Questi sono percorsi previsti, non endpoint già disponibili o registrati nelle piattaforme. Non pubblicare le bozze incomplete. Per OpenAI resta necessaria la conferma del mercato anche con tutti i campi compilati.

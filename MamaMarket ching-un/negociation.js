/* MAMAMARKET — SYSTÈME DE NÉGOCIATION COMPLET*/

/* ── CSS */
    (function injectCSS() {
    const style = document.createElement('style');
    style.textContent = `

/* MODAL NÉGOCIATION — CLIENTE */
    .nego-overlay {
        position:fixed;inset:0;background:rgba(42,18,5,.58);
        z-index:3000;display:flex;align-items:center;justify-content:center;
        opacity:0;pointer-events:none;transition:opacity .3s;padding:16px;
    }
    .nego-overlay.on { opacity:1;pointer-events:all; }

    .nego-modal {
        background:var(--white,#fff);border-radius:22px;
        width:100%;max-width:460px;
        box-shadow:0 20px 60px rgba(92,45,10,.25);
        transform:scale(.93) translateY(20px);
        transition:all .32s cubic-bezier(.34,1.56,.64,1);
        overflow:hidden;
    }
    .nego-overlay.on .nego-modal { transform:scale(1) translateY(0); }

    /* Barre kente en haut */
    .nego-kente {
        height:5px;
        background:repeating-linear-gradient(90deg,
        #D4580A 0,#D4580A 14px,#2A6B35 14px,#2A6B35 28px,
        #C8901A 28px,#C8901A 42px,#8B4513 42px,#8B4513 56px);
    }

    .nego-head {
        padding:18px 22px 0;
        display:flex;align-items:flex-start;justify-content:space-between;gap:12px;
    }
    .nego-head h3 {
        font-family:'Playfair Display',Georgia,serif;
        font-size:20px;color:#5C2D0A;line-height:1.2;
    }
    .nego-head p { font-size:12px;color:#8A6040;margin-top:3px; }
    .nego-x {
        width:28px;height:28px;border-radius:50%;background:#F0E4C8;
        border:none;cursor:pointer;font-size:13px;color:#8A6040;
        display:flex;align-items:center;justify-content:center;
        flex-shrink:0;transition:all .2s;
    }
    .nego-x:hover { background:#FDF0E3;color:#D4580A; }

    /* Carte produit mini dans la modal */
    .nego-product {
        margin:14px 22px;background:#FBF5E8;border-radius:12px;
        padding:12px;display:flex;align-items:center;gap:12px;
        border:1.5px solid #E2D0A8;
    }
    .nego-product img {
        width:56px;height:70px;border-radius:8px;object-fit:cover;flex-shrink:0;
    }
    .nego-product-info { flex:1;min-width:0; }
    .nego-product-name {
        font-size:13px;font-weight:700;color:#2A1205;
        white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
    }
    .nego-product-seller { font-size:11px;color:#2A6B35;font-weight:600;margin-top:2px; }
    .nego-product-price {
        font-family:'Playfair Display',serif;
        font-size:16px;font-weight:700;color:#D4580A;margin-top:4px;
    }

    /* Historique des offres */
    .nego-history {
        max-height:160px;overflow-y:auto;padding:0 22px;
        display:flex;flex-direction:column;gap:8px;margin-bottom:4px;
    }
    .nego-history::-webkit-scrollbar { width:4px; }
    .nego-history::-webkit-scrollbar-thumb { background:#E2D0A8;border-radius:2px; }

    .nego-msg {
        display:flex;gap:8px;align-items:flex-end;
        animation:msgIn .3s ease;
    }
    @keyframes msgIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }

    .nego-msg.cliente { flex-direction:row-reverse; }

    .nego-bubble {
        max-width:72%;padding:9px 13px;border-radius:16px;
        font-size:13px;line-height:1.5;
    }
    .nego-msg.vendeuse .nego-bubble {
        background:#F0E4C8;color:#5A3218;border-bottom-left-radius:4px;
    }
    .nego-msg.cliente .nego-bubble {
        background:#D4580A;color:#fff;border-bottom-right-radius:4px;
    }
    .nego-bubble .price-tag {
        display:inline-block;font-family:'Playfair Display',serif;
        font-size:15px;font-weight:700;margin-top:4px;
    }
    .nego-msg.vendeuse .price-tag { color:#D4580A; }
    .nego-msg.cliente  .price-tag { color:#FFD080; }
    .nego-bubble-time {
        font-size:10px;opacity:.55;margin-top:3px;display:block;
    }

    /* Avatar petite icône */
    .nego-avatar {
        width:28px;height:28px;border-radius:50%;flex-shrink:0;
        display:flex;align-items:center;justify-content:center;font-size:14px;
    }
    .nego-avatar.v { background:linear-gradient(135deg,#C87840,#5C2D0A); }
    .nego-avatar.c { background:linear-gradient(135deg,#2A6B35,#0C2814); }

    /* Badge statut */
    .nego-status {
        text-align:center;padding:6px 22px;font-size:11px;font-weight:700;
    }
    .nego-status.en-cours { color:#C8901A; }
    .nego-status.accepte  { color:#2A6B35; }
    .nego-status.refuse   { color:#C0392B; }

    /* Zone de saisie offre */
    .nego-form { padding:14px 22px 20px;border-top:1px solid #F0E4C8; }

    .nego-slider-wrap { margin-bottom:12px; }
    .nego-slider-labels {
        display:flex;justify-content:space-between;
        font-size:11px;color:#8A6040;margin-bottom:5px;
    }
    .nego-price-display {
        text-align:center;
        font-family:'Playfair Display',serif;
        font-size:22px;font-weight:900;color:#D4580A;
        margin-bottom:8px;
    }
    .nego-price-display small {
        font-size:12px;font-weight:400;color:#8A6040;
        font-family:'Nunito',sans-serif;
    }

    input[type=range].nego-slider {
        width:100%;height:6px;
        -webkit-appearance:none;appearance:none;
        background:linear-gradient(90deg,#D4580A var(--pct,50%),#E2D0A8 var(--pct,50%));
        border-radius:3px;outline:none;cursor:pointer;
    }
    input[type=range].nego-slider::-webkit-slider-thumb {
        -webkit-appearance:none;width:20px;height:20px;border-radius:50%;
        background:#D4580A;border:3px solid #fff;
        box-shadow:0 2px 6px rgba(212,88,10,.4);cursor:pointer;
    }

    .nego-message-input {
        width:100%;padding:9px 13px;border:2px solid #E2D0A8;border-radius:10px;
        font-family:'Nunito',sans-serif;font-size:13px;color:#2A1205;
        background:#FBF5E8;outline:none;resize:none;
        transition:border .2s;margin-bottom:12px;
    }
    .nego-message-input:focus { border-color:#D4580A;background:#fff; }
    .nego-message-input::placeholder { color:#8A6040; }

    .nego-btns { display:flex;gap:8px; }
    .nego-btn-send {
        flex:1;padding:11px;background:linear-gradient(135deg,#D4580A,#E8761A);
        color:#fff;border-radius:40px;font-size:13px;font-weight:800;
        border:none;cursor:pointer;transition:all .22s;
        box-shadow:0 4px 12px rgba(212,88,10,.35);
    }
    .nego-btn-send:hover { opacity:.9;transform:translateY(-1px); }
    .nego-btn-send:disabled { opacity:.5;pointer-events:none; }
    .nego-btn-panier {
        flex:1;padding:11px;background:#2A6B35;
        color:#fff;border-radius:40px;font-size:13px;font-weight:800;
        border:none;cursor:pointer;transition:all .22s;display:none;
    }
    .nego-btn-panier:hover { background:#3A8B47;transform:translateY(-1px); }
    .nego-btn-panier.show { display:block; }

    /* Limite de temps */
    .nego-timer {
        text-align:center;font-size:12px;font-weight:700;
        color:#C8901A;padding:6px 0;display:none;
    }
    .nego-timer.show { display:block; }
    .nego-timer span { color:#D4580A; }


/* BOUTON NÉGOCIER sur les cartes produits*/
    .btn-nego {
        display:flex;align-items:center;justify-content:center;gap:5px;
        padding:6px 10px;
        background:transparent;border:1.5px solid #C8901A;
        color:#C8901A;border-radius:40px;
        font-size:11px;font-weight:700;cursor:pointer;
        transition:all .22s;white-space:nowrap;
    }
    .btn-nego:hover { background:#FEF3D0;transform:translateY(-1px); }


/*DASHBOARD VENDEUSE — Panneau négociations*/
    .nego-vendeuse-panel {
        background:#fff;border-radius:16px;
        box-shadow:0 2px 8px rgba(92,45,10,.10);
        overflow:hidden;margin-bottom:20px;
    }
    .nego-vendeuse-panel::before {
        content:'';display:block;height:4px;
        background:linear-gradient(90deg,#C8901A,#D4580A);
    }
    .nvp-head {
        padding:16px 20px 0;
        display:flex;align-items:center;justify-content:space-between;
    }
    .nvp-title {
        font-family:'Playfair Display',serif;font-size:17px;color:#5C2D0A;
    }
    .nvp-badge {
        background:#FEF3D0;color:#C8901A;
        padding:3px 10px;border-radius:20px;font-size:11px;font-weight:800;
    }
    .nvp-body { padding:14px 20px 18px; }

    .nego-request {
        border:1.5px solid #E2D0A8;border-radius:12px;
        padding:14px;margin-bottom:10px;
        transition:all .25s;position:relative;overflow:hidden;
    }
    .nego-request::before {
        content:'';position:absolute;left:0;top:0;bottom:0;width:4px;
        background:#C8901A;
    }
    .nego-request.urgent::before { background:#D4580A; }
    .nego-request.accepte::before { background:#2A6B35; }
    .nego-request.refuse::before  { background:#C0392B; }

    .nr-header { display:flex;align-items:center;gap:10px;margin-bottom:8px; }
    .nr-avatar {
        width:34px;height:34px;border-radius:50%;
        background:linear-gradient(135deg,#2A6B35,#0C2814);
        display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;
    }
    .nr-client { font-size:13px;font-weight:700;color:#2A1205; }
    .nr-time   { font-size:11px;color:#8A6040;margin-top:1px; }
    .nr-produit { font-size:11px;color:#5A3218;margin-bottom:6px; }
    .nr-prix-row {
        display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px;
    }
    .nr-prix-original {
        font-size:12px;color:#8A6040;text-decoration:line-through;
    }
    .nr-prix-propose {
        font-family:'Playfair Display',serif;font-size:17px;
        font-weight:700;color:#C8901A;
    }
    .nr-reduction {
        font-size:10px;font-weight:700;background:#FEF3D0;
        color:#C8901A;padding:2px 8px;border-radius:20px;
    }
    .nr-message {
        font-size:12px;color:#5A3218;background:#FBF5E8;
        border-radius:8px;padding:8px 10px;margin-bottom:10px;
        font-style:italic;
    }


/* Boutons réponse vendeuse */
    .nr-actions { display:flex;gap:7px;flex-wrap:wrap; }
    .nr-btn {
        padding:7px 14px;border-radius:40px;
        font-size:12px;font-weight:700;cursor:pointer;
        border:none;transition:all .22s;
    }
    .nr-btn.accept  { background:#2A6B35;color:#fff; }
    .nr-btn.accept:hover  { background:#3A8B47;transform:translateY(-1px); }
    .nr-btn.refuse  { background:#FDECEA;color:#C0392B;border:1.5px solid rgba(192,57,43,.25); }
    .nr-btn.refuse:hover  { background:#F9C7C5; }
    .nr-btn.counter { background:#FEF3D0;color:#C8901A;border:1.5px solid #C8901A; }
    .nr-btn.counter:hover { background:#C8901A;color:#fff; }


/* Contre-offre input inline */
    .nr-counter-form {
        display:none;margin-top:8px;
        background:#FEF3D0;border-radius:10px;padding:10px 12px;
    }
    .nr-counter-form.show { display:block; }
    .nr-counter-label { font-size:11px;font-weight:700;color:#C8901A;margin-bottom:6px; }
    .nr-counter-row { display:flex;gap:8px; }
    .nr-counter-input {
        flex:1;padding:8px 12px;border:2px solid #C8901A;border-radius:8px;
        font-size:13px;font-weight:700;color:#2A1205;background:#fff;outline:none;
    }
    .nr-counter-send {
        padding:8px 16px;background:#C8901A;color:#fff;border-radius:8px;
        font-size:12px;font-weight:700;border:none;cursor:pointer;transition:all .2s;
    }
    .nr-counter-send:hover { background:#D4580A; }

    `;
    document.head.appendChild(style);
    })();

/*ÉTAT GLOBAL DES NÉGOCIATIONS*/
    const NegoSystem = {

/* Produit en cours de négociation */
    currentProduct: null,

/* Historique des échanges */
    history: [],

/* Statut : pending | accepted | refused | countered */
    status: null,

/* Timer pour les offres avec limite de temps */
    timerInterval: null,
    timerSeconds: 0,

/* ── Limites de négociation  */
    MIN_PCT: 0.60,   // minimum 60% du prix affiché
    MAX_PCT: 0.98,   // maximum 98% (pas gratuit !)

/* ── Ouvrir la modal de négociation  */
    open(product) {
        this.currentProduct = product;
        this.history = [];
        this.status = 'pending';

        this.buildModal();
        this.addSellerOpening();
        this.render();

        const overlay = document.getElementById('negoOverlay');
        overlay.classList.add('on');
        document.body.style.overflow = 'hidden';
    },

    /* ── Fermer  */
    close() {
        const overlay = document.getElementById('negoOverlay');
        if (overlay) overlay.classList.remove('on');
        document.body.style.overflow = '';
        clearInterval(this.timerInterval);
        this.timerSeconds = 0;
    },

/* ── Construire la modal HTML  */
    buildModal() {
        const existing = document.getElementById('negoOverlay');
        if (existing) existing.remove();

        const p = this.currentProduct;
        const minPrice = Math.round(p.price * this.MIN_PCT);
        const maxPrice = Math.round(p.price * this.MAX_PCT);
        const initOffer = Math.round(p.price * 0.85); // proposition initiale à 85%

        const el = document.createElement('div');
        el.id = 'negoOverlay';
        el.className = 'nego-overlay';
        el.innerHTML = `
        <div class="nego-modal">
            <div class="nego-kente"></div>

            <div class="nego-head">
            <div>
                <h3>💬 Négocier le prix</h3>
                <p>Fais une offre à ${p.seller} — elle peut accepter, refuser ou contre-proposer</p>
            </div>
            <button class="nego-x" onclick="NegoSystem.close()">✕</button>
            </div>

            <!-- Produit mini -->
            <div class="nego-product">
            <img src="${p.img}" alt="${p.name}"
                onerror="this.src='https://picsum.photos/seed/${p.id}/200/250'"/>
            <div class="nego-product-info">
                <div class="nego-product-name">${p.name}</div>
                <div class="nego-product-seller">${p.seller} ✓ · 📍 ${p.marche || ''}</div>
                <div class="nego-product-price" id="negoOriginalPrice">
                Prix affiché : ${p.price.toLocaleString('fr-FR')} FCFA
                </div>
            </div>
            </div>

            <!-- Historique messages -->
            <div class="nego-status en-cours" id="negoStatus">⏳ Négociation en cours…</div>
            <div class="nego-history" id="negoHistory"></div>

            <!-- Timer -->
            <div class="nego-timer" id="negoTimer">
            ⏱ La vendeuse doit répondre dans <span id="negoTimerCount">5:00</span>
            </div>

            <!-- Formulaire offre -->
            <div class="nego-form" id="negoForm">
            <div class="nego-slider-wrap">
                <div class="nego-slider-labels">
                <span>Min : ${minPrice.toLocaleString('fr-FR')} FCFA</span>
                <span>Prix actuel : ${p.price.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div class="nego-price-display">
                <span id="negoOfferDisplay">${initOffer.toLocaleString('fr-FR')}</span> FCFA
                <small id="negoSavingsDisplay">
                    — Économie : ${(p.price - initOffer).toLocaleString('fr-FR')} FCFA
                    (-${Math.round((1 - initOffer/p.price)*100)}%)
                </small>
                </div>
                <input type="range" class="nego-slider" id="negoSlider"
                    min="${minPrice}" max="${maxPrice}"
                    value="${initOffer}" step="100"
                    oninput="NegoSystem.updateSlider(this.value)"/>
            </div>

            <textarea class="nego-message-input" id="negoMessage"
                        placeholder="Bonjour Mama ! Je suis intéressée par votre produit. Pouvez-vous faire un geste sur le prix ? 🙏"
                        rows="2" maxlength="200"></textarea>

            <div class="nego-btns">
                <button class="nego-btn-send" id="negoBtnSend"
                        onclick="NegoSystem.sendOffer()">
                🤝 Envoyer mon offre
                </button>
                <button class="nego-btn-panier" id="negoBtnPanier"
                        onclick="NegoSystem.addNegotiatedToCart()">
                🛒 Ajouter au panier
                </button>
            </div>
            </div>
        </div>
        `;

// Fermer en cliquant sur le fond
        el.addEventListener('click', (e) => {
        if (e.target === el) this.close();
        });

        document.body.appendChild(el);
        this.updateSlider(initOffer);
    },

/* ── Message d'ouverture de la vendeuse ─────── */
    addSellerOpening() {
        const p = this.currentProduct;
        const openings = [
        `Bonjour ! Bienvenue sur ma boutique 🌺 Mon ${p.name} est à ${p.price.toLocaleString('fr-FR')} FCFA. Faites-moi votre meilleure offre !`,
        `Bonsoir chère cliente ! Ce produit est fait à la main avec beaucoup d'amour. Je suis ouverte à la discussion 😊`,
        `Bonjour ! Merci de votre intérêt. Je peux faire un petit geste selon votre offre 🙏`,
        ];
        this.addMessage('vendeuse', openings[Math.floor(Math.random() * openings.length)], null);
    },

/* ── Mettre à jour le slider  */
    updateSlider(value) {
        const p = this.currentProduct;
        const v = parseInt(value);
        const minPrice = Math.round(p.price * this.MIN_PCT);
        const maxPrice = Math.round(p.price * this.MAX_PCT);
        const pct = ((v - minPrice) / (maxPrice - minPrice)) * 100;

        const slider = document.getElementById('negoSlider');
        if (slider) slider.style.setProperty('--pct', pct + '%');

        const display  = document.getElementById('negoOfferDisplay');
        const savings  = document.getElementById('negoSavingsDisplay');
        if (display) display.textContent = v.toLocaleString('fr-FR');
        if (savings) {
        const saved = p.price - v;
        const savedPct = Math.round((saved / p.price) * 100);
        savings.textContent = saved > 0
            ? `— Économie : ${saved.toLocaleString('fr-FR')} FCFA (-${savedPct}%)`
            : '— Prix maximum';
        }
    },

/* ── Envoyer une offre  */
    sendOffer() {
        const slider  = document.getElementById('negoSlider');
        const msgEl   = document.getElementById('negoMessage');
        if (!slider || !msgEl) return;

        const offerPrice = parseInt(slider.value);
        const message    = msgEl.value.trim();
        const p          = this.currentProduct;

// Ajouter le message de la cliente
        const clientMsg = message || `Je vous propose ${offerPrice.toLocaleString('fr-FR')} FCFA pour ce produit.`;
        this.addMessage('cliente', clientMsg, offerPrice);

// Désactiver le formulaire pendant la réponse
        document.getElementById('negoBtnSend').disabled = true;
        document.getElementById('negoSlider').disabled  = true;
        document.getElementById('negoMessage').disabled = true;
        msgEl.value = '';

        // Démarrer le timer (la vendeuse a 5 min pour répondre)
        this.startTimer();

        // Simuler la réponse de la vendeuse (1.5 à 3 secondes)
        const delay = 1500 + Math.random() * 1500;
        setTimeout(() => {
        this.simulateSellerResponse(offerPrice);
        }, delay);

        // Statut
        const statusEl = document.getElementById('negoStatus');
        if (statusEl) {
        statusEl.textContent = '⏳ En attente de la réponse de ' + p.seller + '…';
        statusEl.className   = 'nego-status en-cours';
        }
    },

    /* ── Simuler la réponse de la vendeuse  */
    simulateSellerResponse(offerPrice) {
        clearInterval(this.timerInterval);
        const timerEl = document.getElementById('negoTimer');
        if (timerEl) timerEl.classList.remove('show');

        const p   = this.currentProduct;
        const pct = offerPrice / p.price;

        if (pct >= 0.85) {
/* ✅ ACCEPTE */
        this.status = 'accepted';
        const accepts = [
            `D'accord chère cliente ! J'accepte votre offre de ${offerPrice.toLocaleString('fr-FR')} FCFA 🌺 Merci pour votre confiance !`,
            `Avec plaisir ! ${offerPrice.toLocaleString('fr-FR')} FCFA c'est bon pour moi 😊 Ajoutez au panier !`,
            `Très bien ! Je vous fais confiance. ${offerPrice.toLocaleString('fr-FR')} FCFA, affaire conclue ! ✅`,
        ];
        this.addMessage('vendeuse', accepts[Math.floor(Math.random() * accepts.length)], offerPrice);
        this.onAccepted(offerPrice);

        } else if (pct >= 0.75) {
        /* 🔄 CONTRE-PROPOSE */
        this.status = 'countered';
        const counterPrice = Math.round(p.price * (pct + (1 - pct) * 0.5 / 1));
        const roundedCounter = Math.round(counterPrice / 500) * 500;
        const counters = [
            `Je comprends chère cliente, mais ${offerPrice.toLocaleString('fr-FR')} FCFA c'est un peu bas pour moi. Je peux vous faire ${roundedCounter.toLocaleString('fr-FR')} FCFA, qu'est-ce que vous en pensez ? 🤝`,
            `Hmm, je ne peux pas descendre aussi bas. Mon dernier prix : ${roundedCounter.toLocaleString('fr-FR')} FCFA. Ce produit est fait main ! 🌺`,
            `Faisons un compromis : ${roundedCounter.toLocaleString('fr-FR')} FCFA et c'est à vous ! Je ne peux pas faire mieux 🙏`,
        ];
        this.addMessage('vendeuse', counters[Math.floor(Math.random() * counters.length)], roundedCounter);
        this.onCountered(roundedCounter);

        } else {
        /* ❌ REFUSE */
        this.status = 'refused';
        const refuses = [
            `Désolée chère cliente, ${offerPrice.toLocaleString('fr-FR')} FCFA c'est vraiment trop bas. Ce produit me coûte cher à fabriquer. Mon prix minimum est ${Math.round(p.price * 0.80).toLocaleString('fr-FR')} FCFA.`,
            `Je ne peux pas accepter cette offre, j'y perdrais de l'argent 😔 Mais je peux vous faire ${Math.round(p.price * 0.82).toLocaleString('fr-FR')} FCFA si vous êtes intéressée !`,
            `Hélas, c'est en dessous de mon seuil. Que diriez-vous de ${Math.round(p.price * 0.80).toLocaleString('fr-FR')} FCFA ? C'est vraiment mon meilleur prix 🙏`,
        ];
        this.addMessage('vendeuse', refuses[Math.floor(Math.random() * refuses.length)], null);
        this.onRefused();
        }
    },

/*  Offre acceptée  */
    onAccepted(finalPrice) {
        this.currentProduct.negotiatedPrice = finalPrice;

        const statusEl = document.getElementById('negoStatus');
        if (statusEl) {
        statusEl.textContent = '✅ Offre acceptée ! Prix : ' + finalPrice.toLocaleString('fr-FR') + ' FCFA';
        statusEl.className   = 'nego-status accepte';
        }

// Afficher bouton panier, cacher bouton envoyer
        const btnSend   = document.getElementById('negoBtnSend');
        const btnPanier = document.getElementById('negoBtnPanier');
        if (btnSend)   btnSend.style.display   = 'none';
        if (btnPanier) btnPanier.classList.add('show');

        // Cacher le formulaire
        const slider = document.getElementById('negoSlider');
        const msg    = document.getElementById('negoMessage');
        if (slider) slider.closest('.nego-slider-wrap').style.display = 'none';
        if (msg)    msg.style.display = 'none';
    },

/* ── Contre-offre ────────────────────────────── */
    onCountered(counterPrice) {
        const p = this.currentProduct;
        const slider = document.getElementById('negoSlider');
        const btnSend = document.getElementById('negoBtnSend');

        if (slider) {
        slider.value    = counterPrice;
        slider.disabled = false;
        this.updateSlider(counterPrice);
        }
        if (btnSend) {
        btnSend.disabled    = false;
        btnSend.textContent = '🤝 Répondre à son offre';
        }

        const msgEl = document.getElementById('negoMessage');
        if (msgEl) {
        msgEl.disabled    = false;
        msgEl.placeholder = `Répondez à ${p.seller}…`;
        }

        const statusEl = document.getElementById('negoStatus');
        if (statusEl) {
        statusEl.textContent = `🔄 ${p.seller} a fait une contre-offre — à vous de jouer !`;
        statusEl.className   = 'nego-status en-cours';
        }
    },

/* ── Offre refusée  */
    onRefused() {
        const p = this.currentProduct;
        const slider  = document.getElementById('negoSlider');
        const btnSend = document.getElementById('negoBtnSend');

// Remonter le slider au minimum acceptable
        const minAccept = Math.round(p.price * 0.80);
        if (slider) {
        slider.value    = minAccept;
        slider.min      = minAccept;
        slider.disabled = false;
        this.updateSlider(minAccept);
        }
        if (btnSend) {
        btnSend.disabled    = false;
        btnSend.textContent = '🤝 Faire une nouvelle offre';
        }

        const msgEl = document.getElementById('negoMessage');
        if (msgEl) {
        msgEl.disabled    = false;
        msgEl.placeholder = 'Essayez avec un prix plus élevé…';
        }

        const statusEl = document.getElementById('negoStatus');
        if (statusEl) {
        statusEl.textContent = '❌ Offre refusée — essayez un prix plus élevé';
        statusEl.className   = 'nego-status refuse';
        }
    },

    /* ── Ajouter au panier au prix négocié  */
    addNegotiatedToCart() {
        const p = this.currentProduct;
        const finalPrice = p.negotiatedPrice || p.price;

        this.close();

        // Toast de confirmation
        if (typeof showToast === 'function') {
        showToast('🛒',
            p.name.substr(0, 22) + ' ajouté !',
            `Prix négocié : ${finalPrice.toLocaleString('fr-FR')} FCFA 🎉`
        );
        }

// Mettre à jour le badge panier si disponible
        if (typeof cartCount !== 'undefined') {
        cartCount++;
        const badge = document.getElementById('cartBadge') || document.getElementById('cartDot');
        if (badge) badge.textContent = cartCount;
        }
    },

/*  Ajouter un message dans l'historique  */
    addMessage(role, text, price) {
        this.history.push({ role, text, price, time: new Date() });
        this.render();
    },

/*  Rendre l'historique  */
    render() {
        const container = document.getElementById('negoHistory');
        if (!container) return;

        container.innerHTML = this.history.map(msg => {
        const timeStr = msg.time.toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit' });
        const isCliente  = msg.role === 'cliente';
        const avatarEmoji = isCliente ? '👤' : '👩🏾';
        const avatarClass = isCliente ? 'c' : 'v';

        return `
            <div class="nego-msg ${msg.role}">
            <div class="nego-avatar ${avatarClass}">${avatarEmoji}</div>
            <div class="nego-bubble">
                ${msg.text}
                ${msg.price ? `<div class="price-tag">${msg.price.toLocaleString('fr-FR')} FCFA</div>` : ''}
                <span class="nego-bubble-time">${timeStr}</span>
            </div>
            </div>`;
        }).join('');

        // Auto-scroll vers le bas
        container.scrollTop = container.scrollHeight;
    },

/*  Timer 5 minutes  */
    startTimer() {
        this.timerSeconds = 5 * 60;
        const timerEl    = document.getElementById('negoTimer');
        const countEl    = document.getElementById('negoTimerCount');
        if (timerEl) timerEl.classList.add('show');

        this.timerInterval = setInterval(() => {
        this.timerSeconds--;
        if (countEl) {
            const m = Math.floor(this.timerSeconds / 60);
            const s = this.timerSeconds % 60;
            countEl.textContent = `${m}:${s.toString().padStart(2,'0')}`;
        }
        if (this.timerSeconds <= 0) {
            clearInterval(this.timerInterval);
            if (timerEl) timerEl.classList.remove('show');
        }
        }, 1000);
    },
    };

/*PANNEAU NÉGOCIATIONS — DASHBOARD VENDEUSE*/
        function buildVendeuseNegoPanel() {
        const container = document.getElementById('dashNegoPanel');
        if (!container) return;

/* Données de démonstration */
    const demandes = [
        {
        id: 1, urgent: true,
        client: 'Koné Fatoumata', avatar: '👩🏿', marche: 'Adjamé',
        produit: 'Robe Kente Royale', img: 'photo/robe royal.jpeg',
        prixOriginal: 24500, prixPropose: 19000,
        message: 'Bonjour Mama ! C\'est pour l\'anniversaire de ma fille, pouvez-vous faire un effort ? 🙏',
        time: 'Il y a 5 min',
        },
        {
        id: 2, urgent: false,
        client: 'Diallo Mariama', avatar: '👩🏽', marche: 'Adjamé',
        produit: 'Beurre de Karité 250g', img: 'photo/beurre de karité.jpg',
        prixOriginal: 5200, prixPropose: 4500,
        message: 'J\'achète souvent chez vous, vous pouvez faire un geste fidèle cliente ? 😊',
        time: 'Il y a 18 min',
        },
        {
        id: 3, urgent: false,
        client: 'Traoré Adja', avatar: '🧕🏾', marche: 'Adjamé',
        produit: 'Collier Perles Africaines', img: 'photo/colier perle.jpeg',
        prixOriginal: 8500, prixPropose: 7000,
        message: 'Belle pièce ! Je prends 2 colliers si vous faites -15% sur les deux.',
        time: 'Il y a 32 min',
        },
    ];

    container.innerHTML = `
        <div class="nego-vendeuse-panel">
        <div class="nvp-head">
            <div class="nvp-title">🤝 Demandes de Négociation</div>
            <span class="nvp-badge">${demandes.length} en attente</span>
        </div>
        <div class="nvp-body">
            ${demandes.map(d => {
            const reduction = Math.round((1 - d.prixPropose / d.prixOriginal) * 100);
            return `
            <div class="nego-request ${d.urgent ? 'urgent' : ''}" id="negoReq${d.id}">
                <div class="nr-header">
                <div class="nr-avatar">${d.avatar}</div>
                <div>
                    <div class="nr-client">${d.client}</div>
                    <div class="nr-time">${d.time} · 📍 ${d.marche}</div>
                </div>
                </div>
                <div class="nr-produit">📦 ${d.produit}</div>
                <div class="nr-prix-row">
                <span class="nr-prix-original">${d.prixOriginal.toLocaleString('fr-FR')} FCFA</span>
                <span>→</span>
                <span class="nr-prix-propose">${d.prixPropose.toLocaleString('fr-FR')} FCFA</span>
                <span class="nr-reduction">-${reduction}%</span>
                </div>
                <div class="nr-message">"${d.message}"</div>
                <div class="nr-actions">
                <button class="nr-btn accept"
                    onclick="vendeuseAccepte(${d.id}, ${d.prixPropose})">
                    ✅ Accepter
                </button>
                <button class="nr-btn counter"
                    onclick="vendeuseContrePropose(${d.id})">
                    🔄 Contre-proposer
                </button>
                <button class="nr-btn refuse"
                    onclick="vendeuseRefuse(${d.id})">
                    ❌ Refuser
                </button>
                </div>
                <!-- Formulaire contre-offre -->
                <div class="nr-counter-form" id="counterForm${d.id}">
                <div class="nr-counter-label">💰 Votre contre-offre (FCFA)</div>
                <div class="nr-counter-row">
                    <input type="number" class="nr-counter-input"
                        id="counterInput${d.id}"
                        value="${Math.round((d.prixOriginal + d.prixPropose) / 2 / 500) * 500}"
                        min="${Math.round(d.prixOriginal * 0.75)}"
                        max="${d.prixOriginal}"
                        step="500"/>
                    <button class="nr-counter-send"
                    onclick="vendeuseSendCounter(${d.id}, ${d.prixOriginal})">
                    Envoyer
                    </button>
                </div>
                </div>
            </div>`;
            }).join('')}
        </div>
        </div>
    `;
    }

/* Vendeuse — Accepter */
        function vendeuseAccepte(id, prix) {
        const el = document.getElementById('negoReq' + id);
        if (!el) return;
        el.classList.add('accepte');
        el.querySelector('.nr-actions').innerHTML =
            `<span style="color:#2A6B35;font-size:12px;font-weight:700">✅ Offre acceptée — ${prix.toLocaleString('fr-FR')} FCFA · MamaPay notifié</span>`;
        if (typeof showToast === 'function')
            showToast('✅', 'Offre acceptée !', 'La cliente sera notifiée par SMS');
        }

/* Vendeuse — Refuser */
        function vendeuseRefuse(id) {
        const el = document.getElementById('negoReq' + id);
        if (!el) return;
        el.classList.add('refuse');
        el.querySelector('.nr-actions').innerHTML =
            `<span style="color:#C0392B;font-size:12px;font-weight:700">❌ Offre refusée — La cliente a été informée</span>`;
        if (typeof showToast === 'function')
            showToast('❌', 'Offre refusée', 'La cliente pourra faire une nouvelle offre');
        }

/* Vendeuse — Afficher formulaire contre-offre */
        function vendeuseContrePropose(id) {
        const form = document.getElementById('counterForm' + id);
        if (form) form.classList.toggle('show');
        }

/* Vendeuse — Envoyer contre-offre */
        function vendeuseSendCounter(id, prixOriginal) {
        const input = document.getElementById('counterInput' + id);
        if (!input) return;
        const counterPrix = parseInt(input.value);
        if (isNaN(counterPrix) || counterPrix <= 0) return;

        const el = document.getElementById('negoReq' + id);
        if (!el) return;

        const reduction = Math.round((1 - counterPrix / prixOriginal) * 100);
        el.classList.remove('refuse');
        el.querySelector('.nr-actions').innerHTML =
            `<span style="color:#C8901A;font-size:12px;font-weight:700">
            🔄 Contre-offre envoyée : ${counterPrix.toLocaleString('fr-FR')} FCFA (-${reduction}%) · En attente de la cliente
            </span>`;
        const form = document.getElementById('counterForm' + id);
        if (form) form.classList.remove('show');
        if (typeof showToast === 'function')
            showToast('🔄', 'Contre-offre envoyée !', 'La cliente a été notifiée — ' + counterPrix.toLocaleString('fr-FR') + ' FCFA');
        }

/* INIT — au chargement de la page */
    document.addEventListener('DOMContentLoaded', () => {
    buildVendeuseNegoPanel();
});
import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/demo/service/icon.service';


@Component({
    
    templateUrl: './icons.component.html',
    providers: [],
})


export class IconsComponent implements OnInit {
   
    actionIcons=[
        { name:'bpost-alert', altText:'Warning!'},
        { name:'bpost-bin', altText:'Delete!'},
        { name:'bpost-bookmark-filled', altText:'Bookmarked'},
        { name:'bpost-bookmark-outline', altText:'Bookmark'},
        { name:'bpost-calendar', altText:'Open the calendar'},
        { name:'bpost-cart', altText:'Add to basket'},
        { name:'bpost-chat', altText:'Send message'},
        { name:'bpost-checkmark', altText:'Included:'},
        { name:'bpost-chevron-circle-right', altText:'Go to page'},
        { name:'bpost-chevron-down', altText:'Expand item'},
        { name:'bpost-chevron-left', altText:'Navigate back'},
        { name:'bpost-chevron-right', altText:'Navigate forward'},
        { name:'bpost-chevron-up', altText:'Collapse item'},
        { name:'bpost-close', altText:'Close'},
        { name:'bpost-cog', altText:'Configure'},
        { name:'bpost-compare', altText:'Compare'},
        { name:'bpost-copy', altText:'Copy'},
        { name:'bpost-crop', altText:'Crop'},
        { name:'bpost-download', altText:'Download'},
        { name:'bpost-edit', altText:'Edit'},
        { name:'bpost-expand', altText:'Maximize'},
        { name:'bpost-external', altText:'External'},
        { name:'bpost-faceid', altText:'Use face recognition'},
        { name:'bpost-filter-1', altText:'Open filter settings'},
        { name:'bpost-fingerprint', altText:'Use fingerprint recognition'},
        { name:'bpost-hide', altText:'Hide your input'},
        { name:'bpost-info', altText:'This is important information'},
        { name:'bpost-map-center', altText:'Center the map to my location'},
        { name:'bpost-minus', altText:'Reduce'},
        { name:'bpost-menu-contextual', altText:'Open more options'},
        { name:'bpost-menu-search', altText:'Search'},
        { name:'bpost-menu', altText:'Open application menu'},
        { name:'bpost-mix', altText:'Open settings'},
        { name:'bpost-notification', altText:'Your notifications'},
        { name:'bpost-pause', altText:'Pause'},
        { name:'bpost-photo', altText:'Open camera'},
        { name:'bpost-plus', altText:'Add'},
        { name:'bpost-qr-code', altText:'Scan QR code'},
        { name:'bpost-scan', altText:'Open camera to scan barcode'},
        { name:'bpost-search', altText:'Search'},
        { name:'bpost-share', altText:'Share on social media'},
        { name:'bpost-thumb-up', altText:'Give a possitive rating'},
        { name:'bpost-thumb-down', altText:'Give a negative rating'},
        { name:'bpost-tooltip', altText:'Access additional information about this'},
        { name:'bpost-upload', altText:'Select file to import'},
        { name:'bpost-view', altText:'Show your input'}
    ];



    brandIconsLocations=[
        {  name: 'awaiting address', src: '/assets/themes/bpost/icons/brand/location/awaiting address.svg'},
        {  name: 'bpost-check', src: '/assets/themes/bpost/icons/brand/location/bpost-check.svg'},
        {  name: 'bpost-foundation', src: '/assets/themes/bpost/icons/brand/location/bpost-foundation.svg'},
        {  name: 'bpost-return', src: '/assets/themes/bpost/icons/brand/location/bpost-return.svg'},
        {  name: 'bpost-warehouse', src: '/assets/themes/bpost/icons/brand/location/bpost-warehouse.svg'},
        {  name: 'business', src: '/assets/themes/bpost/icons/brand/location/business.svg'},
        {  name: 'home-add', src: '/assets/themes/bpost/icons/brand/location/home-add.svg'},
        {  name: 'home-address', src: '/assets/themes/bpost/icons/brand/location/home-address.svg'},
        {  name: 'home-delivery', src: '/assets/themes/bpost/icons/brand/location/home-delivery.svg'},
        {  name: 'house-pin', src: '/assets/themes/bpost/icons/brand/location/house-pin.svg'},
        {  name: 'house-security', src: '/assets/themes/bpost/icons/brand/location/house-security.svg'},
        {  name: 'hyperCentre-massPost', src: '/assets/themes/bpost/icons/brand/location/hyperCentre-massPost.svg'},
        {  name: 'hyperCentre-massPost-2', src: '/assets/themes/bpost/icons/brand/location/hyperCentre-massPost-2.svg'},
        {  name: 'hyperCentre-massPost-3', src: '/assets/themes/bpost/icons/brand/location/hyperCentre-massPost-3.svg'},
        {  name: 'hyperCentre-massPost-4', src: '/assets/themes/bpost/icons/brand/location/hyperCentre-massPost-4.svg'},
        {  name: 'hyperCentre-squares-return', src: '/assets/themes/bpost/icons/brand/location/hyperCentre-squares-return.svg'},
        {  name: 'neighbour_favourite', src: '/assets/themes/bpost/icons/brand/location/neighbour-favourite.svg'},
        {  name: 'neighbour_delivery', src: '/assets/themes/bpost/icons/brand/location/neighbour-delivery.svg'},
        {  name: 'neighbour-forced', src: '/assets/themes/bpost/icons/brand/location/neighbour-forced.svg'},
        {  name: 'neighbour-forward', src: '/assets/themes/bpost/icons/brand/location/neighbour-forward.svg'},
        {  name: 'neighbour', src: '/assets/themes/bpost/icons/brand/location/neighbour.svg'},
        {  name: 'pickUp-reminder', src: '/assets/themes/bpost/icons/brand/location/pickUp-reminder.svg'},
        {  name: 'post-office', src: '/assets/themes/bpost/icons/brand/location/post-office.svg'},
        {  name: 'post-point', src: '/assets/themes/bpost/icons/brand/location/post-point.svg'},
        {  name: 'preparation', src: '/assets/themes/bpost/icons/brand/location/preparation.svg'},
        {  name: 'preparation-2', src: '/assets/themes/bpost/icons/brand/location/preparation-2.svg'},
        {  name: 'shop-bpost', src: '/assets/themes/bpost/icons/brand/location/shop-bpost.svg'},
        {  name: 'shop-bpost-2', src: '/assets/themes/bpost/icons/brand/location/shop-bpost-2.svg'},
        {  name: 'shop-bpost-delivered', src: '/assets/themes/bpost/icons/brand/location/shop-bpost-delivered.svg'},
        {  name: 'shop-bpost-returned', src: '/assets/themes/bpost/icons/brand/location/shop-bpost-return.svg'},
        {  name: 'shop', src: '/assets/themes/bpost/icons/brand/location/shop.svg'},
        {  name: 'shop-delivered', src: '/assets/themes/bpost/icons/brand/location/shop-delivered.svg'},
        {  name: 'shop-return', src: '/assets/themes/bpost/icons/brand/location/shop-return.svg'},
        {  name: 'shop-waiting-bpost', src: '/assets/themes/bpost/icons/brand/location/shop-waiting-bpost.svg'},
        {  name: 'two-houses', src: '/assets/themes/bpost/icons/brand/location/two-houses.svg'}
    ];
    brandIconsDeliveryStatus=[
        {  name: 'address-search', src: '/assets/themes/bpost/icons/brand/delivery-status/address-search.svg'},
        {  name: 'belgian-map', src: '/assets/themes/bpost/icons/brand/delivery-status/belgian-map.svg'},
        {  name: 'belgian-map-communes', src: '/assets/themes/bpost/icons/brand/delivery-status/belgian-map-communes.svg'},
        {  name: 'collection', src: '/assets/themes/bpost/icons/brand/delivery-status/collection.svg'},
        {  name: 'bpost-in-transit', src: '/assets/themes/bpost/icons/brand/delivery-status/bpost-in-transit.svg'},
        {  name: 'delivery-van', src: '/assets/themes/bpost/icons/brand/delivery-status/delivery-van.svg'},
        {  name: 'electric-van', src: '/assets/themes/bpost/icons/brand/delivery-status/electric-van.svg'},
        {  name: 'letterbox', src: '/assets/themes/bpost/icons/brand/delivery-status/letterbox.svg'},
        {  name: 'letterBox-colis', src: '/assets/themes/bpost/icons/brand/delivery-status/letterBox-colis.svg'},
        {  name: 'locator', src: '/assets/themes/bpost/icons/brand/delivery-status/locator.svg'},
        {  name: 'locator-colis', src: '/assets/themes/bpost/icons/brand/delivery-status/locator-colis.svg'},
        {  name: 'locator-colis-check', src: '/assets/themes/bpost/icons/brand/delivery-status/locator-colis-check.svg'},
        {  name: 'locator-colis-return', src: '/assets/themes/bpost/icons/brand/delivery-status/locator-colis-return.svg'},
        {  name: 'postal-box', src: '/assets/themes/bpost/icons/brand/delivery-status/postal-box.svg'},
        {  name: 'sending', src: '/assets/themes/bpost/icons/brand/delivery-status/sending.svg'},
    ];

    brandIconsLockers=[
        {  name: 'distributor-bpost', src: '/assets/themes/bpost/icons/brand/lockers/distributor-bpost.svg'},
        {  name: 'distributor-lean', src: '/assets/themes/bpost/icons/brand/lockers/distributor-lean.svg'},
        {  name: 'lean-locker-default', src: '/assets/themes/bpost/icons/brand/lockers/lean-locker-default.svg'},
        {  name: 'lean-locker-delivered', src: '/assets/themes/bpost/icons/brand/lockers/lean-locker-delivered.svg'},
        {  name: 'lean-locker-return', src: '/assets/themes/bpost/icons/brand/lockers/lean-locker-return.svg'},
        {  name: 'lean-locker-waiting', src: '/assets/themes/bpost/icons/brand/lockers/lean-locker-waiting.svg'},
        {  name: 'lean-locker-delivered', src: '/assets/themes/bpost/icons/brand/lockers/locker-delivered.svg'},
        {  name: 'lean-locker-return', src: '/assets/themes/bpost/icons/brand/lockers/locker-return.svg'},
        {  name: 'lean-locker-waiting', src: '/assets/themes/bpost/icons/brand/lockers/locker-waiting.svg'}
    ];

    brandIconsDocuments=[
        {  name: 'addressbook', src: '/assets/themes/bpost/icons/brand/documents/addressbook.svg'},
        {  name: 'attachment', src: '/assets/themes/bpost/icons/brand/documents/attachment.svg'},
        {  name: 'brochure', src: '/assets/themes/bpost/icons/brand/documents/brochure.svg'},
        {  name: 'cahier-atoma', src: '/assets/themes/bpost/icons/brand/documents/cahier-atoma.svg'},
        {  name: 'color', src: '/assets/themes/bpost/icons/brand/documents/color.svg'},
        {  name: 'csv-doc', src: '/assets/themes/bpost/icons/brand/documents/csv-doc.svg'},
        {  name: 'dmm-temp', src: '/assets/themes/bpost/icons/brand/documents/dmm-temp.svg'},
        {  name: 'document-label', src: '/assets/themes/bpost/icons/brand/documents/document-label.svg'},
        {  name: 'document-privacy', src: '/assets/themes/bpost/icons/brand/documents/document-privacy.svg'},
        {  name: 'document', src: '/assets/themes/bpost/icons/brand/documents/document.svg'},
        {  name: 'folder', src: '/assets/themes/bpost/icons/brand/documents/folder.svg'},
        {  name: 'form', src: '/assets/themes/bpost/icons/brand/documents/form.svg'},
        {  name: 'gabarit', src: '/assets/themes/bpost/icons/brand/documents/gabarit.svg'},
        {  name: 'id-card', src: '/assets/themes/bpost/icons/brand/documents/id-card.svg'},
        {  name: 'large-format', src: '/assets/themes/bpost/icons/brand/documents/large-format.svg'},
        {  name: 'large-format-plus', src: '/assets/themes/bpost/icons/brand/documents/large-format-plus.svg'},
        {  name: 'layout', src: '/assets/themes/bpost/icons/brand/documents/layout.svg'},
        {  name: 'layout-new', src: '/assets/themes/bpost/icons/brand/documents/layout-new.svg'},
        {  name: 'letter-pencil', src: '/assets/themes/bpost/icons/brand/documents/letter-pencil.svg'},
        {  name: 'newspaper', src: '/assets/themes/bpost/icons/brand/documents/newspaper.svg'},
        {  name: 'online-doc', src: '/assets/themes/bpost/icons/brand/documents/online-doc.svg'},
        {  name: 'resize', src: '/assets/themes/bpost/icons/brand/documents/resize.svg'},
        {  name: 'scale', src: '/assets/themes/bpost/icons/brand/documents/scale.svg'},
        {  name: 'small-format', src: '/assets/themes/bpost/icons/brand/documents/small-format.svg'},
        {  name: 'special', src: '/assets/themes/bpost/icons/brand/documents/special.svg'},
        {  name: 'suitcase', src: '/assets/themes/bpost/icons/brand/documents/suitcase.svg'},
        {  name: 'word-doc', src: '/assets/themes/bpost/icons/brand/documents/word-doc.svg'},
    ];

    brandIconsLeisure= [
        {  name: 'airplane', src: '/assets/themes/bpost/icons/brand/leisure/airplane.svg'},
        {  name: 'bag', src: '/assets/themes/bpost/icons/brand/leisure/bag.svg'},
        {  name: 'click-ready', src: '/assets/themes/bpost/icons/brand/leisure/click-ready.svg'},
        {  name: 'convenience', src: '/assets/themes/bpost/icons/brand/leisure/convenience.svg'},
        {  name: 'eating-out', src: '/assets/themes/bpost/icons/brand/leisure/eating-out.svg'},
        {  name: 'groceries', src: '/assets/themes/bpost/icons/brand/leisure/groceries.svg'},
        {  name: 'lotterie', src: '/assets/themes/bpost/icons/brand/leisure/lotterie.svg'},
        {  name: 'playground', src: '/assets/themes/bpost/icons/brand/leisure/playground.svg'},
        {  name: 'prestige', src: '/assets/themes/bpost/icons/brand/leisure/prestige.svg'},
        {  name: 'reduction', src: '/assets/themes/bpost/icons/brand/leisure/reduction.svg'},
        {  name: 'shopping', src: '/assets/themes/bpost/icons/brand/leisure/shopping.svg'},
        {  name: 'solution', src: '/assets/themes/bpost/icons/brand/leisure/solution.svg'},
        {  name: 'transport', src: '/assets/themes/bpost/icons/brand/leisure/transport.svg'}

    ];

    brandIconsParcelMail=[
        {  name:'adressage-check', src:'/assets/themes/bpost/icons/brand/parcel-mail/adressage-check.svg'},
        {  name:'adressage-S42', src:'/assets/themes/bpost/icons/brand/parcel-mail/adressage-S42.svg'},
        {  name:'dmm', src:'/assets/themes/bpost/icons/brand/parcel-mail/dmm.svg'},
        {  name:'email', src:'/assets/themes/bpost/icons/brand/parcel-mail/email.svg'},
        {  name:'envelope', src:'/assets/themes/bpost/icons/brand/parcel-mail/envelope.svg'},
        {  name:'envelope-mass', src:'/assets/themes/bpost/icons/brand/parcel-mail/envelope-mass.svg'},
        {  name:'envelope-prior', src:'/assets/themes/bpost/icons/brand/parcel-mail/envelope-prior.svg'},
        {  name:'envelope-urgent', src:'/assets/themes/bpost/icons/brand/parcel-mail/envelope-urgent.svg'},
        {  name:'letter-pack', src:'/assets/themes/bpost/icons/brand/parcel-mail/letter-pack.svg'},
        {  name:'mail', src:'/assets/themes/bpost/icons/brand/parcel-mail/mail.svg'},
        {  name:'mail-registered', src:'/assets/themes/bpost/icons/brand/parcel-mail/mail-registered.svg'},
        {  name:'pack', src:'/assets/themes/bpost/icons/brand/parcel-mail/pack.svg'},
        {  name:'pack-back', src:'/assets/themes/bpost/icons/brand/parcel-mail/pack-back.svg'},
        {  name:'pack-barcode', src:'/assets/themes/bpost/icons/brand/parcel-mail/pack-barcode.svg'},
        {  name:'pack-sticker-shml', src:'/assets/themes/bpost/icons/brand/parcel-mail/pack-sticker-shml.svg'},
        {  name:'paper-mail', src:'/assets/themes/bpost/icons/brand/parcel-mail/paper-mail.svg'},
        {  name:'parcel-delayed', src:'/assets/themes/bpost/icons/brand/parcel-mail/parcel-delayed.svg'},
        {  name:'parcel-delivered.', src:'/assets/themes/bpost/icons/brand/parcel-mail/parcel-delivered.svg'},
        {  name:'parcel-drop-off', src:'/assets/themes/bpost/icons/brand/parcel-mail/parcel-drop-off.svg'},
        {  name:'parcel-filled', src:'/assets/themes/bpost/icons/brand/parcel-mail/parcel-filled.svg'},
        {  name:'parcel-lost', src:'/assets/themes/bpost/icons/brand/parcel-mail/parcel-lost.svg'},
        {  name:'parcel-preparation-return', src:'/assets/themes/bpost/icons/brand/parcel-mail/parcel-preparation-return.svg'},
        {  name:'parcel-question', src:'/assets/themes/bpost/icons/brand/parcel-mail/parcel-question.svg'},
        {  name:'parcel-registered', src:'/assets/themes/bpost/icons/brand/parcel-mail/parcel-registered.svg'},
        {  name:'postcard-1', src:'/assets/themes/bpost/icons/brand/parcel-mail/postcard-1.svg'},
        {  name:'postcard-2', src:'/assets/themes/bpost/icons/brand/parcel-mail/postcard-2.svg'},
        {  name:'ready-sent', src:'/assets/themes/bpost/icons/brand/parcel-mail/ready-sent.svg'},
        {  name:'scan-barcode', src:'/assets/themes/bpost/icons/brand/parcel-mail/scan-barcode.svg'},
        {  name:'scan-handwriting', src:'/assets/themes/bpost/icons/brand/parcel-mail/scan-handwriting.svg'},
        {  name:'scan-qr', src:'/assets/themes/bpost/icons/brand/parcel-mail/scan-qr.svg'},
        {  name:'scan', src:'/assets/themes/bpost/icons/brand/parcel-mail/scan.svg'},
        {  name:'terms', src:'/assets/themes/bpost/icons/brand/parcel-mail/terms.svg'},
        {  name:'wish-card', src:'/assets/themes/bpost/icons/brand/parcel-mail/wish-card.svg'}
    ];

    brandIconsPaymentSecurity=[
        {  name:'atm', src:'/assets/themes/bpost/icons/brand/payment-security/atm.svg'},
        {  name:'block-card', src:'/assets/themes/bpost/icons/brand/payment-security/block-card.svg'},
        {  name:'bpaid', src:'/assets/themes/bpost/icons/brand/payment-security/bpaid.svg'},
        {  name:'card', src:'/assets/themes/bpost/icons/brand/payment-security/card.svg'},
        {  name:'eshop', src:'/assets/themes/bpost/icons/brand/payment-security/eshop.svg'},
        {  name:'forced-safe-place', src:'/assets/themes/bpost/icons/brand/payment-security/forced-safe-place.svg'},
        {  name:'gdpr', src:'/assets/themes/bpost/icons/brand/payment-security/gdpr.svg'},
        {  name:'invoice', src:'/assets/themes/bpost/icons/brand/payment-security/invoice.svg'},
        {  name:'lock-check', src:'/assets/themes/bpost/icons/brand/payment-security/lock-check.svg'},
        {  name:'lock', src:'/assets/themes/bpost/icons/brand/payment-security/lock.svg'},
        {  name:'reload', src:'/assets/themes/bpost/icons/brand/payment-security/reload.svg'},
        {  name:'shipping-credit', src:'/assets/themes/bpost/icons/brand/payment-security/shipping-credit.svg'},
        {  name:'shopping-cart', src:'/assets/themes/bpost/icons/brand/payment-security/shopping-cart.svg'},
        {  name:'shopping-order', src:'/assets/themes/bpost/icons/brand/payment-security/shopping-order.svg'},
        {  name:'spending', src:'/assets/themes/bpost/icons/brand/payment-security/spending.svg'},
        {  name:'topUp', src:'/assets/themes/bpost/icons/brand/payment-security/topUp.svg'},
        {  name:'withdrawal', src:'/assets/themes/bpost/icons/brand/payment-security/withdrawal.svg'}
    ];

    brandIconsPeople=[
        {  name:'account', src:'/assets/themes/bpost/icons/brand/people/account.svg'},
        {  name:'acquisition', src:'/assets/themes/bpost/icons/brand/people/acquisition.svg'},
        {  name:'add-contact', src:'/assets/themes/bpost/icons/brand/people/add-contact.svg'},
        {  name:'bicycle', src:'/assets/themes/bpost/icons/brand/people/bicycle.svg'},
        {  name:'bpost-driver', src:'/assets/themes/bpost/icons/brand/people/bpost-driver.svg'},
        {  name:'call-center', src:'/assets/themes/bpost/icons/brand/people/call-center.svg'},
        {  name:'career', src:'/assets/themes/bpost/icons/brand/people/career.svg'},
        {  name:'communication', src:'/assets/themes/bpost/icons/brand/people/communication.svg'},
        {  name:'customs-delivered', src:'/assets/themes/bpost/icons/brand/people/customs-delivered.svg'},
        {  name:'ustoms-lost', src:'/assets/themes/bpost/icons/brand/people/customs-lost.svg'},
        {  name:'customs-payment', src:'/assets/themes/bpost/icons/brand/people/customs-payment.svg'},
        {  name:'customs-status', src:'/assets/themes/bpost/icons/brand/people/customs-status.svg'},
        {  name:'delivery-parcel', src:'/assets/themes/bpost/icons/brand/people/delivery-parcel.svg'},
        {  name:'facteur-1-colis', src:'/assets/themes/bpost/icons/brand/people/facteur-1-colis.svg'},
        {  name:'facteur-2-colis-return', src:'/assets/themes/bpost/icons/brand/people/facteur-2-colis-return.svg'},
        {  name:'facteur-2-colis', src:'/assets/themes/bpost/icons/brand/people/facteur-2-colis.svg'},
        {  name:'facteur-3-colis-return', src:'/assets/themes/bpost/icons/brand/people/facteur-3-colis-return.svg'},
        {  name:'facteur-3-colis', src:'/assets/themes/bpost/icons/brand/people/facteur-3-colis.svg'},
        {  name:'facteur', src:'/assets/themes/bpost/icons/brand/people/facteur.svg'},
        {  name:'import', src:'/assets/themes/bpost/icons/brand/people/import.svg'},
        {  name:'on-foot', src:'/assets/themes/bpost/icons/brand/people/on-foot.svg'},
        {  name:'parrainage-gift', src:'/assets/themes/bpost/icons/brand/people/parrainage-gift.svg'},
        {  name:'parrainage-plu', src:'/assets/themes/bpost/icons/brand/people/parrainage-plus.svg'},
        {  name:'parrainage', src:'/assets/themes/bpost/icons/brand/people/parrainage.svg'},
        {  name:'personal-info-add', src:'/assets/themes/bpost/icons/brand/people/personal-info-add.svg'},
        {  name:'personal-info-check', src:'/assets/themes/bpost/icons/brand/people/personal-info-check.svg'},
        {  name:'personal-info', src:'/assets/themes/bpost/icons/brand/people/personal-info.svg'},
        {  name:'profile', src:'/assets/themes/bpost/icons/brand/people/profile.svg'},
        {  name:'rating', src:'/assets/themes/bpost/icons/brand/people/rating.svg'},
        {  name:'request', src:'/assets/themes/bpost/icons/brand/people/request.svg'},
        {  name:'runner', src:'/assets/themes/bpost/icons/brand/people/runner.svg'},
        {  name:'satisfaction-client', src:'/assets/themes/bpost/icons/brand/people/satisfaction-client.svg'},
        {  name:'scannovate-2', src:'/assets/themes/bpost/icons/brand/people/scannovate-2.svg'},
        {  name:'scannovate', src:'/assets/themes/bpost/icons/brand/people/scannovate.svg'},
        {  name:'settings', src:'/assets/themes/bpost/icons/brand/people/settings.svg'},
        {  name:'swimmer', src:'/assets/themes/bpost/icons/brand/people/swimmer.svg'},
        {  name:'wheelchair', src:'/assets/themes/bpost/icons/brand/people/wheelchair.svg'}
    ]; 

    brandIconsPOSLocator=[
        { name:'building',src:'assets/themes/bpost/icons/brand/pos-locator/building.svg'},
        { name:'cubee',src:'assets/themes/bpost/icons/brand/pos-locator/cubee.svg'},
        { name:'distributor-colis',src:'assets/themes/bpost/icons/brand/pos-locator/distributor-colis.svg'},
        { name:'letterbox',src:'assets/themes/bpost/icons/brand/pos-locator/letterbox.svg'},
        { name:'parcel-locker',src:'assets/themes/bpost/icons/brand/pos-locator/parcel-locker.svg'},
        { name:'shop',src:'assets/themes/bpost/icons/brand/pos-locator/shop.svg'},
        { name:'sorting-center',src:'assets/themes/bpost/icons/brand/pos-locator/sorting-center.svg'}
    ];

    brandIconsSocialMedia=[
        { name:'ColourFacebook', src:'/assets/themes/bpost/icons/brand/socials/ColourFacebook.svg'},
        { name:'ColourInsta', src:'/assets/themes/bpost/icons/brand/socials/ColourInsta.svg'},
        { name:'ColourLinkedIn', src:'/assets/themes/bpost/icons/brand/socials/ColourLinkedIn.svg'},
        { name:'ColourTwitter', src:'/assets/themes/bpost/icons/brand/socials/ColourTwitter.svg'},
        { name:'ColourYouTube', src:'/assets/themes/bpost/icons/brand/socials/ColourYouTube.svg'},
        { name:'MonoFacebook', src:'/assets/themes/bpost/icons/brand/socials/MonoFacebook.svg'},
        { name:'MonoInsta', src:'/assets/themes/bpost/icons/brand/socials/MonoInsta.svg'},
        { name:'MonoLinkeIn', src:'/assets/themes/bpost/icons/brand/socials/MonoLinkedIn.svg'},
        { name:'MonoTwitter', src:'/assets/themes/bpost/icons/brand/socials/MonoTwitter.svg'},
        { name:'MonoYouTube', src:'/assets/themes/bpost/icons/brand/socials/MonoYouTube.svg'}
    ];

    brandIconsStamps=[
        { name:'carte-procuration', src:'assets/themes/bpost/icons/brand/stamps/carte-procuration.svg'},
        { name:'myStamp', src:'assets/themes/bpost/icons/brand/stamps/myStamp.svg'},
        { name:'stamp-check', src:'assets/themes/bpost/icons/brand/stamps/stamp-check.svg'},
        { name:'stamp-non-prior', src:'assets/themes/bpost/icons/brand/stamps/stamp-non-prior.svg'},
        { name:'stamp-prior', src:'assets/themes/bpost/icons/brand/stamps/stamp-prior.svg'},
        { name:'stamp-register', src:'assets/themes/bpost/icons/brand/stamps/stamp-register.svg'},
        { name:'stamp-sollector', src:'assets/themes/bpost/icons/brand/stamps/stamp-sollector.svg'}
    ];

    brandIconsTech=[
        { name:'data-check', src:'assets/themes/bpost/icons/brand/technology/data-check.svg'},
        { name:'mobile-bpost', src:'assets/themes/bpost/icons/brand/technology/mobile-bpost.svg'},
        { name:'mobile', src:'assets/themes/bpost/icons/brand/technology/mobile.svg'},
        { name:'moblie-postcard', src:'assets/themes/bpost/icons/brand/technology/moblie-postcard.svg'},
        { name:'offline-onliner', src:'assets/themes/bpost/icons/brand/technology/offline-onliner.svg'},
        { name:'plugin', src:'assets/themes/bpost/icons/brand/technology/plugin.svg'},
        { name:'robot', src:'assets/themes/bpost/icons/brand/technology/robot.svg'},
        { name:'scannovate', src:'assets/themes/bpost/icons/brand/technology/scannovate.svg'},
        { name:'uploadCloud', src:'assets/themes/bpost/icons/brand/technology/uploadCloud.svg'}
    ];

    brandIconsWorld=[
        { name:'desitnations-world', src:'assets/themes/bpost/icons/brand/world/desitnations-world.svg'},
        { name:'destinations-europe', src:'assets/themes/bpost/icons/brand/world/destinations-europe.svg'},
        { name:'iso.svg', src:'assets/themes/bpost/icons/brand/world/iso.svg'},
        { name:'online-payment', src:'assets/themes/bpost/icons/brand/world/online-payment.svg'},
        { name:'world-colis', src:'assets/themes/bpost/icons/brand/world/world-colis.svg'},
        { name:'world-return', src:'assets/themes/bpost/icons/brand/world/world-return.svg'},
        { name:'world.svg', src:'assets/themes/bpost/icons/brand/world/world.svg'}
    ];

    brandIconsSustainability=[
        { name:'eco-check', src:'assets/themes/bpost/icons/brand/sustainability/eco-check.svg'},
        { name:'eco-questiomark', src:'assets/themes/bpost/icons/brand/sustainability/eco-questiomark.svg'},
        { name:'eco-warning', src:'assets/themes/bpost/icons/brand/sustainability/eco-warning.svg'},
        { name:'ecoLeave-outlined', src:'assets/themes/bpost/icons/brand/sustainability/ecoLeave-outlined.svg'},
        { name:'ecoLeave', src:'assets/themes/bpost/icons/brand/sustainability/ecoLeave.svg'}
    ];

brandIconsOther=[
    { name:'action', src:'assets/themes/bpost/icons/brand/other/action.svg'},
        { name:'awareness', src:'assets/themes/bpost/icons/brand/other/awareness.svg'},
        { name:'bike', src:'assets/themes/bpost/icons/brand/other/bike.svg'},
        { name:'bookmark', src:'assets/themes/bpost/icons/brand/other/bookmark.svg'},
        { name:'bpost-CO2', src:'assets/themes/bpost/icons/brand/other/bpost-CO2.svg'},
        { name:'freight.', src:'assets/themes/bpost/icons/brand/other/bpost-freight.svg'},
        { name:'calendar', src:'assets/themes/bpost/icons/brand/other/calendar.svg'},
        { name:'caution', src:'assets/themes/bpost/icons/brand/other/caution.svg'},
        { name:'chatbot', src:'assets/themes/bpost/icons/brand/other/chatbot.svg'},
        { name:'check', src:'assets/themes/bpost/icons/brand/other/check.svg'},
        { name:'checkmark-checked', src:'assets/themes/bpost/icons/brand/other/checkmark-checked.svg'},
        { name:'/-checkmark-empty', src:'assets/themes/bpost/icons/brand/other/checkmark-empty.svg'},
        { name:'clean', src:'assets/themes/bpost/icons/brand/other/clean.svg'},
        { name:'clock', src:'assets/themes/bpost/icons/brand/other/clock.svg'},
        { name:'contact', src:'assets/themes/bpost/icons/brand/other/contact.svg'},
        { name:'cross-sell', src:'assets/themes/bpost/icons/brand/other/cross-sell.svg'},
        { name:'download', src:'assets/themes/bpost/icons/brand/other/download.svg'},
        { name:'error', src:'assets/themes/bpost/icons/brand/other/error.svg'},
        { name:'feedback', src:'assets/themes/bpost/icons/brand/other/feedback.svg'},
        { name:'history', src:'assets/themes/bpost/icons/brand/other/history.svg'},
        { name:'image', src:'assets/themes/bpost/icons/brand/other/image.svg'},
        { name:'inbox', src:'assets/themes/bpost/icons/brand/other/inbox.svg'},
        { name:'info', src:'assets/themes/bpost/icons/brand/other/info.svg'},
        { name:'insight', src:'assets/themes/bpost/icons/brand/other/insight.svg'},
        { name:'justice', src:'assets/themes/bpost/icons/brand/other/justice.svg'},
        { name:'language', src:'assets/themes/bpost/icons/brand/other/language.svg'},
        { name:'light-1', src:'assets/themes/bpost/icons/brand/other/light-1.svg'},
        { name:'light-2', src:'assets/themes/bpost/icons/brand/other/light-2.svg'},
        { name:'logOut', src:'assets/themes/bpost/icons/brand/other/logOut.svg'},
        { name:'marCom', src:'assets/themes/bpost/icons/brand/other/marCom.svg'},
        { name:'message', src:'assets/themes/bpost/icons/brand/other/message.svg'},
        { name:'more', src:'assets/themes/bpost/icons/brand/other/more.svg'},
        { name:'move', src:'assets/themes/bpost/icons/brand/other/move.svg'},
        { name:'notification', src:'assets/themes/bpost/icons/brand/other/notification.svg'},
        { name:'performance', src:'assets/themes/bpost/icons/brand/other/performance.svg'},
        { name:'phone', src:'assets/themes/bpost/icons/brand/other/phone.svg'},
        { name:'print', src:'assets/themes/bpost/icons/brand/other/print.svg'},
        { name:'question', src:'assets/themes/bpost/icons/brand/other/question.svg'},
        { name:'refresh', src:'assets/themes/bpost/icons/brand/other/refresh.svg'},
        { name:'register', src:'assets/themes/bpost/icons/brand/other/register.svg'},
        { name:'scan', src:'assets/themes/bpost/icons/brand/other/scan.svg'},
        { name:'search', src:'assets/themes/bpost/icons/brand/other/search.svg'},
        { name:'services', src:'assets/themes/bpost/icons/brand/other/services.svg'},
        { name:'setting', src:'assets/themes/bpost/icons/brand/other/setting.svg'},
        { name:'speaker', src:'assets/themes/bpost/icons/brand/other/speaker.svg'},
        { name:'star-filled', src:'assets/themes/bpost/icons/brand/other/star-filled.svg'},
        { name:'star-outlined', src:'assets/themes/bpost/icons/brand/other/star-outlined.svg'},
        { name:'storms', src:'assets/themes/bpost/icons/brand/other/storms.svg'},
        { name:'sun', src:'assets/themes/bpost/icons/brand/other/sun.svg'},
        { name:'support', src:'assets/themes/bpost/icons/brand/other/support.svg'},
        { name:'target', src:'assets/themes/bpost/icons/brand/other/target.svg'},
        { name:'video', src:'assets/themes/bpost/icons/brand/other/video.svg'},
        { name:'zoom-2', src:'assets/themes/bpost/icons/brand/other/zoom-2.svg'}
];

brandIconsMyWorld=[
    { name:'calendar', src:'assets/themes/bpost/icons/brand/myWorld/calendar.svg'},
    { name:'DWC-DoMyMove', src:'assets/themes/bpost/icons/brand/myWorld/DWC-DoMyMove.svg'},
    { name:'DWC-Mail', src:'assets/themes/bpost/icons/brand/myWorld/DWC-Mail.svg'},
    { name:'DWC-Newspaper-Reclame', src:'assets/themes/bpost/icons/brand/myWorld/DWC-Newspaper-Reclame.svg'},
    { name:'DWC-OtherProduct', src:'assets/themes/bpost/icons/brand/myWorld/DWC-OtherProduct.svg'},
    { name:'DWC-RegisteredMail', src:'assets/themes/bpost/icons/brand/myWorld/DWC-RegisteredMail.svg'},
    { name:'DWC-VAS', src:'assets/themes/bpost/icons/brand/myWorld/DWC-VAS.svg'},
    { name:'ecodrive-AgressiveAcceleration', src:'assets/themes/bpost/icons/brand/myWorld/ecodrive-AgressiveAcceleration.svg'},
    { name:'ecodrive-AgressiveBrak', src:'assets/themes/bpost/icons/brand/myWorld/ecodrive-AgressiveBrake.svg'},
    { name:'ecodrive-HarshBrake', src:'assets/themes/bpost/icons/brand/myWorld/ecodrive-HarshBrake.svg'},
    { name:'ecodrive-Overspeed', src:'assets/themes/bpost/icons/brand/myWorld/ecodrive-Overspeed.svg'},
    { name:'ecodrive-StationnaryMotor', src:'assets/themes/bpost/icons/brand/myWorld/ecodrive-StationnaryMotor.svg'},
    { name:'ecodrive', src:'assets/themes/bpost/icons/brand/myWorld/ecodrive.svg'},
    { name:'FC-Delay', src:'assets/themes/bpost/icons/brand/myWorld/FC-Delay.svg'},
    { name:'FC-delvieryFastness', src:'assets/themes/bpost/icons/brand/myWorld/FC-delvieryFastness.svg'},
    { name:'FC-DWC-Parcel', src:'assets/themes/bpost/icons/brand/myWorld/FC-DWC-Parcel.svg'},
    { name:'FC-FeedbackClient', src:'assets/themes/bpost/icons/brand/myWorld/FC-FeedbackClient.svg'},
    { name:'FC-FollowUpInfo', src:'assets/themes/bpost/icons/brand/myWorld/FC-FollowUpInfo.svg'},
    { name:'FC-KindnessClient', src:'assets/themes/bpost/icons/brand/myWorld/FC-KindnessClient.svg'},
    { name:'fc-other.', src:'assets/themes/bpost/icons/brand/myWorld/fc-other.svg'},
    { name:'FC-RespectDeliveryAddress', src:'assets/themes/bpost/icons/brand/myWorld/FC-RespectDeliveryAddress.svg'},
    { name:'FC-RingBeforeDelivery', src:'assets/themes/bpost/icons/brand/myWorld/FC-RingBeforeDelivery.svg'}
];

       
    icons: any[] = [];

    filteredIcons: any[] = [];

    selectedIcon: any;

    constructor(private iconService: IconService) { }

    ngOnInit() {
      


        this.iconService.getIcons().subscribe(data => {
            data = data.filter(value => {
                return value.icon.tags.indexOf('deprecate') === -1;
            });

            let icons = data;
            icons.sort((icon1, icon2) => {
                if (icon1.properties.name < icon2.properties.name)
                    return -1;
                else if (icon1.properties.name < icon2.properties.name)
                    return 1;
                else
                    return 0;
            });

            this.icons = icons;
            this.filteredIcons = data;
        });
    }

    onFilter(event: Event): void {
        const searchText = (event.target as HTMLInputElement).value;

        if (!searchText) {
            this.filteredIcons = this.icons;
        }
        else {
            this.filteredIcons = this.icons.filter(it => {
                return it.icon.tags[0].includes(searchText);
            });
        }
    }
}

import { Component } from '@angular/core';

import { Message, MessageService } from 'primeng/api';

@Component({
    templateUrl: './spacing.component.html',
    providers: [MessageService]
})
export class SpacingComponent {

    spacingVars=[
       { name:'spacing-xx-small', value:'0.25rem', utilities:'gap-1, p-1, pt-1, pb-1, pl-1, pr-1, m-1, mt-1, mb-1, ml-1, mr-1'},
       { name:'spacing-x-small', value:'0.5rem', utilities:'gap-2, p-2, pt-2, pb-2, pl-2, pr-2, m-2, mt-2, mb-2, ml-2, mr-2'},
       { name:'spacing-small', value:'0.75rem', utilities:'N/A'},
       { name:'spacing-medium', value:'1rem', utilities:'gap-3, p-3, pt-3, pb-3, pl-3, pr-3, m-3, mt-3, mb-3, ml-3, mr-3'},
       { name:'spacing-large', value:'1.5rem', utilities:'gap-4, p-4, pt-4, pb-4, pl-4, pr-4, m-4, mt-4, mb-4, ml-4, mr-4'},
       { name:'spacing-x-large', value:'2rem', utilities:'gap-5, p-5, pt-5, pb-5, pl-5, pr-5, m-5, mt-5, mb-5, ml-5, mr-5'}
    ];

    sizingVars=[
       
        {name:'size-small', value:'0.5rem' ,utilities:'N/A'},
        {name:'size-medium', value:'1rem' ,utilities:'w-1rem, h-1rem'},
        {name:'size-large', value:'1.5rem' ,utilities:'N/A'},
        {name:'size-x-large', value:'2rem' ,utilities:'w-2rem, h-2rem'},
        {name:'size-xx-large', value:'2.5rem' ,utilities:'N/A'}
    ]

    radiusVars=[
       
        {name:'radius-small', value:'0.25rem' ,utilities:'border-round-sm, border-round-left-sm, border-round-top-sm, border-round-bottom-sm, border-round-right-sm'},
        {name:'radius-medium', value:'1rem' ,utilities:'border-round-2xl, border-round-left-2xl, border-round-top-2xl, border-round-bottom-2xl, border-round-right-2xl'},
        {name:'radius-large', value:'1.5rem' ,utilities:'border-round-3xl, border-round-left-3xl, border-round-top-3xl, border-round-bottom-3xl, border-round-right-3xl'}
    ];
    
    msgs: Message[] = [];
    
    constructor(private service: MessageService) { }
    showInfoViaToast() {
        this.service.add({ key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }
    showInfoViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }
 

    
    
}

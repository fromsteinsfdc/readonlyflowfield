import { LightningElement, api, wire, track } from 'lwc';
import getObjectApiName from '@salesforce/apex/ReadonlyFlowFieldController.getObjectApiName';

export default class ReadonlyFlowField extends LightningElement {

    @api recordId;
    @api fieldName;
    @api isReadonly;
    objectName;


    connectedCallback() {
        getObjectApiName({recordId: this.recordId}).then(result => {
            this.objectName = result;
        })
    }
}
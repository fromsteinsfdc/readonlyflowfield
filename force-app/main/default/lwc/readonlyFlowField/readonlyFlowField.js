import { LightningElement, api, wire, track } from 'lwc';
import getObjectApiName from '@salesforce/apex/ReadonlyFlowFieldController.getObjectApiName';

const READONLY_MODE = 'readonly';
const EDITABLE_MODE = 'edit';
import { getRecord } from 'lightning/uiRecordApi';

export default class ReadonlyFlowField extends LightningElement {

    @api recordId;
    @api fieldName;
    @api isReadonly;
    objectName;

    /*
    get mode() {
        return this.isReadonly ? READONLY_MODE : EDITABLE_MODE;
    }
    */

    connectedCallback() {
        getObjectApiName({recordId: this.recordId}).then(result => {
            this.objectName = result;
        })
    }

    /*
    @wire(getRecord, { recordId: '$recordId', fields: 'Id' })
    getObjectName({error, data}) {
        if (error)
        console.log('getObjectName error: '+ JSON.stringify(error));
        if (data) {
            this.objectName = data.apiName;
        }
    }
    */
}
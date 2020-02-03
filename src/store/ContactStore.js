import ContactService from '../service/ContactService';
import { observable, action, runInAction } from 'mobx';

class ContactStore {
    @observable contacts = [];
    @observable currContact = {};
    @observable filterBy = '';

    loadContacts = async () => {
        try {
            const contacts = await ContactService.getContacts(this.filterBy);
            runInAction(() => this.contacts = contacts);
        } catch (err) {
            console.log(err);
        }
    }

    @action setFilter = (filterBy) => {
        this.filterBy = filterBy;
        this.loadContacts();
    }

    editContact = async (contact) => {
        try {
            contact = await ContactService.saveContact(contact);
            runInAction(() => {
                const idx = this.contacts.findIndex(cntcs => cntcs._id === contact._id);
                (idx === -1) ? this.contacts.push(contact) : this.contacts[idx] = contact;
            });
        } catch (err) {
            console.log(err);
        }
    }

    deleteContact = async (id) => {
        try {
            await ContactService.deleteContact(id);
            runInAction(() => {
                const idx = this.contacts.findIndex(contact => contact._id === id);
                if (idx !== -1) this.contacts.splice(idx, 1);
            });
        } catch (err) {
            console.log(err);
        }
    }

    getContactById = async (id) => {
        try {
            const contact = await ContactService.getContactById(id);
            runInAction(() => this.currContact = contact);
        } catch {
            const contact = ContactService.getEmptyContact();
            runInAction(() => this.currContact = contact);
        }
    }
}

let store = new ContactStore();
export default store
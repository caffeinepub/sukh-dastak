import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllContactFormsByEmail(): Promise<Array<ContactForm>>;
    getAllNewsletterSubscriptions(): Promise<Array<string>>;
    getContactFormById(id: string): Promise<ContactForm>;
    submitContactForm(id: string, name: string, email: string, message: string): Promise<void>;
    subscribeToNewsletter(email: string): Promise<void>;
}

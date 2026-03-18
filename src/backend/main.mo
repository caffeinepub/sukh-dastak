import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type ContactForm = {
    name : Text;
    email : Text;
    message : Text;
  };

  let contactForms = Map.empty<Text, ContactForm>();

  module ContactForm {
    public func compareByEmail(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      Text.compare(form1.email, form2.email);
    };

    public func submit(id : Text, name : Text, email : Text, message : Text) : () {
      if (contactForms.containsKey(id)) { Runtime.trap("This contact form already exists.") };
      let form : ContactForm = {
        name;
        email;
        message;
      };
      contactForms.add(id, form);
    };

    public func getById(id : Text) : ContactForm {
      switch (contactForms.get(id)) {
        case (null) { Runtime.trap("Contact form does not exist.") };
        case (?form) { form };
      };
    };

    public func getAll() : [ContactForm] {
      contactForms.values().toArray();
    };

    public func getAllByEmail() : [ContactForm] {
      contactForms.values().toArray().sort(compareByEmail);
    };
  };

  let newsletterSubscriptions = Map.empty<Text, ()>();

  module Newsletter {
    public func subscribe(email : Text) : () {
      if (newsletterSubscriptions.containsKey(email)) { Runtime.trap("This email is already subscribed.") };
      newsletterSubscriptions.add(email, ());
    };

    public func getAll() : [Text] {
      newsletterSubscriptions.keys().toArray();
    };
  };

  public shared ({ caller }) func submitContactForm(id : Text, name : Text, email : Text, message : Text) : async () {
    ContactForm.submit(id, name, email, message);
  };

  public shared ({ caller }) func subscribeToNewsletter(email : Text) : async () {
    Newsletter.subscribe(email);
  };

  public query func getContactFormById(id : Text) : async ContactForm {
    ContactForm.getById(id);
  };

  public query func getAllContactForms() : async [ContactForm] {
    ContactForm.getAll();
  };

  public query func getAllContactFormsByEmail() : async [ContactForm] {
    ContactForm.getAllByEmail();
  };

  public query func getAllNewsletterSubscriptions() : async [Text] {
    Newsletter.getAll();
  };
};

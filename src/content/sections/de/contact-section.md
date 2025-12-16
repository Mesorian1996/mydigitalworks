---
enable: true # Control the visibility of this section across all pages where it is used
title: "Have Any Project on Your Mind?"
description: "Great! We're excited to hear from you and let's start something"

# image: "/images/about-us/about-one.jpg"
# imagePosition: "left" # Choose between "left" or "right"

map:
  enable: true
  position: "right" # Choose between "left" or "right"
  title: "Map of New Work City"
  url: https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed # Embed map iframe URL generated from https://www.maps.ie/create-google-map/

# contactInformation:
#   - title: "Headquarters"
#     icon: "/images/icons/svg/location-filled.svg"
#     description: "27 Division St, New York, NY 10002, USA"
#     button:
#       # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
#       enable: true
#       label: "Get Direction"
#       url: "/"
#       # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
#       # variant: "" # Optional: fill | outline | text | circle
#       # rel: "" # Optional
#       # target: "" # Optional
#
#   - title: "Email Address"
#     icon: "/images/icons/svg/message-filled.svg"
#     description: |
#       folex.agency@mail.com
#       folex.agency@support.com
#     button:
#       # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
#       enable: true
#       label: "Send Message"
#       url: "mailto:folex.agency@mail.com"
#       # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
#       # variant: "" # Optional: fill | outline | text | circle
#       # rel: "" # Optional
#       # target: "" # Optional
#
#   - title: "Phone Number"
#     icon: "/images/icons/svg/phone-filled.svg"
#     description: |
#       +1 800 123 654 987
#       +1 800 223 984 002
#     button:
#       # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
#       enable: true
#       label: "Call Anytime"
#       url: "tel:+1800123654987"
#       # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
#       # variant: "" # Optional: fill | outline | text | circle
#       # rel: "" # Optional
#       # target: "" # Optional

# Check config.toml file for form action related settings
# this is also used in the footer of the personal portfolio homepage
form:
  emailSubject: "Neue Anfrage über das Kontaktformular"
  submitButton:
    enable: true
    label: "Absenden"

  inputs:
    - placeholder: "Vorname *"
      name: "Vorname"
      required: true
      halfWidth: true
      defaultValue: ""
    - placeholder: "Nachname *"
      name: "Nachname"
      required: true
      halfWidth: true
      defaultValue: ""
    - placeholder: "Email Adresse *"
      name: "Email"
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""
    - placeholder: "Telefonnummer *"
      name: "Telefonnummer"
      required: true
      type: "tel"
      halfWidth: true
      defaultValue: ""
    - placeholder: "Projektart"
      name: "Projektart"
      required: false
      halfWidth: true
      dropdown:
        type: ""
        items:
          - label: "Starter Paket"
            value: "Starter Paket"
            selected: false
          - label: "Business Paket"
            value: "Business Paket"
            selected: false
          - label: "Individuelles Paket"
            value: "Individuelles Paket"
            selected: false
          - label: "Lexoffice"
            value: "Lexoffice"
            selected: false
          - label: "Google Profile"
            value: "Google Profile"
            selected: false
    - tag: "textarea"
      rows: "3"
      placeholder: "Nachricht"
      name: "Nachricht"
      required: false
      halfWidth: false

    - note: info
      parentClass: "text-sm text-white/80 no-box"
      content: |
        Mit dem Senden der Daten stimmst du unserer [Datenschutzerklärung](/privacy-policy/) zu.
    - note: success
      parentClass: "hidden text-sm message success"
      content: We have received your message! We'll get back to you as soon as possible.
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: Something went wrong! please use this mail - [folex-astro-theme@gmail.com](mailto:folex-astro-theme@gmail.com) to submit a ticket!
---
